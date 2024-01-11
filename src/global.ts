import { MyElement } from './my-element';


declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
