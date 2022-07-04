import { LitElement,css,html } from 'lit';

export class LabElement extends LitElement {
    static styles = [css ` 
    $base: #263238;
    $lite:  #FFF;
    $brand: #FF3D00;
    $size: 48px;
    
    *, *:after, *:before {
          box-sizing: border-box;
        }
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
      background: $base; 
    }
     
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: $brand; 
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #fff; 
    }
        body {
          margin: 0;
          padding-top: 50px;
          display: flex;
          flex-wrap: wrap;
          background: $base;
          font-family: Arial, Helvetica, sans-serif;
          &.pop {
            overflow: hidden;
          }
        }
        section {
          min-width: 200px;
          width: 33.33%;
          height: 200px;
          padding: 10px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          cursor: pointer;
          transition: 0.3s linear;
          &:nth-child(2n + 1){
            background: rgba(#000,0.1);
          }
          &:hover {
              background: rgba(#000,0.3) ;
          }
    
          @media (max-width: 768px ) {
             width: 50%;
          }
          @media (max-width: 480px) {
            width: 100%;
          }
    
        }
    
    header {
      background : #0d161b;
      padding:10px 20px;
      min-height: 50px;
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      display: flex;
      align-items: center;
      z-index: 2000;
      justify-content: space-between;
    }
    
    .brand {
      color: #fff;
      font-size: 32px;
      display: inline-block;
      position: relative;
      text-decoration:none;
      &::after{
        content: '';
        position: absolute;
        left: 20px;
        bottom: 5px;
        border: 3px solid $lite;
        border-bottom-color: $brand;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        animation: rotation 0.6s linear infinite;
      }
    }
    .nav-btn{
      color: #fff;
      text-decoration:none;
    }
    // Loaders
    
    .loader-1 {
        width : $size;
        height: $size;
        border: 5px solid $lite;
        border-bottom-color: $brand;
        border-radius: 50%;
        display: inline-block;
        animation: rotation 1s linear infinite;
      }
      
      .loader-2{
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          width:  $size - 8px;
          height:  $size - 8px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-bottom-color: $brand;
        }
      }
    
    
    
      .loader-3{
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          width:  $size + 8px;
          height:  $size + 8px;
          border-radius: 50%;
          border: 3px solid transparent;
          border-bottom-color: $brand;
        }
      }
      .loader-4{
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          width:  $size - 8px;
          height:  $size - 8px;
          border-radius: 50%;
          border: 3px solid ;
          border-color: $brand transparent;
        }
      }
      
      .loader-5{
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          width:  $size + 8px;
          height:  $size + 8px;
          border-radius: 50%;
          border: 3px solid ;
          border-color: $brand transparent;
        }
      }
      
    
     .loader-6 {
        width : $size;
        height: $size;
        border: 2px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after, &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: $brand;
          width:  $size/8;
          height:  $size/8;
          transform: translate(150%, 150%);
          border-radius: 50%;
        }
        &:before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
          transform: translate(-150%, -150%);
        }
      }
      
    
      .loader-7{
        width : $size;
        height: $size;
        border: 2px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after, &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: $brand;
          width:  $size/8;
          height:  $size/8;
          border-radius: 50%;
        }
        &:before {
          left: auto;
          top: auto;
          right: 0;
          bottom: 0;
        }
      }
    
      
      .loader-8 {
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: $brand;
          width:  $size/3;
          height:  $size/3;
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }
      }
      
      
      .loader-9 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 2px solid $brand;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 4px;
          top: 4px;
          border: 2px solid $lite;
          width:  $size/4;
          height:  $size/4;
          border-radius: 50%;
        }
      }
    
    
      
      .loader-10 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 3px solid;
        border-color: $lite  $lite transparent;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px solid;
          border-color: transparent $brand $brand;
          width:  $size/2;
          height:  $size/2;
          border-radius: 50%;
          animation: rotationBack 0.5s linear infinite;
          transform-origin: center center;
        }
      }
      
      .loader-11 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 3px solid;
        border-color: $lite $lite transparent transparent;
        animation: rotation 1s linear infinite;
        &:after , &:before{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px solid;
          border-color: transparent transparent $brand $brand;
          width:  $size - 8px;
          height:  $size - 8px;
          border-radius: 50%;
          animation: rotationBack 0.5s linear infinite;
          transform-origin: center center;
        }
        &:before{
          width:  $size - 16px;
          height:  $size - 16px;
          border-color:$lite $lite transparent transparent;
           animation: rotation 1.5s linear infinite;
        }
      }
      
      
      .loader-12 {
        width : $size;
        height: $size;
        border: 3px dotted $lite;
        border-style: solid solid dotted dotted;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 2s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 3px dotted $brand;
          border-style: solid solid dotted;
          width:  $size/2;
          height:  $size/2;
          border-radius: 50%;
          animation: rotationBack 1s linear infinite;
          transform-origin: center center;
        }
      }
      
      .loader-13 {
        width : $size;
        height: $size;
        border: 2px solid $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          background: $brand;
          width:  3px;
          height:  $size/2;
         transform: translateX(-50%);
        }
      }
    
    
    .loader-14 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border-radius: 50%;
          border:2px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: animloader14 2s linear infinite;
        }
        &::after {
          animation-delay: 1s;
        }
      }
      
      .loader-15 {
        width : $size;
        height: $size;
        border: 5px dotted $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 2s linear infinite;
      }
    
    
    
      
      .loader-16{
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background: linear-gradient(0deg, rgba($brand,0.2) 33%, rgba($brand,1) 100%);
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50% , -50%);
          width : $size - 4px;
          height: $size - 4px;
          border-radius: 50%;
          background: $base
        }
      }
    
    
      .loader-17{
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        border-top:3px solid $lite;
        border-right:3px solid transparent;
        animation: rotation 1s linear infinite;
      }
    
    
    
      .loader-18{
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        border-top:4px solid $lite;
        border-right:4px solid transparent;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width : $size;
          height: $size;
          border-radius: 50%;
          border-bottom:4px solid $brand;
          border-left:4px solid transparent;
        }
      }
    
      .loader-19{
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        border-top:4px solid $lite;
        border-right:4px solid transparent;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width : $size;
          height: $size;
          border-radius: 50%;
          border-left:4px solid $brand;
          border-bottom:4px solid transparent;
          animation: rotation 0.5s linear infinite reverse;
        }
      }
    
      .loader-20 {
        width : $size;
        height: $size;
        border: 5px solid;
        border-color: $brand transparent;
        border-radius: 50%;
        display: inline-block;
        animation: rotation 1s linear infinite;
      }
    
        .loader-21 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 10px solid ;
        border-color: rgba($lite, 0.15)  rgba($lite, 0.25)  rgba($lite, 0.35)  rgba($lite, 0.5);
        animation: rotation 1s linear infinite;
      }
    
      .loader-22 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: 10px solid ;
        animation: animloader51 1s linear infinite alternate;
      }
    
      
      .loader-23 {
        width : $size;
        height: $size;
        border: 3px solid $lite;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 20px;
          top: 31px;
          border: 10px solid transparent;
          border-right-color: $lite;
          transform: rotate(-40deg);
        }
      }
      
      .loader-24 {
        width : $size;
        height: $size;
        border-width: 3px;
        border-style: dashed solid  solid dotted;
        border-color: $brand $brand transparent $brand;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 20px;
          top: 31px;
          border: 10px solid transparent;
          border-right-color: $brand;
          transform: rotate(-40deg);
        }
      }
    
      .loader-25 {
        width : $size;
        height: $size;
        background: $lite;
        display: inline-block;
        border-radius: 50%;
        animation: animloader14 1s ease-in infinite;
      }
    
      .loader-26 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border-radius: 50%;
          background: $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: animloader14 2s linear infinite;
        }
        &::after {
          animation-delay: 1s;
        }
      }
    
      .loader-27 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border-radius: 50%;
          background: $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: animloader27 2s ease-in-out infinite;
        }
        &::after {
          animation-delay: 1s;
        }
      }
      .loader-28 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        animation: animloader28 1s linear infinite;
      }
    
    .loader-29 {
        border:$size/2 solid $lite;
        border-bottom-color: $brand;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
      }
    
    .loader-30 {
        border:2px solid $lite;
        width : $size;
        height: $size;
        background: $brand;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 2s linear infinite;
         &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          border: $size/2 solid;
          border-color: transparent $lite;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }
    
    
    .loader-31 {
        width : $size;
        height: $size;
        background: $lite;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after {
          content: '';
          position: absolute;
          left: 6px;
          top: 10px;
          width : $size/4;
          height: $size/4;
          color: $brand;
          background: currentColor;
          border-radius: 50%;
          box-shadow: 25px 2px, 10px 22px;
        }
      }
      
      .loader-32 {
        width : $size;
        height: $size;
        border: 4px solid ;
        background:rgba($lite, 0.2) ;
        border-color: transparent  $lite $lite transparent;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s ease-in-out infinite;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          border : $size/4 solid;
          border-color: transparent $brand $brand transparent;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }
    
    .loader-33 {
        border:2px solid;
        border-color: transparent $lite;
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 2s linear infinite;
         &:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          border: $size/2 solid;
          border-color: transparent rgba($lite, 0.15);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }
    
    .loader-34 {
        border: $size/2 solid ;
        border-color: rgba($lite, 0.15)  rgba($lite, 0.25)  rgba($lite, 0.35)  rgba($lite, 0.5);
        border-radius: 50%;
        display: inline-block;
        animation: animloader34 1s linear infinite;
      }
    
      .loader-35 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: rotation 1s linear infinite;
        &:after , &:before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: $brand;
          width:  $size/3;
          height:  $size/3;
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }
        &:before{
          left: auto;
          right: 0;
          background: $lite;
          transform: translate(50%, 100%);
        }
      }
    
      .loader-36 {
        width : $size;
        height: $size;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        animation: zeroRotation 1s linear infinite alternate;
        &:after , &:before{
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          background: $brand;
          width:  $size/3;
          height:  $size/3;
          transform: translate(-50%, 50%);
          border-radius: 50%;
        }
        &:before{
          left: auto;
          right: 0;
          transform: translate(50%, 100%);
        }
      }
    
    
      .loader-37 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        color: $lite;
        animation: rotation 1s linear infinite;
        &:after, &:before {
          content: '';
          position: absolute;
          width: $size / 2;
          height: $size / 2;
          top: 0;
          background-color: $lite;
          border-radius: 50%;
          animation: scale50 1s infinite ease-in-out;
        }
        &:before {
          top: auto;
          bottom: 0;
          background-color: $brand;
          animation-delay: 0.5s;
        }
      }
      
      .loader-38 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        color: $lite;
        animation: rotation 1s linear infinite;
        &:after, &:before {
          content: '';
          position: absolute;
          width: $size / 2;
          height: $size / 2;
          top: 50%;
          left: 50%;
          transform: scale(0.5) translate(0 , 0);
          background-color: $lite;
          border-radius: 50%;
          animation: animloader38 1s infinite ease-in-out;
        }
        &:before {
          background-color: $brand;
          transform: scale(0.5) translate( -$size , -$size);
        }
      }
      
    
      .loader-39 {
        width : $size/3;
        height: $size/3;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background: $lite;
        animation: shadowExpandX 2s linear infinite alternate;
      }
    
    
      .loader-40 {
        width : $size/3;
        height: $size/3;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background: $lite;
        box-shadow:  -$size/2 0 $lite, $size/2 0 $lite;
        animation: shadowPulse 2s linear infinite;
      }
    
    
      .loader-41 {
        width : $size/3;
        height: $size/3;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        background: $brand;
        color:$lite; 
        box-shadow: -$size/2 0, $size/2 0;
        animation: rotation 2s ease-in-out infinite;
      }
    
      .loader-42 {
        width : $size/4;
        height: $size/4;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        color: $lite;
        animation: animloader42 1s linear infinite alternate;
      }
    
    
    
      .loader-43 {
        width : 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        color: $lite;
        left: -100px;
        animation: shadowRolling 2s linear infinite;
      }
      
      .loader-44 {
        width : $size/4;
        height: $size/4;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        color: $lite;
        animation: animloader44 2s linear infinite;
      }
      
      .loader-45 {
        width : $size/4;
        height: $size/4;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        color: $lite;
        animation: animloader45 1s linear infinite alternate;
      }
    
      .loader-46 {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        &::after {
          content: '';
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
          left: 0;
          transform: translate(-50%, 100%);
          animation: animloader46 1s linear infinite ;
          top: 0;
        }
      }
    
    
      
      .loader-47 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border:2px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: rotation 2s ease-in-out infinite;
        }
        &::after {
          border-color: $brand;
          animation-delay: 1s;
        }
      }
      .loader-48 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border:4px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: animloader14 2s ease-in-out infinite;
        }
        &::after {
          border-color: $brand;
          animation-delay: 1s;
        }
      }
      .loader-49 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border:2px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: rotation 2s ease-in-out infinite alternate;
        }
        &::after {
          border-color: $brand;
          animation-direction: alternate-reverse;
        }
      }
    
      .loader-50 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border:2px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: scaleOut 2s ease-in-out infinite;
        }
        &::after {
          border-color: $brand;
          animation-delay: 1s;
        }
      }
      .loader-51 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after , &::before {
          content: '';
          width : $size;
          height: $size;
          border:2px solid $lite;
          position: absolute;
          left:0;
          top: 0;
          animation: rotationBreak 3s ease-in-out infinite alternate;
        }
        &::after {
          border-color: $brand;
          animation-direction: alternate-reverse;
        }
      }
    
    
      .loader-52{
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        border: 2px solid $lite;
        animation: rotation 2s linear infinite;
        &:after , &:before{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          border: 2px solid $brand;
          width:  $size - 10px;
          height:  $size - 10px;
          animation: rotationBack 1.5s linear infinite ;
          transform-origin: center center;
        }
        &:before{
          width:  $size - 20px;
          height:  $size - 20px;
          border-color:$lite;
           animation: rotation 1s linear infinite;
        }
      }
    
      .loader-53 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        background: $lite;
        animation: flipX 1s linear infinite;
      }
      .loader-54 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        color: $lite;
        border: 1px solid;
        animation: fill 2s linear infinite alternate;
      }
      .loader-55 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        background: $lite;
        animation: zeroRotation 1s ease infinite alternate-reverse;
      }
      .loader-56 {
        width : $size/2;
        height: $size/2;
        display: inline-block;
        position: relative;
        background: $lite;
        animation: animloader56 2s linear infinite;
      }
    
      .loader-57 {
        width: $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after {
            content: '';
            width: $size/2;
            height: $size/2;
            position: absolute;
            left: 0;
            top: 0;
            background: $lite;
            color: $lite;
            animation: animloader57 2s linear infinite alternate;
        }
      }
    
      
      .loader-58 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::before {
          content: '';
          width : $size/2;
          height: $size/2;
          position: absolute;
          left: 0;
          top: -($size/2);
          animation: animloader58 2s linear infinite alternate;
        }
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width : $size/2;
          height: $size/2;
          background: rgba($lite, 0.85);
          box-shadow:0 0 10px rgba(0, 0, 0, 0.15);
          animation: animloader58m 2s linear infinite alternate;
        }
      }
      .loader-59 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        transform: rotate(45deg);
        &::before {
          content: '';
          width : $size/2;
          height: $size/2;
          position: absolute;
          left: 0;
          top: -($size/2);
          animation: animloader59 4s ease infinite;
        }
        &::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width : $size/2;
          height: $size/2;
          background: rgba($lite, 0.85);
          box-shadow:0 0 10px rgba(0, 0, 0, 0.15);
          animation: animloader56 2s ease infinite;
        }
      }
    
    
      .loader-60 {
        width: $size/3;
        height: $size/3;
        box-shadow: 0 30px, 0 -30px;
        border-radius: 4px;
        background:  currentColor;
        display: inline-block;
        position: relative;
        color: $lite;
        left: -30px;
        animation: animloader60 2s ease infinite;
         &::after , &::before {
          content: '';
          width: $size/3;
          height: $size/3;
          box-shadow: 0 30px, 0 -30px;
          border-radius: 4px;
          background:  currentColor;
          color: $lite;
          position: absolute;
          left: 30px;
          top: 0;
          animation: animloader60 2s 0.2s ease infinite;
        }
        &::before {
          animation-delay: 0.4s;
          left: 60px;
        }
      }
    
    
    [data-index="61"]{
        align-items: normal;
        padding-top: 75px;
    }
    
    .loader-61 {
        width: $size / 6;
        height: 40px;
        border-radius: 4px;
        display: inline-block;
        position: relative;
        background: currentColor;
        color: $lite;
        animation: animloader61m 0.3s 0.3s linear infinite alternate;
        &::after , &::before {
            content: '';
            width: $size / 6;
            height: 40px;
            border-radius: 4px;
            background: currentColor;
            position: absolute;
            bottom: 0;
            left: 20px;
            animation: animloader61 0.3s  0.45s  linear infinite alternate;
        }
        &::before {
            left: -20px;
            animation-delay: 0s;
        }
      }
    
    
    .loader-62 {
        width: $size / 6;
        height: 40px;
        border-radius: 4px;
        display: inline-block;
        position: relative;
        background: currentColor;
        color: $lite;
        animation: animloader61 0.3s 0.3s linear infinite alternate;
        &::after , &::before {
            content: '';
            width: $size / 6;
            height: 40px;
            border-radius: 4px;
            background: currentColor;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 20px;
            animation: animloader61 0.3s  0.45s  linear infinite alternate;
        }
        &::before {
            left: -20px;
            animation-delay: 0s;
        }
      }
    
      .loader-63 {
        width: $size / 6;
        height: $size;
        display: inline-block;
        position: relative;
        border-radius: 4px;
        left: -40px;
        animation: animloader63 1s linear infinite alternate;
      }
       .loader-64 {
          width: $size / 6;
          height: $size;
          display: inline-block;
          position: relative;
          border-radius: 4px;
          left: -60px;
          color: $lite;
          animation: animloader64 0.6s linear infinite ;
        }
        .loader-65 {
          width: $size;
          height: $size / 8;
          display: inline-block;
          position: relative;
          border-radius: 4px;
          top: -50px;
          color: $lite;
          animation: animloader65 0.6s linear infinite ;
        }
    
    
    
    [data-index="66"]  {
        justify-content: normal;
        padding-left: 15%;
    }
    
      .loader-66 {
        width: $size/10;
        height: $size / 10;
        display: inline-block;
        position: relative;
        border-radius: 4px;
        color: $lite;
        background:  currentColor;
        animation: animloader66 0.3s 0.3s linear infinite alternate;
        &::after , &::before {
          content: '';
          width: $size/10;
          height: $size / 10;
          border-radius: 4px;
          background:  currentColor;
          position: absolute;
          left: 0;
          top: 15px;
          animation: animloader66 0.3s 0.45s linear infinite alternate;
        }
         &::after {
           top: -15px;
           animation-delay: 0s;
         }
      }
    
    
      .loader-67 {
        width: $size/10;
        height: $size/10;
        display: inline-block;
        position: relative;
        border-radius: 4px;
        color: $lite;
        background:  currentColor;
         animation: animloader66 0.3s 0.3s linear infinite alternate;
        &::after , &::before {
          content: '';
          width: $size/10;
          height: $size / 10;
          border-radius: 4px;
          background:  currentColor;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 15px;
          animation: animloader66 0.3s 0.45s linear infinite alternate;
        }
         &::after {
           top: -15px;
           animation-delay: 0s;
         }
      }
    
    
      .loader-68 {
        width: $size / 6;
        height: $size;
        display: inline-block;
        position: relative;
        border-radius: 4px;
        left: -100px;
        animation: animloader68 1s linear infinite alternate;
      }
    
    
      .loader-69 {
          width: 20px;
          height: $size / 4;
          display: inline-block;
          position: relative;
          border-radius: 4px;
          color: $lite;
          background: currentColor;
          animation: animloader69 0.6s 0.3s ease infinite alternate;
    
          &::after, &::before {
            content: '';
            width: 20px;
            height: $size / 4;
            background: currentColor;
            position: absolute;
            border-radius: 4px;
            top: 0;
            right: 110%;
             animation: animloader69  0.6s ease infinite alternate;
          }
          &::after {
            left: 110%;
            right: auto;
            animation-delay: 0.6s;
          }
        }
    
    
    
    
    
    
    
        
      .loader-70 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          position: relative;
          background: rgba($lite, 0.15);
          overflow: hidden;
          &::after {
            content: '';
            width: $size * 2;
            height: $size / 10;
            background: $lite;
            position: absolute;
            top: 0;
            left: 0;
            animation: hitZak 1s linear infinite alternate;
            
          }
      }
    
      .loader-71 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          position: relative;
          background: rgba($lite, 0.15);
          overflow: hidden;
          &::after {
            content: '';
            width: $size * 4;
            height: $size / 10;
            background: $lite;
            position: absolute;
            top: 0;
            left: 0;
            animation: animloader71 2s linear infinite;
            
          }
      }
      .loader-72 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          position: relative;
          background: rgba($lite, 0.15);
          overflow: hidden;
          &::after {
            content: '';
            width: 0;
            height: $size / 10;
            background: $lite;
            position: absolute;
            top: 0;
            left: 0;
            animation: animFw 10s linear infinite;
            
          }
      }
    [data-index="73"]{
        justify-content: normal;
      }
      .loader-73 {
          width:0;
          height: $size / 10;
          display: inline-block;
          position: relative;
          background: $lite;
          box-shadow: 0 0 10px rgba($lite, 0.5);
          animation: animFw 8s linear infinite;
          &::after , &::before {
            content: '';
            width: 10px;
            height: 1px;
            background: $lite;
            position: absolute;
            top: 9px;
            right: -2px;
            opacity: 0;
            transform: rotate(-45deg)  translateX(0px);
            animation: coli1 0.3s linear infinite;
          }
          &::before {
            top: -4px;
            transform: rotate(45deg);
            animation: coli2 0.3s linear infinite;
          }
      }
      
      .loader-74 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          position: relative;
          overflow: hidden;
          &::after {
            content: '';
            width: $size * 2;
            height: $size / 10;
            background: $lite;
            position: absolute;
            top: 0;
            left: 0;
            animation: hitZak 0.6s ease-in-out infinite alternate;
            
          }
      }
      
      .loader-75 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          background: rgba($lite, 0.15);
          position: relative;
          overflow: hidden;
          &::after {
            content: '';
            width: 0%;
            height: $size / 10;
            background-color: $lite;
            background-image: linear-gradient(45deg,rgba(black,0.25) 25%,
                                transparent 25%,transparent 50%,rgba(black,0.25) 50%,
                                rgba(black,0.25) 75%,transparent 75%,transparent);
            background-size: 15px 15px;
            position: absolute;
            top: 0;
            left: 0;
            animation: animFw 6s ease-in infinite;
            
          }
    }
      .loader-76 {
          width: 100%;
          height: $size / 10;
          display: inline-block;
          background: rgba($lite, 0.15);
          position: relative;
          overflow: hidden;
          &::after {
            content: '';
            width: 0%;
            height: $size / 10;
            background-color: $lite;
            font-size: 15px;
            background-image: linear-gradient(45deg,rgba(black,0.25) 25%,
                                transparent 25%,transparent 50%,rgba(black,0.25) 50%,
                                rgba(black,0.25) 75%,transparent 75%,transparent);
            background-size: 1em 1em ;
            position: absolute;
            top: 0;
            left: 0;
            animation: animFw 10s ease-in infinite,  barStripe 1s linear infinite;
            
          }
      }
      .loader-77 {
          width: 100%;
          height: $size / 6;
          display: inline-block;
          position: relative;
          overflow: hidden;
          &::before {
            content: '';
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba($lite, 0.15);
            background-image: linear-gradient(45deg,rgba(black,0.25) 25%,
                              transparent 25%,transparent 50%,rgba(black,0.25) 50%,
                              rgba(black,0.25) 75%,transparent 75%,transparent);
            background-size: 15px 15px;
            z-index: 10;
          }
          &::after {
            content: '';
            width: 0%;
            height:100%;
            background-color: $lite;
            position: absolute;
            border-radius: 0 4px 4px 0;
            top: 0;
            left: 0;
            animation: animFw 10s ease-in infinite;
            
          }
      }
    
    .loader-78 {
      width: 100%;
      height: $size / 4;
      display: inline-block;
      background-color: $lite;
      background-image: linear-gradient(45deg,rgba(black,0.25) 25%,
                          transparent 25%,transparent 50%,rgba(black,0.25) 50%,
                          rgba(black,0.25) 75%,transparent 75%,transparent);
      font-size: 30px;
      background-size: 1em 1em;
      animation:  barStripe 1s linear infinite;
    }
    
    .loader-79 {
      width:  $size * 2;
      height: $size / 3;
      display: inline-block;
      background-color: $lite;
      border: 1px solid  $lite;
      border-radius: 4px;
      background-image: linear-gradient(45deg,rgba(black,0.25) 25%,
                          transparent 25%,transparent 50%,rgba(black,0.25) 50%,
                          rgba(black,0.25) 75%,transparent 75%,transparent);
      font-size: 30px;
      background-size: 1em 1em;
      animation:  barStripe 1s linear infinite;
    }
    
    .loader-80 {
      width:  $size * 2;
      height: $size / 2;
      display: inline-block;
      background-color: $lite;
      border: 1px solid  $lite;
      border-radius: 4px;
      background: linear-gradient(45deg, transparent 49%, 
                                    $lite 50%, $lite 50%, transparent 51%, 
                                    transparent),
                                    linear-gradient(-45deg, transparent 49%,
                                    $lite 50%, $lite 50%, transparent 51%, transparent);
      font-size: 15px;
      background-size: 1em 1em;
      animation:  barStripe 0.6s linear infinite;
    }
    .loader-81 {
        width: 130px;
        height: 48px;
        display: inline-block;
        background: linear-gradient(45deg, #000 25%, transparent 25%,transparent 75%, #000 75%, #000 100%), linear-gradient(45deg, #000 25%, white 25%,white 75%, #000 75%, #000 100%);
        font-size: 10px;
        background-size: 32px 32px;
        animation:  raceBoard 0.6s linear infinite;
        background-position: 0 0, 16px 16px;
    }
    
    
      .loader-82 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        background-color: $lite;
        background: radial-gradient(ellipse at center, $brand 0%,$brand 14%,$lite 15%, $lite 100%);
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        &::after, &::before {
          content: '';
          position: absolute;
          height: 16px;
          width: 4px;
          background: $brand;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) rotate(0deg);
          transform-origin: 25% 0 ;
          animation: rotation 10s linear infinite ;
        }
        &::before {
          height: 22px;
          width: 2px;
          transform: translateX(-50%) rotate(0deg);
          animation-duration: 1s;
        }
      }
    
      
    .loader-83 {
        width: 175px;
        height: 80px;
        position: relative;
    
         &::before  {
          content: '';
          left: 60px;
          bottom: 18px;
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: $lite;
          background-image: 
                radial-gradient(circle 8px at 18px 18px,  $base 100%, transparent 0), 
                radial-gradient(circle 4px at 18px 0px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 0px 18px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 36px 18px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 18px 36px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 30px 5px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 30px 5px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 30px 30px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 5px 30px,  $base 100%, transparent 0),
                radial-gradient(circle 4px at 5px 5px,  $base 100%, transparent 0);
          background-repeat: no-repeat;
          animation: rotationBack 3s linear infinite;
        }
         &::after {
          content: '';
          left: 94px;
          bottom: 15px;
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color:  $lite;
          background-image: 
                radial-gradient(circle 5px at 12px 12px,  $base 100%, transparent 0), 
                radial-gradient(circle 2.5px at 12px 0px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 0px 12px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 24px 12px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 12px 24px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 3px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 3px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 20px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 3px 20px,  $base 100%, transparent 0),
                radial-gradient(circle 2.5px at 3px 3px,  $base 100%, transparent 0);
          background-repeat: no-repeat;
          animation: rotationBack 4s linear infinite reverse;
        }
    }
    
    .loader-84 {
        width: 15px;
        height: 20px;
        background: $lite;
        display: inline-block;
        position: relative;
        animation: bump 0.4s ease-in infinite alternate;
        &::after {
            content: '';
            left: 50%;
            top: 100%;
            transform: translate(-50%, 0);
            position: absolute;
            border: 15px solid transparent;
            border-top-color: $lite;
        }
      }
      .loader-85 {
        width: 15px;
        height: 20px;
        background: $lite;
        display: inline-block;
        position: relative;
        animation: bump 0.4s linear infinite alternate;
        &::after {
            content: '';
            left: 50%;
            bottom: 100%;
            transform: translate(-50%, 0);
            position: absolute;
            border: 15px solid transparent;
            border-bottom-color: $lite;
        }
      }
    
    
      .loader-86 {
        width: $size;
        height: $size/4;
        background: $lite;
        display: inline-block;
        position: relative;
        &::after {
            content: '';
            left: 50%;
            bottom: 0;
            transform: translate(-50%, 0);
            position: absolute;
            border: 15px solid transparent;
            border-top-color: $lite;
            animation: bump 0.4s ease-in-out infinite alternate;
        }
        &::before {
            content: '';
            left: 50%;
            bottom: 25px;
            transform: translate(-50%, 0);
            position: absolute;
            width: 15px;
            height: 20px;
            background: $lite;
            animation: bump 0.4s ease-in-out infinite alternate;
        
        }
      }
    
      .loader-87 {
        width: $size;
        height: $size/4;
        background: $lite;
        display: inline-block;
        position: relative;
        &::after {
            content: '';
            left: 50%;
            top: -47px;
            transform: translate(-50%, 0);
            position: absolute;
            border: 15px solid transparent;
            border-bottom-color: $lite;
            animation: bump 0.4s ease-in-out infinite alternate;
        }
        &::before {
            content: '';
            left: 50%;
            bottom: 15px;
            transform: translate(-50%, 0);
            position: absolute;
            width: 15px;
            height: 20px;
            background: $lite;
            animation: bump 0.4s ease-in-out infinite alternate;
        
        }
      }
    
    
      .loader-88 {
        width : $size;
        height: $size/2;
        display: inline-block;
        position: relative;
        color: $lite;
        border:1px solid;
        animation: fillX 2s linear infinite;
        &::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          background: $lite;
          width: 5px;
          height: 12px;
        }
      }
      .loader-89 {
        width : $size;
        height: $size/2;
        display: inline-block;
        position: relative;
        border:1px solid $lite;
        &::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border:1px solid $lite;
          width: 5px;
          height: 12px;
        }
        &::before {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          height: 80%;
          width: 6px;
          animation: animloader89  2s linear infinite;
        }
      }
    
      .loader-90 {
        width : $size;
        height: $size;
        display: inline-block;
        position: relative;
        border: 4px solid $lite;
        animation: fill 2s linear infinite alternate;
        color: rgba($brand, 0.9);
        border-radius: 0 0 4px 4px;
        &::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid $lite;
          width: 20px;
          height: 25px;
          border-radius: 0 4px 4px 0;
        }
      }
    
      .loader-91 {
        width : $size/ 1.5;
        height: $size * 1.5;
        display: inline-block;
        position: relative;
        border: 2px solid $lite;
        animation: animloader91 2s linear infinite alternate;
        color: $brand;
        border-radius: 0 0 4px 4px;
        transform: perspective(140px) rotateX(-45deg);
      }
    
      .loader-92 {
        width: 48px;
        height: 40px;
        display: inline-block;
        position: relative;
        background: $lite;
        border-radius: 15% 15% 35% 35%;
        &::after {
          content: '';
          position: absolute;
          left: 45px;
          top: 8px;
          border: 4px solid $lite;
          width: 16px;
          height: 20px;
          border-radius: 0 4px 4px 0;
        }
        &::before {
          content: '';
          position: absolute;
          width: 1px;
          height: 10px;
          color: $lite;
          top: -15px;
          left: 11px;
          animation: animloader92 1s ease infinite;
        }
      }
      .loader-93 {
        width: $size * 2;
        height: $size;
        display: inline-block;
        position: relative;
        background: $lite;
        border-radius: $size $size 0 0;
        overflow: hidden;
        &::after {
          content: '';
          position: absolute;
          width: $size /2;
          height: $size /4;
          border-radius: $size/2 $size/2 0 0;
          background: $brand;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
        &::before {
          content: '';
          position: absolute;
          width: 4px;
          height: $size / 1.5;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 0;
          background: $brand;
          transform-origin: 50% 100%;
          animation: animloader93 2s linear infinite alternate;
        }
      }
      .loader-94 {
        width: $size;
        height: $size;
        display: inline-block;
        position: relative;
        border:3px solid $lite;
        border-radius: 50%;
        animation: animloader94 2s linear infinite;
        &::after {
            content: '';
            width: 6px;
            height: 24px;
            background:$lite;
            transform: rotate(-45deg);
            position: absolute;
            bottom: -20px;
            left: 46px;
        }
      }
      .loader-95 {
        width: $size;
        height: $size;
        display: inline-block;
        position: relative;
        &::after {
            content: '';
            width: $size;
            height: $size;
            left: 0;
            bottom: 0;
            position: absolute;
            border-radius: 50% 50% 0;
            border: 15px solid $lite;
            transform: rotate(45deg) translate(0 , 0);
            animation: animMarker 0.4s ease-in-out infinite alternate;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: 150%;
            width: $size / 2;
            height: 4px;
            border-radius: 50%;
            background: rgba(0, 0,0,0.2);
            animation: animShadow 0.4s ease-in-out infinite alternate;
        
        }
      }
    
    
      
      .loader-96 {
        width: $size;
        height: $size;
        background: $brand;
        display: inline-block;
        position: relative;
        animation: rotationBack 1s ease-in-out infinite reverse;
        &::before  {
            content: '';
            left: 0;
            top: 0;
            transform: rotate(45deg);
            position: absolute;
            width: $size;
            height: $size;
            background: $brand;
            box-shadow: 0 0 5px rgba(0, 0,0,0.15);
        }
        &::after {
            content: '';
            width : $size/1.5;
            height: $size/1.5;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            top: 50%;
            background: $lite;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 5px rgba(0, 0,0,0.15);
        }
      }
    
    
      .loader-97 {
        width: $size *1.25;
        height:  $size *1.25;
        display: inline-block;
        position: relative;
        background: radial-gradient(ellipse at center, $lite 69%, rgba(0, 0, 0, 0) 70%),
        linear-gradient(to right, rgba(0,0,0,0) 47%,$lite 48%, $lite 52%,rgba(0,0,0,0) 53%);
        background-size: 20px 20px , 20px auto;
        background-repeat: repeat-x;
        background-position: center bottom, center -5px;
    
        &::before, &::after {
            content: '';
            position: absolute;
            left: -20px;
            top: 0;
            width:20px;
            height:  $size *1.25;
            background: radial-gradient(ellipse at center, $lite 69%, rgba(0, 0, 0, 0) 70%),
            linear-gradient(to right, rgba(0,0,0,0) 47%,$lite 48%, $lite 52%,rgba(0,0,0,0) 53%);
            background-size: 20px 20px , 20px auto;
            background-repeat: no-repeat;
            background-position: center bottom, center -5px;
            transform: rotate(0deg);
            transform-origin: 50% 0%;
            animation: animPend 1s linear infinite alternate;
        }
        &::after {
            animation: animPend2 1s linear infinite alternate;
            left: 100%;
        }
      }
    
    
    .loader-98 {
        width: 24px;
        height: 80px;
        border: 1px solid $lite;
        border-radius: 0 0 50px 50px;
        position: relative;
        box-shadow: 0px 0px $brand inset;
        background-image:  linear-gradient($brand 100px, transparent 0);
        background-position: 0px 0px;
        background-size: 22px 80px;
        background-repeat: no-repeat;
        animation: animloader98 6s linear infinite;
        &::after {
          content: '';
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          border: 1px solid $lite;
          border-radius: 50%;
          width: 28px;
          height: 6px;
        }
        &::before {
          content: '';
          left: 0;
          bottom: -4px;
          border-radius: 50%;
          position: absolute;
          width: 6px;
          height: 6px;
          animation: animloader98s 6s linear infinite;
        }
    }
    .loader-99 {
      width: 20px;
      height: 20px;
      margin-top: 80px;
      border-radius: 50%;
      background: $brand;
      border: 5px solid $lite;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);
        width: 8px;
        height: 80px;
        border: 2px solid $lite;
        border-bottom: none;
        background: $lite;
        color:  $brand;
        border-radius: 50px 50px 0 0;
        box-shadow: 0px 0px  inset;
        animation: animloader99 6s linear infinite;
      }
    }
    
    
    
    
    .loader-100 {
        width: 180px;
        height: 140px;
        background-image: radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0),
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 15px at 15px 15px, $lite 100%, transparent 0),
                          linear-gradient($lite 50px, transparent 0);
        background-size: 50px 50px, 100px 75px, 50px 50px, 30px 32px, 136px 20px;
        background-repeat: no-repeat;
        background-position: 0px 30px, 30px 0px, 113px 29px, 147px 50px, 23px 60px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 2px;
          top: 65px;
          width: 2px;
          height: 6px;
          color: $lite;
          animation: animloader100 0.6s linear infinite ;
        }
    }
    
    .loader-101 {
        width: 175px;
        height: 80px;
        background-image: radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0), 
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          linear-gradient($lite 50px, transparent 0);
        background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
        background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
        background-repeat: no-repeat;
        position: relative;
    
        &::after {
          content: '';
          left: 50%;
          bottom: 0;
          transform: translate(-50%, 0);
          position: absolute;
          border: 15px solid transparent;
          border-top-color: $brand;
          animation: fadePush 1s linear infinite ;
        }
        &::before {
          content: '';
          left: 50%;
          bottom: 30px;
          transform: translate(-50%, 0);
          position: absolute;
          width: 15px;
          height: 15px;
          background: $brand;
          animation: fadePush 1s linear infinite ;
        }
    }
    
    .loader-102 {
        width: 175px;
        height: 80px;
        background-image: radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0), 
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          linear-gradient($lite 50px, transparent 0);
        background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
        background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
        background-repeat: no-repeat;
        position: relative;
    
        &::after {
          content: '';
          left: 50%;
          bottom: 30px;
          transform: translate(-50%, 0);
          position: absolute;
          border: 15px solid transparent;
          border-bottom-color: $brand;
          animation: fadePull 1s linear infinite;
        }
        &::before {
          content: '';
          left: 50%;
          bottom: 15px;
          transform: translate(-50%, 0);
          position: absolute;
          width: 15px;
          height: 15px;
          background: $brand;
          animation: fadePull 1s linear infinite;
        }
    }
    
    .loader-103 {
        width: 175px;
        height: 80px;
        background-image: radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0), 
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          linear-gradient($lite 50px, transparent 0);
        background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
        background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
        background-repeat: no-repeat;
        position: relative;
    
        &::after {
          content: '';
          left: 0;
          right: 0;
          margin: auto;
          bottom: 20px;
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 5px solid transparent;
          border-color: $brand transparent;
          animation: rotation 1s linear infinite;
        }
    }
    .loader-104 {
        width: 175px;
        height: 80px;
        background-image: radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0), 
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          linear-gradient($lite 50px, transparent 0);
        background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
        background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
        background-repeat: no-repeat;
        position: relative;
    
         &::before  {
          content: '';
          left: 60px;
          bottom: 18px;
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: $brand;
          background-image: 
                radial-gradient(circle 8px at 18px 18px,  $lite 100%, transparent 0), 
                radial-gradient(circle 4px at 18px 0px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 0px 18px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 36px 18px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 18px 36px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 30px 5px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 30px 5px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 30px 30px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 5px 30px,  $lite 100%, transparent 0),
                radial-gradient(circle 4px at 5px 5px,  $lite 100%, transparent 0);
          background-repeat: no-repeat;
          animation: rotationBack 3s linear infinite;
        }
         &::after {
          content: '';
          left: 94px;
          bottom: 15px;
          position: absolute;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: $brand;
          background-image: 
                radial-gradient(circle 5px at 12px 12px,  $lite 100%, transparent 0), 
                radial-gradient(circle 2.5px at 12px 0px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 0px 12px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 24px 12px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 12px 24px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 3px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 3px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 20px 20px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 3px 20px,  $lite 100%, transparent 0),
                radial-gradient(circle 2.5px at 3px 3px,  $lite 100%, transparent 0);
          background-repeat: no-repeat;
          animation: rotationBack 4s linear infinite reverse;
        }
    }
    
    
    .loader-105 {
        width: 175px;
        height: 80px;
        background-image: linear-gradient($base 50px, transparent 0),
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          radial-gradient(circle 50px at 50px 50px, $lite 100%, transparent 0), 
                          radial-gradient(circle 25px at 25px 25px, $lite 100%, transparent 0), 
                          linear-gradient($lite 50px, transparent 0);
        background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
        background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
        background-repeat: no-repeat;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(-180deg);
          top: 62px;
          height: 64px;
          width: 60px;
          background-color:  $lite;
          background-image: linear-gradient(#DDD 20px, transparent 0), 
                            linear-gradient(#DDD 5px, transparent 0), 
                            linear-gradient(#DDD 10px, transparent 0), 
                            linear-gradient(#DDD 10px, transparent 0);
          background-size: 50px 20px;
          background-position: 5px 36px, 5px 25px, 5px 10px;
          background-repeat: no-repeat;
          border-radius: 2px 2px 4px 4px;
          z-index: 10;
          box-shadow: 0px -4px 7px rgba(#000, 0.5);
          animation: animloader105 4s linear infinite;
        }
    }
    
    
    
    .loader-106 {
        width: 32px;
        height: 90px;
        margin-bottom: 20px;
        position: relative;
        border-radius: 50% 50% 0 0;
        border-bottom: 10px solid $brand;
        background-color: $lite;
        background-image: radial-gradient(ellipse at center, $lite 34%, $brand 35%, $brand 54%, $lite 55%),
                    linear-gradient($brand 10px, transparent 0);
        background-size: 28px 28px;
        background-position: center 20px , center 2px;
        background-repeat: no-repeat;
        animation: animloader106back 1s linear infinite alternate;
        &::before{
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0px 15px $brand inset;
          top: 67px;
        }
    
         &::after{
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 34px;
          height: 34px;
          top: 112%;
          background: radial-gradient(ellipse at center, rgba(255,223,0,1) 8%,rgba(249,62,0,0.6) 24%, rgba(0,0,0,0) 100%);
          border-radius: 50% 50% 0;
          background-repeat: no-repeat;
          background-position: -44px -44px;
          background-size: 100px 100px;
          box-shadow: 4px 4px 12px 0px rgba($brand, 0.5);
          animation: animloader106 1s linear infinite alternate;
        }
    }
    
    .loader-107 {
      width: 106px;
      height: 56px;
      background-image: linear-gradient($lite 50px, transparent 0), 
                        linear-gradient($lite 50px, transparent 0), 
                        linear-gradient($lite 50px, transparent 0), 
                        linear-gradient($lite 50px, transparent 0), 
      radial-gradient(circle 14px , $lite 100%, transparent 0);
      background-size: 48px 15px , 15px 35px, 15px 35px, 25px 15px, 28px 28px;
      background-position: 25px 5px, 58px 20px, 25px 17px, 2px 37px, 76px 0px;
      background-repeat: no-repeat;
      position: relative;
      transform: rotate(-45deg);
    
      &::after , &::before {
        content: '';
        position: absolute;
        width: 56px;
        height: 56px;
        border: 6px solid $lite;
        border-radius: 50%;
        left: -45px;
        top: -10px;
        background-repeat: no-repeat;
        background-image: linear-gradient($lite 64px, transparent 0), 
        linear-gradient($lite 66px, transparent 0), 
        radial-gradient(circle 4px, $lite 100%, transparent 0);
        background-size: 40px 1px , 1px 40px, 8px 8px;
        background-position: center center;
        animation: rotation 0.3s linear infinite;
      }
      &::before {
          left: 25px;
          top: 60px;
      }
    }
    
    .loader-108 {
        width: 48px;
        height: 24px;
        color: $lite;
        background: currentColor;
        border-radius: 50% 50% 0 0;
        position: relative;
        margin-top: 36px;
        animation: animloader108 4s linear infinite ;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: currentColor;
          top: -34px;
          animation: animloader108s 4s linear infinite;
      }
    }
    
    
    
    .loader-109 {
        font-size: $size;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: $brand;
        letter-spacing: 2px;
        position: relative;
        &::after {
          content: 'Loading';
          position: absolute;
          left: 0;
          top: 0;
          color: $lite;
          width: 100%;
          height: 100%;
          overflow: hidden;
          animation: animloader110 6s linear infinite;
        }
    }
    
    .loader-110 {
        font-size: $size;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: $lite;
        letter-spacing: 2px;
        position: relative;
        &::after {
          content: 'Loading';
          position: absolute;
          left: 0;
          top: 0;
          color: $base;
          text-shadow: 0 0 2px $lite, 0 0 1px $lite, 0 0 1px $lite;
          width: 100%;
          height: 100%;
          overflow: hidden;
          animation: animloader110 6s linear infinite;
        }
    }
    
    .loader-111 {
        font-size: $size;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: $base;
        text-shadow: 0 0 2px $lite, 0 0 1px $lite, 0 0 1px $lite;
        letter-spacing: 2px;
        position: relative;
        &::after {
          content: 'Loading';
          position: absolute;
          left: 0;
          top: 0;
          color: $lite;
          width: 100%;
          height: 100%;
          overflow: hidden;
          animation: animloader111 6s linear infinite;
        }
    }
    .loader-112 {
        font-size: $size;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: $lite;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 34px;
          bottom: 8px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 5px solid $lite;
          border-bottom-color: $brand;
          animation: rotation 0.6s linear infinite;
        }
    }
    
    .loader-113{
      color: $lite;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: $size;
      letter-spacing: 4px;
      &::before {
        content: '';
        position: absolute;
        right: 70px;
        bottom: 10px;
        height: 28px;
        width: 5.15px;
        background: currentColor;
        animation: animloader113L 1s linear infinite alternate;
      }
      &::after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        left: 125px;
        top: 2px;
        border-radius: 50%;
        background: red;
        animation: animloader113 1s linear infinite alternate;
      }
    }
    
    .loader-114{
      color: $lite;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: $size;
      letter-spacing: 4px;
      &::before {
        content: '';
        position: absolute;
        right: 70px;
        bottom: 10px;
        height: 28px;
        width: 5.15px;
        background: currentColor;
      }
      &::after {
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        left: 125px;
        top: 2px;
        border-radius: 50%;
        background: red;
        animation: animloader114 1s ease-in infinite ;
      }
    }
    
    .loader-115{
      color: $lite;
      position: relative;
      font-size: $size;
      font-family: Arial, Helvetica, sans-serif;
      &::after {
        content: '';
        width: 5px;
        height: 5px;
        background: currentColor;
        position: absolute;
        bottom: 10px;
        right: -5px;
        animation: animloader115 1s linear infinite;
      }
    }
    .loader-116{
      color: $lite;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: $size;
      letter-spacing: 4px;
      &::before {
        content: '';
        position: absolute;
        right: 70px;
        bottom: 10px;
        height: 28px;
        width: 5px;
        background: currentColor;
      }
      &::after {
        content: '';
        width: 4px;
        height: 4px;
        background: currentColor;
        position: absolute;
        right: 70px;
        top: 8px;
        animation: animloader116 0.6s ease-out infinite alternate;
      }
    }
    .loader-117{
      color: $lite;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
      font-size: $size;
      letter-spacing: 4px;
      &::before {
        content: '';
        position: absolute;
        right: 68px;
        bottom: 10px;
        height: 28px;
        width: 7px;
        outline: 1px solid $lite;
        color:$brand;
        animation: animloader117 1s linear infinite alternate;
      }
      &::after {
        content: '';
        width: 4px;
        height: 4px;
        background: $brand;
        position: absolute;
        right: 70px;
        top: 8px;
        animation: animloader116 1s ease-out infinite alternate;
      }
    }
    
    
    .loader-118{
      position: relative;
      &::before {
        content: 'Loading';
        color: $lite;
        font-family: Arial, Helvetica, sans-serif;
        font-size: $size;
        letter-spacing: 2px;
        display: inline-block;
        animation: floating 1s ease-out infinite alternate;
      }
      &::after {
        content: '';
        width: 100%;
        height: 10px;
        background: rgba(0, 0,0,0.15);
        position: absolute;
        left: 0;
        top: 100%;
        filter: blur(4px);
        border-radius: 50%;
        animation: animloader118 1s ease-out infinite alternate;
      }
    }
    .loader-119 {
        font-size: $size;
        letter-spacing: 2px;
        font-family: Arial, Helvetica, sans-serif;
        color:$lite;
        animation: animloader119 1s ease-in infinite alternate;
    }
    
    .loader-120 {
        font-size: $size;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: $brand;
        letter-spacing: 2px;
        position: relative;
        &::after {
          content: 'Loading';
          position: absolute;
          left: 0;
          top: 0;
          color: $lite;
          width: 100%;
          height: 100%;
          overflow: hidden;
          animation: animloader111 10s ease-in infinite;
        }
    }
    
    .loader-121 {
        width: 95%;
        height: 100px;
        background-image: 
            linear-gradient(100deg, transparent, rgba($base, 0.5) 50%, transparent 80%),
            radial-gradient(circle 50px at 50px 50px, $lite 99%, transparent 0), 
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0);
        background-repeat: no-repeat;
        background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
        background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
        animation: animloader121 1s linear infinite;
    }
    
    .loader-122 {
        width: 95%;
        height: 100px;
        background-image: 
            linear-gradient(100deg, transparent, rgba($base, 0.5) 50%, transparent 80%),
            linear-gradient($lite 100px, transparent 0), 
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0);
        background-repeat: no-repeat;
        background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
        background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
        animation: animloader121 1s linear infinite;
    }
    .loader-123 {
        width: 95%;
        height: 100px;
        position: relative;
        background-image: 
            linear-gradient(100deg, transparent, rgba($base, 0.5) 50%, transparent 80%),
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0), 
            linear-gradient($lite 20px, transparent 0);
        background-repeat: no-repeat;
        background-size: 75px 100px,  125px 20px, 260px 20px, 260px 20px;
        background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
        animation: animloader123 1s linear infinite;
        &::after{
          content: '';
          width: 100px;
          height: 100px;
          border-radius: 8px;
          background: $lite;
          position: absolute;
          top: 0;
          left: 0;
        }
    }
    .loader-124 {
        width: 320px;
        height: 150px;
        position: relative;
        background: $lite;
        &::after{
          content: '';
          width: calc(100% - 30px);
          height: calc(100% - 30px);
          top: 15px;
          left: 15px;
          position: absolute;
          background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%),
                            linear-gradient(#DDD 56px, transparent 0),
                            linear-gradient(#DDD 24px, transparent 0),
                            linear-gradient(#DDD 18px, transparent 0), 
                            linear-gradient(#DDD 66px, transparent 0);
          background-repeat: no-repeat;
          background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
          background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
          animation: animloader124 1s linear infinite;
        }
    }
    .loader-125 {
        width: 320px;
        height: 150px;
        position: relative;
        background: $lite;
        &::after{
          content: '';
          width: calc(100% - 30px);
          height: calc(100% - 30px);
          top: 15px;
          left: 15px;
          position: absolute;
          background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%),
                            radial-gradient(circle 28px at 28px 28px, #DDD 99%, transparent 0), 
                            linear-gradient(#DDD 24px, transparent 0),
                            linear-gradient(#DDD 18px, transparent 0), 
                            linear-gradient(#DDD 66px, transparent 0);
          background-repeat: no-repeat;
          background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
          background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
          animation: animloader124 1s linear infinite;
        }
    }
    
    .loader-126 {
        width: 164px;
        height: 170px;
        position: relative;
        background: $lite;
        &::after{
          content: '';
          width: calc(100% - 30px);
          height: calc(100% - 30px);
          top: 15px;
          left: 15px;
          position: absolute;
          background-image: linear-gradient(90deg, transparent, rgba($lite, 0.5) 50%, transparent 100%),
                            linear-gradient(#DDD 74px, transparent 0), 
                            linear-gradient(#DDD 16px, transparent 0), 
                            linear-gradient(#DDD 24px, transparent 0);
          background-repeat: no-repeat;
          background-size: 50px 170px, 100% 74px, 100% 16px, 100% 32px;
          background-position: 0 0, 0 0, 0px 85px, 0px 110px;
          animation: animloader126 1s linear infinite;
        }
    }
    
    
      /* keyFrames */ 
      
      @keyframes rotation {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
      }
      @keyframes rotationBack {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(-360deg) }
      }
      @keyframes rotationBreak {
        0% { transform: rotate(0) }
        25% { transform: rotate(90deg)}
        50% { transform: rotate(180deg) }
        75% { transform: rotate(270deg)}
        100% { transform: rotate(360deg) }
      }
      
      @keyframes zeroRotation {
        0% { transform: scale(1) rotate(0deg) }
        100% { transform: scale(0) rotate(360deg)}
      }
      
      @keyframes shadowExpandX {
        0% { 
          box-shadow: 0 0, 0 0;  
          color: rgba($lite, 0.2)
        }
        100% { 
          box-shadow: -$size/2 0, $size/2 0; 
          color: rgba($lite, .8) 
        }
      }
      
      @keyframes shadowPulse {
        33% {   
          background: $lite;
          box-shadow:  -$size/2 0 $brand, $size/2 0 $lite;
        } 
        
        66% {   
          background: $brand;
          box-shadow:  -$size/2 0 $lite, $size/2 0 $lite;
        }  
        100% {   
          background: $lite;
          box-shadow:  -$size/2 0 $lite, $size/2 0 $brand;
        }
        
      }
      
      @keyframes shadowRolling {
        0% {  box-shadow: 0px 0 rgba($lite, 0), 
                          0px 0 rgba($lite, 0), 
                          0px 0 rgba($lite, 0), 
                          0px 0 rgba($lite, 0); 
        }
        12% {  box-shadow: 100px 0 rgba($lite, 1),
                            0px 0 rgba($lite, 0),
                            0px 0 rgba($lite, 0), 
                            0px 0 rgba($lite, 0); 
        }
        25% {  box-shadow: 110px 0 rgba($lite, 1), 
                            100px 0 rgba($lite, 1), 
                            0px 0 rgba($lite, 0), 
                            0px 0 rgba($lite, 0); 
        }
        36% {  box-shadow: 120px 0 rgba($lite, 1), 
                            110px 0 rgba($lite, 1), 
                            100px 0 rgba($lite, 1), 
                            0px 0 rgba($lite, 0); 
        }
        50% {  box-shadow: 130px 0 rgba($lite, 1), 
                            120px 0 rgba($lite, 1), 
                            110px 0 rgba($lite, 1), 
                            100px 0 rgba($lite, 1); 
        }
        62% {  box-shadow: 200px 0 rgba($lite, 0), 
                            130px 0 rgba($lite, 1), 
                            120px 0 rgba($lite, 1), 
                            110px 0 rgba($lite, 1); 
        }
        75% {  box-shadow: 200px 0 rgba($lite, 0), 
                            200px 0 rgba($lite, 0), 
                            130px 0 rgba($lite, 1), 
                            120px 0 rgba($lite, 1); 
        }
        87% {  box-shadow: 200px 0 rgba($lite, 0),
                            200px 0 rgba($lite, 0), 
                            200px 0 rgba($lite, 0), 
                            130px 0 rgba($lite, 1); 
        }
        100% {  box-shadow: 200px 0 rgba($lite, 0), 
                            200px 0 rgba($lite, 0), 
                            200px 0 rgba($lite, 0), 
                            200px 0 rgba($lite, 0); 
        }
        
      }
    
      @keyframes animloader14 {
        0% { transform: scale(0); opacity: 1;}
        100% { transform: scale(1); opacity: 0;}
      }
      
    
      
    
    
      
      @keyframes scale50 {
        0%, 100% { transform: scale(0)}
        50% { transform: scale(1)}
      }
    
      @keyframes scaleOut {
        0% { transform: scale(0);}
        100% { transform: scale(1)}
      }
      
      @keyframes animloader27 {
        0% , 100%{ transform: scale(0); opacity: 1;}
        50% { transform: scale(1); opacity: 0;}
      }
      @keyframes animloader28 {
        0% { box-shadow: -($size*1.5) 0 $lite inset;}
        100% { box-shadow: $size 0 $lite inset;}
      }
    
      @keyframes animloader38 {
        50% { transform: scale(1) translate(-50% , -50%)}
      }
    
      @keyframes animloader42 { 
        0% { box-shadow:-38px -6px, -14px 6px,  14px -6px}   
        33% { box-shadow: -38px 6px, -14px -6px,  14px 6px}   
        66% {box-shadow: -38px -6px, -14px 6px, 14px -6px} 
        100% { box-shadow: -38px 6px, -14px -6px, 14px 6px}   
      }
      @keyframes animloader44 {
        0% {  box-shadow:   14px 0 0 -2px,  38px 0 0 -2px, 
                            -14px 0 0 -2px,  -38px 0 0 -2px
        }   
        
        25% {  box-shadow:   14px 0 0 -2px,  38px 0 0 -2px, 
                            -14px 0 0 -2px,  -38px 0 0 2px
        }    
        
        50% {  box-shadow:   14px 0 0 -2px,  38px 0 0 -2px, 
                            -14px 0 0 2px,  -38px 0 0 -2px
        }  
        75% {  box-shadow:   14px 0 0 2px,  38px 0 0 -2px, 
                            -14px 0 0 -2px,  -38px 0 0 -2px
        }  
        100% {  box-shadow:   14px 0 0 -2px,  38px 0 0 2px, 
                            -14px 0 0 -2px,  -38px 0 0 -2px
        }   
      }
    
      @keyframes animloader45 { 
        0% { box-shadow: -38px -12px ,  -14px 0,  14px 0, 38px 0 }   
        33% { box-shadow: -38px 0px, -14px -12px,  14px 0, 38px 0 }   
        66% { box-shadow: -38px 0px , -14px 0, 14px -12px, 38px 0 }   
        100% { box-shadow: -38px 0 , -14px 0, 14px 0 , 38px -12px }   
      }
    
    
      @keyframes animloader46 {
        0% { 
          background: rgba($lite, 1);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        14% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 1),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        28% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 1), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        42% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 1), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        57% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 1), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        71% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 1), 
           9px 16px 0 -6px rgba($lite, 0);
         }
        85% { 
          background: rgba($lite, 0);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 1);
         }
        100% { 
          background: rgba($lite, 0.5);
          box-shadow: 9px -19px 0 -1px rgba($lite, 0),
           28px -19px 0 -2px rgba($lite, 0), 
           39px -5px 0 -3px rgba($lite, 0), 
           34px 10px 0 -4px rgba($lite, 0), 
           22px 17px 0 -5px rgba($lite, 0), 
           9px 16px 0 -6px rgba($lite, 0);
         }
    
      }
    
      @keyframes animloader34 {
        0% { border-color: rgba($lite, 0.15)  rgba($lite, 0.25)  rgba($lite, 0.35)  rgba($lite, 0.75);}
        33% { border-color: rgba($lite, 0.75)  rgba($lite, 0.15)  rgba($lite, 0.25)  rgba($lite, 0.35);}
        66% { border-color: rgba($lite, 0.35)  rgba($lite, 0.75)  rgba($lite, 0.15)  rgba($lite, 0.25);}
        100% { border-color: rgba($lite, 0.25)  rgba($lite, 0.35)  rgba($lite, 0.75)  rgba($lite, 0.15);}
      }
    
    
    
      
      @keyframes animloader51 {
        0% { border-color: rgba($lite, 1)  rgba($lite, 0)  rgba($lite, 0)  rgba($lite, 0);}
        33% { border-color: rgba($lite, 1)  rgba($lite, 1)  rgba($lite, 0)  rgba($lite, 0);}
        66% { border-color: rgba($lite, 1)  rgba($lite, 1)  rgba($lite, 1)  rgba($lite, 0);}
        100% { border-color: rgba($lite, 1)  rgba($lite, 1)  rgba($lite, 1)  rgba($lite, 1);}
      }
    
    
      @keyframes animloader57 {
        0% {  box-shadow: 0 0, 0 0, 0 0}
        33% {  box-shadow: 24px 0px, 24px 0px, 24px 0px}
        66% {  box-shadow: 24px 24px, 24px 24px, 24px 0px}
        100% {  box-shadow: 0px 24px, 24px 24px, 24px 0px}
      }
      
      @keyframes animloader58 {
        0% , 32%  { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
        33% , 65%  { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
        66% , 99%  { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 0) }
        100%   { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 1) }
      }
      @keyframes animloader58m{
        0%{ transform: translate(0, 0) rotateX(0) rotateY(0)}
        33%{ transform: translate(100%, 0) rotateX(0) rotateY(180deg)}
        66%{ transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg)}
        100%{ transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg)}
      }
    
      
      @keyframes flipX {
        0%{ transform: perspective(200px) rotateX(0deg) rotateY(0deg); }
        50%{ transform: perspective(200px) rotateX(-180deg) rotateY(0deg); }
        100%{ transform: perspective(200px) rotateX(-180deg) rotateY(-180deg) }
      }
      @keyframes fill {
        0%{ box-shadow: 0 0  inset }
        100%{ box-shadow: 0 -48px inset }
      }
    
      @keyframes fillX {
        0%{ box-shadow: 0 0 inset }
        100%{ box-shadow: 48px 0 inset }
      }
    
      @keyframes animloader56{
        0%{ transform: translate(0, 0) rotateX(0) rotateY(0)}
        25%{ transform: translate(100%, 0) rotateX(0) rotateY(180deg)}
        50%{ transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg)}
        75%{ transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg)}
        100%{ transform:  translate(0, 0) rotateX(0) rotateY(360deg) }
      }
    
    
      @keyframes animloader59 {
        0%  { box-shadow: 0 24px rgba($lite, 0), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
        12%  { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
        25% { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
        37% { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 0) }
        50% { box-shadow: 0 24px rgba($lite, 1), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 1) }
        62% { box-shadow: 0 24px rgba($lite, 0), 24px 24px rgba($lite, 1), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 1) }
        75% { box-shadow: 0 24px rgba($lite, 0), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 1), 0px 48px rgba($lite, 1) }
        87%{ box-shadow: 0 24px rgba($lite, 0), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 1) }
        100%{ box-shadow: 0 24px rgba($lite, 0), 24px 24px rgba($lite, 0), 24px 48px rgba($lite, 0), 0px 48px rgba($lite, 0) }
    }
    
    @keyframes animloader60 {
      0%   { top: 0;   color: rgba($lite, 1) }
      50%  { top: 30px;   color: rgba($lite, 0.2) }
      100% { top: 0;    color: rgba($lite, 1)}
    }
    
      @keyframes animloader61 {
        0% { height: $size;}
        100% { height: $size / 10;}
      }
      @keyframes animloader61m {
        0% { height: 40px; transform: translateY(0);}
        100% { height: 10px; transform: translateY(30px)}
      }
    
      @keyframes animloader63 {
      0% { box-shadow: 20px 0 rgba($lite, 0.25), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 1),}
      50% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 0.25), 60px 0 rgba($lite, 1),}
      100% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 0.25),}
      }
    @keyframes animloader64 {
      0% { box-shadow: 20px -10px, 40px 10px, 60px 0px}
      25% { box-shadow: 20px 0px, 40px  0px, 60px 10px}
      50% { box-shadow: 20px 10px, 40px -10px, 60px 0px}
      75% { box-shadow: 20px 0px, 40px 0px, 60px -10px}
      100% { box-shadow: 20px -10px, 40px 10px, 60px 0px}
     }
    
    @keyframes animloader65 {
      0% { box-shadow:  -10px 20px, 10px 35px , 0px 50px}
      25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px}
      50% { box-shadow: 10px 20px, -10px 35px, 0px 50px}
      75% { box-shadow: 0px 20px, 0px  35px, -10px 50px}
      100% { box-shadow:-10px 20px, 10px  35px, 0px 50px}
     }
    @keyframes animloader66 {
      0% { width: $size/10;}
      100% { width: $size;}
    }
    
    
    @keyframes animloader68 {
      0% { box-shadow: 20px 0 rgba($lite, 0), 40px 0 rgba($lite, 0), 60px 0 rgba($lite, 0), 80px 0 rgba($lite, 0), 100px 0 rgba($lite, 0)}
      20% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 0), 60px 0 rgba($lite, 0), 80px 0 rgba($lite, 0), 100px 0 rgba($lite, 0)}
      40% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 0), 80px 0 rgba($lite, 0), 100px 0 rgba($lite, 0)}
      60% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 1), 80px 0 rgba($lite, 0), 100px 0 rgba($lite, 0)}
      80% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 1), 80px 0 rgba($lite, 1), 100px 0 rgba($lite, 0)}
      100% { box-shadow: 20px 0 rgba($lite, 1), 40px 0 rgba($lite, 1), 60px 0 rgba($lite, 1), 80px 0 rgba($lite, 1), 100px 0 rgba($lite, 1)}
    }
    
    @keyframes animloader69 {
      0% {   width: 20px; }
      100% { width: $size;}
     }
    
    
     @keyframes animloader71 {
      0% { left:0 ;  transform: translateX(-100%)}
      100% { left:100% ;  transform: translateX(0%)}
     }
    
    
       @keyframes animloader89{
        0%{ box-shadow: 11px 0 rgba($lite, 0), 22px 0 rgba($lite, 0), 33px 0 rgba($lite, 0), 44px 0 rgba($lite, 0)}
        25%{ box-shadow: 11px 0 rgba($lite, 1), 22px 0 rgba($lite, 0), 33px 0 rgba($lite, 0), 44px 0 rgba($lite, 0)}
        50%{ box-shadow: 11px 0 rgba($lite, 1), 22px 0 rgba($lite, 1), 33px 0 rgba($lite, 0), 44px 0 rgba($lite, 0)}
        75%{ box-shadow: 11px 0 rgba($lite, 1), 22px 0 rgba($lite, 1), 33px 0 rgba($lite, 1), 44px 0 rgba($lite, 0)}
        100%{ box-shadow: 11px 0 rgba($lite, 1), 22px 0 rgba($lite, 1), 33px 0 rgba($lite, 1), 44px 0 rgba($lite, 1)}
    
      }
      @keyframes animloader91 {
        0%{ box-shadow: 0 0  inset }
        100%{ box-shadow: 0 -70px inset }
      }
    
      @keyframes animloader92 {
        0%{ box-shadow: 2px 0px rgba($lite, 0), 12px 0px rgba($lite , 0.3), 20px 0px rgba($lite, 0) }
        50%{ box-shadow: 2px -5px rgba($lite, 0.5), 12px -3px rgba($lite, 0.5), 20px -2px rgba($lite, 0.6) }
        100%{ box-shadow: 2px -8px rgba($lite, 0), 12px -5px rgba($lite, 0), 20px -5px rgba($lite, 0) }
    
      }
      @keyframes animloader93 {
        0% { transform: rotate(-70deg) }
        10% { transform: rotate(-40deg)}
        20% , 45% , 35%  { transform: rotate(-10deg) }
        40% , 30%{ transform: rotate(-30deg) }
        50% , 60%{ transform: rotate(20deg); }
        55% , 65% , 75% { transform: rotate(40deg); }
        70% { transform: rotate(45deg); }
        85%, 90% { transform: rotate(50deg); }
        95% { transform: rotate(75deg); }
        100% , 93%{ transform: rotate(70deg); }
      }
    
      @keyframes animloader94 {
        0% { transform: translate(-10px , -10px) }
        25% { transform: translate(-10px , 10px) }
        50% { transform: translate(10px , 10px) }
        75% { transform: translate(10px , -10px) }
        100% { transform: translate(-10px , -10px) }
      }
    
    
      @keyframes animloader98 {
        0% { background-position: 0px 80px}
        100% { background-position: 0px 0px}
      }
      @keyframes animloader98s {
        0%  { box-shadow: 4px -10px rgba($lite, 0),   6px -0px rgba($lite, 0),      8px -15px rgba($lite, 0),     12px -0px rgba($lite, 0)   }
        20% { box-shadow: 4px -20px rgba($lite, 0),   8px -10px rgba($lite, 0),     10px -30px rgba($lite, 0.5),  15px -5px rgba($lite, 0)   }
        40% { box-shadow: 2px -40px rgba($lite, 0.5), 8px -30px rgba($lite, 0.4),   8px -60px rgba($lite, 0.5),   12px -15px rgba($lite, 0.5)}
        60% { box-shadow: 4px -60px rgba($lite, 0.5), 6px -50px rgba($lite, 0.4),   10px -90px rgba($lite, 0.5),  15px -25px rgba($lite, 0.5)}
        80% { box-shadow: 2px -80px rgba($lite, 0.5), 4px -70px rgba($lite, 0.4),   8px -120px rgba($lite, 0),    12px -35px rgba($lite, 0.5)}
        100%{ box-shadow: 4px -100px rgba($lite, 0),  8px -90px rgba($lite, 0),     10px -120px rgba($lite, 0),   15px -45px rgba($lite, 0)  }
      }
    @keyframes animloader99{
      0% { box-shadow:  0px 0px  inset}
      100% { box-shadow:  0px -80px  inset}
    }
    
    @keyframes animloader100 {
      0%  {  box-shadow: 
              25px 0 rgba($lite, 1),
              50px 0 rgba($lite, 1),
              75px 0 rgba($lite, 1), 
             100px 0 rgba($lite, 1), 
             125px 0 rgba($lite, 1), 
             150px 0 rgba($lite, 1),
              25px 0 rgba($lite, 1),
              50px 0 rgba($lite, 1),
              75px 0 rgba($lite, 1), 
             100px 0 rgba($lite, 1), 
             125px 0 rgba($lite, 1), 
             150px 0 rgba($lite, 1)
          }
      50%  {  box-shadow: 
              25px 20px rgba($lite, 1),
              50px 60px rgba($lite, 0),
              75px 30px rgba($lite, 0), 
             100px 70px rgba($lite, 0), 
             125px 40px rgba($lite, 1), 
             150px 60px rgba($lite, 0),
              25px 20px rgba($lite, 1),
              50px 30px rgba($lite, 1),
              75px 10px rgba($lite, 1), 
             100px 30px rgba($lite, 1), 
             125px 30px rgba($lite, 0), 
             150px 30px rgba($lite, 0)
          }
      100%  {  box-shadow: 
              25px 60px rgba($lite, 0),
              50px 60px rgba($lite, 0),
              75px 50px rgba($lite, 0), 
             100px 70px rgba($lite, 0), 
             125px 70px rgba($lite, 0), 
             150px 60px rgba($lite, 0),
              25px 80px rgba($lite, 0),
              50px 80px rgba($lite, 0),
              75px 70px rgba($lite, 0), 
             100px 60px rgba($lite, 0), 
             125px 30px rgba($lite, 0), 
             150px 30px rgba($lite, 0)
          }
      }
    
      @keyframes animloader105 {
        0%{ height: 64px; }
        90%, 100% {  height: 0px; }
      }
    
    @keyframes animloader106back {
      0% , 30%, 70%  { transform: translateY(0px)}
     20%, 40%,  100% { transform: translateY(-5px)}
    }
    
    @keyframes animloader106 {
      0% {  
        box-shadow: 4px 4px 12px 2px rgba($brand, 0.75);
        width: 34px;
        height: 34px;
        background-position: -44px -44px;
        background-size: 100px 100px;}
      100% { 
        box-shadow: 2px 2px 8px 0px rgba($brand, 0.5);
        width: 30px;
        height: 28px;  
        background-position: -36px -36px; 
        background-size: 80px 80px;
      }
    }
    
    @keyframes animloader108 {
      0% {  box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px }
      20% {  box-shadow: 40px -1px 0 -2px , 0 0 0 -2px , 40px -1px 0 -5px , 0 0 0 -5px}
      40% {  box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,  40px -1px 0 -5px ,-40px -1px 0 -5px}
      60% {  box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px ,-40px -1px 0 -5px}
      80% , 95% {  box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px , -23px -29px 0 -5px}
      100% {  box-shadow: 40px -1px 0 -2px rgba($lite, 0), -40px -1px 0 -2px rgba($lite, 0),   23px -29px 0 -5px rgba($lite, 0), -23px -29px 0 -5px rgba($lite, 0)}
    }
    
    @keyframes animloader108s {
      0% {  box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px }
      20% {  box-shadow: 40px 2px 0 -2px  , 0 0 0 -2px , 40px 2px 0 -5px , 0 0 0 -5px }
      40% {  box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 40px 2px 0 -5px , -40px 2px 0 -5px }
      60% {  box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -40px 2px 0 -5px }
      80%, 95% {  box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -23px -23px 0 -5px }
      100% {  box-shadow: 40px 2px 0 -2px  rgba($lite, 0), -40px 2px 0 -2px rgba($lite, 0), 23px -23px 0 -5px rgba($lite, 0), -23px -23px 0 -5px rgba($lite, 0)}
    }
    
    @keyframes animloader115 {
        0% { box-shadow: 10px 0 rgba($lite, 0), 20px 0 rgba($lite, 0);}
        50% { box-shadow: 10px 0 rgba($lite, 1), 20px 0 rgba($lite, 0);}
        100% { box-shadow: 10px 0 rgba($lite, 1), 20px 0 rgba($lite, 1);}
    }
    
    
    @keyframes animloader116 {
        0%  { top: 8px; transform: rotate(0deg) scale(1);}
        100% { top: 0px; transform: rotate(180deg) scale(1.5);}
    }
    @keyframes animloader117 {
        0%  { box-shadow: 0 0 inset;}
        100%  { box-shadow: 0 -28px inset;}
    }
    
      @keyframes animMarker {
        0% { transform: rotate(45deg) translate(5px , 5px) }
        100% { transform: rotate(45deg) translate(-5px , -5px) }
      }
      @keyframes animShadow {
        0% { transform: scale(0.5) }
        100% { transform: scale(1) }
      }
    
    @keyframes bump {
        0% {  transform: translate(-50%, 5px) }
        100% {  transform: translate(-50% , -5px ) }
      }
    
    
    @keyframes animPend {
        0% {  transform: rotate(22deg);}
        50% {  transform: rotate(0deg);}
      }
    @keyframes animPend2 {
        0% , 55%{  transform: rotate(0deg);}
        100% {  transform: rotate(-22deg);}
      }
    
    
    @keyframes animloader85 {
      0% , 100% {   transform: translateX(-150%)}
      50% {   transform: translateX(150%)}
     }
    
    @keyframes barStripe {
        0% { background-position: 1em 0; }
        100% { background-position: 0 0; }
    }
    @keyframes raceBoard {
        0% { background-position: 0 0, 16px 16px}
        100% { background-position: 32px 0px, 48px 16px;}
    }
    @keyframes fadePush {
      0% {  transform: translate(-50% , -15px ); opacity: 0; }
      50% {  transform: translate(-50% , 0px ); opacity: 1; }
      100%{  transform: translate(-50%, 15px); opacity: 0; }
    }
    @keyframes fadePull {
      0%{  transform: translate(-50%, 15px); opacity: 0; }
      50% {  transform: translate(-50% , 0px ); opacity: 1; }
      100% {  transform: translate(-50% , -15px ); opacity: 0; }
    }
     
    @keyframes hitZak {
      0% { left:0 ;  transform: translateX(-1%)}
      100% { left:100% ;  transform: translateX(-99%)}
     }
    
    @keyframes animFw {
      0% { width: 0}
      100% { width:100%}
     }
    @keyframes coli1 {
      0% { transform: rotate(-45deg) translateX(0px); opacity: 0.7;}
      100% { transform: rotate(-45deg) translateX(-45px); opacity: 0;}
     }
    @keyframes coli2 {
      0% { transform: rotate(45deg) translateX(0px); opacity: 1;}
      100% { transform: rotate(45deg) translateX(-45px); opacity: 0.7;}
     }
    
    
    @keyframes animloader121 {
        0% { background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;}
        100% { background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;}
    }
    @keyframes animloader123 {
        0% { background-position: 0% 0, 120px 0, 120px 40px, 120px 80px}
        100% { background-position: 100% 0, 120px 0, 120px 40px, 120px 80px}
    }
    @keyframes animloader124 {
        0% { background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px}
        100% { background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px}
    }
    @keyframes animloader126 {
        0% { background-position:  0 0, 0 0, 0px 85px, 0px 110px}
        100% { background-position:  150% 0, 0 0, 0px 85px, 0px 110px}
    }
    
    @keyframes floating {
        0%  { transform: translateY(0);}
        100%  { transform: translateY(-25px);}
    }
    
    @keyframes animloader110 {
        0%  { height: 100% }
        100%  { height: 0% }
    }
    
    @keyframes animloader111 {
      0%  { width: 0% }
      100%  { width: 100% }
    }
    @keyframes animloader113 {
      0%  { transform: translate(0px, 0px) scaleX(1) }
      14%  { transform: translate(-12px, -16px) scaleX(1.05) }
      28%  { transform: translate(-27px, -28px) scaleX(1.07) }
      42%  { transform: translate(-46px, -35px) scaleX(1.1) }
      57%  { transform: translate(-70px, -37px) scaleX(1.1) }
      71%  { transform: translate(-94px, -32px) scaleX(1.07) }
      85%  { transform: translate(-111px, -22px) scaleX(1.05) }
      100%  { transform: translate(-125px, -9px) scaleX(1) }  
      }
      
      @keyframes animloader113L {
          0%   { box-shadow: 0 -6px, -122.9px -8px}
         25%, 75%  { box-shadow: 0 0px, -122.9px -8px}
          100%   { box-shadow: 0 0px, -122.9px -16px}
      }
    @keyframes animloader114 {
      0%  { transform: translateY(8px) scaleY(1) scaleX(1.25)}
      25%, 75% { transform: translateY(-5px) scaleY(1.2) scaleX(1)}
      50%  { transform: translateY(-10px) scaleY(1) scaleX(1)}
      100% { transform: translateY(8px) scaleY(0.8) scaleX(0.8)}
      }
      
    @keyframes animloader118 {
        0%  { transform: scale(0.8);}
        100%  { transform: scale(1.2);}
    }
      
    @keyframes animloader119 {
        0%  { filter: blur(0px); transform: skew(0deg);}
        100%  { filter: blur(3px); transform: skew(-4deg);}
    }
    

    `];

