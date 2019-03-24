(function(window,undefined){'use strict';var AudioPlayer=(function(){var
surahLink=SURAH_AUDIO_URL+"surahs/",docTitle=document.title,player=document.getElementById('bottom-nav'),playBtn,playSvg,playSvgPath,prevBtn,nextBtn,plBtn,repeatBtn,volumeBtn,progressBar,preloadBar,curTime,durTime,trackTitle,audio,index=0,playList,volumeBar,wheelVolumeValue=0,volumeLength,repeating=false,seeking=false,seekingVol=false,rightClick=false,apActive=false,pl,plUl,plLi,tplList='<li class="pl-list" data-track="{count}">'+'<div class="pl-list__track">'+'<div class="pl-list__icon"></div>'+'<div class="pl-list__eq">'+'<div class="eq">'+'<div class="eq__bar"></div>'+'<div class="eq__bar"></div>'+'<div class="eq__bar"></div>'+'</div>'+'</div>'+'</div>'+'<div class="pl-list__title">{title}</div>'+'<button class="pl-list__remove">'+'<svg fill="#000000" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">'+'<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>'+'<path d="M0 0h24v24H0z" fill="none"/>'+'</svg>'+'</button>'+'</li>',settings={volume:1,changeDocTitle:true,confirmClose:true,autoPlay:false,buffered:true,notification:true,playList:[]};function init(options){if(!('classList'in document.documentElement)){return false;}
if(apActive||player===null){return'Player already init';}
settings=extend(settings,options);playBtn=player.querySelector('.ap__controls--toggle');playSvg=playBtn.querySelector('.icon-play');playSvgPath=playSvg.querySelector('path');prevBtn=player.querySelector('.ap__controls--prev');nextBtn=player.querySelector('.ap__controls--next');repeatBtn=player.querySelector('.ap__controls--repeat');volumeBtn=player.querySelector('.volume-btn');plBtn=player.querySelector('.ap__controls--playlist');curTime=player.querySelector('.track__time--current');durTime=player.querySelector('.track__time--duration');trackTitle=player.querySelector('.track__title');progressBar=player.querySelector('.progress__bar');preloadBar=player.querySelector('.progress__preload');volumeBar=player.querySelector('.volume__bar');playList=settings.playList;playBtn.addEventListener('click',playToggle,false);volumeBtn.addEventListener('click',volumeToggle,false);progressBar.closest('.progress-container').addEventListener('mousedown',handlerBar,false);progressBar.closest('.progress-container').addEventListener('mousemove',seek,false);document.documentElement.addEventListener('mouseup',seekingFalse,false);volumeBar.closest('.volume').addEventListener('mousedown',handlerVol,false);volumeBar.closest('.volume').addEventListener('mousemove',setVolume);volumeBar.closest('.volume').addEventListener(wheel(),setVolume,false);apActive=true;renderPL();audio=new Audio();audio.volume=settings.volume;audio.preload='none';audio.addEventListener('error',errorHandler,false);audio.addEventListener('timeupdate',timeUpdate,false);audio.addEventListener('ended',doEnd,false);function ayah_highlighter(){for(var i=1;i<SURAH_AYAHS+1;i++){var ayahID_prev=i-1;try{var time=$(".ayah."+i).attr("data-ts")}catch{}
if(time<audio.currentTime){if(i>1)$(".ayah."+ayahID_prev).removeClass("ayah-hover");$(".ayah."+i).addClass("ayah-hover");document.getElementsByClassName('single-ayah '+i)[0].scrollIntoView({block:'start',behavior:'smooth'});}}}
volumeBar.style.height=audio.volume*100+'%';volumeLength=volumeBar.css('height');if(settings.confirmClose){window.addEventListener("beforeunload",beforeUnload,false);}
if(isEmptyList()){return false;}
audio.src=surahLink+playList[index].file;trackTitle.innerHTML=playList[index].title;if(settings.autoPlay){audio.play();playBtn.classList.add('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-pause'));plLi[index].classList.add('pl-list--current');}}
function changeDocumentTitle(title){if(settings.changeDocTitle){if(title){document.title=title;}
else{document.title=docTitle;}}}
function beforeUnload(evt){if(!audio.paused){var message='Music still playing';evt.returnValue=message;return message;}}
function errorHandler(evt){if(isEmptyList()){return;}
var mediaError={'1':'MEDIA_ERR_ABORTED','2':'MEDIA_ERR_NETWORK','3':'MEDIA_ERR_DECODE','4':'MEDIA_ERR_SRC_NOT_SUPPORTED'};audio.pause();curTime.innerHTML='--';durTime.innerHTML='--';progressBar.style.width=0;preloadBar.style.width=0;playBtn.classList.remove('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-play'));plLi[index]&&plLi[index].classList.remove('pl-list--current');changeDocumentTitle();throw new Error('Houston we have a problem: '+mediaError[evt.target.error.code]);}
function updatePL(addList){if(!apActive){return'Player is not yet initialized';}
if(!Array.isArray(addList)){return;}
if(addList.length===0){return;}
var count=playList.length;var html=[];playList.push.apply(playList,addList);addList.forEach(function(item){html.push(tplList.replace('{count}',count++).replace('{title}',item.title));});if(plUl.querySelector('.pl-list--empty')){plUl.removeChild(pl.querySelector('.pl-list--empty'));audio.src=surahLink+playList[index].file;trackTitle.innerHTML=playList[index].title;}
plUl.insertAdjacentHTML('beforeEnd',html.join(''));plLi=pl.querySelectorAll('li');}
function renderPL(){var html=[];playList.forEach(function(item,i){html.push(tplList.replace('{count}',i).replace('{title}',item.title));});pl=create('div',{'className':'pl-container','id':'pl','innerHTML':'<ul class="pl-ul">'+(!isEmptyList()?html.join(''):'<li class="pl-list--empty">PlayList is empty</li>')+'</ul>'});player.parentNode.insertBefore(pl,player.nextSibling);plUl=pl.querySelector('.pl-ul');plLi=plUl.querySelectorAll('li');pl.addEventListener('click',listHandler,false);}
function listHandler(evt){evt.preventDefault();if(evt.target.matches('.pl-list__title')){var current=parseInt(evt.target.closest('.pl-list').getAttribute('data-track'),10);if(index!==current){index=current;play(current);}
else{playToggle();}}
else{if(!!evt.target.closest('.pl-list__remove')){var parentEl=evt.target.closest('.pl-list');var isDel=parseInt(parentEl.getAttribute('data-track'),10);playList.splice(isDel,1);parentEl.closest('.pl-ul').removeChild(parentEl);plLi=pl.querySelectorAll('li');[].forEach.call(plLi,function(el,i){el.setAttribute('data-track',i);});if(!audio.paused){if(isDel===index){play(index);}}
else{if(isEmptyList()){clearAll();}
else{if(isDel===index){if(isDel>playList.length-1){index-=1;}
audio.src=surahLink+playList[index].file;trackTitle.innerHTML=playList[index].title;progressBar.style.width=0;}}}
if(isDel<index){index--;}}}}
function plActive(){if(audio.paused){plLi[index].classList.remove('pl-list--current');return;}
var current=index;for(var i=0,len=plLi.length;len>i;i++){plLi[i].classList.remove('pl-list--current');}
plLi[current].classList.add('pl-list--current');}
function play(currentIndex){if(isEmptyList()){return clearAll();}
index=(currentIndex+playList.length)%playList.length;audio.src=surahLink+playList[index].file;trackTitle.innerHTML=playList[index].title;changeDocumentTitle(playList[index].title);audio.play();playBtn.classList.add('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-pause'));plActive();}
function prev(){play(index-1);}
function next(){play(index+1);}
function isEmptyList(){return playList.length===0;}
function clearAll(){audio.pause();audio.src='';trackTitle.innerHTML='queue is empty';curTime.innerHTML='--';durTime.innerHTML='--';progressBar.style.width=0;preloadBar.style.width=0;playBtn.classList.remove('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-play'));if(!plUl.querySelector('.pl-list--empty')){plUl.innerHTML='<li class="pl-list--empty">PlayList is empty</li>';}
changeDocumentTitle();}
function playToggle(){if(isEmptyList()){return;}
if(audio.paused){changeDocumentTitle(playList[index].title);audio.play();playBtn.classList.add('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-pause'));}
else{changeDocumentTitle();audio.pause();playBtn.classList.remove('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-play'));}
plActive();}
function volumeToggle(){if(audio.muted){if(parseInt(volumeLength,10)===0){volumeBar.style.height=settings.volume*100+'%';audio.volume=settings.volume;}
else{volumeBar.style.height=volumeLength;}
audio.muted=false;volumeBtn.classList.remove('has-muted');}
else{audio.muted=true;volumeBar.style.height=0;volumeBtn.classList.add('has-muted');}}
function repeatToggle(){if(repeatBtn.classList.contains('is-active')){repeating=false;repeatBtn.classList.remove('is-active');}
else{repeating=true;repeatBtn.classList.add('is-active');}}
function plToggle(){plBtn.classList.toggle('is-active');pl.classList.toggle('h-show');}
function timeUpdate(){if(audio.readyState===0||seeking)return;var barlength=Math.round(audio.currentTime*(100 / audio.duration));progressBar.style.width=barlength+'%';var
curMins=Math.floor(audio.currentTime / 60),curSecs=Math.floor(audio.currentTime-curMins*60),mins=Math.floor(audio.duration / 60),secs=Math.floor(audio.duration-mins*60);(curSecs<10)&&(curSecs='0'+curSecs);(secs<10)&&(secs='0'+secs);curTime.innerHTML=curMins+':'+curSecs;durTime.innerHTML=mins+':'+secs;if(settings.buffered){var buffered=audio.buffered;if(buffered.length){var loaded=Math.round(100*buffered.end(0)/ audio.duration);preloadBar.style.width=loaded+'%';}}}
function shuffle(){if(shuffle){index=Math.round(Math.random()*playList.length);}}
function doEnd(){if(index===playList.length-1){if(!repeating){audio.pause();plActive();playBtn.classList.remove('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-play'));return;}
else{play(0);}}
else{play(index+1);}}
function moveBar(evt,el,dir){var value;if(dir==='horizontal'){value=Math.round(((evt.clientX-el.offset().left)+window.pageXOffset)*100 / el.parentNode.offsetWidth);el.style.width=value+'%';return value;}
else{if(evt.type===wheel()){value=parseInt(volumeLength,10);var delta=evt.deltaY||evt.detail||-evt.wheelDelta;value=(delta>0)?value-10:value+10;}
else{var offset=(el.offset().top+el.offsetHeight)-window.pageYOffset;value=Math.round((offset-evt.clientY));}
if(value>100)value=wheelVolumeValue=100;if(value<0)value=wheelVolumeValue=0;volumeBar.style.height=value+'%';return value;}}
function handlerBar(evt){rightClick=(evt.which===3)?true:false;seeking=true;!rightClick&&progressBar.classList.add('progress__bar--active');seek(evt);}
function handlerVol(evt){rightClick=(evt.which===3)?true:false;seekingVol=true;setVolume(evt);}
function seek(evt){evt.preventDefault();if(seeking&&rightClick===false&&audio.readyState!==0){window.value=moveBar(evt,progressBar,'horizontal');}}
function seekingFalse(){if(seeking&&rightClick===false&&audio.readyState!==0){audio.currentTime=audio.duration*(window.value / 100);progressBar.classList.remove('progress__bar--active');}
seeking=false;seekingVol=false;}
function setVolume(evt){evt.preventDefault();volumeLength=volumeBar.css('height');if(seekingVol&&rightClick===false||evt.type===wheel()){var value=moveBar(evt,volumeBar.parentNode,'vertical')/ 100;if(value<=0){audio.volume=0;audio.muted=true;volumeBtn.classList.add('has-muted');}
else{if(audio.muted)audio.muted=false;audio.volume=value;volumeBtn.classList.remove('has-muted');}}}
function destroy(){if(!apActive)return;if(settings.confirmClose){window.removeEventListener('beforeunload',beforeUnload,false);}
playBtn.removeEventListener('click',playToggle,false);volumeBtn.removeEventListener('click',volumeToggle,false);repeatBtn.removeEventListener('click',repeatToggle,false);plBtn.removeEventListener('click',plToggle,false);progressBar.closest('.progress-container').removeEventListener('mousedown',handlerBar,false);progressBar.closest('.progress-container').removeEventListener('mousemove',seek,false);document.documentElement.removeEventListener('mouseup',seekingFalse,false);volumeBar.closest('.volume').removeEventListener('mousedown',handlerVol,false);volumeBar.closest('.volume').removeEventListener('mousemove',setVolume);volumeBar.closest('.volume').removeEventListener(wheel(),setVolume);document.documentElement.removeEventListener('mouseup',seekingFalse,false);prevBtn.removeEventListener('click',prev,false);nextBtn.removeEventListener('click',next,false);audio.removeEventListener('error',errorHandler,false);audio.removeEventListener('timeupdate',timeUpdate,false);audio.removeEventListener('ended',doEnd,false);pl.removeEventListener('click',listHandler,false);pl.parentNode.removeChild(pl);audio.pause();apActive=false;index=0;playBtn.classList.remove('is-playing');playSvgPath.setAttribute('d',playSvg.getAttribute('data-play'));volumeBtn.classList.remove('has-muted');plBtn.classList.remove('is-active');repeatBtn.classList.remove('is-active');}
function wheel(){var wheel;if('onwheel'in document){wheel='wheel';}else if('onmousewheel'in document){wheel='mousewheel';}else{wheel='MozMousePixelScroll';}
return wheel;}
function extend(defaults,options){for(var name in options){if(defaults.hasOwnProperty(name)){defaults[name]=options[name];}}
return defaults;}
function create(el,attr){var element=document.createElement(el);if(attr){for(var name in attr){if(element[name]!==undefined){element[name]=attr[name];}}}
return element;}
Element.prototype.offset=function(){var el=this.getBoundingClientRect(),scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,scrollTop=window.pageYOffset||document.documentElement.scrollTop;return{top:el.top+scrollTop,left:el.left+scrollLeft};};Element.prototype.css=function(attr){if(typeof attr==='string'){return getComputedStyle(this,'')[attr];}
else if(typeof attr==='object'){for(var name in attr){if(this.style[name]!==undefined){this.style[name]=attr[name];}}}};window.Element&&function(ElementPrototype){ElementPrototype.matches=ElementPrototype.matches||ElementPrototype.matchesSelector||ElementPrototype.webkitMatchesSelector||ElementPrototype.msMatchesSelector||function(selector){var node=this,nodes=(node.parentNode||node.document).querySelectorAll(selector),i=-1;while(nodes[++i]&&nodes[i]!=node);return!!nodes[i];};}(Element.prototype);window.Element&&function(ElementPrototype){ElementPrototype.closest=ElementPrototype.closest||function(selector){var el=this;while(el.matches&&!el.matches(selector))el=el.parentNode;return el.matches?el:null;};}(Element.prototype);return{init:init,update:updatePL,destroy:destroy};})();window.AP=AudioPlayer;})(window);var iconImage='';AP.init({playList:[{'title':SURAH_AUDIO_NAME,'file':SURAH_AUDIO+".mp3"}]});