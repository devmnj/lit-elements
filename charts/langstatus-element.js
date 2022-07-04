import { LitElement,css,html } from 'lit';

export class LangstatusElement extends LitElement {
    static styles = [css `
    @import url(https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css);
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);
    body {
      margin: 20px 0 40px;
      font-family: "Open Sans", sans-serif;
      color: #282828;
    }
    
    .skills {
      width: 80%;
      max-width: 960px;
      height: 780px;
      height: 788px;
      margin: auto;
      position: relative;
    }
    
    .lines {
      height: 100%;
      position: relative;
    }
    
    .line {
      height: inherit;
      width: 2px;
      position: absolute;
      background: rgba(238, 238, 238, 0.6);
    }
    .line.l--0 {
      left: 0;
    }
    .line.l--25 {
      left: 25%;
    }
    .line.l--50 {
      left: 50%;
    }
    .line.l--75 {
      left: 75%;
    }
    .line.l--100 {
      left: calc(100% - 1px);
    }
    
    .line__label {
      display: block;
      width: 100px;
      text-align: center;
      position: absolute;
      bottom: -20px;
      right: -50px;
    }
    .line__label.title {
      text-transform: uppercase;
      font-weight: bold;
    }
    
    .charts {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
    }
    
    .chart:not(:first-child) {
      margin-top: 10px;
    }
    
    .chart__title {
      display: block;
      margin: 0 0 10px;
      font-weight: bold;
      opacity: 0;
      animation: 1s anim-lightspeed-in ease forwards;
    }
    .chart--prod .chart__title {
      animation-delay: 3.3s;
    }
    .chart--design .chart__title {
      animation-delay: 4.5s;
    }
    
    .chart--horiz {
      overflow: hidden;
    }
    
    .chart__bar {
      height: 30px;
      margin-bottom: 10px;
      background: linear-gradient(to left, #4cb8c4, #3cd3ad);
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      opacity: 0;
      animation: 1s anim-lightspeed-in ease forwards;
    }
    .chart--dev .chart__bar:nth-of-type(11) {
      animation-delay: 2.7s;
    }
    .chart--dev .chart__bar:nth-of-type(10) {
      animation-delay: 2.5s;
    }
    .chart--dev .chart__bar:nth-of-type(9) {
      animation-delay: 2.3s;
    }
    .chart--dev .chart__bar:nth-of-type(8) {
      animation-delay: 2.1s;
    }
    .chart--dev .chart__bar:nth-of-type(7) {
      animation-delay: 1.9s;
    }
    .chart--dev .chart__bar:nth-of-type(6) {
      animation-delay: 1.7s;
    }
    .chart--dev .chart__bar:nth-of-type(5) {
      animation-delay: 1.5s;
    }
    .chart--dev .chart__bar:nth-of-type(4) {
      animation-delay: 1.3s;
    }
    .chart--dev .chart__bar:nth-of-type(3) {
      animation-delay: 1.1s;
    }
    .chart--dev .chart__bar:nth-of-type(2) {
      animation-delay: 0.9s;
    }
    .chart--dev .chart__bar:nth-of-type(1) {
      animation-delay: 0.7s;
    }
    .chart--prod .chart__bar:nth-of-type(2) {
      animation-delay: 4.2s;
    }
    .chart--prod .chart__bar:nth-of-type(1) {
      animation-delay: 4s;
    }
    .chart--design .chart__bar:nth-of-type(4) {
      animation-delay: 5.8s;
    }
    .chart--design .chart__bar:nth-of-type(3) {
      animation-delay: 5.6s;
    }
    .chart--design .chart__bar:nth-of-type(2) {
      animation-delay: 5.4s;
    }
    .chart--design .chart__bar:nth-of-type(1) {
      animation-delay: 5.2s;
    }
    
    .chart__label {
      padding-left: 10px;
      line-height: 30px;
      color: white;
    }
    
    @keyframes anim-lightspeed-in {
      0% {
        transform: translateX(-200%);
        opacity: 1;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    ` ];
    render() {
        return html`<div class="skills">
        <ul class="lines">
          <li class="line l--0">
            <span class="line__label title">
              Skill level:
            </span>
          </li>
          <li class="line l--25">
            <span class="line__label">
              The basics
            </span>
          </li>
          <li class="line l--50">
            <span class="line__label">
              Advanced
            </span>
          </li>
          <li class="line l--75">
            <span class="line__label">
              Seasoned
            </span>
          </li>
          <li class="line l--100">
            <span class="line__label">
              Expert
            </span>
          </li>
        </ul>
        
        <div class="charts">
          <div class="chart chart--dev">
            <span class="chart__title">Development</span>
            <ul class="chart--horiz">
              <li class="chart__bar" style="width: 98%;">
                <span class="chart__label">
                  HTML5
                </span>
              </li>
              <li class="chart__bar" style="width: 98%;">
                <span class="chart__label">
                  CSS3 & SCSS & CSS in JS
                </span>
              </li>
              <li class="chart__bar" style="width: 70%;">
                <span class="chart__label">
                  JavaScript
                </span>
              </li>
              <li class="chart__bar" style="width: 60%;">
                <span class="chart__label">
                  ReactJS
                </span>
              </li>
              <li class="chart__bar" style="width: 25%;">
                <span class="chart__label">
                  AngularJS
                </span>
              </li>
              <li class="chart__bar" style="width: 60%;">
                <span class="chart__label">
                  jQuery
                </span>
              </li>
              <li class="chart__bar" style="width: 55%;">
                <span class="chart__label">
                  NodeJS
                </span>
              </li>
              <li class="chart__bar" style="width: 50%;">
                <span class="chart__label">
                  Grunt / Gulp / Webpack
                </span>
              </li>
              <li class="chart__bar" style="width: 40%;">
                <span class="chart__label">
                  .NET
                </span>
              </li>
              <li class="chart__bar" style="width: 60%;">
                <span class="chart__label">
                  Umbraco
                </span>
              </li>
              <li class="chart__bar" style="width: 60%;">
                <span class="chart__label">
                  Sitecore
                </span>
              </li>
            </ul>
          </div>
          
          <div class="chart chart--prod">
            <span class="chart__title">Productivity</span>
            <ul class="chart--horiz">
            <li class="chart__bar" style="width: 75%;">
              <span class="chart__label">
                Git + Github, Bitbucket & Sourcetree
              </span>
            </li>
            <li class="chart__bar" style="width: 80%;">
              <span class="chart__label">
                Microsoft Office
              </span>
            </li>
          </ul>
          </div>
          
          <div class="chart chart--design">
            <span class="chart__title">Design</span>
            <ul class="chart--horiz">
            <li class="chart__bar" style="width: 40%;">
              <span class="chart__label">
                Sketch
              </span>
            </li>
            <li class="chart__bar" style="width: 40%;">
              <span class="chart__label">
                Photoshop
              </span>
            </li>
            <li class="chart__bar" style="width: 35%;">
              <span class="chart__label">
                Illustrator
              </span>
            </li>
            <li class="chart__bar" style="width: 80%;">
              <span class="chart__label">
                User Experience
              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
      `;
    }
}
customElements.define('langstatus-element', LangstatusElement);
