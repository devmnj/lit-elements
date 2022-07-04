import { LitElement ,css,html} from 'lit';

export class PercentageCircleElement extends LitElement {
    static styles = [css`.flex-wrapper {
        display: flex;
        flex-flow: row nowrap;
      }
      
      .single-chart {
        width: 33%;
        justify-content: space-around ;
      }
      
      .circular-chart {
        display: block;
        margin: 10px auto;
        max-width: 80%;
        max-height: 250px;
      }
      
      .circle-bg {
        fill: none;
        stroke: #eee;
        stroke-width: 3.8;
      }
      
      .circle {
        fill: none;
        stroke-width: 2.8;
        stroke-linecap: round;
        animation: progress 1s ease-out forwards;
      }
      
      @keyframes progress {
        0% {
          stroke-dasharray: 0 100;
        }
      }
      
      .circular-chart.orange .circle {
        stroke: #ff9f00;
      }
      
      .circular-chart.green .circle {
        stroke: #4CC790;
      }
      
      .circular-chart.blue .circle {
        stroke: #3c9ee5;
      }
      
      .percentage {
        fill: #666;
        font-family: sans-serif;
        font-size: 0.5em;
        text-anchor: middle;
      }`];
    render() {
        return html`<div class="flex-wrapper">
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart orange">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="30, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">30%</text>
          </svg>
        </div>
        
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart green">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="60, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">60%</text>
          </svg>
        </div>
      
        <div class="single-chart">
          <svg viewBox="0 0 36 36" class="circular-chart blue">
            <path class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path class="circle"
              stroke-dasharray="90, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" class="percentage">90%</text>
          </svg>
        </div>
      </div>`;
    }
}
customElements.define('percentage-circle-element', PercentageCircleElement);
