import { LitElement,css,html } from 'lit';

export class WatchElement extends LitElement {
    static styles = [css`@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");
    body {
      background-color: #fff;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Open Sans', sans-serif;
    }
    .wrapper {
      position: relative;
    }
    .watch-case {
      position: absolute;
      z-index: 4;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 400px;
      width: 400px;
      overflow: hidden;
      background-image: linear-gradient(-45deg, #fdfdfd, #ceced6, #fdfdfd);
      border-radius: 50%;
      box-shadow: 0 0 1px 2px rgba(180,177,193,0.7);
    }
    .watch-center {
      background-image: radial-gradient(#fff, #eeeeef);
      height: 380px;
      width: 380px;
      border-radius: 50%;
      position: absolute;
      z-index: 4;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      box-shadow: -1px -1px 1px 0 #fdfdfd, 0 0 0 2px #b8b7c3, inset 0 0 0 2px #d1d1d6, inset 0 0 0 4px rgba(255,255,255,0.7), inset 0 0 8px 8px rgba(0,0,0,0.1), inset 0 0 50px 50px rgba(0,0,0,0.05);
    }
    .watch-strap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 480px;
      width: 220px;
      background-color: #101022;
      border-radius: 6px;
      z-index: 2;
    }
    .watch-strap .strap-circle {
      position: absolute;
      height: 409px;
      width: 409px;
      background-color: transparent;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      box-shadow: inset -1px 0 8px 3px #151427, 0 0 2px 1px rgba(255,255,255,0.8);
    }
    .watch-strap .strap-circle:after {
      content: "";
      display: block;
      height: 100%;
      width: 72px;
      left: -2px;
      position: absolute;
      background-color: #fff;
    }
    .watch-strap .strap-circle:before {
      content: "";
      display: block;
      height: 100%;
      width: 72px;
      background-color: #fff;
      position: absolute;
      right: -2px;
    }
    .watch-strap .strap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 480px;
      width: 220px;
      background-color: #101022;
      border-radius: 6px;
      z-index: 2;
      box-shadow: -1px 0 1px 0 #000, inset 0 20px 40px -20px #172365, inset 0 -20px 40px -20px rgba(23,35,101,0.7);
    }
    .watch-strap-holder {
      position: absolute;
      background-color: #e7e7ea;
      height: 150px;
      width: 20px;
      left: -20px;
      border-radius: 3px;
      top: -2px;
      z-index: -1;
      box-shadow: inset 0 0 4px 1px rgba(0,0,0,0.2);
    }
    .watch-strap-holder.left-bottom {
      transform: scaleY(-1);
      top: 332px;
      left: -20px;
    }
    .watch-strap-holder.right-up {
      transform: scaleX(-1);
      left: 220px;
      box-shadow: inset 0 0 4px 1px rgba(0,0,0,0.2);
    }
    .watch-strap-holder.right-up:after {
      border-radius: 14px 70px 0 0;
      box-shadow: inset 0px 3px 1px -2px rgba(255,255,255,0.6), inset -10px -15px 1px 2px #dcdce4, inset -2px 10px 4px 2px #181820;
    }
    .watch-strap-holder.right-bottom {
      transform: scaleY(-1) scaleX(-1);
      top: 332px;
      left: 220px;
    }
    .watch-strap-holder.right-bottom:after {
      border-radius: 14px 70px 0 0;
      box-shadow: inset 0px 3px 1px -2px rgba(255,255,255,0.6), inset -10px -15px 1px 2px #dcdce4, inset -2px 10px 4px 2px #181820;
    }
    .watch-strap-holder:before {
      content: "";
      display: block;
      position: absolute;
      background-color: #e7e7ea;
      height: 150px;
      width: 10px;
      border-radius: 3px 0;
      transform: rotate(4deg);
      left: -5px;
      box-shadow: inset 5px 5px 4px -5px rgba(0,0,0,0.2);
    }
    .watch-strap-holder:after {
      content: "";
      display: block;
      position: absolute;
      background-color: transparent;
      background-image: linear-gradient(to bottom, transparent, #fff);
      height: 150px;
      width: 30px;
      border-radius: 12px;
      transform: rotate(4deg);
      top: 10px;
      left: -4px;
      box-shadow: inset -3px 8px 2px 2px #181820;
    }
    .reflection {
      content: "";
      display: block;
      height: 16px;
      width: 30px;
      position: absolute;
      top: 50px;
      left: 50px;
      background-color: #080817;
      filter: blur(1px);
      transform: rotate(-56deg) skewX(30deg) scale(0.6);
    }
    .reflection.bottom {
      top: 337px;
      left: 312px;
    }
    .reflection.bottom:after {
      height: 39px;
      width: 43px;
      left: -60px;
      top: -14px;
      transform: rotate(-44deg);
      box-shadow: 34px 17px 0 8px #080817;
    }
    .reflection:after {
      content: "";
      display: block;
      background-color: transparent;
      height: 40px;
      width: 30px;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
      left: -48px;
      top: -11px;
      transform: rotate(-69deg);
      box-shadow: 34px 17px 0 20px #080817;
    }
    .reflection:before {
      content: "";
      display: block;
      background-color: transparent;
      height: 40px;
      width: 30px;
      border-radius: 50%;
      background-color: transparent;
      position: absolute;
      right: 25px;
      top: 32px;
      transform: rotate(-69deg);
      box-shadow: 34px 17px 0 10px #080817, 14px 32px 0 20px #080817;
    }
    .watch-points {
      position: absolute;
      z-index: 5;
      top: calc(50% - 6px);
      left: calc(50% - 1px);
      transform: translate(-50%, -50%);
    }
    .watch-points:after {
      content: "";
      display: block;
      height: 325px;
      width: 325px;
      position: absolute;
      border: 2px solid #dededf;
      top: calc(50% + 6px);
      left: calc(50% + 1px);
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
    .watch-points i {
      display: block;
      height: 12px;
      width: 2px;
      background-image: linear-gradient(to bottom, #c6c6cb, #e0e0e1);
      position: absolute;
    }
    i:nth-child(1) {
      transform: rotate(6deg) translate(0, -172px);
    }
    i:nth-child(2) {
      transform: rotate(12deg) translate(0, -172px);
    }
    i:nth-child(3) {
      transform: rotate(18deg) translate(0, -172px);
    }
    i:nth-child(4) {
      transform: rotate(24deg) translate(0, -172px);
    }
    i:nth-child(5) {
      transform: rotate(30deg) translate(0, -172px);
    }
    i:nth-child(6) {
      transform: rotate(36deg) translate(0, -172px);
    }
    i:nth-child(7) {
      transform: rotate(42deg) translate(0, -172px);
    }
    i:nth-child(8) {
      transform: rotate(48deg) translate(0, -172px);
    }
    i:nth-child(9) {
      transform: rotate(54deg) translate(0, -172px);
    }
    i:nth-child(10) {
      transform: rotate(60deg) translate(0, -172px);
    }
    i:nth-child(11) {
      transform: rotate(66deg) translate(0, -172px);
    }
    i:nth-child(12) {
      transform: rotate(72deg) translate(0, -172px);
    }
    i:nth-child(13) {
      transform: rotate(78deg) translate(0, -172px);
    }
    i:nth-child(14) {
      transform: rotate(84deg) translate(0, -172px);
    }
    i:nth-child(15) {
      transform: rotate(90deg) translate(0, -172px);
    }
    i:nth-child(16) {
      transform: rotate(96deg) translate(0, -172px);
    }
    i:nth-child(17) {
      transform: rotate(102deg) translate(0, -172px);
    }
    i:nth-child(18) {
      transform: rotate(108deg) translate(0, -172px);
    }
    i:nth-child(19) {
      transform: rotate(114deg) translate(0, -172px);
    }
    i:nth-child(20) {
      transform: rotate(120deg) translate(0, -172px);
    }
    i:nth-child(21) {
      transform: rotate(126deg) translate(0, -172px);
    }
    i:nth-child(22) {
      transform: rotate(132deg) translate(0, -172px);
    }
    i:nth-child(23) {
      transform: rotate(138deg) translate(0, -172px);
    }
    i:nth-child(24) {
      transform: rotate(144deg) translate(0, -172px);
    }
    i:nth-child(25) {
      transform: rotate(150deg) translate(0, -172px);
    }
    i:nth-child(26) {
      transform: rotate(156deg) translate(0, -172px);
    }
    i:nth-child(27) {
      transform: rotate(162deg) translate(0, -172px);
    }
    i:nth-child(28) {
      transform: rotate(168deg) translate(0, -172px);
    }
    i:nth-child(29) {
      transform: rotate(174deg) translate(0, -172px);
    }
    i:nth-child(30) {
      transform: rotate(180deg) translate(0, -172px);
    }
    i:nth-child(31) {
      transform: rotate(186deg) translate(0, -172px);
    }
    i:nth-child(32) {
      transform: rotate(192deg) translate(0, -172px);
    }
    i:nth-child(33) {
      transform: rotate(198deg) translate(0, -172px);
    }
    i:nth-child(34) {
      transform: rotate(204deg) translate(0, -172px);
    }
    i:nth-child(35) {
      transform: rotate(210deg) translate(0, -172px);
    }
    i:nth-child(36) {
      transform: rotate(216deg) translate(0, -172px);
    }
    i:nth-child(37) {
      transform: rotate(222deg) translate(0, -172px);
    }
    i:nth-child(38) {
      transform: rotate(228deg) translate(0, -172px);
    }
    i:nth-child(39) {
      transform: rotate(234deg) translate(0, -172px);
    }
    i:nth-child(40) {
      transform: rotate(240deg) translate(0, -172px);
    }
    i:nth-child(41) {
      transform: rotate(246deg) translate(0, -172px);
    }
    i:nth-child(42) {
      transform: rotate(252deg) translate(0, -172px);
    }
    i:nth-child(43) {
      transform: rotate(258deg) translate(0, -172px);
    }
    i:nth-child(44) {
      transform: rotate(264deg) translate(0, -172px);
    }
    i:nth-child(45) {
      transform: rotate(270deg) translate(0, -172px);
    }
    i:nth-child(46) {
      transform: rotate(276deg) translate(0, -172px);
    }
    i:nth-child(47) {
      transform: rotate(282deg) translate(0, -172px);
    }
    i:nth-child(48) {
      transform: rotate(288deg) translate(0, -172px);
    }
    i:nth-child(49) {
      transform: rotate(294deg) translate(0, -172px);
    }
    i:nth-child(50) {
      transform: rotate(300deg) translate(0, -172px);
    }
    i:nth-child(51) {
      transform: rotate(306deg) translate(0, -172px);
    }
    i:nth-child(52) {
      transform: rotate(312deg) translate(0, -172px);
    }
    i:nth-child(53) {
      transform: rotate(318deg) translate(0, -172px);
    }
    i:nth-child(54) {
      transform: rotate(324deg) translate(0, -172px);
    }
    i:nth-child(55) {
      transform: rotate(330deg) translate(0, -172px);
    }
    i:nth-child(56) {
      transform: rotate(336deg) translate(0, -172px);
    }
    i:nth-child(57) {
      transform: rotate(342deg) translate(0, -172px);
    }
    i:nth-child(58) {
      transform: rotate(348deg) translate(0, -172px);
    }
    i:nth-child(59) {
      transform: rotate(354deg) translate(0, -172px);
    }
    i:nth-child(60) {
      transform: rotate(360deg) translate(0, -172px);
    }
    .watch-week {
      position: absolute;
      top: calc(50% - 6px);
      left: calc(50% - 6px);
      transform: translate(-120px, 40px) rotate(-70deg);
      z-index: 10;
    }
    .watch-week.days {
      transform: translate(50px, 40px) rotate(-70deg);
    }
    .watch-week.days:after {
      transform: rotate(256deg);
    }
    .watch-week.days ul {
      transform: rotate(169deg) translate(-58px, -17px);
    }
    .watch-week.days div {
      color: #1f1f21;
    }
    .watch-week.days div:nth-child(1) {
      transform: rotate(0) translate(0, -37px) scaleX(-1);
    }
    .watch-week.days div:nth-child(2) {
      transform: rotate(80deg) translate(0, -37px) scaleX(-1) scaleY(-1);
    }
    .watch-week.days div:nth-child(3) {
      transform: rotate(160deg) translate(0, -37px);
    }
    .watch-week.days .week-arrow {
      transform: rotate(115deg) translate(35px, -8px);
    }
    .watch-week:after {
      content: "";
      display: block;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      background-color: transparent;
      transform: rotate(-64deg);
      box-shadow: 1px 2px 0 0px #d6d6d3;
      position: absolute;
      left: -2px;
      top: -28px;
    }
    .watch-week .week-arrow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(19px, 21px) rotate(22deg);
      width: 45px;
      height: 2px;
      background-color: #0f1743;
      z-index: 5;
    }
    .watch-week .week-arrow:after,
    .watch-week .week-arrow:before {
      content: "";
      position: absolute;
      display: block;
      height: 14px;
      width: 14px;
      background-color: #ff5456;
      border-radius: 50%;
      left: -6px;
      top: -6px;
      z-index: -1;
    }
    .watch-week .week-arrow:after {
      background-color: #0f1743;
      height: 10px;
      width: 10px;
      top: -4px;
      left: -4px;
      z-index: -1;
    }
    .watch-week div {
      font-weight: bold;
      font-size: 11px;
      position: absolute;
      z-index: 10;
      height: 12px;
      width: 12px;
      display: block;
      color: #d6d6d3;
    }
    .watch-week div:nth-child(1) {
      transform: rotate(0) translate(0, -45px);
    }
    .watch-week div:nth-child(2) {
      transform: rotate(25deg) translate(0, -45px);
    }
    .watch-week div:nth-child(3) {
      transform: rotate(50deg) translate(0, -45px);
    }
    .watch-week div:nth-child(4) {
      transform: rotate(75deg) translate(0, -45px);
    }
    .watch-week div:nth-child(5) {
      transform: rotate(100deg) translate(0, -45px);
    }
    .watch-week div:nth-child(6) {
      transform: rotate(125deg) translate(0, -45px);
      color: #ff5456;
    }
    .watch-week div:nth-child(7) {
      transform: rotate(150deg) translate(0, -45px);
    }
    .watch-date {
      position: absolute;
      top: calc(50% - 100px);
      left: 50%;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      transform: translate(-50%, -50%);
    }
    .watch-alert {
      position: absolute;
      top: calc(50% + 100px);
      text-transform: uppercase;
      text-align: center;
      left: 50%;
      font-size: 14px;
      color: #bfbcd8;
      font-weight: 600;
      transform: translate(-50%, -50%);
    }
    .watch-alert strong {
      color: #f00;
      font-weight: 600;
    }
    .watch-tips {
      height: 300px;
      width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      z-index: 11;
    }
    .hours {
      width: 190px;
      height: 6px;
      position: absolute;
      top: calc(50% - 3px);
      left: calc(50% - 30px);
      transform: rotate(153deg);
      background-color: #fff;
      transform-origin: 30px center;
      box-shadow: 0 4px 12px 2px rgba(0,0,0,0.15);
      border-radius: 0 20px 20px 0;
      z-index: 12;
    }
    .hours:after {
      content: "";
      display: block;
      position: absolute;
      left: 23px;
      top: -5px;
      height: 14px;
      width: 14px;
      background-color: #fff;
      border-radius: 50%;
    }
    .seconds {
      width: 197px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: calc(50% - 30px);
      transform: rotate(0deg);
      -webkit-animation: 10s seconds linear infinite;
              animation: 10s seconds linear infinite;
      background-color: #fe0806;
      transform-origin: 30px center;
      box-shadow: 0 0 16px 2px rgba(254,8,6,0.2);
      border-radius: 0 20px 20px 0;
      z-index: 15;
    }
    .seconds:after {
      content: "";
      display: block;
      position: absolute;
      left: 25px;
      top: -4px;
      height: 10px;
      width: 10px;
      background-color: #fe0806;
      border-radius: 50%;
      z-index: 15;
    }
    .minutes {
      width: 170px;
      height: 6px;
      position: absolute;
      top: calc(50% - 3px);
      left: calc(50% - 30px);
      transform: rotate(15deg);
      background-color: #000004;
      transform-origin: 30px center;
      border-radius: 0 20px 20px 0;
      z-index: 11;
    }
    .watch-lace {
      width: 0;
      height: 20px;
      border-bottom: 10px solid transparent;
      border-top: 10px solid transparent;
      border-right: 8px solid #32322a;
      position: absolute;
      right: -98px;
      top: calc(50% - 20px);
      border-radius: 6px;
      z-index: 30;
      transform: scaleX(0.9) scaleY(1.1);
    }
    .watch-lace:after {
      content: "";
      display: block;
      height: 40px;
      width: 10px;
      right: -16px;
      top: -10px;
      background-color: #dedede 0;
      border-radius: 3px;
      position: absolute;
    }
    .watch-lace:before {
      content: "";
      display: block;
      height: 40px;
      width: 4px;
      background-color: #c3c4cb;
      background-image: linear-gradient(to left, transparent, rgba(0,0,0,0.1));
      z-index: 20;
      position: absolute;
      right: -17px;
      border-radius: 4px;
      top: -10px;
    }
    .watch-lace span {
      display: block;
      position: absolute;
      background-image: linear-gradient(to left, #eae9e9, transparent);
      height: 4px;
      width: 20px;
      top: -4px;
      left: -10px;
      transform: rotate(-45deg);
    }
    .watch-lace span.bottom {
      top: 18px;
      transform: rotate(45deg);
      background-image: linear-gradient(to left, #eae9e9, transparent);
      opacity: 0.7;
    }
    .watch-lace div {
      height: 2px;
      width: 7px;
      background-color: #c4c4c4;
      border: 1px solid #999891;
      position: relative;
      right: -7px;
      z-index: 20;
      top: 7px;
    }
    .watch-lace div:nth-child(2) {
      top: -4px;
    }
    .watch-lace div:nth-child(3) {
      top: 6px;
    }
    .watch-lace div:nth-child(4) {
      top: -17px;
      filter: brightness(110%);
    }
    .watch-lace div:nth-child(5) {
      top: 4px;
      filter: brightness(110%);
    }
    .watch-lace div:nth-child(6) {
      top: -28px;
      transform: rotate(-4deg);
      filter: brightness(115%);
    }
    .watch-lace div:nth-child(6):before {
      transform: rotate(-8deg);
    }
    .watch-lace div:nth-child(7) {
      top: -1px;
      transform: rotate(4deg);
      filter: brightness(115%);
    }
    .watch-lace div:nth-child(7):after {
      transform: rotate(8deg);
    }
    .watch-lace div:after,
    .watch-lace div:before {
      content: "";
      position: relative;
      background-color: #b8b8bb;
      height: 3px;
      width: 10px;
      display: block;
      top: 0px;
      left: -3px;
      border-radius: 3px;
    }
    .watch-lace div:before {
      top: -3px;
    }
    .watch-day {
      height: 90px;
      width: 90px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(42px, -23px);
      background-color: #1341d1;
      -webkit-animation: 8s day-bg infinite;
              animation: 8s day-bg infinite;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: inset 0 -1px 1px 1px #f6f6f6;
      background-image: radial-gradient(#f6f6f6 18px, transparent 19px), radial-gradient(#f6f6f6 14px, transparent 15px), radial-gradient(#f6f6f6 18px, transparent 19px), radial-gradient(#f6f6f6 60px, transparent 61px);
      background-repeat: no-repeat;
      background-position: -28px 6px, 0 6px, 28px 6px, 0 42px;
    }
    .sun {
      height: 10px;
      width: 10px;
      background-color: transparent;
      position: absolute;
      border: 3px solid #fff;
      border-radius: 50%;
      left: calc(50% - 8px);
      top: 12px;
      -webkit-animation: 8s sun infinite;
              animation: 8s sun infinite;
    }
    .sun:after {
      content: "";
      display: block;
      position: absolute;
      height: 20px;
      width: 20px;
      background-color: #212045;
      border-radius: 50%;
      top: calc(50% - 10px);
      left: calc(50% - 10px);
      -webkit-animation: 8s moon infinite;
              animation: 8s moon infinite;
    }
    .sun div {
      position: absolute;
      height: 7px;
      width: 1px;
      background-color: #fff;
      top: calc(50% - 7px / 2);
      left: calc(50% - 1px);
      border-radius: 10px;
      -webkit-animation: 8s sun-arms infinite;
              animation: 8s sun-arms infinite;
    }
    .sun div:after,
    .sun div:before {
      content: "";
      display: block;
      height: 7px;
      width: 2px;
      background-color: #fff;
      position: absolute;
      left: 1px;
      border-radius: 4px;
      transform: rotate(-10deg);
    }
    .sun div:before {
      transform: rotate(10deg);
      left: -1px;
    }
    .sun div:nth-child(1) {
      transform: rotate(0) translate(0, -9px);
    }
    .sun div:nth-child(2) {
      transform: rotate(45deg) translate(0, -9px);
    }
    .sun div:nth-child(3) {
      transform: rotate(90deg) translate(0, -9px);
    }
    .sun div:nth-child(4) {
      transform: rotate(135deg) translate(0, -9px);
    }
    .sun div:nth-child(5) {
      transform: rotate(180deg) translate(0, -9px);
    }
    .sun div:nth-child(6) {
      transform: rotate(225deg) translate(0, -9px);
    }
    .sun div:nth-child(7) {
      transform: rotate(270deg) translate(0, -9px);
    }
    .sun div:nth-child(8) {
      transform: rotate(315deg) translate(0, -9px);
    }
    .sun div:nth-child(9) {
      transform: rotate(360deg) translate(0, -9px);
    }
    @-webkit-keyframes seconds {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes seconds {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @-webkit-keyframes sun {
      0%, 33% {
        transform: rotate(0);
        height: 12px;
        width: 12px;
      }
      33% {
        background-color: #fff;
        transform: rotate(180deg);
        height: 12px;
        width: 12px;
      }
      66% {
        transform: rotate(180deg);
        background-color: #fff;
        height: 12px;
        width: 12px;
      }
      100% {
        background-color: transparent;
        transform: rotate(360deg);
        height: 10px;
        width: 10px;
      }
    }
    @keyframes sun {
      0%, 33% {
        transform: rotate(0);
        height: 12px;
        width: 12px;
      }
      33% {
        background-color: #fff;
        transform: rotate(180deg);
        height: 12px;
        width: 12px;
      }
      66% {
        transform: rotate(180deg);
        background-color: #fff;
        height: 12px;
        width: 12px;
      }
      100% {
        background-color: transparent;
        transform: rotate(360deg);
        height: 10px;
        width: 10px;
      }
    }
    @-webkit-keyframes sun-arms {
      0% {
        opacity: 1;
      }
      20%, 55% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes sun-arms {
      0% {
        opacity: 1;
      }
      20%, 55% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @-webkit-keyframes moon {
      0% {
        transform: translate(-14px, 14px);
        opacity: 0;
      }
      25% {
        transform: translate(-14px, 14px);
        opacity: 1;
      }
      45% {
        transform: translate(0px, 0px);
        opacity: 1;
      }
      50% {
        transform: translate(14px, -14px);
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        transform: translate(0, 0);
        opacity: 0;
      }
    }
    @keyframes moon {
      0% {
        transform: translate(-14px, 14px);
        opacity: 0;
      }
      25% {
        transform: translate(-14px, 14px);
        opacity: 1;
      }
      45% {
        transform: translate(0px, 0px);
        opacity: 1;
      }
      50% {
        transform: translate(14px, -14px);
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        transform: translate(0, 0);
        opacity: 0;
      }
    }
    @-webkit-keyframes day-bg {
      0% {
        background-color: #2b7edc;
      }
      8%, 50% {
        background-color: #212045;
      }
      60% {
        background-color: #1341d1;
      }
      100% {
        background-color: #2b7edc;
      }
    }
    @keyframes day-bg {
      0% {
        background-color: #2b7edc;
      }
      8%, 50% {
        background-color: #212045;
      }
      60% {
        background-color: #1341d1;
      }
      100% {
        background-color: #2b7edc;
      }
    }
    `];
    render() {
        return html`
        <div class="wrapper">
  <div class="watch-strap">
    <div class="strap-circle"></div>
    <div class="strap"></div>
    <div class="watch-strap-holder left-up"></div>
    <div class="watch-strap-holder left-bottom"></div>
    <div class="watch-strap-holder right-up"></div>
    <div class="watch-strap-holder right-bottom"></div>
    <div class="watch-lace">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
  <div class="watch-case">
    <div class="reflection"></div>
    <div class="reflection bottom"></div>
    <div class="watch-center">
      <div class="watch-points"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div class="watch-tips">
        <span class="hours"></span>
        <span class="minutes"></span>
        <span class="seconds"></span>
      </div>
      <div class="watch-date">17 SEP</div>
      <div class="watch-alert">Your meeting <br>in <strong>15</strong> min</div>
      <div class="watch-week">
        <span class="week-arrow"></span>
        <ul>
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </ul>
      </div>
       <div class="watch-day">
         <div class="sun">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
         </div>
         
      </div>
      <div class="watch-week days">
        <span class="week-arrow"></span>
        <ul>
          <div>3</div>
          <div>6</div>
          <div>9</div>       
        </ul>
      </div>
    </div>
  </div>
</div>
        `;
    }
}
customElements.define('watch-element', WatchElement);
