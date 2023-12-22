export type IStylesBlock<T> = T & {
  class?: string
  styleText?: string
}

export type Indexed<T = unknown> = {
  [key in string]: T;
}

export interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
