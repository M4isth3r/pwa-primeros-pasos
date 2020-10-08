import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewHome extends PageViewElement {

    constructor(){
        super();
    }
    
    static get properties(){
        return{
            texto : { type: String}
        };
    }

    static get styles(){
        return css`
            :host{
                display: block;
            }
        `;
    }

    render() {
        return html`
            <div>
                <h2>Home</h2>
                <p>Esto es el home</p>
                <input type="text" value="${this.texto}" />
            </div>
            `;
    }

}

customElements.define('view-home', ViewHome);

