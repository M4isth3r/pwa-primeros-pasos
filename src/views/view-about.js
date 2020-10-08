import {LitElement, html, css} from 'lit-element';
import { PageViewElement } from './page-view-element';


class ViewAbout extends PageViewElement {
    
    static get styles(){
        return css`
            :host{
                display: block;
            }
        `;
    }

    render() {
        return html`
        <h2>Sobre</h2>
        <img src="https://picsum.photos/200" alt="fotolorem"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus porta posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin placerat varius rhoncus. Vivamus scelerisque tempor massa, facilisis feugiat metus dapibus at. Vestibulum dictum, lorem iaculis tempor vulputate, quam ex elementum justo, at rutrum tortor nunc ut erat. Nulla faucibus at felis at auctor. Aliquam erat volutpat. Donec ultrices augue quis vulputate ornare. Quisque sagittis, risus quis rhoncus lacinia, nisl orci pellentesque orci, et ullamcorper velit quam quis lectus. Morbi efficitur cursus nisi, in scelerisque sem efficitur a. Ut ut justo ac leo consectetur iaculis. Nam purus nulla, faucibus eget justo a, lobortis porttitor est.</p>
        `;
    }

}

customElements.define('view-about', ViewAbout);
