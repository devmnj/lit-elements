import { LitElement,css,html } from 'lit';

export class SparkleElement extends LitElement {
    static styles = [css`
    body {
  margin: 0;
  padding: 0;
  background: #000;
  overflow: hidden;
}

.pyro > .before, .pyro > .after {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
  -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}

.pyro > .after {
  -moz-animation-delay: 1.25s, 1.25s, 1.25s;
  -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
  -o-animation-delay: 1.25s, 1.25s, 1.25s;
  -ms-animation-delay: 1.25s, 1.25s, 1.25s;
  animation-delay: 1.25s, 1.25s, 1.25s;
  -moz-animation-duration: 1.25s, 1.25s, 6.25s;
  -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
  -o-animation-duration: 1.25s, 1.25s, 6.25s;
  -ms-animation-duration: 1.25s, 1.25s, 6.25s;
  animation-duration: 1.25s, 1.25s, 6.25s;
}

@-webkit-keyframes bang {
  to {
    box-shadow: -99px -410.6666666667px #00ff84, 108px -119.6666666667px #48ff00, -177px -218.6666666667px #66ff00, 213px -123.6666666667px #ff0099, -102px -226.6666666667px #ffdd00, 81px -375.6666666667px #002bff, 204px -333.6666666667px #1500ff, 241px -241.6666666667px #7300ff, 135px -165.6666666667px #3cff00, -236px 38.3333333333px fuchsia, -181px -98.6666666667px #ff8000, 234px -87.6666666667px #ff8400, 166px -172.6666666667px #fff200, -167px 70.3333333333px #00ffa6, -16px 38.3333333333px #00ffbb, 57px 5.3333333333px #4dff00, 179px -342.6666666667px #9900ff, -242px -71.6666666667px #ff8000, -157px -99.6666666667px #ff1e00, 176px -322.6666666667px #3cff00, -197px -189.6666666667px #00eaff, -43px 21.3333333333px #51ff00, 238px -352.6666666667px #59ff00, 42px -352.6666666667px #6aff00, -58px -180.6666666667px #00ffea, -127px 42.3333333333px #0091ff, 197px -176.6666666667px #5e00ff, -68px -209.6666666667px #ff0d00, -243px -24.6666666667px #ff9500, 239px -265.6666666667px #ff002b, -152px -5.6666666667px #00ff95, 4px -134.6666666667px #ffb300, 193px -274.6666666667px #0026ff, 97px -233.6666666667px #ff5e00, 60px -412.6666666667px #2bff00, 119px -73.6666666667px #6600ff, -163px -92.6666666667px #8c00ff, 145px -415.6666666667px #ffb300, -40px 29.3333333333px #bf00ff, -123px -167.6666666667px #ffa200, -143px 51.3333333333px #62ff00, -8px 76.3333333333px #ff9100, 239px -314.6666666667px #ff0095, -224px 52.3333333333px #bb00ff, 199px -318.6666666667px #00c4ff, -85px -349.6666666667px #fff200, -69px -121.6666666667px #c4ff00, -122px -332.6666666667px #c800ff, -188px 51.3333333333px #ff00a6, 41px -41.6666666667px #4800ff, -85px -93.6666666667px #00ff44;
  }
}
@-moz-keyframes bang {
  to {
    box-shadow: -99px -410.6666666667px #00ff84, 108px -119.6666666667px #48ff00, -177px -218.6666666667px #66ff00, 213px -123.6666666667px #ff0099, -102px -226.6666666667px #ffdd00, 81px -375.6666666667px #002bff, 204px -333.6666666667px #1500ff, 241px -241.6666666667px #7300ff, 135px -165.6666666667px #3cff00, -236px 38.3333333333px fuchsia, -181px -98.6666666667px #ff8000, 234px -87.6666666667px #ff8400, 166px -172.6666666667px #fff200, -167px 70.3333333333px #00ffa6, -16px 38.3333333333px #00ffbb, 57px 5.3333333333px #4dff00, 179px -342.6666666667px #9900ff, -242px -71.6666666667px #ff8000, -157px -99.6666666667px #ff1e00, 176px -322.6666666667px #3cff00, -197px -189.6666666667px #00eaff, -43px 21.3333333333px #51ff00, 238px -352.6666666667px #59ff00, 42px -352.6666666667px #6aff00, -58px -180.6666666667px #00ffea, -127px 42.3333333333px #0091ff, 197px -176.6666666667px #5e00ff, -68px -209.6666666667px #ff0d00, -243px -24.6666666667px #ff9500, 239px -265.6666666667px #ff002b, -152px -5.6666666667px #00ff95, 4px -134.6666666667px #ffb300, 193px -274.6666666667px #0026ff, 97px -233.6666666667px #ff5e00, 60px -412.6666666667px #2bff00, 119px -73.6666666667px #6600ff, -163px -92.6666666667px #8c00ff, 145px -415.6666666667px #ffb300, -40px 29.3333333333px #bf00ff, -123px -167.6666666667px #ffa200, -143px 51.3333333333px #62ff00, -8px 76.3333333333px #ff9100, 239px -314.6666666667px #ff0095, -224px 52.3333333333px #bb00ff, 199px -318.6666666667px #00c4ff, -85px -349.6666666667px #fff200, -69px -121.6666666667px #c4ff00, -122px -332.6666666667px #c800ff, -188px 51.3333333333px #ff00a6, 41px -41.6666666667px #4800ff, -85px -93.6666666667px #00ff44;
  }
}
@-o-keyframes bang {
  to {
    box-shadow: -99px -410.6666666667px #00ff84, 108px -119.6666666667px #48ff00, -177px -218.6666666667px #66ff00, 213px -123.6666666667px #ff0099, -102px -226.6666666667px #ffdd00, 81px -375.6666666667px #002bff, 204px -333.6666666667px #1500ff, 241px -241.6666666667px #7300ff, 135px -165.6666666667px #3cff00, -236px 38.3333333333px fuchsia, -181px -98.6666666667px #ff8000, 234px -87.6666666667px #ff8400, 166px -172.6666666667px #fff200, -167px 70.3333333333px #00ffa6, -16px 38.3333333333px #00ffbb, 57px 5.3333333333px #4dff00, 179px -342.6666666667px #9900ff, -242px -71.6666666667px #ff8000, -157px -99.6666666667px #ff1e00, 176px -322.6666666667px #3cff00, -197px -189.6666666667px #00eaff, -43px 21.3333333333px #51ff00, 238px -352.6666666667px #59ff00, 42px -352.6666666667px #6aff00, -58px -180.6666666667px #00ffea, -127px 42.3333333333px #0091ff, 197px -176.6666666667px #5e00ff, -68px -209.6666666667px #ff0d00, -243px -24.6666666667px #ff9500, 239px -265.6666666667px #ff002b, -152px -5.6666666667px #00ff95, 4px -134.6666666667px #ffb300, 193px -274.6666666667px #0026ff, 97px -233.6666666667px #ff5e00, 60px -412.6666666667px #2bff00, 119px -73.6666666667px #6600ff, -163px -92.6666666667px #8c00ff, 145px -415.6666666667px #ffb300, -40px 29.3333333333px #bf00ff, -123px -167.6666666667px #ffa200, -143px 51.3333333333px #62ff00, -8px 76.3333333333px #ff9100, 239px -314.6666666667px #ff0095, -224px 52.3333333333px #bb00ff, 199px -318.6666666667px #00c4ff, -85px -349.6666666667px #fff200, -69px -121.6666666667px #c4ff00, -122px -332.6666666667px #c800ff, -188px 51.3333333333px #ff00a6, 41px -41.6666666667px #4800ff, -85px -93.6666666667px #00ff44;
  }
}
@-ms-keyframes bang {
  to {
    box-shadow: -99px -410.6666666667px #00ff84, 108px -119.6666666667px #48ff00, -177px -218.6666666667px #66ff00, 213px -123.6666666667px #ff0099, -102px -226.6666666667px #ffdd00, 81px -375.6666666667px #002bff, 204px -333.6666666667px #1500ff, 241px -241.6666666667px #7300ff, 135px -165.6666666667px #3cff00, -236px 38.3333333333px fuchsia, -181px -98.6666666667px #ff8000, 234px -87.6666666667px #ff8400, 166px -172.6666666667px #fff200, -167px 70.3333333333px #00ffa6, -16px 38.3333333333px #00ffbb, 57px 5.3333333333px #4dff00, 179px -342.6666666667px #9900ff, -242px -71.6666666667px #ff8000, -157px -99.6666666667px #ff1e00, 176px -322.6666666667px #3cff00, -197px -189.6666666667px #00eaff, -43px 21.3333333333px #51ff00, 238px -352.6666666667px #59ff00, 42px -352.6666666667px #6aff00, -58px -180.6666666667px #00ffea, -127px 42.3333333333px #0091ff, 197px -176.6666666667px #5e00ff, -68px -209.6666666667px #ff0d00, -243px -24.6666666667px #ff9500, 239px -265.6666666667px #ff002b, -152px -5.6666666667px #00ff95, 4px -134.6666666667px #ffb300, 193px -274.6666666667px #0026ff, 97px -233.6666666667px #ff5e00, 60px -412.6666666667px #2bff00, 119px -73.6666666667px #6600ff, -163px -92.6666666667px #8c00ff, 145px -415.6666666667px #ffb300, -40px 29.3333333333px #bf00ff, -123px -167.6666666667px #ffa200, -143px 51.3333333333px #62ff00, -8px 76.3333333333px #ff9100, 239px -314.6666666667px #ff0095, -224px 52.3333333333px #bb00ff, 199px -318.6666666667px #00c4ff, -85px -349.6666666667px #fff200, -69px -121.6666666667px #c4ff00, -122px -332.6666666667px #c800ff, -188px 51.3333333333px #ff00a6, 41px -41.6666666667px #4800ff, -85px -93.6666666667px #00ff44;
  }
}
@keyframes bang {
  to {
    box-shadow: -99px -410.6666666667px #00ff84, 108px -119.6666666667px #48ff00, -177px -218.6666666667px #66ff00, 213px -123.6666666667px #ff0099, -102px -226.6666666667px #ffdd00, 81px -375.6666666667px #002bff, 204px -333.6666666667px #1500ff, 241px -241.6666666667px #7300ff, 135px -165.6666666667px #3cff00, -236px 38.3333333333px fuchsia, -181px -98.6666666667px #ff8000, 234px -87.6666666667px #ff8400, 166px -172.6666666667px #fff200, -167px 70.3333333333px #00ffa6, -16px 38.3333333333px #00ffbb, 57px 5.3333333333px #4dff00, 179px -342.6666666667px #9900ff, -242px -71.6666666667px #ff8000, -157px -99.6666666667px #ff1e00, 176px -322.6666666667px #3cff00, -197px -189.6666666667px #00eaff, -43px 21.3333333333px #51ff00, 238px -352.6666666667px #59ff00, 42px -352.6666666667px #6aff00, -58px -180.6666666667px #00ffea, -127px 42.3333333333px #0091ff, 197px -176.6666666667px #5e00ff, -68px -209.6666666667px #ff0d00, -243px -24.6666666667px #ff9500, 239px -265.6666666667px #ff002b, -152px -5.6666666667px #00ff95, 4px -134.6666666667px #ffb300, 193px -274.6666666667px #0026ff, 97px -233.6666666667px #ff5e00, 60px -412.6666666667px #2bff00, 119px -73.6666666667px #6600ff, -163px -92.6666666667px #8c00ff, 145px -415.6666666667px #ffb300, -40px 29.3333333333px #bf00ff, -123px -167.6666666667px #ffa200, -143px 51.3333333333px #62ff00, -8px 76.3333333333px #ff9100, 239px -314.6666666667px #ff0095, -224px 52.3333333333px #bb00ff, 199px -318.6666666667px #00c4ff, -85px -349.6666666667px #fff200, -69px -121.6666666667px #c4ff00, -122px -332.6666666667px #c800ff, -188px 51.3333333333px #ff00a6, 41px -41.6666666667px #4800ff, -85px -93.6666666667px #00ff44;
  }
}
@-webkit-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-moz-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-o-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-ms-keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@keyframes gravity {
  to {
    transform: translateY(200px);
    -moz-transform: translateY(200px);
    -webkit-transform: translateY(200px);
    -o-transform: translateY(200px);
    -ms-transform: translateY(200px);
    opacity: 0;
  }
}
@-webkit-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-moz-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-o-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@-ms-keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
@keyframes position {
  0%, 19.9% {
    margin-top: 10%;
    margin-left: 40%;
  }
  20%, 39.9% {
    margin-top: 40%;
    margin-left: 30%;
  }
  40%, 59.9% {
    margin-top: 20%;
    margin-left: 70%;
  }
  60%, 79.9% {
    margin-top: 30%;
    margin-left: 20%;
  }
  80%, 99.9% {
    margin-top: 30%;
    margin-left: 80%;
  }
}
    `];

    render() {
        return html`
        <div class="pyro">
  <div class="before"></div>
  <div class="after"></div>
</div>
        `;
    }
}
customElements.define('sparkle-element', SparkleElement);
