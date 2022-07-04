import { LitElement,css,html } from 'lit';

export class PulseElement extends LitElement {
    static styles = [css `
    html,body{background-color:#2b2a2a;}

.container {
  width: 200px;
  height: 100%;
  margin: 0 auto 0;
}

.pulse-button {

  position: relative;
  width: 100px;
  height: 100px;
  border: none;
  box-shadow: 0 0 0 0 rgba(232, 76, 61, 0.7);
  border-radius: 50%;
  background-color: #e84c3d;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/173024/jonathanlarradet_copy.png);
  background-size:cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover 
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(232, 76, 61, 0);}}
    
    `];

    render() {
        return html`
        <div align="center" style="margin-top:70px;">
<div class="container">
    <button class="pulse-button"></button>
</div>
</div>


<div align="center" style=" padding:5px; color:#ffffff; font-weight:300; font-size:30px; font-family:'Roboto';padding-top:20px;">PURE CSS <font style="font-weight:400;">PULSE BUTTON</font></div>
<a href="http://www.wifeo.com/code" style="text-decoration:none;" target="parent"><div align="center" style="  color:#ffffff; font-weight:300; font-size:20px; font-family:'Roboto';">www.wifeo.com/code</div></a>
        
        `;
    }
}
customElements.define('pulse-element', PulseElement);
