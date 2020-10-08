import { LitElement, html, css } from 'lit-element';
import './views/view-home';
import './views/view-about';
import './views/view-contact';

export class PwaLive extends LitElement {
  static get properties() {
    return {
      selected: { type: String }
    };
  }

  static get styles() {
    //:host me permite asignar estilos a toda la etiqueta pwa-live
    return css`
      :host{
        display: block;
        padding: 15px;
      }

      .page{
        display: none;
      }
      .page[active]{
        display: block;
      }
    `;
  }

  constructor(){
    super();
    this.selected="home";
  }

  render() {
    return html`
      <h1>Aplicacion de Yuriy</h1>
      <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav>
      <main>
        <view-home texto="algo" class="page" ?active=${this.selected == 'home'}></view-home>
        <view-about class="page" ?active=${this.selected == 'about'}></view-about>
        <view-contact class="page" ?active=${this.selected == 'contact'}></view-contact>
        <!-- ${this.selected == "home" 
        ? html`
        <view-home texto="algo"></view-home>`
        : 
        ""}
        ${this.selected == "about" 
        ? html`
        <view-about></view-about>
        `
        : 
        ""}
        <div>
          <h2 class="page">Home</h2>
        </div>
        <div>
          <h2 class="page">Sobre</h2>
        </div> -->
      </main>
    `;
  }

  go(e){
    e.preventDefault();
    let page = e.target.getAttribute("name");
    this.selected=page;
  }
}
