// @ts-check
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ReduxRepository } from './uiBuilderFacade';
import { UIBuilder } from './uiBuilderFacade';

@customElement('my-element')
export class MyElement extends LitElement {

  @property({ type: Number })
  private count = 0;

  @property({ type: Object })
  private uiBuilder: UIBuilder;

  constructor() {
    super()
  }
  
  connectedCallback(): void {
    super.connectedCallback()
    /**
     * @type {ReduxRepository}
     */
    const reduxRepo = new ReduxRepository();
    this.uiBuilder = new UIBuilder(reduxRepo)

    
  }
  
  private renderCustomButton() {
    return this.uiBuilder.createCustomButton()
  }

  render() {
    return html`
      <div>
        ${this.count}
        ${this.renderCustomButton()}
      </div>
    `
  }

  private _onClick() {
    this.count++
  }


}


