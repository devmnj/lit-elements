import { LitElement,css,html } from 'lit';

export class SvgcircleChart extends LitElement {
    static styles = [css``];
    render() {
        return html`<div class="grid">
        <section>
          <h2>Positive chart value</h2>
          <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle-chart__background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <circle class="circle-chart__circle" stroke="#00acc1" stroke-width="2" stroke-dasharray="30,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <g class="circle-chart__info">
              <text class="circle-chart__percent" x="16.91549431" y="15.5" alignment-baseline="central" text-anchor="middle" font-size="8">30%</text>
              <text class="circle-chart__subline" x="16.91549431" y="20.5" alignment-baseline="central" text-anchor="middle" font-size="2">Yay 30% progress!</text>
            </g>
          </svg>
        </section>
      
        <section>
          <h2>Negative chart value</h2>
          <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle-chart__background" stroke="#efefef" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <circle class="circle-chart__circle circle-chart__circle--negative" stroke="#00acc1" stroke-width="2" stroke-dasharray="10,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
            <g class="circle-chart__info">
              <text class="circle-chart__percent" x="16.91549431" y="15.5" alignment-baseline="central" text-anchor="middle" font-size="8">-10%</text>
              <text class="circle-chart__subline" x="16.91549431" y="20.5" alignment-baseline="central" text-anchor="middle" font-size="2">Oh no :(</text>
            </g>
          </svg>
        </section>
      </div>`;
    }
}
customElements.define('svgcircle-chart', SvgcircleChart);
