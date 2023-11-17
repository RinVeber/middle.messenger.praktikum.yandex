import EventBus from './EventBus';
import { nanoid } from 'nanoid';

export default class Block<P extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:componeny-did-update",
  } as const;
  
  public id = nanoid(5);
  protected props: P;
  public children: Record<string, Block | Block[]>
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  constructor(propsWithChildren: P) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this.children = children;
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;
   
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _getChildrenAndProps(childrenAndProps: P): { props: P, children: Record<string, Block | Block[]> } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};


    Object.entries(childrenAndProps).forEach(([key, value]) => {
       if (Array.isArray(value) && value.length > 0 && value.every((v) => v instanceof Block)) {
        children[key as string] = value
      } else if (value instanceof Block) {
        children[key as string] = value
      } else {
        props[key] = value
      }
    })

    return {props: props as P, children};
  }

  private _addEvents() {
    const {events = {}} = this.props as P & {events: Record<string, () => void>};

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    })
  }

  private _removeEvents() {
    const {events = {}} = this.props as P & {events: Record<string, () => void>};

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    })
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init()
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((component) => component.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._removeEvents();
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
      this._addEvents();
    }
  }
    
  public dispatchComponentDidUpdate() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  }

  // Может переопределять пользователь, необязательно трогать
  protected componentDidUpdate(_oldProps: P, _newProps: P) {
    return true;
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }
    
    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  // Может переопределять пользователь, необязательно трогать
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  private _render() {
    const fragment = this.render();

    const newElement = fragment.firstElementChild as HTMLElement;

    if (newElement && this._element) {
      this._element.replaceWith(newElement)
    }

    this._element = newElement

    this._addEvents();
  }

  getContent() {
    return this.element;
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = {...context};

    Object.entries(this.children).forEach(([name, component]) => {
      if(Array.isArray(component)) {
        contextAndStubs[name] = component.map((child) => `<div data-id="${child.id}"></div>`)
      } else {
        contextAndStubs[name] = `<div data-id=${component.id}></div>`
      }
    });

    const html = template(contextAndStubs);
    const temp = document.createElement('template');
    temp.innerHTML = html;

    const replaceComponent = (component: Block) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));
      
      stub.replaceWith(component.getContent()!);
    }

    Object.entries(this.children).forEach(([, component]) => {
      if(Array.isArray(component)) {
        component.forEach((component) => replaceComponent(component))
      } else {
        replaceComponent(component);
      }
    })

    return temp.content;
  }

  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        if (prop.startsWith('_')) {
          throw new Error('Нет прав');
        }

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop: string, value) {
        const oldTarget = {...target};
        target[prop as keyof P] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      deleteProperty() {   
        throw new Error('Нет прав');
      },
    })
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }
}
