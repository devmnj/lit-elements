import { LitElement,css,html } from 'lit';

export class FadesliderElement extends LitElement {
    static styles = [css`
    @charset "UTF-8";
/*
 * CSS Fadeshow by @alexerlandsson
 * This is a fadeshow built in CSS and with customization in focus.
 * Supports quick navigation, prev/next navigation and autoplay.
 * 
 * For better documentation and implementation guide, check out the GitHub repository:
 * https://github.com/alexerlandsson/css-fadeshow
*/
/*
 * ===== VARIABLES =====
 *
 * Change these variables to match your preferences. For a more detailed
 * description of what each variable do, visit https://github.com/alexerlandsson/css-fadeshow
 */
/*
 * ===== MIXINS =====
 *
 * This section contains mixin used
 * Do not change anything here unless you know what you are doing.
 */
/* Mixins to handle prefixes */
/* Mixins to handle Quick Navigation Button states */
/*
 * ===== FADESHOW =====
 *
 * Base functionality for the fadeshow.
 * Do not change anything here unless you know what you are doing.
 */
[data-am-fadeshow] {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fff;
  /* Slides */
  /* Quick Navigation */
  /* Prev/Next Navigation */
  /* Base functionality */
  /* Autohide Prev/Next Navigation */
}
[data-am-fadeshow] .fs-slide {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 1s ease;
  /* Display first child on load */
}
[data-am-fadeshow] .fs-slide:first-child {
  opacity: 1;
}
[data-am-fadeshow] .fs-quick-nav {
  position: absolute;
  bottom: 15px;
  left: 50%;
  z-index: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transform: translateX(-50%);
}
[data-am-fadeshow] .fs-quick-btn {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 2px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 200ms ease;
  background-color: rgba(255, 255, 255, 0.8);
  /* Set active state to first button on load */
}
[data-am-fadeshow] .fs-quick-btn:hover {
  opacity: 0.8;
}
[data-am-fadeshow] .fs-quick-btn:first-child {
  background-color: coral;
}
[data-am-fadeshow] .fs-next-btn, [data-am-fadeshow] .fs-prev-btn {
  position: absolute;
  display: none;
  top: 0;
  bottom: 0;
  width: 100px;
  cursor: pointer;
  font-family: sans-serif;
  background-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transition: all 200ms ease;
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-next-btn, [data-am-fadeshow] .fs-prev-btn {
    width: 50%;
  }
}
[data-am-fadeshow] .fs-next-btn:before, [data-am-fadeshow] .fs-prev-btn:before {
  position: absolute;
  top: 50%;
  font-size: 3vw;
  color: rgba(255, 255, 255, 0.5);
}
[data-am-fadeshow] .fs-next-btn:hover, [data-am-fadeshow] .fs-prev-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-next-btn:hover, [data-am-fadeshow] .fs-prev-btn:hover {
    background-color: rgba(255, 255, 255, 0);
  }
}
[data-am-fadeshow] .fs-prev-btn {
  left: 0;
  transform: translateX(-100%);
}
[data-am-fadeshow] .fs-prev-btn:before {
  content: "❮";
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-prev-btn:before {
    left: 30px;
  }
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-prev-btn {
    transform: translate(0);
  }
}
[data-am-fadeshow] .fs-next-btn {
  right: 0;
  transform: translateX(100%);
}
[data-am-fadeshow] .fs-next-btn:before {
  content: "❯";
  right: 50%;
  transform: translate(50%, -50%);
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-next-btn:before {
    right: 30px;
  }
}
@media (max-width: 500px) {
  [data-am-fadeshow] .fs-next-btn {
    transform: translate(0);
  }
}
[data-am-fadeshow] input[type=radio] {
  position: fixed;
  top: -9999px;
}
[data-am-fadeshow] input[type=radio]:checked {
  /* This loop handles the slide switching and quick navigation active state */
  /* Hide navigation if only one slide */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) {
  /* Show slide */
  /* Add active state to dot */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) ~ .fs-slides .fs-slide {
  opacity: 0;
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) ~ .fs-slides .fs-slide:nth-child(5) {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) ~ .fs-quick-nav .fs-quick-btn {
  background-color: rgba(255, 255, 255, 0.8);
  /* Cancel autoplay */
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) ~ .fs-quick-nav .fs-quick-btn:nth-child(5) {
  background-color: coral;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(5) ~ .fs-quick-nav .fs-quick-btn:nth-child(5):hover {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) {
  /* Show slide */
  /* Add active state to dot */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) ~ .fs-slides .fs-slide {
  opacity: 0;
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) ~ .fs-slides .fs-slide:nth-child(4) {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) ~ .fs-quick-nav .fs-quick-btn {
  background-color: rgba(255, 255, 255, 0.8);
  /* Cancel autoplay */
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) ~ .fs-quick-nav .fs-quick-btn:nth-child(4) {
  background-color: coral;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(4) ~ .fs-quick-nav .fs-quick-btn:nth-child(4):hover {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) {
  /* Show slide */
  /* Add active state to dot */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) ~ .fs-slides .fs-slide {
  opacity: 0;
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) ~ .fs-slides .fs-slide:nth-child(3) {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) ~ .fs-quick-nav .fs-quick-btn {
  background-color: rgba(255, 255, 255, 0.8);
  /* Cancel autoplay */
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) ~ .fs-quick-nav .fs-quick-btn:nth-child(3) {
  background-color: coral;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(3) ~ .fs-quick-nav .fs-quick-btn:nth-child(3):hover {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) {
  /* Show slide */
  /* Add active state to dot */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) ~ .fs-slides .fs-slide {
  opacity: 0;
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) ~ .fs-slides .fs-slide:nth-child(2) {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) ~ .fs-quick-nav .fs-quick-btn {
  background-color: rgba(255, 255, 255, 0.8);
  /* Cancel autoplay */
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) ~ .fs-quick-nav .fs-quick-btn:nth-child(2) {
  background-color: coral;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(2) ~ .fs-quick-nav .fs-quick-btn:nth-child(2):hover {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) {
  /* Show slide */
  /* Add active state to dot */
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) ~ .fs-slides .fs-slide {
  opacity: 0;
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) ~ .fs-slides .fs-slide:nth-child(1) {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) ~ .fs-quick-nav .fs-quick-btn {
  background-color: rgba(255, 255, 255, 0.8);
  /* Cancel autoplay */
  -webkit-animation: none !important;
  animation: none !important;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) ~ .fs-quick-nav .fs-quick-btn:nth-child(1) {
  background-color: coral;
}
[data-am-fadeshow] input[type=radio]:checked:nth-of-type(1) ~ .fs-quick-nav .fs-quick-btn:nth-child(1):hover {
  opacity: 1;
}
[data-am-fadeshow] input[type=radio]:checked:first-of-type:last-of-type ~ .fs-quick-nav,
[data-am-fadeshow] input[type=radio]:checked:first-of-type:last-of-type ~ .fs-prev-nav,
[data-am-fadeshow] input[type=radio]:checked:first-of-type:last-of-type ~ .fs-next-nav {
  display: none !important;
}
[data-am-fadeshow]:hover .fs-prev-btn,
[data-am-fadeshow]:hover .fs-next-btn {
  transform: translateX(0);
}

/*
 * ===== PREV/NEXT NAVIGATION =====
 *
 * This section handles the prev/next navigation.
 */
/* Handle Prev/Next buttons */
[data-am-fadeshow~=next-prev-navigation] {
  /* Display first pair of Prev/Next Buttons on load */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(5) {
  /* Show previous button */
  /* Show next button */
  /* Show last prev button if first slide */
  /* Show first next button if last slide */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(5) ~ .fs-prev-nav .fs-prev-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(5) ~ .fs-prev-nav .fs-prev-btn:nth-child(4) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(5):first-of-type ~ .fs-prev-nav .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(5):last-of-type ~ .fs-next-nav .fs-next-btn:first-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4) {
  /* Show previous button */
  /* Show next button */
  /* Show last prev button if first slide */
  /* Show first next button if last slide */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4) ~ .fs-prev-nav .fs-prev-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4) ~ .fs-prev-nav .fs-prev-btn:nth-child(3) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4) ~ .fs-next-nav .fs-next-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4) ~ .fs-next-nav .fs-next-btn:nth-child(5) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4):first-of-type ~ .fs-prev-nav .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(4):last-of-type ~ .fs-next-nav .fs-next-btn:first-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3) {
  /* Show previous button */
  /* Show next button */
  /* Show last prev button if first slide */
  /* Show first next button if last slide */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3) ~ .fs-prev-nav .fs-prev-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3) ~ .fs-prev-nav .fs-prev-btn:nth-child(2) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3) ~ .fs-next-nav .fs-next-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3) ~ .fs-next-nav .fs-next-btn:nth-child(4) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3):first-of-type ~ .fs-prev-nav .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(3):last-of-type ~ .fs-next-nav .fs-next-btn:first-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2) {
  /* Show previous button */
  /* Show next button */
  /* Show last prev button if first slide */
  /* Show first next button if last slide */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2) ~ .fs-prev-nav .fs-prev-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2) ~ .fs-prev-nav .fs-prev-btn:nth-child(1) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2) ~ .fs-next-nav .fs-next-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2) ~ .fs-next-nav .fs-next-btn:nth-child(3) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2):first-of-type ~ .fs-prev-nav .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(2):last-of-type ~ .fs-next-nav .fs-next-btn:first-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(1) {
  /* Show previous button */
  /* Show next button */
  /* Show last prev button if first slide */
  /* Show first next button if last slide */
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(1) ~ .fs-next-nav .fs-next-btn {
  display: none;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(1) ~ .fs-next-nav .fs-next-btn:nth-child(2) {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(1):first-of-type ~ .fs-prev-nav .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] input[type=radio]:checked:nth-of-type(1):last-of-type ~ .fs-next-nav .fs-next-btn:first-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] .fs-prev-btn:last-child {
  display: block;
}
[data-am-fadeshow~=next-prev-navigation] .fs-next-btn:nth-child(2) {
  display: block;
}

/*
 * ===== AUTOPLAY =====
 *
 * Functions to handle autoplay.
 * If you're not going to use autoplay, set $autoplay to false.
 * This part tends to compile into a lot of uneccesary CSS otherwise.
 */
@keyframes quickNavAnimation-5 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  4%, 20% {
    background-color: coral;
  }
  24%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@-webkit-keyframes quickNavAnimation-5 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  4%, 20% {
    background-color: coral;
  }
  24%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@keyframes slidesAnimation-5 {
  0% {
    opacity: 0;
  }
  4%, 20% {
    opacity: 1;
  }
  24%, 100% {
    opacity: 0;
  }
}
@-webkit-keyframes slidesAnimation-5 {
  0% {
    opacity: 0;
  }
  4%, 20% {
    opacity: 1;
  }
  24%, 100% {
    opacity: 0;
  }
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type {
  /* Slide animation */
  /* Quick navigation animation */
  /* Animation Delay */
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide {
  -webkit-animation: slidesAnimation-5 25s infinite;
  animation: slidesAnimation-5 25s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn {
  -webkit-animation: quickNavAnimation-5 25s infinite;
  animation: quickNavAnimation-5 25s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide:nth-child(1),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide:nth-child(2),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(2) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide:nth-child(3),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(3) {
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide:nth-child(4),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(4) {
  -webkit-animation-delay: 14s;
  animation-delay: 14s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-slides .fs-slide:nth-child(5),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(5):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(5) {
  -webkit-animation-delay: 19s;
  animation-delay: 19s;
}

@keyframes quickNavAnimation-4 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  5%, 25% {
    background-color: coral;
  }
  30%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@-webkit-keyframes quickNavAnimation-4 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  5%, 25% {
    background-color: coral;
  }
  30%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@keyframes slidesAnimation-4 {
  0% {
    opacity: 0;
  }
  5%, 25% {
    opacity: 1;
  }
  30%, 100% {
    opacity: 0;
  }
}
@-webkit-keyframes slidesAnimation-4 {
  0% {
    opacity: 0;
  }
  5%, 25% {
    opacity: 1;
  }
  30%, 100% {
    opacity: 0;
  }
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type {
  /* Slide animation */
  /* Quick navigation animation */
  /* Animation Delay */
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-slides .fs-slide {
  -webkit-animation: slidesAnimation-4 20s infinite;
  animation: slidesAnimation-4 20s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-quick-nav .fs-quick-btn {
  -webkit-animation: quickNavAnimation-4 20s infinite;
  animation: quickNavAnimation-4 20s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-slides .fs-slide:nth-child(1),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-slides .fs-slide:nth-child(2),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(2) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-slides .fs-slide:nth-child(3),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(3) {
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-slides .fs-slide:nth-child(4),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(4):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(4) {
  -webkit-animation-delay: 14s;
  animation-delay: 14s;
}

@keyframes quickNavAnimation-3 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  6.6666666667%, 33.3333333333% {
    background-color: coral;
  }
  40%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@-webkit-keyframes quickNavAnimation-3 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  6.6666666667%, 33.3333333333% {
    background-color: coral;
  }
  40%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@keyframes slidesAnimation-3 {
  0% {
    opacity: 0;
  }
  6.6666666667%, 33.3333333333% {
    opacity: 1;
  }
  40%, 100% {
    opacity: 0;
  }
}
@-webkit-keyframes slidesAnimation-3 {
  0% {
    opacity: 0;
  }
  6.6666666667%, 33.3333333333% {
    opacity: 1;
  }
  40%, 100% {
    opacity: 0;
  }
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type {
  /* Slide animation */
  /* Quick navigation animation */
  /* Animation Delay */
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-slides .fs-slide {
  -webkit-animation: slidesAnimation-3 15s infinite;
  animation: slidesAnimation-3 15s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-quick-nav .fs-quick-btn {
  -webkit-animation: quickNavAnimation-3 15s infinite;
  animation: quickNavAnimation-3 15s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-slides .fs-slide:nth-child(1),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-slides .fs-slide:nth-child(2),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(2) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-slides .fs-slide:nth-child(3),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(3):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(3) {
  -webkit-animation-delay: 9s;
  animation-delay: 9s;
}

@keyframes quickNavAnimation-2 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  10%, 50% {
    background-color: coral;
  }
  60%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@-webkit-keyframes quickNavAnimation-2 {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  10%, 50% {
    background-color: coral;
  }
  60%, 100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}
@keyframes slidesAnimation-2 {
  0% {
    opacity: 0;
  }
  10%, 50% {
    opacity: 1;
  }
  60%, 100% {
    opacity: 0;
  }
}
@-webkit-keyframes slidesAnimation-2 {
  0% {
    opacity: 0;
  }
  10%, 50% {
    opacity: 1;
  }
  60%, 100% {
    opacity: 0;
  }
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type {
  /* Slide animation */
  /* Quick navigation animation */
  /* Animation Delay */
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-slides .fs-slide {
  -webkit-animation: slidesAnimation-2 10s infinite;
  animation: slidesAnimation-2 10s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-quick-nav .fs-quick-btn {
  -webkit-animation: quickNavAnimation-2 10s infinite;
  animation: quickNavAnimation-2 10s infinite;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-slides .fs-slide:nth-child(1),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(1) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-slides .fs-slide:nth-child(2),
[data-am-fadeshow~=autoplay] input[type=radio]:nth-of-type(2):last-of-type ~ .fs-quick-nav .fs-quick-btn:nth-child(2) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}

/* Base Styling */
body {
  margin: 0;
}

.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
    `];