    render() {
        return html `
        
<header><a class="brand" href="https://vineethtrv.github.io/loader/">L &nbsp; ader</a><a class="nav-btn" href="https://vineethtrv.github.io/loader/">Github Page</a></header>
<section><span class="loader-1"> </span></section>
<section><span class="loader-2"> </span></section>
<section><span class="loader-3"> </span></section>
<section><span class="loader-4"> </span></section>
<section><span class="loader-5"> </span></section>
<section><span class="loader-6"> </span></section>
<section><span class="loader-7"> </span></section>
<section><span class="loader-8"> </span></section>
<section><span class="loader-9"> </span></section>
<section><span class="loader-10"> </span></section>
<section><span class="loader-11"> </span></section>
<section><span class="loader-12"> </span></section>
<section><span class="loader-13"> </span></section>
<section><span class="loader-14"> </span></section>
<section><span class="loader-15"> </span></section>
<section><span class="loader-16"> </span></section>
<section><span class="loader-17"> </span></section>
<section><span class="loader-18"> </span></section>
<section><span class="loader-19"> </span></section>
<section><span class="loader-20"> </span></section>
<section><span class="loader-21"> </span></section>
<section><span class="loader-22"> </span></section>
<section><span class="loader-23"> </span></section>
<section><span class="loader-24"> </span></section>
<section><span class="loader-25"> </span></section>
<section><span class="loader-26"> </span></section>
<section><span class="loader-27"> </span></section>
<section><span class="loader-28"> </span></section>
<section><span class="loader-29"> </span></section>
<section><span class="loader-30"> </span></section>
<section><span class="loader-31"> </span></section>
<section><span class="loader-32"> </span></section>
<section><span class="loader-33"> </span></section>
<section><span class="loader-34"> </span></section>
<section><span class="loader-35"> </span></section>
<section><span class="loader-36"> </span></section>
<section><span class="loader-37"> </span></section>
<section><span class="loader-38"> </span></section>
<section><span class="loader-39"> </span></section>
<section><span class="loader-40"> </span></section>
<section><span class="loader-41"> </span></section>
<section><span class="loader-42"> </span></section>
<section><span class="loader-43"> </span></section>
<section><span class="loader-44"> </span></section>
<section><span class="loader-45"> </span></section>
<section><span class="loader-46"> </span></section>
<section><span class="loader-47"> </span></section>
<section><span class="loader-48"> </span></section>
<section><span class="loader-49"> </span></section>
<section><span class="loader-50"> </span></section>
<section><span class="loader-51"> </span></section>
<section><span class="loader-52"> </span></section>
<section><span class="loader-53"> </span></section>
<section><span class="loader-54"> </span></section>
<section><span class="loader-55"> </span></section>
<section><span class="loader-56"> </span></section>
<section><span class="loader-57"> </span></section>
<section><span class="loader-58"> </span></section>
<section><span class="loader-59"> </span></section>
<section><span class="loader-60"> </span></section>
<section><span class="loader-61"> </span></section>
<section><span class="loader-62"> </span></section>
<section><span class="loader-63"> </span></section>
<section><span class="loader-64"> </span></section>
<section><span class="loader-65"> </span></section>
<section><span class="loader-66"> </span></section>
<section><span class="loader-67"> </span></section>
<section><span class="loader-68"> </span></section>
<section><span class="loader-69"> </span></section>
<section><span class="loader-70"> </span></section>
<section><span class="loader-71"> </span></section>
<section><span class="loader-72"> </span></section>
<section><span class="loader-73"> </span></section>
<section><span class="loader-74"> </span></section>
<section><span class="loader-75"> </span></section>
<section><span class="loader-76"> </span></section>
<section><span class="loader-77"> </span></section>
<section><span class="loader-78"> </span></section>
<section><span class="loader-79"> </span></section>
<section><span class="loader-80"> </span></section>
<section><span class="loader-81"> </span></section>
<section><span class="loader-82"> </span></section>
<section><span class="loader-83"> </span></section>
<section><span class="loader-84"> </span></section>
<section><span class="loader-85"> </span></section>
<section><span class="loader-86"> </span></section>
<section><span class="loader-87"> </span></section>
<section><span class="loader-88"> </span></section>
<section><span class="loader-89"> </span></section>
<section><span class="loader-90"> </span></section>
<section><span class="loader-91"> </span></section>
<section><span class="loader-92"> </span></section>
<section><span class="loader-93"> </span></section>
<section><span class="loader-94"> </span></section>
<section><span class="loader-95"> </span></section>
<section><span class="loader-96"> </span></section>
<section><span class="loader-97"> </span></section>
<section><span class="loader-98"> </span></section>
<section><span class="loader-99"> </span></section>
<section><span class="loader-100"> </span></section>
<section><span class="loader-101"> </span></section>
<section><span class="loader-102"> </span></section>
<section><span class="loader-103"> </span></section>
<section><span class="loader-104"> </span></section>
<section><span class="loader-105"> </span></section>
<section><span class="loader-106"> </span></section>
<section><span class="loader-107"> </span></section>
<section><span class="loader-108"> </span></section>
<section><span class="loader-109">Loading       </span></section>
<section><span class="loader-110">Loading      </span></section>
<section><span class="loader-111">Loading      </span></section>
<section><span class="loader-112">L &nbsp; ading      </span></section>
<section><span class="loader-113">Load&nbsp;ng      </span></section>
<section><span class="loader-114">Load&nbsp;ng      </span></section>
<section><span class="loader-115">Loading      </span></section>
<section><span class="loader-116">Load&nbsp;ng      </span></section>
<section><span class="loader-117">Load&nbsp;ng      </span></section>
<section><span class="loader-118">     </span></section>
<section><span class="loader-119">Loading      </span></section>
<section><span class="loader-120">Loading</span></section>
<section><span class="loader-121"> </span></section>
<section><span class="loader-122"> </span></section>
<section><span class="loader-123"> </span></section>
<section><span class="loader-124"> </span></section>
<section><span class="loader-125"> </span></section>
<section><span class="loader-126"> </span></section>
        `;
    }
}
customElements.define('lab-element', LabElement);
