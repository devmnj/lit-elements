import { LitElement,css,html } from 'lit';

export class Slider2Element extends LitElement {
    static styles = [css`@import url(https://fonts.googleapis.com/css?family=Istok+Web);
    @keyframes slidy {
    0% { left: 0%; }
    20% { left: 0%; }
    25% { left: -100%; }
    45% { left: -100%; }
    50% { left: -200%; }
    70% { left: -200%; }
    75% { left: -300%; }
    95% { left: -300%; }
    100% { left: -400%; }
    }
    * {
      box-sizing: border-box;
    }
    body, figure { 
      margin: 0; background: #101010;
      font-family: Istok Web, sans-serif;
      font-weight: 100;
    }
    div#captioned-gallery { 
      width: 100%; overflow: hidden; 
    }
    figure.slider { 
      position: relative; width: 500%;
      font-size: 0; animation: 30s slidy infinite; 
    }
    figure.slider figure { 
      width: 20%; height: auto;
      display: inline-block;  position: inherit; 
    }
    figure.slider img { width: 100%; height: auto; }
    figure.slider figure figcaption { 
      position: absolute; bottom: 0;
      background: rgba(0,0,0,0.4);
      color: #fff; width: 100%;
      font-size: 2rem; padding: .6rem; 
    }
    
    `];

    render() {
        return html`
        <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/">
<div id="captioned-gallery">
	<figure class="slider">
		<figure>
			<img src="hobbiton-lake.jpg" alt>
			<figcaption>Hobbiton, New Zealand</figcaption>
		</figure>
		<figure>
			<img src="wanaka-drowned-tree.jpg" alt>
			<figcaption>Wanaka, New Zealand</figcaption>
		</figure>
		<figure>
			<img src="utah-peak.jpg" alt>
			<figcaption>Utah, United States</figcaption>
		</figure>
		<figure>
			<img src="bryce-canyon-utah.jpg" alt>
			<figcaption>Bryce Canyon, Utah, United States</figcaption>
		</figure>
		<figure>
			<img src="hobbiton-lake.jpg" alt>
			<figcaption>Hobbiton, New Zealand</figcaption>
		</figure>
	</figure>
</div>
        
        `;
    }
}
customElements.define('slider-2-element', Slider2Element);
