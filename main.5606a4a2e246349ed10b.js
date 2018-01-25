var main=webpackJsonp_name_([0],[function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={init:function(){this.sounds={},this.context=null,this.bufferLoader=null,this.bufferList=[],window.AudioContext=window.AudioContext||window.webkitAudioContext,this.context=new AudioContext,this.sounds.mainGainNode=this.context.createGain(),this.sounds.mainGainNode.connect(this.context.destination)},loadFile:function(t,e,i){var n=this,s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){n.context.decodeAudioData(s.response,function(s){if(!s)return void console.error("error decoding file data: "+t);n.bufferList[e]=s,i&&i.call(n)},function(t){console.error("decodeAudioData error: "+t)})},s.onerror=function(){console.error("BufferLoader: XHR error")},s.send()},createAudioInfinite:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments[1];this.sounds[t]=this.context.createBufferSource(),this.sounds[t+"GainNode"]=this.context.createGain(),this.sounds[t].buffer=this.bufferList[t],this.sounds[t].loop=!0,this.sounds[t+"GainNode"].gain.setValueAtTime(.01,this.context.currentTime),this.sounds[t].connect(this.sounds[t+"GainNode"]),this.sounds[t+"GainNode"].connect(this.sounds.mainGainNode),this.sounds[t].start(),e&&this.sounds[t+"GainNode"].gain.exponentialRampToValueAtTime(1,this.context.currentTime+3)},setSoundVolume:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.sounds[t+"GainNode"].gain.setValueAtTime(e,this.context.currentTime)},expChangeVolume:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;this.sounds[t+"GainNode"].gain.exponentialRampToValueAtTime(e,this.context.currentTime+i)},playSound:function(t){var e=this.context.createBufferSource();e.buffer=this.bufferList[t],e.connect(this.sounds.mainGainNode),e.start()},muteSound:function(t){this.sounds.mainGainNode.gain.setValueAtTime(t?0:1,this.context.currentTime)}};e.default=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(17),a=n(s);i(8);var o=i(5),d=n(o),r=i(0),u=n(r),h={init:function(){var t=this;this.selected="summary",document.querySelectorAll("[data-type=nav-select]").forEach(function(e){e.addEventListener("click",t.navSelect.bind(t))}),this.navTitle=document.querySelector("#sideNavTitle"),this.showButtonEl=document.querySelector("#menuShow"),this.hideButtonEl=document.querySelector("#menuHide"),this.sideNavEl=document.querySelector("#sideNav"),this.sideNavContainerEl=document.querySelector("#sideNavContainer"),this.muteSound=document.querySelector("#muteSound"),this.detabinator=new d.default(this.sideNavContainerEl),this.detabinator.inert=!0,this.showSideNav=this.showSideNav.bind(this),this.hideSideNav=this.hideSideNav.bind(this),this.blockClicks=this.blockClicks.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTransitionEnd=this.onTransitionEnd.bind(this),this.update=this.update.bind(this),this.startX=0,this.currentX=0,this.touchingSideNav=!1,this.supportsPassive=null,this.addEventListeners()},createBlock:function(){var t=document.createElement("div");return t.classList.add("navigation"),t.innerHTML=a.default,t},navSelect:function(){this.hideSideNav()},muteSounds:function(){"false"===this.dataset.muted?(this.dataset.muted="true",this.innerText="Unmute",u.default.muteSound(!0)):(this.dataset.muted="false",this.innerText="Mute",u.default.muteSound())},applyPassive:function(){if(null!==this.supportsPassive)return!!this.supportsPassive&&{passive:!0};var t=!1;try{document.addEventListener("test",null,{get passive(){t=!0}})}catch(t){}return this.supportsPassive=t,this.applyPassive()},addEventListeners:function(){this.muteSound.addEventListener("click",this.muteSounds),this.showButtonEl.addEventListener("click",this.showSideNav),this.hideButtonEl.addEventListener("click",this.hideSideNav),this.sideNavEl.addEventListener("click",this.hideSideNav),this.sideNavContainerEl.addEventListener("click",this.blockClicks),this.sideNavEl.addEventListener("touchstart",this.onTouchStart,this.applyPassive()),this.sideNavEl.addEventListener("touchmove",this.onTouchMove,this.applyPassive()),this.sideNavEl.addEventListener("touchend",this.onTouchEnd)},onTouchStart:function(t){this.sideNavEl.classList.contains("side-nav--visible")&&(this.startX=t.touches[0].pageX,this.currentX=this.startX,this.touchingSideNav=!0,requestAnimationFrame(this.update))},onTouchMove:function(t){this.touchingSideNav&&(this.currentX=t.touches[0].pageX)},onTouchEnd:function(){if(this.touchingSideNav){this.touchingSideNav=!1;var t=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="",t<0&&this.hideSideNav()}},update:function(){if(this.touchingSideNav){requestAnimationFrame(this.update);var t=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="translateX("+t+"px)"}},blockClicks:function(t){t.stopPropagation()},onTransitionEnd:function(t){"transform"===t.propertyName&&(this.sideNavEl.classList.remove("side-nav--animatable"),this.sideNavEl.removeEventListener("transitionend",this.onTransitionEnd))},showSideNav:function(){u.default.expChangeVolume("main",.5,.33),this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.add("side-nav--visible"),this.detabinator.inert=!1,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)},hideSideNav:function(){u.default.expChangeVolume("main",1,.13),this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.remove("side-nav--visible"),this.detabinator.inert=!0,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)},isSideNavVisible:function(){return this.sideNavEl.classList.contains("side-nav--visible")}};e.default=h},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(9);var o=i(12),d=n(o),r=i(11),u=n(r),h=i(0),l=n(h),c=i(1),f=n(c),v=i(6),m=n(v),p=function(){function t(){s(this,t),this.x=0,this.y=0,this.z=0,this.speed=25}return a(t,[{key:"init",value:function(){this.y=-100*Math.random(),this.z=.5*Math.random()+.5}},{key:"recycle",value:function(t){t.push(this)}}]),t}(),b={mouseHandler:function(t){this.updateVolume(t.clientX,t.clientY)},touchHandler:function(t){this.updateVolume(t.touches[0].clientX,t.touches[0].clientY)},updateVolume:function(t,e){if(!(t<55&&e<55||f.default.isSideNavVisible())){t/=this.width,e/=this.height;var i=1-e;l.default.setSoundVolume("rainHeavy",e),this.dropDelay=i*i*i*100+2,this.wind=10*(t-.5)}},resize:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr},draw:function(){this.ctx.clearRect(0,0,this.width*this.dpr,this.height*this.dpr),this.ctx.beginPath();for(var t=40*this.dpr,e=this.rain.length-1;e>=0;e-=1){var i=this.rain[e],n=i.x*this.dpr,s=i.y*this.dpr;this.ctx.moveTo(n,s),this.ctx.lineTo(n-this.wind*i.z*this.dpr*1.5,s-t*i.z)}this.ctx.lineWidth=2*this.dpr,this.ctx.strokeStyle=this.rainColor,this.ctx.stroke()},step:function(t,e){var i=this.speed*e;for(this.dropTime=this.dropTime+t*this.speed;this.dropTime>this.dropDelay;){this.dropTime=this.dropTime-this.dropDelay;var n=this.rainPool.pop()||new p;n.init();var s=Math.abs(this.height/n.speed*this.wind),a=Math.random()*(this.width+s);this.wind>0&&(a-=s),n.x=a,this.rain.push(n)}for(var o=this.rain.length-1;o>=0;o-=1){var d=this.rain[o];d.y=d.y+d.speed*d.z*i,d.x=d.x+d.z*this.wind*i,(d.y>this.height+p.height*d.z||this.wind<0&&d.x<this.wind||this.wind>0&&d.x>this.width+this.wind)&&(d.recycle(this.rainPool),this.rain.splice(o,1))}this.draw()},init:function(){this.started||(this.speed=1,this.started=!0,this.width=0,this.height=0,this.dropTime=0,this.dropDelay=25,this.wind=4,this.rainColor="rgba(180, 275, 255, 0.3)",this.rainColorClear="rgba(180, 275, 255, 0)",this.rain=[],this.rainPool=[],this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.dpr=window.devicePixelRatio||1,this.resize(),l.default.loadFile(d.default,"rainSoft",function(){l.default.createAudioInfinite("rainSoft",!0)}),l.default.loadFile(u.default,"rainHeavy",function(){l.default.createAudioInfinite("rainHeavy",!1)}),document.addEventListener("mousemove",this.mouseHandler.bind(this)),document.addEventListener("touchstart",this.touchHandler.bind(this),f.default.applyPassive()),document.addEventListener("touchmove",this.touchHandler.bind(this),f.default.applyPassive()),window.addEventListener("resize",this.resize.bind(this)),m.default.addListener.call(this,this.step))}};e.default=b},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),i(10);var s=i(0),a=n(s),o=i(13),d=n(o),r=i(14),u=n(r),h=i(15),l=n(h),c=i(16),f=n(c),v={init:function(){this.stack=["closeLong","middleFast","distantQuite","slowChill"],this.sky=document.querySelector(".sky"),a.default.loadFile(d.default,"closeLong"),a.default.loadFile(u.default,"distantQuite"),a.default.loadFile(l.default,"middleFast"),a.default.loadFile(f.default,"slowChill"),this.playThunder(this.randInteger(0,3),this.randInteger(3,6))},randInteger:function(t,e){return Math.round(Math.random()*(e-t)+t)},playThunder:function(t,e){var i=this;setTimeout(function(){t<2&&(i.sky.classList.add(t?"fast":"long"),setTimeout(function(){return i.sky.classList.remove("fast","long")},2e3)),a.default.playSound(i.stack[t]),i.playThunder(i.randInteger(0,3),i.randInteger(10,30))},1e3*e)}};e.default=v},function(t,e){},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e){if(n(this,t),!e)throw new Error("Missing required argument. new Detabinator needs an element reference");this._inert=!1,this._focusableElementsString="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]",this._focusableElements=Array.from(e.querySelectorAll(this._focusableElementsString))}return s(t,[{key:"inert",get:function(){return this._inert},set:function(t){this._inert!==t&&(this._inert=t,this._focusableElements.forEach(function(e){if(t)e.hasAttribute("tabindex")&&(e.__savedTabindex=e.tabIndex),e.setAttribute("tabindex",-1);else{if(0===e.__savedTabindex||e.__savedTabindex)return e.setAttribute("tabindex",e.__savedTabindex);e.removeAttribute("tabindex")}}))}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){window.requestAnimationFrame?requestAnimationFrame(e):webkitRequestAnimationFrame(e)}function e(e){var i=e-s;s=e,i<0?i=17:i>68&&(i=68);for(var n=0,o=a.length;n<o;n++)a[n].call(window,i,i/16.67);t()}var i={};i.addListener=function(e){if("function"!=typeof e)throw"Ticker.addListener() requires a function reference passed in.";a.push(e.bind(this)),n||(n=!0,t())};var n=!1,s=0,a=[];return i}();e.default=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i(4);var s=i(1),a=n(s),o=i(0),d=n(o),r=i(3),u=n(r),h=i(2),l=n(h),c=document.createElement("div");c.className="container--main",c.appendChild(a.default.createBlock()),document.querySelector("body").appendChild(c),a.default.init(),d.default.init(),u.default.init(),l.default.init()},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"rain-heavy.b4bc55.mp3"},function(t,e,i){t.exports=i.p+"rain-soft.96764c.mp3"},function(t,e,i){t.exports=i.p+"thunder-close-long.f0ab83.mp3"},function(t,e,i){t.exports=i.p+"thunder-distant-quite.9b9fbe.mp3"},function(t,e,i){t.exports=i.p+"thunder-middle-fast.b1493f.mp3"},function(t,e,i){t.exports=i.p+"thunder-slow-chill.c3e046.mp3"},function(t,e){t.exports='<div class=header> <button id=menuShow class="header__menu-toggle u--pointer"><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path fill=#ffffff d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></button> <span id=sideNavTitle class=side-nav__title data-lang=summary data-toggle=lang>Rainy Mood</span> </div> <aside id=sideNav class=side-nav> <nav id=sideNavContainer class=side-nav__container> <button id=menuHide class="side-nav__hide u--pointer"> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> </button> <header class=side-nav__header> Rainy night </header> <ul class=side-nav__content> <li> <a id=muteSound class=side-nav__lnk data-type=nav-select data-muted=false href=#> <span>Mute</span> </a> </li> <li> <a id=settingsNav class=side-nav__lnk href=https://github.com/e1r0nd/rainy-mood> <span>Source code</span> </a> </li> </ul> </nav> </aside> '}],[7]);