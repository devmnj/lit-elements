import { LitElement,css,html } from 'lit';

export class SpiralElement extends LitElement {
    static styles = css `
    body {
        overflow: hidden;
      }
      
      .holder {
        width: 500px;
        height: 250px;
        position: relative;
      }
      .holder .circle {
        border-radius: 100% 100% 0 0;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transform-origin: bottom center;
      }
      .holder .circle:nth-child(1) {
        background: black;
        border-bottom: none;
        border-radius: 25px 25px 0 0;
        width: 25px;
        height: 12.5px;
        z-index: 15;
        -webkit-animation: circle-1 10s infinite ease-in-out;
                animation: circle-1 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-1 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-360deg);
        }
      }
      @keyframes circle-1 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-360deg);
        }
      }
      .holder .circle:nth-child(2) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 31px 31px 0 0;
        width: 31px;
        height: 15.5px;
        z-index: 14;
        -webkit-animation: circle-2 10s infinite ease-in-out;
                animation: circle-2 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-2 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-720deg);
        }
      }
      @keyframes circle-2 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-720deg);
        }
      }
      .holder .circle:nth-child(3) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 62px 62px 0 0;
        width: 62px;
        height: 31px;
        z-index: 13;
        -webkit-animation: circle-3 10s infinite ease-in-out;
                animation: circle-3 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-3 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1080deg);
        }
      }
      @keyframes circle-3 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1080deg);
        }
      }
      .holder .circle:nth-child(4) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 93px 93px 0 0;
        width: 93px;
        height: 46.5px;
        z-index: 12;
        -webkit-animation: circle-4 10s infinite ease-in-out;
                animation: circle-4 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-4 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1440deg);
        }
      }
      @keyframes circle-4 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1440deg);
        }
      }
      .holder .circle:nth-child(5) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 124px 124px 0 0;
        width: 124px;
        height: 62px;
        z-index: 11;
        -webkit-animation: circle-5 10s infinite ease-in-out;
                animation: circle-5 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-5 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1800deg);
        }
      }
      @keyframes circle-5 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-1800deg);
        }
      }
      .holder .circle:nth-child(6) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 155px 155px 0 0;
        width: 155px;
        height: 77.5px;
        z-index: 10;
        -webkit-animation: circle-6 10s infinite ease-in-out;
                animation: circle-6 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-6 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2160deg);
        }
      }
      @keyframes circle-6 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2160deg);
        }
      }
      .holder .circle:nth-child(7) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 186px 186px 0 0;
        width: 186px;
        height: 93px;
        z-index: 9;
        -webkit-animation: circle-7 10s infinite ease-in-out;
                animation: circle-7 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-7 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2520deg);
        }
      }
      @keyframes circle-7 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2520deg);
        }
      }
      .holder .circle:nth-child(8) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 217px 217px 0 0;
        width: 217px;
        height: 108.5px;
        z-index: 8;
        -webkit-animation: circle-8 10s infinite ease-in-out;
                animation: circle-8 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-8 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2880deg);
        }
      }
      @keyframes circle-8 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-2880deg);
        }
      }
      .holder .circle:nth-child(9) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 248px 248px 0 0;
        width: 248px;
        height: 124px;
        z-index: 7;
        -webkit-animation: circle-9 10s infinite ease-in-out;
                animation: circle-9 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-9 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3240deg);
        }
      }
      @keyframes circle-9 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3240deg);
        }
      }
      .holder .circle:nth-child(10) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 279px 279px 0 0;
        width: 279px;
        height: 139.5px;
        z-index: 6;
        -webkit-animation: circle-10 10s infinite ease-in-out;
                animation: circle-10 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-10 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3600deg);
        }
      }
      @keyframes circle-10 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3600deg);
        }
      }
      .holder .circle:nth-child(11) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 310px 310px 0 0;
        width: 310px;
        height: 155px;
        z-index: 5;
        -webkit-animation: circle-11 10s infinite ease-in-out;
                animation: circle-11 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-11 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3960deg);
        }
      }
      @keyframes circle-11 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-3960deg);
        }
      }
      .holder .circle:nth-child(12) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 341px 341px 0 0;
        width: 341px;
        height: 170.5px;
        z-index: 4;
        -webkit-animation: circle-12 10s infinite ease-in-out;
                animation: circle-12 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-12 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-4320deg);
        }
      }
      @keyframes circle-12 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-4320deg);
        }
      }
      .holder .circle:nth-child(13) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 372px 372px 0 0;
        width: 372px;
        height: 186px;
        z-index: 3;
        -webkit-animation: circle-13 10s infinite ease-in-out;
                animation: circle-13 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-13 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-4680deg);
        }
      }
      @keyframes circle-13 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-4680deg);
        }
      }
      .holder .circle:nth-child(14) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 403px 403px 0 0;
        width: 403px;
        height: 201.5px;
        z-index: 2;
        -webkit-animation: circle-14 10s infinite ease-in-out;
                animation: circle-14 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-14 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5040deg);
        }
      }
      @keyframes circle-14 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5040deg);
        }
      }
      .holder .circle:nth-child(15) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 434px 434px 0 0;
        width: 434px;
        height: 217px;
        z-index: 1;
        -webkit-animation: circle-15 10s infinite ease-in-out;
                animation: circle-15 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-15 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5400deg);
        }
      }
      @keyframes circle-15 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5400deg);
        }
      }
      .holder .circle:nth-child(16) {
        border: 13px solid black;
        border-bottom: none;
        border-radius: 465px 465px 0 0;
        width: 465px;
        height: 232.5px;
        z-index: 0;
        -webkit-animation: circle-16 10s infinite ease-in-out;
                animation: circle-16 10s infinite ease-in-out;
      }
      @-webkit-keyframes circle-16 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5760deg);
        }
      }
      @keyframes circle-16 {
        0% {
          transform: translateX(-50%) rotate(0deg);
        }
        100% {
          transform: translateX(-50%) rotate(-5760deg);
        }
      }
    `;

    render(){

        return html `
        <div class="holder">
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
	<div class="circle"></div>
</div>
        `
    }
}
customElements.define('spiral-element', SpiralElement);
