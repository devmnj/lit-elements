
import { css, html, LitElement } from 'lit';

export class SliderElement extends LitElement {
    static styles= css`
  
@media (min-width: 992px) {
  .slider,
  .slide {
    height: 80vh;
  }
}
.slide {
  position: relative;
}
.slide .slide__img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
@media (min-width: 992px) {
  .slide .slide__img {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
.slide .slide__img img {
  max-width: 100%;
  height: auto;
  opacity: 1 !important;
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
  transition: all 1s ease;
}
.slide .slide__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.slide .slide__content--headings {
  text-align: center;
  color: #FFF;
}
.slide .slide__content--headings h2 {
  font-size: 4.5rem;
  margin: 10px 0;
}
.slide .slide__content--headings .animated {
  transition: all 0.5s ease;
}
.slider [data-animation-in] {
  opacity: 0;
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
  transition: opacity 0.5s ease 0.3s;
}
.slick-dotted .slick-slider {
  margin-bottom: 30px;
}
.slick-dots {
  position: absolute;
  bottom: 25px;
  list-style: none;
  display: block;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots li button {
  border: 0;
  display: block;
  outline: none;
  line-height: 0px;
  font-size: 0px;
  color: transparent;
  padding: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.slick-dots li button:hover,
.slick-dots li button:focus {
  outline: none;
}
.simple-dots .slick-dots li {
  width: 20px;
  height: 20px;
}
.simple-dots .slick-dots li button {
  border-radius: 50%;
  background-color: white;
  opacity: 0.25;
  width: 20px;
  height: 20px;
}
.simple-dots .slick-dots li button:hover,
.simple-dots .slick-dots li button:focus {
  opacity: 1;
}
.simple-dots .slick-dots li.slick-active button {
  color: white;
  opacity: 0.75;
}
.stick-dots .slick-dots li {
  height: 3px;
  width: 50px;
}
.stick-dots .slick-dots li button {
  position: relative;
  background-color: white;
  opacity: 0.25;
  width: 50px;
  height: 3px;
  padding: 0;
}
.stick-dots .slick-dots li button:hover,
.stick-dots .slick-dots li button:focus {
  opacity: 1;
}
.stick-dots .slick-dots li.slick-active button {
  color: white;
  opacity: 0.75;
}
.stick-dots .slick-dots li.slick-active button:hover,
.stick-dots .slick-dots li.slick-active button:focus {
  opacity: 1;
}
 
@-webkit-keyframes zoomInImage {
  from {
    transform: scale3d(1, 1, 1);
  }
  to {
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
@keyframes zoomInImage {
  from {
    transform: scale3d(1, 1, 1);
  }
  to {
    transform: scale3d(1.1, 1.1, 1.1);
  }
}
.zoomInImage {
  -webkit-animation-name: zoomInImage;
          animation-name: zoomInImage;
}
@-webkit-keyframes zoomOutImage {
  from {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
@keyframes zoomOutImage {
  from {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
.zoomOutImage {
  -webkit-animation-name: zoomOutImage;
          animation-name: zoomOutImage;
}

    `;
    


    
    render() {
        return html `
     <header>
  <div class="slider stick-dots">
    <div class="slide">
      <div class="slide__img">
        <img src="" alt="" data-lazy="https://alexandrebuffet.fr/codepen/images/full/nature_01.jpg" class="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div class="slide__content">
        <div class="slide__content--headings">
           <h2 class="animated" data-animation-in="fadeInUp">Slide me to the moon</h2>
           <p class="animated" data-animation-in="fadeInUp" data-delay-in="0.3">With awesome animations</p>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="slide__img">
        <img src="" alt="" data-lazy="https://alexandrebuffet.fr/codepen/images/full/nature_02.jpg" class="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div class="slide__content">
        <div class="slide__content--headings">
           <h2 class="animated" data-animation-in="fadeInRight">Slide me to the moon</h2>
           <p class="animated" data-animation-in="fadeInRight" data-delay-in="0.2">With awesome animations</p>
        </div>
      </div>
    </div>
  </div>
</header>

<main>
</main>
        `
    }
}
customElements.define('slider-element', SliderElement);