    render() {
        return html`<div class="container">
	
        <div data-am-fadeshow="next-prev-navigation">
    
            <!-- Radio -->
            <input type="radio" name="css-fadeshow" id="slide-1" />
            <input type="radio" name="css-fadeshow" id="slide-2" />
            <input type="radio" name="css-fadeshow" id="slide-3" />
    
            <!-- Slides -->
            <div class="fs-slides">
                <div class="fs-slide" style="background-image: url(https://images.unsplash.com/photo-1460500063983-994d4c27756c?crop=entropy&fit=crop&fm=jpg&h=1325&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2550);">
                    <!-- Add content to images (sample) -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-family: sans-serif; text-align: center; text-shadow: 0 0 20px rgba(0,0,0,0.5);">
                        <h1 style="margin-top: 0; margin-bottom: 0.8vw; font-size: 5vw; font-weight: bold;">CSS Fadeshow</h1>
                        <p style="font-size: 2vw; font-weight: 100; margin-top: 0;">Easy to implement and use on <strong>your</strong> site!</p>
                    </div>
                </div>
                <div class="fs-slide" style="background-image: url(https://images.unsplash.com/photo-1440557653082-e8e186733eeb?crop=entropy&fit=crop&fm=jpg&h=1325&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2500);"></div>
                <div class="fs-slide" style="background-image: url(https://images.unsplash.com/photo-1449057528837-7ca097b3520c?crop=entropy&fit=crop&fm=jpg&h=1325&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2500);"></div>
            </div>
    
            <!-- Quick Navigation -->
            <div class="fs-quick-nav">
                <label class="fs-quick-btn" for="slide-1"></label>
                <label class="fs-quick-btn" for="slide-2"></label>
                <label class="fs-quick-btn" for="slide-3"></label>
            </div>
            
            <!-- Prev Navigation -->
            <div class="fs-prev-nav">
                <label class="fs-prev-btn" for="slide-1"></label>
                <label class="fs-prev-btn" for="slide-2"></label>
                <label class="fs-prev-btn" for="slide-3"></label>
            </div>
            
            <!-- Next Navigation -->
            <div class="fs-next-nav">
                <label class="fs-next-btn" for="slide-1"></label>
                <label class="fs-next-btn" for="slide-2"></label>
                <label class="fs-next-btn" for="slide-3"></label>
            </div>
    
        </div>
        
    </div>`;
    }
}
customElements.define('fadeslider-element', FadesliderElement);
