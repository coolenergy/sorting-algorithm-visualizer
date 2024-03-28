export {};

declare global {
  interface Bar {
    value: number;
    element: JSX.Element;
    initialPosition: number;
    color: string;
  }
}
