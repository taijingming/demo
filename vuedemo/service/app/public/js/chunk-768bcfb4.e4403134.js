(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-768bcfb4"],{"0538":function(t,e,i){"use strict";var n=i("1c0b"),r=i("861d"),s=[].slice,a={},c=function(t,e,i){if(!(e in a)){for(var n=[],r=0;r<e;r++)n[r]="a["+r+"]";a[e]=Function("C,a","return new C("+n.join(",")+")")}return a[e](t,i)};t.exports=Function.bind||function(t){var e=n(this),i=s.call(arguments,1),a=function(){var n=i.concat(s.call(arguments));return this instanceof a?c(e,n.length,n):e.apply(t,n)};return r(e.prototype)&&(a.prototype=e.prototype),a}},3686:function(t,e,i){"use strict";var n=i("e60d"),r=i.n(n);r.a},4795:function(t,e,i){var n=i("23e7"),r=i("da84"),s=i("342f"),a=[].slice,c=/MSIE .\./.test(s),o=function(t){return function(e,i){var n=arguments.length>2,r=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,r)}:e,i)}};n({global:!0,bind:!0,forced:c},{setTimeout:o(r.setTimeout),setInterval:o(r.setInterval)})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),r=i("5899"),s="["+r+"]",a=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,i){var n=i("861d"),r=i("d2bb");t.exports=function(t,e,i){var s,a;return r&&"function"==typeof(s=e.constructor)&&s!==i&&n(a=s.prototype)&&a!==i.prototype&&r(t,a),t}},a2a8:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"slider"}},[i("div",{staticClass:"window",on:{mouseover:t.stop,mouseleave:t.play}},[i("ul",{staticClass:"container",style:t.containerStyle},[i("li",[i("img",{style:{width:t.imgWidth+"px"},attrs:{src:t.sliders[t.sliders.length-1].img,alt:""}})]),t._l(t.sliders,(function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:""+t.image1}},[i("img",{style:{width:t.imgWidth+"px"},attrs:{src:t.sliders[n].img,alt:""},on:{click:function(e){return t.image2(n)}}})])],1)})),i("li",[i("img",{style:{width:t.imgWidth+"px"},attrs:{src:t.sliders[0].img,alt:""}})])],2),i("ul",{staticClass:"direction"},[i("li",{staticClass:"left",on:{click:function(e){return t.move(1519,1,t.speed)}}},[i("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",ersion:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{fill:"#ffffff",d:"M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"}})])]),i("li",{staticClass:"right",on:{click:function(e){return t.move(1519,-1,t.speed)}}},[i("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{fill:"#ffffff",d:"M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"}})])])]),i("ul",{staticClass:"dots"},t._l(t.sliders,(function(e,n){return i("li",{key:n,class:{dotted:n===t.currentIndex-1},on:{click:function(e){return t.jump(n+1)}}})})),0)]),i("router-view")],1)},r=[],s=(i("c0b6"),i("a9e3"),i("4795"),{name:"slider",props:{initialSpeed:{type:Number,default:30},initialInterval:{type:Number,default:3}},data:function(){return{sliders:[{img:"https://images.weserv.nl/?url=static.21cake.com/upload/images/8605b1014c08216f826411bd67555830.jpg"},{img:"https://images.weserv.nl/?url=static.21cake.com/upload/images/160eb1b5c21c9f1b30bebb45a0cb91ad.jpg"},{img:"https://images.weserv.nl/?url=static.21cake.com/upload/images/9fedee0ae661ba0effa2d8dedf8cc4f0.jpg"},{img:"https://images.weserv.nl/?url=static.21cake.com/upload/images/2c0b6f6e574c8a9e89d747a5bb4095ec.jpg"},{img:"https://images.weserv.nl/?url=static.21cake.com/upload/images/844e0d2640e384013f0f20383df5f251.jpg"}],imgWidth:1519,currentIndex:1,distance:-1519,transitionEnd:!0,speed:this.initialSpeed,image1:"1"}},computed:{containerStyle:function(){return{transform:"translate3d(".concat(this.distance,"px, 0, 0)")}},interval:function(){return 1e3*this.initialInterval}},mounted:function(){this.init()},methods:{init:function(){this.play(),window.onblur=function(){this.stop()}.bind(this),window.onfocus=function(){this.play()}.bind(this)},move:function(t,e,i){if(console.log(i),this.transitionEnd){this.transitionEnd=!1,-1===e?this.currentIndex+=t/1519:this.currentIndex-=t/1519,this.currentIndex>5&&(this.currentIndex=1),this.currentIndex<1&&(this.currentIndex=5);var n=this.distance+t*e;this.animate(n,e,i)}},animate:function(t,e,i){var n=this;this.temp&&(window.clearInterval(this.temp),this.temp=null),this.temp=window.setInterval((function(){-1===e&&t<n.distance||1===e&&t>n.distance?n.distance+=i*e:(n.transitionEnd=!0,window.clearInterval(n.temp),n.distance=t,t<-7595&&(n.distance=-1519),t>-1519&&(n.distance=-1519))}),20)},jump:function(t){var e=t-this.currentIndex>=0?-1:1,i=1519*Math.abs(t-this.currentIndex),n=0===Math.abs(t-this.currentIndex)?this.speed:Math.abs(t-this.currentIndex)*this.speed;this.move(i,e,n)},play:function(){var t=this;this.timer&&(window.clearInterval(this.timer),this.timer=null),this.timer=window.setInterval((function(){t.move(1519,-1,t.speed)}),this.interval)},stop:function(){window.clearInterval(this.timer),this.timer=null},image2:function(t){"0"==t?this.image1="1":"1"==t?this.image1="2":"2"==t?this.image1="3":"3"==t?this.image1="4":"4"==t&&(this.image1="5")}}}),a=s,c=(i("3686"),i("2877")),o=Object(c["a"])(a,n,r,!1,null,null,null);e["default"]=o.exports},a9e3:function(t,e,i){"use strict";var n=i("83ab"),r=i("da84"),s=i("94ca"),a=i("6eeb"),c=i("5135"),o=i("c6b6"),l=i("7156"),u=i("c04e"),d=i("d039"),f=i("7c73"),p=i("241c").f,h=i("06cf").f,m=i("9bf2").f,g=i("58a8").trim,v="Number",w=r[v],b=w.prototype,I=o(f(b))==v,x=function(t){var e,i,n,r,s,a,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=g(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+l}for(s=l.slice(2),a=s.length,c=0;c<a;c++)if(o=s.charCodeAt(c),o<48||o>r)return NaN;return parseInt(s,n)}return+l};if(s(v,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var y,N=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof N&&(I?d((function(){b.valueOf.call(i)})):o(i)!=v)?l(new w(x(e)),i,N):x(e)},E=n?p(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;E.length>k;k++)c(w,y=E[k])&&!c(N,y)&&m(N,y,h(w,y));N.prototype=b,b.constructor=N,a(r,v,N)}},c0b6:function(t,e,i){var n=i("23e7"),r=i("0538");n({target:"Function",proto:!0},{bind:r})},e60d:function(t,e,i){}}]);
//# sourceMappingURL=chunk-768bcfb4.e4403134.js.map