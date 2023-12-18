import Block from './Block';
import Route from './Route';

class Router {
  private static __instance: Router;

  public routes: Route[] = [];

  public history: History = window.history;

  private currentRoute: Route | null = null;

  constructor(private readonly rootQuery: string) {
    if (!Router.__instance) {
      Router.__instance = this;
    }
  }

  public use(pathname: string, block: typeof Block) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });

    this.routes.push(route);
    return this;
  }

  public start() {
    // Реагируем на изменения в адресной строке и вызываем перерисовку
    window.onpopstate = (event: PopStateEvent) => {
      if (event.currentTarget) {
        this._onRoute((event.currentTarget as Window).location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }
}

const router = new Router('#app');

export default router;
