(function(e){function t(t){for(var c,r,o=t[0],i=t[1],l=t[2],b=0,p=[];b<o.length;b++)r=o[b],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(c=!1)}c&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var c={},s={app:0},a=[];function r(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=c,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/tabata/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"042c":function(e,t,n){},"3dcc":function(e,t,n){},"520f":function(e,t,n){"use strict";n("f8f5")},"5ac1":function(e,t,n){},"5af8":function(e,t,n){},"6de2":function(e,t,n){"use strict";n("c360")},7429:function(e,t,n){},7704:function(e){e.exports=JSON.parse('{"home":{"total_time":"Общее время","cycles":"Раунды"},"settings":{"title":"Настройки","cycles":"Кругов"},"not-found":{"title":"Страница не существует","go-to-home":"Перейти на главную"},"states":{"prepare":"Подготовка","rest":"Отдых","work":"Работа","pause":"Пауза"},"actions":{"close":"Закрыть","start":"Старт","pause":"Пауза","stop":"Стоп","settings":"Настройки","resume":"Продолжить"},"time_unit":"сек."}')},"8cad":function(e,t,n){"use strict";n("e081")},a02d:function(e,t,n){"use strict";n("5af8")},a12b:function(e,t,n){"use strict";n("5ac1")},b356:function(e,t,n){},b36c:function(e,t,n){"use strict";n("3dcc")},bb60:function(e,t,n){"use strict";n("042c")},bd34:function(e,t,n){},c360:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var c=n("7a23");function s(e){const t={};return Object.entries(e).forEach(([e,n])=>{"object"===typeof n&&null!==n&&Object.entries(s(n)).forEach(([n,c])=>{t[e+"."+n]=c}),"string"===typeof n&&(t[e]=n)}),t}var a=n("7704");const r=s(a),o=e=>null!=r[e]?r[e]:e,i=()=>({t:o});var l=n("c1ee");function u(e){return localStorage.getItem(e)}function b(e,t){localStorage.setItem(e,t)}var p,m=n("c61a");(function(e){e["home"]="home",e["settings"]="settings"})(p||(p={}));const j={[p.home]:O("/"),[p.settings]:O("/settings/")};function O(e){return["/tabata/",e].join("/").replace(/\/{2,}/g,"/")}const f=Object(m["a"])([[j.home,()=>({page:p.home})],[j.settings,()=>({page:p.settings})]]);function d(e,t){switch(!0){case e>t.max:return t.max;case e<t.min:return t.min;default:return e}}var h;(function(e){e[e["changePrepare"]=0]="changePrepare",e[e["changeRest"]=1]="changeRest",e[e["changeWork"]=2]="changeWork",e[e["changeCycles"]=3]="changeCycles"})(h||(h={}));const g={prepare:"prepare",rest:"rest",work:"work",cycles:"cycles"},_={min:0,max:6e4},y={min:0,max:50},v=e=>{const t=u(g.prepare),n=u(g.rest),c=u(g.work),s=u(g.cycles);e.on("@init",()=>({prepare:null!==t?d(Number.parseInt(t),_):2,rest:null!==n?d(Number.parseInt(n),_):20,work:null!==c?d(Number.parseInt(c),_):30,cycles:null!==s?d(Number.parseInt(s),y):8})),e.on(h.changePrepare,(e,t)=>{const n=d(t,_);return b(g.prepare,n.toString()),{prepare:n}}),e.on(h.changeWork,(e,t)=>{const n=d(t,_);return b(g.work,n.toString()),{work:n}}),e.on(h.changeRest,(e,t)=>{const n=d(t,_);return b(g.rest,n.toString()),{rest:n}}),e.on(h.changeCycles,(e,t)=>{const n=d(t,y);return b(g.cycles,n.toString()),{cycles:n}})},k=Object(l["a"])([v,f]),w=Object(c["i"])(k.get());function S(){return{dispatch:k.dispatch,on:k.on,get state(){return w}}}k.on("@changed",(e,t)=>{Object.keys(t).forEach(e=>{"prepare"!==e&&"rest"!==e&&"work"!==e&&"cycles"!==e||(w[e]=t[e])})});const C={id:"app"};function P(e,t,n,s,a,r){const o=Object(c["l"])("home-page"),i=Object(c["l"])("settings-page"),l=Object(c["l"])("not-found-page");return Object(c["h"])(),Object(c["c"])("div",C,[e.hasVisibleHomePage?(Object(c["h"])(),Object(c["c"])(o,{key:0})):e.hasVisibleSettingsPage?(Object(c["h"])(),Object(c["c"])(i,{key:1})):(Object(c["h"])(),Object(c["c"])(l,{key:2}))])}const V={class:"home__wrap"},T={key:2,class:"home__controls"},N={key:3,class:"home__controls"};function I(e,t,n,s,a,r){const o=Object(c["l"])("home-time-info"),i=Object(c["l"])("home-timer"),l=Object(c["l"])("base-button");return Object(c["h"])(),Object(c["c"])("div",{class:e.classes},[Object(c["f"])("div",V,[e.hasStartTimer?Object(c["d"])("",!0):(Object(c["h"])(),Object(c["c"])(o,{key:0})),e.hasStartTimer?(Object(c["h"])(),Object(c["c"])(i,{key:1,remained:e.remained.time,"remained-cycles":e.remained.cycles,"state-machine":e.sm},null,8,["remained","remained-cycles","state-machine"])):Object(c["d"])("",!0),e.hasStartTimer?Object(c["d"])("",!0):(Object(c["h"])(),Object(c["c"])("div",T,[Object(c["f"])(l,{is:"a",href:e.paths.settings,onClick:e.handleClickSettings},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.settings")),1)]),_:1},8,["href","onClick"]),Object(c["f"])(l,{onClick:e.handleClickStart},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.start")),1)]),_:1},8,["onClick"])])),e.hasStartTimer?(Object(c["h"])(),Object(c["c"])("div",N,[e.hasPauseTimer?(Object(c["h"])(),Object(c["c"])(l,{key:0,onClick:e.handleClickTogglePause},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.resume")),1)]),_:1},8,["onClick"])):(Object(c["h"])(),Object(c["c"])(l,{key:1,"is-gray":"",onClick:e.handleClickTogglePause},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.pause")),1)]),_:1},8,["onClick"])),Object(c["f"])(l,{onClick:e.handleClickStop},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.stop")),1)]),_:1},8,["onClick"])])):Object(c["d"])("",!0)])],2)}function B(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])(Object(c["m"])(e.is),{class:e.classes,onClick:e.handleClick},{default:Object(c["o"])(()=>[Object(c["k"])(e.$slots,"default")]),_:3},8,["class","onClick"])}var x=Object(c["g"])({name:"BaseButton",props:{isGray:{type:Boolean,default:!1},is:{type:String,default:"button"}},emits:["click"],setup(e,{emit:t}){const n=Object(c["a"])(()=>({"base-button":!0,"base-button_gray":e.isGray})),s=()=>t("click");return{classes:n,handleClick:s}}});n("a02d");x.render=B;var H,M=x;(function(e){e[e["init"]=0]="init",e[e["pause"]=1]="pause",e[e["prepare"]=2]="prepare",e[e["work"]=3]="work",e[e["rest"]=4]="rest"})(H||(H={}));class F{constructor(){this._state=H.init,this._prevState=H.init}transition(e){this._prevState=this._state,this._state=e}reset(){this._state=H.init,this._prevState=H.init}get state(){return this._state}get prevState(){return this._prevState}}const K={class:"home-time-info"},q={class:"home-time-info__list"},R={class:"home-time-info__item"},U={class:"home-time-info__item"},W={class:"home-time-info__item"},D={class:"home-time-info__item"},E={class:"home-time-info__total"},J={class:"home-time-info__duration"};function $(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])("div",K,[Object(c["f"])("ul",q,[Object(c["f"])("li",R,Object(c["n"])(e.i18n.t("states.prepare"))+": "+Object(c["n"])(e.state.prepare)+" "+Object(c["n"])(e.i18n.t("time_unit")),1),Object(c["f"])("li",U,Object(c["n"])(e.i18n.t("states.rest"))+": "+Object(c["n"])(e.state.rest)+" "+Object(c["n"])(e.i18n.t("time_unit")),1),Object(c["f"])("li",W,Object(c["n"])(e.i18n.t("states.work"))+": "+Object(c["n"])(e.state.work)+" "+Object(c["n"])(e.i18n.t("time_unit")),1),Object(c["f"])("li",D,Object(c["n"])(e.i18n.t("settings.cycles"))+": "+Object(c["n"])(e.state.cycles),1)]),Object(c["f"])("div",E,[Object(c["e"])(Object(c["n"])(e.i18n.t("home.total_time"))+": ",1),Object(c["f"])("div",J,Object(c["n"])(e.totalFormatTime),1)])])}function G(e){const t=Math.floor(e/60),n=Math.round(e-60*t),c=t<10?"0"+t:t,s=n<10?"0"+n:n;return[c,s].join(":")}var L=Object(c["g"])({name:"HomeTimeInfo",setup(){const e=S(),t=i(),n=Object(c["a"])(()=>e.state.prepare+e.state.rest*e.state.cycles+e.state.work*e.state.cycles),s=Object(c["a"])(()=>G(n.value));return{i18n:t,total:n,totalFormatTime:s,state:e.state}}});n("520f");L.render=$;var z=L;const A={class:"home-timer"},Q={class:"home-timer__title"},X={class:"home-timer__remained"};function Y(e,t,n,s,a,r){const o=Object(c["l"])("home-timer-cycles");return Object(c["h"])(),Object(c["c"])("div",A,[Object(c["f"])("div",Q,Object(c["n"])(e.title),1),Object(c["f"])("div",X,Object(c["n"])(e.remainedFormatTime),1),Object(c["f"])(o,{keep:e.keepCycles,total:e.cycles},null,8,["keep","total"])])}const Z={class:"home-timer-cycles"},ee={class:"home-timer-cycles__title"},te={class:"home-timer-cycles__keep"},ne={class:"home-timer-cycles__total"};function ce(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])("div",Z,[Object(c["f"])("div",ee,Object(c["n"])(e.title)+":",1),Object(c["f"])("span",te,Object(c["n"])(e.keep),1),Object(c["f"])("span",ne,"/"+Object(c["n"])(e.total),1)])}var se=Object(c["g"])({name:"HomeTimerCycles",props:{keep:{type:Number,required:!0},total:{type:Number,required:!0}},setup(){const e=i(),t=e.t("home.cycles");return{title:t}}});n("e202");se.render=ce;var ae=se,re=Object(c["g"])({name:"HomeTimer",components:{HomeTimerCycles:ae},props:{remained:{type:Number,required:!0},remainedCycles:{type:Number,required:!0},stateMachine:{type:F,required:!0}},setup(e){const t=i(),n=S(),s=Object(c["a"])(()=>n.state.cycles-e.remainedCycles),a=Object(c["a"])(()=>G(e.remained)),r=Object(c["a"])(()=>{switch(e.stateMachine.state){case H.prepare:return t.t("states.prepare");case H.work:return t.t("states.work");case H.rest:return t.t("states.rest");default:return t.t("states.pause")}});return{keepCycles:s,remainedFormatTime:a,title:r,cycles:n.state.cycles}}});n("a12b");re.render=Y;var oe=re;const ie=1e3;var le=Object(c["g"])({name:"Home",components:{BaseButton:M,HomeTimeInfo:z,HomeTimer:oe},setup(){const e=i(),t=S(),{prepare:n,rest:s,work:a,cycles:r}=t.state;let o;const l=Object(c["i"])(new F),u=Object(c["i"])({time:0,cycles:0}),b=Object(c["a"])(()=>l.state!==H.init),p=Object(c["a"])(()=>l.state===H.pause),m=Object(c["a"])(()=>({home:!0,home_start:l.state!==H.init,home_work:l.state===H.work,home_rest:l.state===H.rest}));function O(){if(u.time-=1,!(u.time>0)){if(l.state===H.work)return u.time=s,void l.transition(H.rest);u.time=a,u.cycles-=1,l.transition(H.work),u.cycles<0&&h()}}function f(){o=setInterval(O,ie)}function d(){clearInterval(o)}function h(){l.reset(),d()}const g=()=>{l.transition(H.init)},_=()=>{l.transition(H.prepare),u.time=n,u.cycles=r,f()},y=()=>{if(l.state===H.pause)return l.transition(l.prevState),void f();l.transition(H.pause),d()};return{i18n:e,paths:j,sm:l,remained:u,hasStartTimer:b,hasPauseTimer:p,classes:m,handleClickSettings:g,handleClickStart:_,handleClickStop:h,handleClickTogglePause:y}}});n("bb60");le.render=I;var ue=le;const be={class:"not-found"},pe={class:"not-found__wrap"},me={class:"not-found__header"};function je(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])("div",be,[Object(c["f"])("div",pe,[Object(c["f"])("h1",me,Object(c["n"])(e.i18n.t("not-found.title")),1),Object(c["f"])("a",{href:e.paths.home},Object(c["n"])(e.i18n.t("not-found.go-to-home")),9,["href"])])])}var Oe=Object(c["g"])({setup(){const e=i();return{i18n:e,paths:j}}});n("6de2");Oe.render=je;var fe=Oe;const de={class:"settings"},he={class:"settings__wrap"},ge={class:"settings__title"},_e={class:"settings__main"},ye={class:"settings__note"},ve={class:"settings__note"},ke={class:"settings__note"},we={class:"settings__controls"};function Se(e,t,n,s,a,r){const o=Object(c["l"])("base-input-number"),i=Object(c["l"])("base-field"),l=Object(c["l"])("base-button");return Object(c["h"])(),Object(c["c"])("div",de,[Object(c["f"])("div",he,[Object(c["f"])("h1",ge,Object(c["n"])(e.i18n.t("settings.title")),1),Object(c["f"])("div",_e,[Object(c["f"])(i,{class:"settings__field"},{label:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("states.prepare")),1),Object(c["f"])("span",ye,", "+Object(c["n"])(e.i18n.t("time_unit")),1)]),default:Object(c["o"])(()=>[Object(c["f"])(o,{modelValue:e.prepare,"onUpdate:modelValue":t[1]||(t[1]=t=>e.prepare=t)},null,8,["modelValue"])]),_:1}),Object(c["f"])(i,{class:"settings__field"},{label:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("states.rest")),1),Object(c["f"])("span",ve,", "+Object(c["n"])(e.i18n.t("time_unit")),1)]),default:Object(c["o"])(()=>[Object(c["f"])(o,{modelValue:e.rest,"onUpdate:modelValue":t[2]||(t[2]=t=>e.rest=t)},null,8,["modelValue"])]),_:1}),Object(c["f"])(i,{class:"settings__field"},{label:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("states.work")),1),Object(c["f"])("span",ke,", "+Object(c["n"])(e.i18n.t("time_unit")),1)]),default:Object(c["o"])(()=>[Object(c["f"])(o,{modelValue:e.work,"onUpdate:modelValue":t[3]||(t[3]=t=>e.work=t)},null,8,["modelValue"])]),_:1}),Object(c["f"])(i,{class:"settings__field"},{label:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("settings.cycles")),1)]),default:Object(c["o"])(()=>[Object(c["f"])(o,{modelValue:e.cycles,"onUpdate:modelValue":t[4]||(t[4]=t=>e.cycles=t)},null,8,["modelValue"])]),_:1})]),Object(c["f"])("div",we,[Object(c["f"])(l,{is:"a",href:e.paths.home},{default:Object(c["o"])(()=>[Object(c["e"])(Object(c["n"])(e.i18n.t("actions.close")),1)]),_:1},8,["href"])])])])}const Ce={class:"base-field"},Pe={class:"base-field__label"};function Ve(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])("label",Ce,[Object(c["f"])("span",Pe,[Object(c["k"])(e.$slots,"label")]),Object(c["k"])(e.$slots,"default")])}var Te=Object(c["g"])({name:"BaseField"});n("b36c");Te.render=Ve;var Ne=Te;function Ie(e,t,n,s,a,r){return Object(c["h"])(),Object(c["c"])("input",{ref:"input",value:e.modelValue,type:"number",autocomplete:"off",class:"base-input-number",onInput:t[1]||(t[1]=(...t)=>e.handleInput(...t)),onKeydown:t[2]||(t[2]=(...t)=>e.handleKeydown(...t)),onBlur:t[3]||(t[3]=(...t)=>e.handleBlur(...t))},null,40,["value"])}const Be=1;var xe=Object(c["g"])({name:"BaseInputNumber",props:{modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(e,{emit:t}){const n=Object(c["j"])(null),s=e=>t("update:modelValue",e),a=()=>s(e.modelValue+Be),r=()=>s(e.modelValue-Be);function o(e){const t=/\d+/.exec(e.target.value);null!==t&&s(Number.parseInt(t[0],10))}function i(e){const t=e.key.toLowerCase();return"arrowup"===t||"up"===t?(a(),void e.preventDefault()):"arrowdown"===t||"down"===t?(r(),void e.preventDefault()):void("e"!==t||e.ctrlKey||e.altKey||e.metaKey||e.preventDefault())}function l(){null!==n.value&&(n.value.value=e.modelValue.toString())}return{input:n,handleInput:o,handleKeydown:i,handleBlur:l}}});n("cf4a");xe.render=Ie;var He=xe,Me=Object(c["g"])({name:"Settings",components:{BaseButton:M,BaseField:Ne,BaseInputNumber:He},setup(){const e=S(),t=i(),n=Object(c["a"])({get:()=>e.state.prepare,set:t=>e.dispatch(h.changePrepare,t)}),s=Object(c["a"])({get:()=>e.state.rest,set:t=>e.dispatch(h.changeRest,t)}),a=Object(c["a"])({get:()=>e.state.work,set:t=>e.dispatch(h.changeWork,t)}),r=Object(c["a"])({get:()=>e.state.cycles,set:t=>e.dispatch(h.changeCycles,t)});return{i18n:t,paths:j,prepare:n,rest:s,work:a,cycles:r}}});n("8cad");Me.render=Se;var Fe=Me;function Ke(){const e=Object(c["j"])(""),t=t=>{e.value=!1===t.match?"":t.match.page};return{pageName:e,setPageName:t}}var qe=Object(c["g"])({components:{HomePage:ue,SettingsPage:Fe,NotFoundPage:fe},setup(){const e=S(),{pageName:t,setPageName:n}=Ke();n(e.state[m["c"]]),e.on(m["b"],(e,t)=>{n(t)});const s=Object(c["a"])(()=>t.value===p.home),a=Object(c["a"])(()=>t.value===p.settings);return{hasVisibleHomePage:s,hasVisibleSettingsPage:a}}});n("d8fe");qe.render=P;var Re=qe;n("f95d");Object(c["b"])(Re).mount("#app")},cf4a:function(e,t,n){"use strict";n("b356")},d8fe:function(e,t,n){"use strict";n("bd34")},e081:function(e,t,n){},e202:function(e,t,n){"use strict";n("7429")},f8f5:function(e,t,n){},f95d:function(e,t,n){}});