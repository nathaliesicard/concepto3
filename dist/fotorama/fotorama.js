fotoramaVersion="4.6.4",function(t,e,n,o,i){"use strict";function r(t){var e="bez_"+o.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof o.easing[e]){var n=function(t,e){var n=[null,null],o=[null,null],i=[null,null],r=function(r,a){return i[a]=3*t[a],o[a]=3*(e[a]-t[a])-i[a],n[a]=1-i[a]-o[a],r*(i[a]+r*(o[a]+r*n[a]))},a=function(t){return i[0]+t*(2*o[0]+3*n[0]*t)},s=function(t){for(var e,n=t,o=0;++o<14&&(e=r(n,0)-t,!(Math.abs(e)<.001));)n-=e/a(n);return n};return function(t){return r(s(t),1)}};o.easing[e]=function(e,o,i,r,a){return r*n([t[0],t[1]],[t[2],t[3]])(o/a)+i}}return e}function a(){}function s(t,e,n){return Math.max(isNaN(e)?-1/0:e,Math.min(isNaN(n)?1/0:n,t))}function u(t){return t.match(/ma/)&&t.match(/-?\d+(?!d)/g)[t.match(/3d/)?12:4]}function l(t){return qe?+u(t.css("transform")):+t.css("left").replace("px","")}function c(t){var e={};return qe?e.transform="translate3d("+t+"px,0,0)":e.left=t,e}function f(t){return{"transition-duration":t+"ms"}}function d(t,e){return isNaN(t)?e:t}function h(t,e){return d(+String(t).replace(e||"px",""))}function p(t){return/%$/.test(t)?h(t,"%"):i}function m(t,e){return d(p(t)/100*e,h(t))}function v(t){return(!isNaN(h(t))||!isNaN(h(t,"%")))&&t}function w(t,e,n,o){return(t-(o||0))*(e+(n||0))}function g(t,e,n,o){return-Math.round(t/(e+(n||0))-(o||0))}function y(t){var e=t.data();if(!e.tEnd){var n=t[0],o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};V(n,o[be.prefixed("transition")],function(t){e.tProp&&t.propertyName.match(e.tProp)&&e.onEndFn()}),e.tEnd=!0}}function b(t,e,n,o){var i,r=t.data();r&&(r.onEndFn=function(){i||(i=!0,clearTimeout(r.tT),n())},r.tProp=e,clearTimeout(r.tT),r.tT=setTimeout(function(){r.onEndFn()},1.5*o),y(t))}function x(t,e){if(t.length){var n=t.data();qe?(t.css(f(0)),n.onEndFn=a,clearTimeout(n.tT)):t.stop();var o=_(e,function(){return l(t)});return t.css(c(o)),o}}function _(){for(var t,e=0,n=arguments.length;n>e&&(t=e?arguments[e]():arguments[e],"number"!=typeof t);e++);return t}function C(t,e){return Math.round(t+(e-t)/1.5)}function T(){return T.p=T.p||("https:"===n.protocol?"https://":"http://"),T.p}function k(t){var n=e.createElement("a");return n.href=t,n}function M(t,e){if("string"!=typeof t)return t;t=k(t);var n,o;if(t.host.match(/youtube\.com/)&&t.search){if(n=t.search.split("v=")[1]){var i=n.indexOf("&");-1!==i&&(n=n.substring(0,i)),o="youtube"}}else t.host.match(/youtube\.com|youtu\.be/)?(n=t.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),o="youtube"):t.host.match(/vimeo\.com/)&&(o="vimeo",n=t.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return n&&o||!e||(n=t.href,o="custom"),!!n&&{id:n,type:o,s:t.search.replace(/^\?/,""),p:T()}}function S(t,e,n){var i,r,a=t.video;return"youtube"===a.type?(r=T()+"img.youtube.com/vi/"+a.id+"/default.jpg",i=r.replace(/\/default.jpg$/,"/hqdefault.jpg"),t.thumbsReady=!0):"vimeo"===a.type?o.ajax({url:T()+"vimeo.com/api/v2/video/"+a.id+".json",dataType:"jsonp",success:function(o){t.thumbsReady=!0,F(e,{img:o[0].thumbnail_large,thumb:o[0].thumbnail_small},t.i,n)}}):t.thumbsReady=!0,{img:i,thumb:r}}function F(t,e,n,i){for(var r=0,a=t.length;a>r;r++){var s=t[r];if(s.i===n&&s.thumbsReady){var u={videoReady:!0};u[Ue]=u[Ge]=u[Ye]=!1,i.splice(r,1,o.extend({},s,u,e));break}}}function E(t){function e(t,e,i){var r=t.children("img").eq(0),a=t.attr("href"),s=t.attr("src"),u=r.attr("src"),l=e.video,c=!!i&&M(a,l===!0);c?a=!1:c=l,n(t,r,o.extend(e,{video:c,img:e.img||a||s||u,thumb:e.thumb||u||s||a}))}function n(t,e,n){var i=n.thumb&&n.img!==n.thumb,r=h(n.width||t.attr("width")),a=h(n.height||t.attr("height"));o.extend(n,{width:r,height:a,thumbratio:K(n.thumbratio||h(n.thumbwidth||e&&e.attr("width")||i||r)/h(n.thumbheight||e&&e.attr("height")||i||a))})}var i=[];return t.children().each(function(){var t=o(this),r=H(o.extend(t.data(),{id:t.attr("id")}));if(t.is("a, img"))e(t,r,!0);else{if(t.is(":empty"))return;n(t,null,o.extend(r,{html:this,_html:t.html()}))}i.push(r)}),i}function P(t){return 0===t.offsetWidth&&0===t.offsetHeight}function j(t){return!o.contains(e.documentElement,t)}function N(t,e,n,o){return N.i||(N.i=1,N.ii=[!0]),o=o||N.i,"undefined"==typeof N.ii[o]&&(N.ii[o]=!0),t()?e():N.ii[o]&&setTimeout(function(){N.ii[o]&&N(t,e,n,o)},n||100),N.i++}function $(t){n.replace(n.protocol+"//"+n.host+n.pathname.replace(/^\/?/,"/")+n.search+"#"+t)}function q(t,e,n,o){var i=t.data(),r=i.measures;if(r&&(!i.l||i.l.W!==r.width||i.l.H!==r.height||i.l.r!==r.ratio||i.l.w!==e.w||i.l.h!==e.h||i.l.m!==n||i.l.p!==o)){var a=r.width,u=r.height,l=e.w/e.h,c=r.ratio>=l,f="scaledown"===n,d="contain"===n,h="cover"===n,p=J(o);c&&(f||d)||!c&&h?(a=s(e.w,0,f?a:1/0),u=a/r.ratio):(c&&h||!c&&(f||d))&&(u=s(e.h,0,f?u:1/0),a=u*r.ratio),t.css({width:a,height:u,left:m(p.x,e.w-a),top:m(p.y,e.h-u)}),i.l={W:r.width,H:r.height,r:r.ratio,w:e.w,h:e.h,m:n,p:o}}return!0}function A(t,e){var n=t[0];n.styleSheet?n.styleSheet.cssText=e:t.html(e)}function z(t,e,n){return e!==n&&(e>=t?"left":t>=n?"right":"left right")}function L(t,e,n,o){if(!n)return!1;if(!isNaN(t))return t-(o?0:1);for(var i,r=0,a=e.length;a>r;r++){var s=e[r];if(s.id===t){i=r;break}}return i}function O(t,e,n){n=n||{},t.each(function(){var t,i=o(this),r=i.data();r.clickOn||(r.clickOn=!0,o.extend(nt(i,{onStart:function(e){t=e,(n.onStart||a).call(this,e)},onMove:n.onMove||a,onTouchEnd:n.onTouchEnd||a,onEnd:function(n){n.moved||e.call(this,t)}}),{noMove:!0}))})}function I(t,e){return'<div class="'+t+'">'+(e||"")+"</div>"}function D(t){for(var e=t.length;e;){var n=Math.floor(Math.random()*e--),o=t[e];t[e]=t[n],t[n]=o}return t}function R(t){return"[object Array]"==Object.prototype.toString.call(t)&&o.map(t,function(t){return o.extend({},t)})}function W(t,e,n){t.scrollLeft(e||0).scrollTop(n||0)}function H(t){if(t){var e={};return o.each(t,function(t,n){e[t.toLowerCase()]=n}),e}}function K(t){if(t){var e=+t;return isNaN(e)?(e=t.split("/"),+e[0]/+e[1]||i):e}}function V(t,e,n,o){e&&(t.addEventListener?t.addEventListener(e,n,!!o):t.attachEvent("on"+e,n))}function B(t){return!!t.getAttribute("disabled")}function X(t){return{tabindex:-1*t+"",disabled:t}}function Q(t,e){V(t,"keyup",function(n){B(t)||13==n.keyCode&&e.call(t,n)})}function U(t,e){V(t,"focus",t.onfocusin=function(n){e.call(t,n)},!0)}function Y(t,e){t.preventDefault?t.preventDefault():t.returnValue=!1,e&&t.stopPropagation&&t.stopPropagation()}function G(t){return t?">":"<"}function J(t){return t=(t+"").split(/\s+/),{x:v(t[0])||en,y:v(t[1])||en}}function Z(t,e){var n=t.data(),i=Math.round(e.pos),r=function(){n.sliding=!1,(e.onEnd||a)()};"undefined"!=typeof e.overPos&&e.overPos!==e.pos&&(i=e.overPos,r=function(){Z(t,o.extend({},e,{overPos:e.pos,time:Math.max(We,e.time/2)}))});var s=o.extend(c(i),e.width&&{width:e.width});n.sliding=!0,qe?(t.css(o.extend(f(e.time),s)),e.time>10?b(t,"transform",r,e.time):r()):t.stop().animate(s,e.time,Ze,r)}function tt(t,e,n,i,r,s){var u="undefined"!=typeof s;if(u||(r.push(arguments),Array.prototype.push.call(arguments,r.length),!(r.length>1))){t=t||o(t),e=e||o(e);var l=t[0],c=e[0],f="crossfade"===i.method,d=function(){if(!d.done){d.done=!0;var t=(u||r.shift())&&r.shift();t&&tt.apply(this,t),(i.onEnd||a)(!!t)}},h=i.time/(s||1);n.removeClass(Ht+" "+Wt),t.stop().addClass(Ht),e.stop().addClass(Wt),f&&c&&t.fadeTo(0,0),t.fadeTo(f?h:0,1,f&&d),e.fadeTo(h,0,d),l&&f||c||d()}}function et(t){var e=(t.touches||[])[0]||t;t._x=e.pageX,t._y=e.clientY,t._now=o.now()}function nt(t,n){function i(t){return d=o(t.target),b.checked=m=v=g=!1,c||b.flow||t.touches&&t.touches.length>1||t.which>1||rn&&rn.type!==t.type&&sn||(m=n.select&&d.is(n.select,y))?m:(p="touchstart"===t.type,v=d.is("a, a *",y),h=b.control,w=b.noMove||b.noSwipe||h?16:b.snap?0:4,et(t),f=rn=t,an=t.type.replace(/down|start/,"move").replace(/Down/,"Move"),(n.onStart||a).call(y,t,{control:h,$target:d}),c=b.flow=!0,void((!p||b.go)&&Y(t)))}function r(t){if(t.touches&&t.touches.length>1||Ie&&!t.isPrimary||an!==t.type||!c)return c&&s(),void(n.onTouchEnd||a)();et(t);var e=Math.abs(t._x-f._x),o=Math.abs(t._y-f._y),i=e-o,r=(b.go||b.x||i>=0)&&!b.noSwipe,u=0>i;p&&!b.checked?(c=r)&&Y(t):(Y(t),(n.onMove||a).call(y,t,{touch:p})),!g&&Math.sqrt(Math.pow(e,2)+Math.pow(o,2))>w&&(g=!0),b.checked=b.checked||r||u}function s(t){(n.onTouchEnd||a)();var e=c;b.control=c=!1,e&&(b.flow=!1),!e||v&&!b.checked||(t&&Y(t),sn=!0,clearTimeout(un),un=setTimeout(function(){sn=!1},1e3),(n.onEnd||a).call(y,{moved:g,$target:d,control:h,touch:p,startEvent:f,aborted:!t||"MSPointerCancel"===t.type}))}function u(){b.flow||setTimeout(function(){b.flow=!0},10)}function l(){b.flow&&setTimeout(function(){b.flow=!1},Re)}var c,f,d,h,p,m,v,w,g,y=t[0],b={};return Ie?(V(y,"MSPointerDown",i),V(e,"MSPointerMove",r),V(e,"MSPointerCancel",s),V(e,"MSPointerUp",s)):(V(y,"touchstart",i),V(y,"touchmove",r),V(y,"touchend",s),V(e,"touchstart",u),V(e,"touchend",l),V(e,"touchcancel",l),Pe.on("scroll",l),t.on("mousedown",i),je.on("mousemove",r).on("mouseup",s)),t.on("click","a",function(t){b.checked&&Y(t)}),b}function ot(t,e){function n(n,o){M=!0,l=f=n._x,v=n._now,m=[[v,l]],d=h=E.noMove||o?0:x(t,(e.getPos||a)()),(e.onStart||a).call(S,n)}function i(t,e){g=E.min,y=E.max,b=E.snap,_=t.altKey,M=k=!1,T=e.control,T||F.sliding||n(t)}function r(o,i){E.noSwipe||(M||n(o),f=o._x,m.push([o._now,f]),h=d-(l-f),p=z(h,g,y),g>=h?h=C(h,g):h>=y&&(h=C(h,y)),E.noMove||(t.css(c(h)),k||(k=!0,i.touch||Ie||t.addClass(ie)),(e.onMove||a).call(S,o,{pos:h,edge:p})))}function u(i){if(!E.noSwipe||!i.moved){M||n(i.startEvent,!0),i.touch||Ie||t.removeClass(ie),w=o.now();for(var r,u,l,c,p,v,x,C,T,k=w-Re,F=null,P=We,j=e.friction,N=m.length-1;N>=0;N--){if(r=m[N][0],u=Math.abs(r-k),null===F||l>u)F=r,c=m[N][1];else if(F===k||u>l)break;l=u}x=s(h,g,y);var $=c-f,q=$>=0,A=w-F,z=A>Re,L=!z&&h!==d&&x===h;b&&(x=s(Math[L?q?"floor":"ceil":"round"](h/b)*b,g,y),g=y=x),L&&(b||x===h)&&(T=-($/A),P*=s(Math.abs(T),e.timeLow,e.timeHigh),p=Math.round(h+T*P/j),b||(x=p),(!q&&p>y||q&&g>p)&&(v=q?g:y,C=p-v,b||(x=v),C=s(x+.03*C,v-50,v+50),P=Math.abs((h-C)/(T/j)))),P*=_?10:1,(e.onEnd||a).call(S,o.extend(i,{moved:i.moved||z&&b,pos:h,newPos:x,overPos:C,time:P}))}}var l,f,d,h,p,m,v,w,g,y,b,_,T,k,M,S=t[0],F=t.data(),E={};return E=o.extend(nt(e.$wrap,o.extend({},e,{onStart:i,onMove:r,onEnd:u})),E)}function it(t,e){var n,i,r,s=t[0],u={prevent:{}};return V(s,De,function(t){var s=t.wheelDeltaY||-1*t.deltaY||0,l=t.wheelDeltaX||-1*t.deltaX||0,c=Math.abs(l)&&!Math.abs(s),f=G(0>l),d=i===f,h=o.now(),p=Re>h-r;i=f,r=h,c&&u.ok&&(!u.prevent[f]||n)&&(Y(t,!0),n&&d&&p||(e.shift&&(n=!0,clearTimeout(u.t),u.t=setTimeout(function(){n=!1},He)),(e.onEnd||a)(t,e.shift?f:l)))}),u}function rt(){o.each(o.Fotorama.instances,function(t,e){e.index=t})}function at(t){o.Fotorama.instances.push(t),rt()}function st(t){o.Fotorama.instances.splice(t.index,1),rt()}var ut="fotorama",lt="fullscreen",ct=ut+"__wrap",ft=ct+"--css2",dt=ct+"--css3",ht=ct+"--video",pt=ct+"--fade",mt=ct+"--slide",vt=ct+"--no-controls",wt=ct+"--no-shadows",gt=ct+"--pan-y",yt=ct+"--rtl",bt=ct+"--only-active",xt=ct+"--no-captions",_t=ct+"--toggle-arrows",Ct=ut+"__stage",Tt=Ct+"__frame",kt=Tt+"--video",Mt=Ct+"__shaft",St=ut+"__grab",Ft=ut+"__pointer",Et=ut+"__arr",Pt=Et+"--disabled",jt=Et+"--prev",Nt=Et+"--next",$t=ut+"__nav",qt=$t+"-wrap",At=$t+"__shaft",zt=$t+"--dots",Lt=$t+"--thumbs",Ot=$t+"__frame",It=Ot+"--dot",Dt=Ot+"--thumb",Rt=ut+"__fade",Wt=Rt+"-front",Ht=Rt+"-rear",Kt=ut+"__shadow",Vt=Kt+"s",Bt=Vt+"--left",Xt=Vt+"--right",Qt=ut+"__active",Ut=ut+"__select",Yt=ut+"--hidden",Gt=ut+"--fullscreen",Jt=ut+"__fullscreen-icon",Zt=ut+"__error",te=ut+"__loading",ee=ut+"__loaded",ne=ee+"--full",oe=ee+"--img",ie=ut+"__grabbing",re=ut+"__img",ae=re+"--full",se=ut+"__dot",ue=ut+"__thumb",le=ue+"-border",ce=ut+"__html",fe=ut+"__video",de=fe+"-play",he=fe+"-close",pe=ut+"__caption",me=ut+"__caption__wrap",ve=ut+"__spinner",we='" tabindex="0" role="button',ge=o&&o.fn.jquery.split(".");if(!ge||ge[0]<1||1==ge[0]&&ge[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var ye={},be=function(t,e,n){function o(t){w.cssText=t}function i(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var o in t){var i=t[o];if(!r(i,"-")&&w[i]!==n)return"pfx"!=e||i}return!1}function s(t,e,o){for(var r in t){var a=e[t[r]];if(a!==n)return o===!1?t[r]:i(a,"function")?a.bind(o||e):a}return!1}function u(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),r=(t+" "+b.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?a(r,e):(r=(t+" "+x.join(o+" ")+o).split(" "),s(r,e,n))}var l,c,f,d="2.6.2",h={},p=e.documentElement,m="modernizr",v=e.createElement(m),w=v.style,g=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),y="Webkit Moz O ms",b=y.split(" "),x=y.toLowerCase().split(" "),_={},C=[],T=C.slice,k=function(t,n,o,i){var r,a,s,u,l=e.createElement("div"),c=e.body,f=c||e.createElement("body");if(parseInt(o,10))for(;o--;)s=e.createElement("div"),s.id=i?i[o]:m+(o+1),l.appendChild(s);return r=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),l.id=m,(c?l:f).innerHTML+=r,f.appendChild(l),c||(f.style.background="",f.style.overflow="hidden",u=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),a=n(l,t),c?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),p.style.overflow=u),!!a},M={}.hasOwnProperty;f=i(M,"undefined")||i(M.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return M.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=T.call(arguments,1),o=function(){if(this instanceof o){var i=function(){};i.prototype=e.prototype;var r=new i,a=e.apply(r,n.concat(T.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(T.call(arguments)))};return o}),_.csstransforms3d=function(){var t=!!u("perspective");return t};for(var S in _)f(_,S)&&(c=S.toLowerCase(),h[c]=_[S](),C.push((h[c]?"":"no-")+c));return h.addTest=function(t,e){if("object"==typeof t)for(var o in t)f(t,o)&&h.addTest(o,t[o]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof enableClasses&&enableClasses&&(p.className+=" "+(e?"":"no-")+t),h[t]=e}return h},o(""),v=l=null,h._version=d,h._prefixes=g,h._domPrefixes=x,h._cssomPrefixes=b,h.testProp=function(t){return a([t])},h.testAllProps=u,h.testStyles=k,h.prefixed=function(t,e,n){return e?u(t,e,n):u(t,"pfx")},h}(t,e),xe={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},_e="webkit moz o ms khtml".split(" ");if("undefined"!=typeof e.cancelFullScreen)xe.ok=!0;else for(var Ce=0,Te=_e.length;Te>Ce;Ce++)if(xe.prefix=_e[Ce],"undefined"!=typeof e[xe.prefix+"CancelFullScreen"]){xe.ok=!0;break}xe.ok&&(xe.event=xe.prefix+"fullscreenchange",xe.is=function(){switch(this.prefix){case"":return e.fullScreen;case"webkit":return e.webkitIsFullScreen;default:return e[this.prefix+"FullScreen"]}},xe.request=function(t){return""===this.prefix?t.requestFullScreen():t[this.prefix+"RequestFullScreen"]()},xe.cancel=function(){return""===this.prefix?e.cancelFullScreen():e[this.prefix+"CancelFullScreen"]()});var ke,Me={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Se={top:"auto",left:"auto",className:""};!function(t,e){ke=e()}(this,function(){function t(t,n){var o,i=e.createElement(t||"div");for(o in n)i[o]=n[o];return i}function n(t){for(var e=1,n=arguments.length;n>e;e++)t.appendChild(arguments[e]);return t}function o(t,e,n,o){var i=["opacity",e,~~(100*t),n,o].join("-"),r=.01+n/o*100,a=Math.max(1-(1-t)/e*(100-r),t),s=d.substring(0,d.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return p[i]||(m.insertRule("@"+u+"keyframes "+i+"{0%{opacity:"+a+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+a+"}}",m.cssRules.length),p[i]=1),i}function r(t,e){var n,o,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<h.length;o++)if(n=h[o]+e,r[n]!==i)return n;return r[e]!==i?e:void 0}function a(t,e){for(var n in e)t.style[r(t,n)||n]=e[n];return t}function s(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]===i&&(t[o]=n[o])}return t}function u(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function l(t,e){return"string"==typeof t?t:t[e%t.length]}function c(t){return"undefined"==typeof this?new c(t):void(this.opts=s(t||{},c.defaults,v))}function f(){function e(e,n){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}m.addRule(".spin-vml","behavior:url(#default#VML)"),c.prototype.lines=function(t,o){function i(){return a(e("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function r(t,r,s){n(d,n(a(i(),{rotation:360/o.lines*t+"deg",left:~~r}),n(a(e("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:s}),e("fill",{color:l(o.color,t),opacity:o.opacity}),e("stroke",{opacity:0}))))}var s,u=o.length+o.width,c=2*u,f=2*-(o.width+o.length)+"px",d=a(i(),{position:"absolute",top:f,left:f});if(o.shadow)for(s=1;s<=o.lines;s++)r(s,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(s=1;s<=o.lines;s++)r(s);return n(t,d)},c.prototype.opacity=function(t,e,n,o){var i=t.firstChild;o=o.shadow&&o.lines||0,i&&e+o<i.childNodes.length&&(i=i.childNodes[e+o],i=i&&i.firstChild,i=i&&i.firstChild,i&&(i.opacity=n))}}var d,h=["webkit","Moz","ms","O"],p={},m=function(){var o=t("style",{type:"text/css"});return n(e.getElementsByTagName("head")[0],o),o.sheet||o.styleSheet}(),v={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};c.defaults={},s(c.prototype,{spin:function(e){this.stop();var n,o,i=this,r=i.opts,s=i.el=a(t(0,{className:r.className}),{position:r.position,width:0,zIndex:r.zIndex}),l=r.radius+r.length+r.width;if(e&&(e.insertBefore(s,e.firstChild||null),o=u(e),n=u(s),a(s,{left:("auto"==r.left?o.x-n.x+(e.offsetWidth>>1):parseInt(r.left,10)+l)+"px",top:("auto"==r.top?o.y-n.y+(e.offsetHeight>>1):parseInt(r.top,10)+l)+"px"})),s.setAttribute("role","progressbar"),i.lines(s,i.opts),!d){var c,f=0,h=(r.lines-1)*(1-r.direction)/2,p=r.fps,m=p/r.speed,v=(1-r.opacity)/(m*r.trail/100),w=m/r.lines;!function t(){f++;for(var e=0;e<r.lines;e++)c=Math.max(1-(f+(r.lines-e)*w)%m*v,r.opacity),i.opacity(s,e*r.direction+h,c,r);i.timeout=i.el&&setTimeout(t,~~(1e3/p))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=i),this},lines:function(e,i){function r(e,n){return a(t(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:e,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*u+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(var s,u=0,c=(i.lines-1)*(1-i.direction)/2;u<i.lines;u++)s=a(t(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:d&&o(i.opacity,i.trail,c+u*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&n(s,a(r("#000","0 0 4px #000"),{top:"2px"})),n(e,n(s,r(l(i.color,u),"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,n){e<t.childNodes.length&&(t.childNodes[e].style.opacity=n)}});var w=a(t("group"),{behavior:"url(#default#VML)"});return!r(w,"transform")&&w.adj?f():d=r(w,"animation"),c});var Fe,Ee,Pe=o(t),je=o(e),Ne="quirks"===n.hash.replace("#",""),$e=be.csstransforms3d,qe=$e&&!Ne,Ae=$e||"CSS1Compat"===e.compatMode,ze=xe.ok,Le=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Oe=!qe||Le,Ie=navigator.msPointerEnabled,De="onwheel"in e.createElement("div")?"wheel":e.onmousewheel!==i?"mousewheel":"DOMMouseScroll",Re=250,We=300,He=1400,Ke=5e3,Ve=2,Be=64,Xe=500,Qe=333,Ue="$stageFrame",Ye="$navDotFrame",Ge="$navThumbFrame",Je="auto",Ze=r([.1,0,.25,1]),tn=99999,en="50%",nn={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Ve,glimpse:0,fit:"contain",position:en,thumbposition:en,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Be,thumbheight:Be,thumbmargin:Ve,thumbborderwidth:Ve,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:We,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},on={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};N.stop=function(t){N.ii[t]=!1};var rn,an,sn,un;jQuery.Fotorama=function(t,i){function r(){o.each(kn,function(t,e){if(!e.i){e.i=po++;var n=M(e.video,!0);if(n){var o={};e.video=n,e.img||e.thumb?e.thumbsReady=!0:o=S(e,kn,lo),F(kn,{img:o.img,thumb:o.thumb},e.i,lo)}}})}function a(t){return Jn[t]||lo.fullScreen}function u(t){var e="keydown."+ut,n=ut+co,o="keydown."+n,r="resize."+n+" orientationchange."+n;t?(je.on(o,function(t){var e,n;En&&27===t.keyCode?(e=!0,hn(En,!0,!0)):(lo.fullScreen||i.keyboard&&!lo.index)&&(27===t.keyCode?(e=!0,lo.cancelFullScreen()):t.shiftKey&&32===t.keyCode&&a("space")||37===t.keyCode&&a("left")||38===t.keyCode&&a("up")?n="<":32===t.keyCode&&a("space")||39===t.keyCode&&a("right")||40===t.keyCode&&a("down")?n=">":36===t.keyCode&&a("home")?n="<<":35===t.keyCode&&a("end")&&(n=">>")),(e||n)&&Y(t),n&&lo.show({index:n,slow:t.altKey,user:!0})}),lo.index||je.off(e).on(e,"textarea, input, select",function(t){!Ee.hasClass(lt)&&t.stopPropagation()}),Pe.on(r,lo.resize)):(je.off(o),Pe.off(r))}function l(e){e!==l.f&&(e?(t.html("").addClass(ut+" "+fo).append(go).before(vo).before(wo),at(lo)):(go.detach(),vo.detach(),wo.detach(),t.html(mo.urtext).removeClass(fo),st(lo)),u(e),l.f=e)}function d(){kn=lo.data=kn||R(i.data)||E(t),Mn=lo.size=kn.length,!Tn.ok&&i.shuffle&&D(kn),r(),Lo=T(Lo),Mn&&l(!0)}function p(){var t=2>Mn&&!i.enableifsingleframe||En;Do.noMove=t||Vn,Do.noSwipe=t||!i.swipe,!Un&&bo.toggleClass(St,!i.click&&!Do.noMove&&!Do.noSwipe),Ie&&go.toggleClass(gt,!Do.noSwipe)}function y(t){t===!0&&(t=""),i.autoplay=Math.max(+t||Ke,1.5*Qn)}function b(){function t(t,n){e[t?"add":"remove"].push(n)}lo.options=i=H(i),Vn="crossfade"===i.transition||"dissolve"===i.transition,In=i.loop&&(Mn>2||Vn&&(!Un||"slide"!==Un)),Qn=+i.transitionduration||We,Gn="rtl"===i.direction,Jn=o.extend({},i.keyboard&&on,i.keyboard);var e={add:[],remove:[]};Mn>1||i.enableifsingleframe?(Dn=i.nav,Wn="top"===i.navposition,e.remove.push(Ut),To.toggle(!!i.arrows)):(Dn=!1,To.hide()),Ht(),Fn=new ke(o.extend(Me,i.spinner,Se,{direction:Gn?-1:1})),Ne(),$e(),i.autoplay&&y(i.autoplay),Bn=h(i.thumbwidth)||Be,Xn=h(i.thumbheight)||Be,Ro.ok=Ho.ok=i.trackpad&&!Oe,p(),rn(i,[Io]),Rn="thumbs"===Dn,Rn?(fe(Mn,"navThumb"),Sn=Eo,uo=Ge,A(vo,o.Fotorama.jst.style({w:Bn,h:Xn,b:i.thumbborderwidth,m:i.thumbmargin,s:co,q:!Ae})),Mo.addClass(Lt).removeClass(zt)):"dots"===Dn?(fe(Mn,"navDot"),Sn=Fo,uo=Ye,Mo.addClass(zt).removeClass(Lt)):(Dn=!1,Mo.removeClass(Lt+" "+zt)),Dn&&(Wn?ko.insertBefore(yo):ko.insertAfter(yo),_e.nav=!1,_e(Sn,So,"nav")),Hn=i.allowfullscreen,Hn?(jo.prependTo(yo),Kn=ze&&"native"===Hn):(jo.detach(),Kn=!1),t(Vn,pt),t(!Vn,mt),t(!i.captions,xt),t(Gn,yt),t("always"!==i.arrows,_t),Yn=i.shadows&&!Oe,t(!Yn,wt),go.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")),Oo=o.extend({},i)}function C(t){return 0>t?(Mn+t%Mn)%Mn:t>=Mn?t%Mn:t}function T(t){return s(t,0,Mn-1)}function k(t){return In?C(t):T(t)}function P(t){return!!(t>0||In)&&t-1}function B(t){return!!(Mn-1>t||In)&&t+1}function J(){Do.min=In?-1/0:-w(Mn-1,Io.w,i.margin,Nn),Do.max=In?1/0:-w(0,Io.w,i.margin,Nn),Do.snap=Io.w+i.margin}function et(){Wo.min=Math.min(0,Io.nw-So.width()),Wo.max=0,So.toggleClass(St,!(Wo.noMove=Wo.min===Wo.max))}function nt(t,e,n){if("number"==typeof t){t=new Array(t);var i=!0}return o.each(t,function(t,o){if(i&&(o=t),"number"==typeof o){var r=kn[C(o)];if(r){var a="$"+e+"Frame",s=r[a];n.call(this,t,o,r,s,a,s&&s.data())}}})}function rt(t,e,n,o){(!Zn||"*"===Zn&&o===On)&&(t=v(i.width)||v(t)||Xe,e=v(i.height)||v(e)||Qe,lo.resize({width:t,ratio:i.ratio||n||t/e},0,o!==On&&"*"))}function Rt(t,e,n,r,a,s){nt(t,e,function(t,u,l,c,f,d){function h(t){var e=C(u);an(t,{index:e,src:_,frame:kn[e]})}function p(){y.remove(),o.Fotorama.cache[_]="error",l.html&&"stage"===e||!T||T===_?(!_||l.html||w?"stage"===e&&(c.trigger("f:load").removeClass(te+" "+Zt).addClass(ee),h("load"),rt()):(c.trigger("f:error").removeClass(te).addClass(Zt),h("error")),d.state="error",!(Mn>1&&kn[u]===l)||l.html||l.deleted||l.video||w||(l.deleted=!0,lo.splice(u,1))):(l[x]=_=T,Rt([u],e,n,r,a,!0))}function m(){o.Fotorama.measures[_]=b.measures=o.Fotorama.measures[_]||{width:g.width,height:g.height,ratio:g.width/g.height},rt(b.measures.width,b.measures.height,b.measures.ratio,u),y.off("load error").addClass(re+(w?" "+ae:"")).prependTo(c),q(y,(o.isFunction(n)?n():n)||Io,r||l.fit||i.fit,a||l.position||i.position),o.Fotorama.cache[_]=d.state="loaded",setTimeout(function(){c.trigger("f:load").removeClass(te+" "+Zt).addClass(ee+" "+(w?ne:oe)),"stage"===e?h("load"):(l.thumbratio===Je||!l.thumbratio&&i.thumbratio===Je)&&(l.thumbratio=b.measures.ratio,_n())},0)}function v(){var t=10;N(function(){return!ao||!t--&&!Oe},function(){m()})}if(c){var w=lo.fullScreen&&l.full&&l.full!==l.img&&!d.$full&&"stage"===e;if(!d.$img||s||w){var g=new Image,y=o(g),b=y.data();d[w?"$full":"$img"]=y;var x="stage"===e?w?"full":"img":"thumb",_=l[x],T=w?null:l["stage"===e?"thumb":"img"];if("navThumb"===e&&(c=d.$wrap),!_)return void p();o.Fotorama.cache[_]?!function t(){"error"===o.Fotorama.cache[_]?p():"loaded"===o.Fotorama.cache[_]?setTimeout(v,0):setTimeout(t,100)}():(o.Fotorama.cache[_]="*",y.on("load",v).on("error",p)),d.state="",g.src=_}}})}function Wt(t){zo.append(Fn.spin().el).appendTo(t)}function Ht(){zo.detach(),Fn&&Fn.stop()}function Kt(){var t=Pn[Ue];t&&!t.data().state&&(Wt(t),t.on("f:load f:error",function(){t.off("f:load f:error"),Ht()}))}function ie(t){Q(t,yn),U(t,function(){setTimeout(function(){W(Mo)},0),He({time:Qn,guessIndex:o(this).data().eq,minMax:Wo})})}function fe(t,e){nt(t,e,function(t,n,i,r,a,s){if(!r){r=i[a]=go[a].clone(),s=r.data(),s.data=i;var u=r[0];"stage"===e?(i.html&&o('<div class="'+ce+'"></div>').append(i._html?o(i.html).removeAttr("id").html(i._html):i.html).appendTo(r),i.caption&&o(I(pe,I(me,i.caption))).appendTo(r),i.video&&r.addClass(kt).append($o.clone()),U(u,function(){setTimeout(function(){W(yo)},0),vn({index:s.eq,user:!0})}),xo=xo.add(r)):"navDot"===e?(ie(u),Fo=Fo.add(r)):"navThumb"===e&&(ie(u),s.$wrap=r.children(":first"),Eo=Eo.add(r),i.video&&s.$wrap.append($o.clone()))}})}function ge(t,e,n,o){return t&&t.length&&q(t,e,n,o)}function ye(t){nt(t,"stage",function(t,e,n,r,a,s){if(r){var u=C(e),l=n.fit||i.fit,c=n.position||i.position;s.eq=u,Vo[Ue][u]=r.css(o.extend({left:Vn?0:w(e,Io.w,i.margin,Nn)},Vn&&f(0))),j(r[0])&&(r.appendTo(bo),hn(n.$video)),ge(s.$img,Io,l,c),ge(s.$full,Io,l,c)}})}function be(t,e){if("thumbs"===Dn&&!isNaN(t)){var n=-t,r=-t+Io.nw;Eo.each(function(){var t=o(this),a=t.data(),s=a.eq,u=function(){return{h:Xn,w:a.w}},l=u(),c=kn[s]||{},f=c.thumbfit||i.thumbfit,d=c.thumbposition||i.thumbposition;l.w=a.w,a.l+a.w<n||a.l>r||ge(a.$img,l,f,d)||e&&Rt([s],"navThumb",u,f,d)})}}function _e(t,e,n){if(!_e[n]){var r="nav"===n&&Rn,a=0;e.append(t.filter(function(){for(var t,e=o(this),n=e.data(),i=0,r=kn.length;r>i;i++)if(n.data===kn[i]){t=!0,n.eq=i;break}return t||e.remove()&&!1}).sort(function(t,e){return o(t).data().eq-o(e).data().eq}).each(function(){if(r){var t=o(this),e=t.data(),n=Math.round(Xn*e.data.thumbratio)||Bn;e.l=a,e.w=n,t.css({width:n}),a+=n+i.thumbmargin}})),_e[n]=!0}}function Ce(t){return t-Bo>Io.w/3}function Te(t){return!(In||Lo+t&&Lo-Mn+t||En)}function Ne(){var t=Te(0),e=Te(1);_o.toggleClass(Pt,t).attr(X(t)),Co.toggleClass(Pt,e).attr(X(e))}function $e(){Ro.ok&&(Ro.prevent={"<":Te(0),">":Te(1)})}function Le(t){var e,n,o=t.data();return Rn?(e=o.l,n=o.w):(e=t.position().left,n=t.width()),{c:e+n/2,min:-e+10*i.thumbmargin,max:-e+Io.w-n-10*i.thumbmargin}}function De(t){var e=Pn[uo].data();Z(Po,{time:1.2*t,pos:e.l,width:e.w-2*i.thumbborderwidth})}function He(t){var e=kn[t.guessIndex][uo];if(e){var n=Wo.min!==Wo.max,o=t.minMax||n&&Le(Pn[uo]),i=n&&(t.keep&&He.l?He.l:s((t.coo||Io.nw/2)-Le(e).c,o.min,o.max)),r=n&&s(i,Wo.min,Wo.max),a=1.1*t.time;Z(So,{time:a,pos:r||0,onEnd:function(){be(r,!0)}}),dn(Mo,z(r,Wo.min,Wo.max)),He.l=i}}function Ve(){Ze(uo),Ko[uo].push(Pn[uo].addClass(Qt))}function Ze(t){for(var e=Ko[t];e.length;)e.shift().removeClass(Qt)}function en(t){var e=Vo[t];o.each(jn,function(t,n){delete e[C(n)]}),o.each(e,function(t,n){delete e[t],n.detach()})}function nn(t){Nn=$n=Lo;var e=Pn[Ue];e&&(Ze(Ue),Ko[Ue].push(e.addClass(Qt)),t||lo.show.onEnd(!0),x(bo,0,!0),en(Ue),ye(jn),J(),et())}function rn(t,e){t&&o.each(e,function(e,n){n&&o.extend(n,{width:t.width||n.width,height:t.height,minwidth:t.minwidth,maxwidth:t.maxwidth,minheight:t.minheight,maxheight:t.maxheight,ratio:K(t.ratio)})})}function an(e,n){t.trigger(ut+":"+e,[lo,n])}function sn(){clearTimeout(un.t),ao=1,i.stopautoplayontouch?lo.stopAutoplay():oo=!0}function un(){ao&&(i.stopautoplayontouch||(ln(),cn()),un.t=setTimeout(function(){ao=0},We+Re))}function ln(){oo=!(!En&&!io)}function cn(){if(clearTimeout(cn.t),N.stop(cn.w),!i.autoplay||oo)return void(lo.autoplay&&(lo.autoplay=!1,an("stopautoplay")));lo.autoplay||(lo.autoplay=!0,an("startautoplay"));var t=Lo,e=Pn[Ue].data();cn.w=N(function(){return e.state||t!==Lo},function(){cn.t=setTimeout(function(){if(!oo&&t===Lo){var e=Ln,n=kn[e][Ue].data();cn.w=N(function(){return n.state||e!==Ln},function(){oo||e!==Ln||lo.show(In?G(!Gn):Ln)})}},i.autoplay)})}function fn(){lo.fullScreen&&(lo.fullScreen=!1,ze&&xe.cancel(ho),Ee.removeClass(lt),Fe.removeClass(lt),t.removeClass(Gt).insertAfter(wo),Io=o.extend({},ro),hn(En,!0,!0),gn("x",!1),lo.resize(),Rt(jn,"stage"),W(Pe,eo,to),an("fullscreenexit"))}function dn(t,e){Yn&&(t.removeClass(Bt+" "+Xt),e&&!En&&t.addClass(e.replace(/^|\s/g," "+Vt+"--")))}function hn(t,e,n){e&&(go.removeClass(ht),En=!1,p()),t&&t!==En&&(t.remove(),an("unloadvideo")),n&&(ln(),cn())}function pn(t){go.toggleClass(vt,t)}function mn(t){if(!Do.flow){var e=t?t.pageX:mn.x,n=e&&!Te(Ce(e))&&i.click;mn.p!==n&&yo.toggleClass(Ft,n)&&(mn.p=n,mn.x=e)}}function vn(t){clearTimeout(vn.t),i.clicktransition&&i.clicktransition!==i.transition?setTimeout(function(){var e=i.transition;lo.setOptions({transition:i.clicktransition}),Un=e,vn.t=setTimeout(function(){lo.show(t)},10)},0):lo.show(t)}function wn(t,e){var n=t.target,r=o(n);r.hasClass(de)?lo.playVideo():n===No?lo.toggleFullScreen():En?n===Ao&&hn(En,!0,!0):e?pn():i.click&&vn({index:t.shiftKey||G(Ce(t._x)),slow:t.altKey,user:!0})}function gn(t,e){Do[t]=Wo[t]=e}function yn(t){var e=o(this).data().eq;vn({index:e,slow:t.altKey,user:!0,coo:t._x-Mo.offset().left})}function bn(t){vn({index:To.index(this)?">":"<",slow:t.altKey,user:!0})}function xn(t){U(t,function(){setTimeout(function(){W(yo)},0),pn(!1)})}function _n(){if(d(),b(),!_n.i){_n.i=!0;var t=i.startindex;(t||i.hash&&n.hash)&&(On=L(t||n.hash.replace(/^#/,""),kn,0===lo.index||t,t)),Lo=Nn=$n=qn=On=k(On)||0}if(Mn){if(Cn())return;En&&hn(En,!0),jn=[],en(Ue),_n.ok=!0,lo.show({index:Lo,time:0}),lo.resize()}else lo.destroy()}function Cn(){return!Cn.f===Gn?(Cn.f=Gn,Lo=Mn-1-Lo,lo.reverse(),!0):void 0}function Tn(){Tn.ok||(Tn.ok=!0,an("ready"))}Fe=o("html"),Ee=o("body");var kn,Mn,Sn,Fn,En,Pn,jn,Nn,$n,qn,An,zn,Ln,On,In,Dn,Rn,Wn,Hn,Kn,Vn,Bn,Xn,Qn,Un,Yn,Gn,Jn,Zn,to,eo,no,oo,io,ro,ao,so,uo,lo=this,co=o.now(),fo=ut+co,ho=t[0],po=1,mo=t.data(),vo=o("<style></style>"),wo=o(I(Yt)),go=o(I(ct)),yo=o(I(Ct)).appendTo(go),bo=(yo[0],o(I(Mt)).appendTo(yo)),xo=o(),_o=o(I(Et+" "+jt+we)),Co=o(I(Et+" "+Nt+we)),To=_o.add(Co).appendTo(yo),ko=o(I(qt)),Mo=o(I($t)).appendTo(ko),So=o(I(At)).appendTo(Mo),Fo=o(),Eo=o(),Po=(bo.data(),
So.data(),o(I(le)).appendTo(So)),jo=o(I(Jt+we)),No=jo[0],$o=o(I(de)),qo=o(I(he)).appendTo(yo),Ao=qo[0],zo=o(I(ve)),Lo=!1,Oo={},Io={},Do={},Ro={},Wo={},Ho={},Ko={},Vo={},Bo=0,Xo=[];go[Ue]=o(I(Tt)),go[Ge]=o(I(Ot+" "+Dt+we,I(ue))),go[Ye]=o(I(Ot+" "+It+we,I(se))),Ko[Ue]=[],Ko[Ge]=[],Ko[Ye]=[],Vo[Ue]={},go.addClass(qe?dt:ft).toggleClass(vt,!i.controlsonstart),mo.fotorama=this,lo.startAutoplay=function(t){return lo.autoplay?this:(oo=io=!1,y(t||i.autoplay),cn(),this)},lo.stopAutoplay=function(){return lo.autoplay&&(oo=io=!0,cn()),this},lo.show=function(t){var e;"object"!=typeof t?(e=t,t={}):e=t.index,e=">"===e?$n+1:"<"===e?$n-1:"<<"===e?0:">>"===e?Mn-1:e,e=isNaN(e)?L(e,kn,!0):e,e="undefined"==typeof e?Lo||0:e,lo.activeIndex=Lo=k(e),An=P(Lo),zn=B(Lo),Ln=C(Lo+(Gn?-1:1)),jn=[Lo,An,zn],$n=In?e:Lo;var n=Math.abs(qn-$n),o=_(t.time,function(){return Math.min(Qn*(1+(n-1)/12),2*Qn)}),r=t.overPos;t.slow&&(o*=10);var a=Pn;lo.activeFrame=Pn=kn[Lo];var u=a===Pn&&!t.user;hn(En,Pn.i!==kn[C(Nn)].i),fe(jn,"stage"),ye(Oe?[$n]:[$n,P($n),B($n)]),gn("go",!0),u||an("show",{user:t.user,time:o}),oo=!0;var l=lo.show.onEnd=function(e){if(!l.ok){if(l.ok=!0,e||nn(!0),u||an("showend",{user:t.user}),!e&&Un&&Un!==i.transition)return lo.setOptions({transition:Un}),void(Un=!1);Kt(),Rt(jn,"stage"),gn("go",!1),$e(),mn(),ln(),cn()}};if(Vn){var c=Pn[Ue],f=Lo!==qn?kn[qn][Ue]:null;tt(c,f,xo,{time:o,method:i.transition,onEnd:l},Xo)}else Z(bo,{pos:-w($n,Io.w,i.margin,Nn),overPos:r,time:o,onEnd:l});if(Ne(),Dn){Ve();var d=T(Lo+s($n-qn,-1,1));He({time:o,coo:d!==Lo&&t.coo,guessIndex:"undefined"!=typeof t.coo?d:Lo,keep:u}),Rn&&De(o)}return no="undefined"!=typeof qn&&qn!==Lo,qn=Lo,i.hash&&no&&!lo.eq&&$(Pn.id||Lo+1),this},lo.requestFullScreen=function(){return Hn&&!lo.fullScreen&&(to=Pe.scrollTop(),eo=Pe.scrollLeft(),W(Pe),gn("x",!0),ro=o.extend({},Io),t.addClass(Gt).appendTo(Ee.addClass(lt)),Fe.addClass(lt),hn(En,!0,!0),lo.fullScreen=!0,Kn&&xe.request(ho),lo.resize(),Rt(jn,"stage"),Kt(),an("fullscreenenter")),this},lo.cancelFullScreen=function(){return Kn&&xe.is()?xe.cancel(e):fn(),this},lo.toggleFullScreen=function(){return lo[(lo.fullScreen?"cancel":"request")+"FullScreen"]()},V(e,xe.event,function(){!kn||xe.is()||En||fn()}),lo.resize=function(t){if(!kn)return this;var e=arguments[1]||0,n=arguments[2];rn(lo.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:H(t),[Io,n||lo.fullScreen||i]);var o=Io.width,r=Io.height,a=Io.ratio,u=Pe.height()-(Dn?Mo.height():0);return v(o)&&(go.addClass(bt).css({width:o,minWidth:Io.minwidth||0,maxWidth:Io.maxwidth||tn}),o=Io.W=Io.w=go.width(),Io.nw=Dn&&m(i.navwidth,o)||o,i.glimpse&&(Io.w-=Math.round(2*(m(i.glimpse,o)||0))),bo.css({width:Io.w,marginLeft:(Io.W-Io.w)/2}),r=m(r,u),r=r||a&&o/a,r&&(o=Math.round(o),r=Io.h=Math.round(s(r,m(Io.minheight,u),m(Io.maxheight,u))),yo.stop().animate({width:o,height:r},e,function(){go.removeClass(bt)}),nn(),Dn&&(Mo.stop().animate({width:Io.nw},e),He({guessIndex:Lo,time:e,keep:!0}),Rn&&_e.nav&&De(e)),Zn=n||!0,Tn())),Bo=yo.offset().left,this},lo.setOptions=function(t){return o.extend(i,t),_n(),this},lo.shuffle=function(){return kn&&D(kn)&&_n(),this},lo.destroy=function(){return lo.cancelFullScreen(),lo.stopAutoplay(),kn=lo.data=null,l(),jn=[],en(Ue),_n.ok=!1,this},lo.playVideo=function(){var t=Pn,e=t.video,n=Lo;return"object"==typeof e&&t.videoReady&&(Kn&&lo.fullScreen&&lo.cancelFullScreen(),N(function(){return!xe.is()||n!==Lo},function(){n===Lo&&(t.$video=t.$video||o(o.Fotorama.jst.video(e)),t.$video.appendTo(t[Ue]),go.addClass(ht),En=t.$video,p(),To.blur(),jo.blur(),an("loadvideo"))})),this},lo.stopVideo=function(){return hn(En,!0,!0),this},yo.on("mousemove",mn),Do=ot(bo,{onStart:sn,onMove:function(t,e){dn(yo,e.edge)},onTouchEnd:un,onEnd:function(t){dn(yo);var e=(Ie&&!so||t.touch)&&i.arrows&&"always"!==i.arrows;if(t.moved||e&&t.pos!==t.newPos&&!t.control){var n=g(t.newPos,Io.w,i.margin,Nn);lo.show({index:n,time:Vn?Qn:t.time,overPos:t.overPos,user:!0})}else t.aborted||t.control||wn(t.startEvent,e)},timeLow:1,timeHigh:1,friction:2,select:"."+Ut+", ."+Ut+" *",$wrap:yo}),Wo=ot(So,{onStart:sn,onMove:function(t,e){dn(Mo,e.edge)},onTouchEnd:un,onEnd:function(t){function e(){He.l=t.newPos,ln(),cn(),be(t.newPos,!0)}if(t.moved)t.pos!==t.newPos?(oo=!0,Z(So,{time:t.time,pos:t.newPos,overPos:t.overPos,onEnd:e}),be(t.newPos),Yn&&dn(Mo,z(t.newPos,Wo.min,Wo.max))):e();else{var n=t.$target.closest("."+Ot,So)[0];n&&yn.call(n,t.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:Mo}),Ro=it(yo,{shift:!0,onEnd:function(t,e){sn(),un(),lo.show({index:e,slow:t.altKey})}}),Ho=it(Mo,{onEnd:function(t,e){sn(),un();var n=x(So)+.25*e;So.css(c(s(n,Wo.min,Wo.max))),Yn&&dn(Mo,z(n,Wo.min,Wo.max)),Ho.prevent={"<":n>=Wo.max,">":n<=Wo.min},clearTimeout(Ho.t),Ho.t=setTimeout(function(){He.l=n,be(n,!0)},Re),be(n)}}),go.hover(function(){setTimeout(function(){ao||pn(!(so=!0))},0)},function(){so&&pn(!(so=!1))}),O(To,function(t){Y(t),bn.call(this,t)},{onStart:function(){sn(),Do.control=!0},onTouchEnd:un}),To.each(function(){Q(this,function(t){bn.call(this,t)}),xn(this)}),Q(No,lo.toggleFullScreen),xn(No),o.each("load push pop shift unshift reverse sort splice".split(" "),function(t,e){lo[e]=function(){return kn=kn||[],"load"!==e?Array.prototype[e].apply(kn,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(kn=R(arguments[0])),_n(),lo}}),_n()},o.fn.fotorama=function(e){return this.each(function(){var n=this,i=o(this),r=i.data(),a=r.fotorama;a?a.setOptions(e,!0):N(function(){return!P(n)},function(){r.urtext=i.html(),new o.Fotorama(i,o.extend({},nn,t.fotoramaDefaults,e,r))})})},o.Fotorama.instances=[],o.Fotorama.cache={},o.Fotorama.measures={},o=o||{},o.Fotorama=o.Fotorama||{},o.Fotorama.jst=o.Fotorama.jst||{},o.Fotorama.jst.style=function(t){var e,n="";return ye.escape,n+=".fotorama"+(null==(e=t.s)?"":e)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(e=t.m)?"":e)+"px;\nheight:"+(null==(e=t.h)?"":e)+"px}\n.fotorama"+(null==(e=t.s)?"":e)+" .fotorama__thumb-border{\nheight:"+(null==(e=t.h-t.b*(t.q?0:2))?"":e)+"px;\nborder-width:"+(null==(e=t.b)?"":e)+"px;\nmargin-top:"+(null==(e=t.m)?"":e)+"px}"},o.Fotorama.jst.video=function(t){function e(){n+=o.call(arguments,"")}var n="",o=(ye.escape,Array.prototype.join);return n+='<div class="fotorama__video"><iframe src="',e(("youtube"==t.type?t.p+"youtube.com/embed/"+t.id+"?autoplay=1":"vimeo"==t.type?t.p+"player.vimeo.com/video/"+t.id+"?autoplay=1&badge=0":t.id)+(t.s&&"custom"!=t.type?"&"+t.s:"")),n+='" frameborder="0" allowfullscreen></iframe></div>\n'},o(function(){o("."+ut+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);
//# sourceMappingURL=fotorama.js.map
