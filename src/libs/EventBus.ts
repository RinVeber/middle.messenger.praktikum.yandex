type CallbackType<Args extends any[] = unknown[]> = (...args: Args) => void;
type MapInterface<Props> = Props[keyof Props];

export default class EventBus<
Events extends Record<string, string> = Record<string, string>,
  Args extends Record<MapInterface<Events>, any[]> = Record<string, any[]>
> {
  private readonly listeners: {
    [Key in MapInterface<Events>]?: CallbackType<Args[Key]>[]
  } = {}

  constructor() {
    this.listeners = {};
  }

  on<Event extends MapInterface<Events>>(event: Event, callback: CallbackType<Args[Event]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off<Event extends MapInterface<Events>>(event: Event, callback: CallbackType<Args[Event]>) {
		if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]?.filter(
      (listener) => listener !== callback
    );
  }

	emit<Event extends MapInterface<Events>>(event: Event, ...args: Args[Event]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    
    this.listeners[event]?.forEach(function(listener) {
      listener(...args);
    });
  }
}
