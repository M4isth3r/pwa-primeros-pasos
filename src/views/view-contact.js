import { LitElement, html, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewContact extends PageViewElement {

    constructor(){
        super();
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
                <h2>Contacto</h2>
                <p>Lorem lo uqe sea de contacto</p>
            </div>
            `;
    }

}

customElements.define('view-contact', ViewContact);

