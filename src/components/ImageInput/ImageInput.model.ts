interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface ImageInputProps {
  name?: string;
  value?: string;
  events?: {
    focus?: () => void;
    blur?: () => void;
    change?: (event: HTMLInputEvent) => void;
    click?: (event: HTMLInputEvent) => void;
  };
  size?: string;
}
