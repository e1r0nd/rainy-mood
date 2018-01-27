var main=webpackJsonp_name_([0],[function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={init:function(){this.sounds={},this.context=null,this.bufferLoader=null,this.bufferList=[],window.AudioContext=window.AudioContext||window.webkitAudioContext,this.context=new AudioContext,this.sounds.mainGainNode=this.context.createGain(),this.sounds.mainGainNode.connect(this.context.destination)},loadFile:function(t,e,i){var n=this,s=new XMLHttpRequest;s.open("GET",t,!0),s.responseType="arraybuffer",s.onload=function(){n.context.decodeAudioData(s.response,function(s){if(!s)return void console.error("error decoding file data: "+t);n.bufferList[e]=s,i&&i.call(n)},function(t){console.error("decodeAudioData error: "+t)})},s.onerror=function(){console.error("BufferLoader: XHR error")},s.send()},createAudioInfinite:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments[1];this.sounds[t]=this.context.createBufferSource(),this.sounds[t+"GainNode"]=this.context.createGain(),this.sounds[t].buffer=this.bufferList[t],this.sounds[t].loop=!0,this.sounds[t+"GainNode"].gain.setValueAtTime(.01,this.context.currentTime),this.sounds[t].connect(this.sounds[t+"GainNode"]),this.sounds[t+"GainNode"].connect(this.sounds.mainGainNode),this.sounds[t].start(),e&&this.sounds[t+"GainNode"].gain.exponentialRampToValueAtTime(1,this.context.currentTime+3)},setSoundVolume:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.sounds[t+"GainNode"].gain.setValueAtTime(e,this.context.currentTime)},expChangeVolume:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;this.sounds[t+"GainNode"].gain.exponentialRampToValueAtTime(e,this.context.currentTime+i)},playSound:function(t){var e=this.context.createBufferSource();e.buffer=this.bufferList[t],e.connect(this.sounds.mainGainNode),e.start()},muteSound:function(t){this.sounds.mainGainNode.gain.setValueAtTime(t?0:1,this.context.currentTime)}};e.default=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),i(10);var s=i(0),a=n(s),o=i(15),d=n(o),r=i(16),u=n(r),l=i(17),c=n(l),h=i(18),f=n(h),v={init:function(){this.stack=["car1","car2","car3","car4"],a.default.loadFile(d.default,"car1"),a.default.loadFile(u.default,"car2"),a.default.loadFile(c.default,"car3"),a.default.loadFile(f.default,"car4"),this.isActive=!1},createBlock:function(){var t=document.createElement("div");return t.id="city",t.classList.add("u--hidden"),setTimeout(function(){t.classList.add("city")},1e3),t},randInteger:function(t,e){return Math.round(Math.random()*(e-t)+t)},playCar:function(t,e){var i=this;this.isActive&&setTimeout(function(){i.isActive&&(a.default.playSound(i.stack[t]),i.playCar(i.randInteger(0,3),i.randInteger(20,40)))},1e3*e)},startPlaying:function(){this.isActive=!0,this.playCar(this.randInteger(0,3),this.randInteger(2,4))},stopPlaying:function(){this.isActive=!1}};e.default=v},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),i(11);var s=i(0),a=n(s),o=i(20),d=n(o),r=i(23),u=n(r),l=i(19),c=n(l),h=i(21),f=n(h),v=i(22),m=n(v),p={init:function(){this.stack=["crow","whistling","bird","nightingale1","nightingale2"],a.default.loadFile(d.default,"crow"),a.default.loadFile(u.default,"whistling"),a.default.loadFile(c.default,"bird"),a.default.loadFile(f.default,"nightingale1"),a.default.loadFile(m.default,"nightingale2"),this.isActive=!1},createBlock:function(){var t=document.createElement("div");return t.id="forest",t.classList.add("u--hidden"),setTimeout(function(){t.classList.add("forest")},2e3),t},randInteger:function(t,e){return Math.round(Math.random()*(e-t)+t)},playBird:function(t,e){var i=this;this.isActive&&setTimeout(function(){i.isActive&&(a.default.playSound(i.stack[t]),i.playBird(i.randInteger(0,4),i.randInteger(15,50)))},1e3*e)},startPlaying:function(){this.isActive=!0,this.playBird(this.randInteger(0,4),this.randInteger(2,4))},stopPlaying:function(){this.isActive=!1}};e.default=p},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(30),a=n(s);i(12);var o=i(7),d=n(o),r=i(0),u=n(r),l=i(4),c=n(l),h=i(1),f=n(h),v=i(2),m=n(v),p={init:function(){var t=this;this.storm=c.default,this.city=f.default,this.forest=m.default,this.selected="storm",document.querySelectorAll("[data-type=nav-select]").forEach(function(e){e.addEventListener("click",t.navSelect.bind(t))}),this.navTitle=document.querySelector("#sideNavTitle"),this.coverTitle=document.querySelector("#coverTitle"),this.showButtonEl=document.querySelector("#menuShow"),this.hideButtonEl=document.querySelector("#menuHide"),this.sideNavEl=document.querySelector("#sideNav"),this.sideNavContainerEl=document.querySelector("#sideNavContainer"),this.muteBtn=document.querySelector("#muteBtn"),this.detabinator=new d.default(this.sideNavContainerEl),this.detabinator.inert=!0,this.showSideNav=this.showSideNav.bind(this),this.hideSideNav=this.hideSideNav.bind(this),this.blockClicks=this.blockClicks.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onTransitionEnd=this.onTransitionEnd.bind(this),this.update=this.update.bind(this),this.startX=0,this.currentX=0,this.touchingSideNav=!1,this.supportsPassive=null,this.addEventListeners(),setTimeout(function(){document.querySelector(".side-nav__header").classList.add("side-nav__header--lazy-bg"),t.muteBtn.classList.add("mute-btn--mute")},1e3)},createBlock:function(){var t=document.createElement("div");return t.classList.add("navigation"),t.innerHTML=a.default,t},navSelect:function(t){this[this.selected].stopPlaying(),document.querySelector("#"+this.selected+"Nav").classList.remove("active"),document.querySelector("#"+this.selected).classList.add("u--hidden"),this.selected=t.currentTarget.dataset.target,document.querySelector("#"+this.selected+"Nav").classList.add("active"),document.querySelector("#"+this.selected).classList.remove("u--hidden"),this.coverTitle.innerText=t.currentTarget.dataset.title,this.hideSideNav(),this[this.selected].startPlaying()},muteSounds:function(){"false"===this.dataset.muted?(this.dataset.muted="true",this.classList.remove("mute-btn--mute"),this.classList.add("mute-btn--unmute"),u.default.muteSound(!0)):(this.dataset.muted="false",this.classList.add("mute-btn--mute"),this.classList.remove("mute-btn--unmute"),u.default.muteSound())},applyPassive:function(){if(null!==this.supportsPassive)return!!this.supportsPassive&&{passive:!0};var t=!1;try{document.addEventListener("test",null,{get passive(){t=!0}})}catch(t){}return this.supportsPassive=t,this.applyPassive()},addEventListeners:function(){this.muteBtn.addEventListener("click",this.muteSounds),this.showButtonEl.addEventListener("click",this.showSideNav),this.hideButtonEl.addEventListener("click",this.hideSideNav),this.sideNavEl.addEventListener("click",this.hideSideNav),this.sideNavContainerEl.addEventListener("click",this.blockClicks),this.sideNavEl.addEventListener("touchstart",this.onTouchStart,this.applyPassive()),this.sideNavEl.addEventListener("touchmove",this.onTouchMove,this.applyPassive()),this.sideNavEl.addEventListener("touchend",this.onTouchEnd)},onTouchStart:function(t){this.sideNavEl.classList.contains("side-nav--visible")&&(this.startX=t.touches[0].pageX,this.currentX=this.startX,this.touchingSideNav=!0,requestAnimationFrame(this.update))},onTouchMove:function(t){this.touchingSideNav&&(this.currentX=t.touches[0].pageX)},onTouchEnd:function(){if(this.touchingSideNav){this.touchingSideNav=!1;var t=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="",t<0&&this.hideSideNav()}},update:function(){if(this.touchingSideNav){requestAnimationFrame(this.update);var t=Math.min(0,this.currentX-this.startX);this.sideNavContainerEl.style.transform="translateX("+t+"px)"}},blockClicks:function(t){t.stopPropagation()},onTransitionEnd:function(t){"transform"===t.propertyName&&(this.sideNavEl.classList.remove("side-nav--animatable"),this.sideNavEl.removeEventListener("transitionend",this.onTransitionEnd))},showSideNav:function(){u.default.expChangeVolume("main",.5,.33),this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.add("side-nav--visible"),this.detabinator.inert=!1,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)},hideSideNav:function(){u.default.expChangeVolume("main",1,.13),this.sideNavEl.classList.add("side-nav--animatable"),this.sideNavEl.classList.remove("side-nav--visible"),this.detabinator.inert=!0,this.sideNavEl.addEventListener("transitionend",this.onTransitionEnd)},isSideNavVisible:function(){return this.sideNavEl.classList.contains("side-nav--visible")}};e.default=p},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),i(14);var s=i(0),a=n(s),o=i(26),d=n(o),r=i(27),u=n(r),l=i(28),c=n(l),h=i(29),f=n(h),v={init:function(){this.stack=["closeLong","middleFast","distantQuite","slowChill"],this.sky=document.querySelector(".storm"),a.default.loadFile(d.default,"closeLong"),a.default.loadFile(u.default,"distantQuite"),a.default.loadFile(c.default,"middleFast"),a.default.loadFile(f.default,"slowChill"),this.isActive=!0,this.playThunder(this.randInteger(0,3),this.randInteger(3,6)),document.querySelector("body")},createBlock:function(){var t=document.createElement("div");return t.id="storm",t.classList.add("storm"),t},randInteger:function(t,e){return Math.round(Math.random()*(e-t)+t)},playThunder:function(t,e){var i=this;this.isActive&&setTimeout(function(){t<2&&(i.sky.classList.add(t?"fast":"long"),setTimeout(function(){return i.sky.classList.remove("fast","long")},2e3)),i.isActive&&(a.default.playSound(i.stack[t]),i.playThunder(i.randInteger(0,3),i.randInteger(15,30)))},1e3*e)},startPlaying:function(){this.isActive=!0,this.playThunder(this.randInteger(0,3),this.randInteger(2,4))},stopPlaying:function(){this.isActive=!1}};e.default=v},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(13);var o=i(25),d=n(o),r=i(24),u=n(r),l=i(0),c=n(l),h=i(3),f=n(h),v=i(8),m=n(v),p=function(){function t(){s(this,t),this.x=0,this.y=0,this.z=0}return a(t,[{key:"init",value:function(){this.y=-100*Math.random(),this.z=.5*Math.random()+.5,this.speed=10+19*this.z}},{key:"recycle",value:function(t){t.push(this)}}]),t}(),g={mouseHandler:function(t){this.updateVolume(t.clientX,t.clientY)},touchHandler:function(t){this.updateVolume(t.touches[0].clientX,t.touches[0].clientY)},updateVolume:function(t,e){if(!(t<55&&e<55||f.default.isSideNavVisible())){t/=this.width,e/=this.height;var i=1-e;c.default.setSoundVolume("rainHeavy",e),this.dropDelay=i*i*i*100+2,this.wind=10*(t-.5)}},resize:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr},draw:function(){this.ctx.clearRect(0,0,this.width*this.dpr,this.height*this.dpr),this.ctx.beginPath();for(var t=40*this.dpr,e=this.rain.length-1;e>=0;e-=1){var i=this.rain[e],n=i.x*this.dpr,s=i.y*this.dpr;this.ctx.moveTo(n,s),this.ctx.lineTo(n-this.wind*i.z*this.dpr*1.5,s-t*i.z)}this.ctx.lineWidth=2*this.dpr,this.ctx.strokeStyle=this.rainColor,this.ctx.stroke()},step:function(t,e){var i=this.speed*e;for(this.dropTime=this.dropTime+t*this.speed;this.dropTime>this.dropDelay;){this.dropTime=this.dropTime-this.dropDelay;var n=this.rainPool.pop()||new p;n.init();var s=Math.abs(this.height/n.speed*this.wind),a=Math.random()*(this.width+s);this.wind>0&&(a-=s),n.x=a,this.rain.push(n)}for(var o=this.rain.length-1;o>=0;o-=1){var d=this.rain[o];d.y=d.y+d.speed*d.z*i,d.x=d.x+d.z*this.wind*i,(d.y>this.height+p.height*d.z||this.wind<0&&d.x<this.wind||this.wind>0&&d.x>this.width+this.wind)&&(d.recycle(this.rainPool),this.rain.splice(o,1))}this.draw()},init:function(){this.started||(this.speed=1,this.started=!0,this.width=0,this.height=0,this.dropTime=0,this.dropDelay=25,this.wind=4,this.rainColor="rgba(180, 275, 255, 0.3)",this.rainColorClear="rgba(180, 275, 255, 0)",this.rain=[],this.rainPool=[],this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.dpr=window.devicePixelRatio||1,this.resize(),c.default.loadFile(d.default,"rainSoft",function(){c.default.createAudioInfinite("rainSoft",!0)}),c.default.loadFile(u.default,"rainHeavy",function(){c.default.createAudioInfinite("rainHeavy",!1)}),document.addEventListener("mousemove",this.mouseHandler.bind(this)),document.addEventListener("touchstart",this.touchHandler.bind(this),{passive:!1}),document.addEventListener("touchmove",this.touchHandler.bind(this),{passive:!1}),window.addEventListener("resize",this.resize.bind(this)),m.default.addListener.call(this,this.step))}};e.default=g},function(t,e){},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=function(){function t(e){if(n(this,t),!e)throw new Error("Missing required argument. new Detabinator needs an element reference");this._inert=!1,this._focusableElementsString="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]",this._focusableElements=Array.from(e.querySelectorAll(this._focusableElementsString))}return s(t,[{key:"inert",get:function(){return this._inert},set:function(t){this._inert!==t&&(this._inert=t,this._focusableElements.forEach(function(e){if(t)e.hasAttribute("tabindex")&&(e.__savedTabindex=e.tabIndex),e.setAttribute("tabindex",-1);else{if(0===e.__savedTabindex||e.__savedTabindex)return e.setAttribute("tabindex",e.__savedTabindex);e.removeAttribute("tabindex")}}))}}]),t}();e.default=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){window.requestAnimationFrame?requestAnimationFrame(e):webkitRequestAnimationFrame(e)}function e(e){var i=e-s;s=e,i<0?i=17:i>68&&(i=68);for(var n=0,o=a.length;n<o;n++)a[n].call(window,i,i/16.67);t()}var i={};i.addListener=function(e){if("function"!=typeof e)throw"Ticker.addListener() requires a function reference passed in.";a.push(e.bind(this)),n||(n=!0,t())};var n=!1,s=0,a=[];return i}();e.default=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}i(6);var s=i(3),a=n(s),o=i(0),d=n(o),r=i(4),u=n(r),l=i(1),c=n(l),h=i(2),f=n(h),v=i(5),m=n(v),p=document.querySelector("body"),g=document.createElement("div");g.className="container--main",g.appendChild(a.default.createBlock()),d.default.init(),p.appendChild(u.default.createBlock()),p.appendChild(c.default.createBlock()),p.appendChild(f.default.createBlock()),m.default.init(),p.appendChild(g),a.default.init(),u.default.init(),setTimeout(function(){c.default.init(),f.default.init()},3e3)},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){t.exports=i.p+"car1.fd44a1.mp3"},function(t,e,i){t.exports=i.p+"car2.ade121.mp3"},function(t,e,i){t.exports=i.p+"car3.785730.mp3"},function(t,e,i){t.exports=i.p+"car4.beea7a.mp3"},function(t,e,i){t.exports=i.p+"bird.0657ed.mp3"},function(t,e,i){t.exports=i.p+"crow.4e88a1.mp3"},function(t,e,i){t.exports=i.p+"nightingale1.5a050a.mp3"},function(t,e,i){t.exports=i.p+"nightingale2.a1d533.mp3"},function(t,e,i){t.exports=i.p+"whistling.789ee5.mp3"},function(t,e,i){t.exports=i.p+"rain-heavy.b4bc55.mp3"},function(t,e,i){t.exports=i.p+"rain-soft.96764c.mp3"},function(t,e,i){t.exports=i.p+"thunder-close-long.f0ab83.mp3"},function(t,e,i){t.exports=i.p+"thunder-distant-quite.9b9fbe.mp3"},function(t,e,i){t.exports=i.p+"thunder-middle-fast.b1493f.mp3"},function(t,e,i){t.exports=i.p+"thunder-slow-chill.c3e046.mp3"},function(t,e){t.exports='<div class=header> <button id=menuShow aria-label="show menu" role=presentation class="header__menu-toggle u--pointer"><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path fill=#ffffff d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg></button> <span id=sideNavTitle class=side-nav__title data-lang=summary data-toggle=lang>Rainy Mood</span> </div> <aside id=sideNav class=side-nav> <nav id=sideNavContainer class=side-nav__container> <button id=menuHide aria-label="hide menu" role=presentation class="side-nav__hide u--pointer"> <svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> </button> <div class=side-nav__mock-bg> <header class=side-nav__header> <span id=coverTitle>Rainy night</span> <button id=muteBtn class=mute-btn data-muted=false aria-label="mute or unmute" role=presentation> Mute or unmute </button> </header> </div> <ul class=side-nav__content> <li> <a id=stormNav class="side-nav__lnk active" data-type=nav-select data-title="Rainy Night" data-target=storm href=#> <span>Night</span> </a> </li> <li> <a id=cityNav class=side-nav__lnk data-type=nav-select data-title="Calm Evening" data-target=city href=#> <span>Evening</span> </a> </li> <li> <a id=forestNav class=side-nav__lnk data-type=nav-select data-title="Rainy Day" data-target=forest href=#> <span>Day</span> </a> </li> </ul> </nav> </aside> '}],[9]);