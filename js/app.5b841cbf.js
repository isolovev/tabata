(function(e){function t(t){for(var i,a,r=t[0],o=t[1],l=t[2],b=0,m=[];b<r.length;b++)a=r[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],i=!0,r=1;r<s.length;r++){var o=s[r];0!==c[o]&&(i=!1)}i&&(n.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},c={app:0},n=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/tabata/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"042c":function(e,t,s){},"3dcc":function(e,t,s){},"520f":function(e,t,s){"use strict";s("f8f5")},"5ac1":function(e,t,s){},"5af8":function(e,t,s){},7429:function(e,t,s){},7704:function(e){e.exports=JSON.parse('{"home":{"total_time":"Общее время","cycles":"Раунды"},"settings":{"title":"Настройки","cycles":"Кругов"},"states":{"prepare":"Подготовка","rest":"Отдых","work":"Работа","pause":"Пауза"},"actions":{"close":"Закрыть","start":"Старт","pause":"Пауза","stop":"Стоп","settings":"Настройки","resume":"Продолжить"},"time_unit":"сек."}')},"8cad":function(e,t,s){"use strict";s("e081")},a02d:function(e,t,s){"use strict";s("5af8")},a12b:function(e,t,s){"use strict";s("5ac1")},b356:function(e,t,s){},b36c:function(e,t,s){"use strict";s("3dcc")},bb60:function(e,t,s){"use strict";s("042c")},bd34:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);var i=s("7a23");const c={id:"app"};function n(e,t,s,n,a,r){const o=Object(i["x"])("router-view");return Object(i["s"])(),Object(i["e"])("div",c,[Object(i["h"])(o)])}s("d8fe");const a={};a.render=n;var r=a,o=s("ab42"),l=s("7704");const u=(()=>Object(o["a"])({locale:null!=Object({NODE_ENV:"production",BASE_URL:"/tabata/"}).VUE_APP_I18N_LOCALE?Object({NODE_ENV:"production",BASE_URL:"/tabata/"}).VUE_APP_I18N_LOCALE:"ru",fallbackLocale:null!=Object({NODE_ENV:"production",BASE_URL:"/tabata/"}).VUE_APP_I18N_FALLBACK_LOCALE?Object({NODE_ENV:"production",BASE_URL:"/tabata/"}).VUE_APP_I18N_FALLBACK_LOCALE:"ru",messages:{ru:l}}))();var b=s("6c02");const m={class:"home__wrap"},h={key:2,class:"home__controls"},d={key:3,class:"home__controls"};function O(e,t,s,c,n,a){const r=Object(i["x"])("home-time-info"),o=Object(i["x"])("home-timer"),l=Object(i["x"])("base-button");return Object(i["s"])(),Object(i["e"])("div",{class:e.classes},[Object(i["h"])("div",m,[e.hasStartTimer?Object(i["f"])("",!0):(Object(i["s"])(),Object(i["e"])(r,{key:0})),e.hasStartTimer?(Object(i["s"])(),Object(i["e"])(o,{key:1,remained:e.remained,"remained-cycles":e.remainedCycles,"state-machine":e.sm},null,8,["remained","remained-cycles","state-machine"])):Object(i["f"])("",!0),e.hasStartTimer?Object(i["f"])("",!0):(Object(i["s"])(),Object(i["e"])("div",h,[Object(i["h"])(l,{onClick:e.clickSettings},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.settings")),1)]),_:1},8,["onClick"]),Object(i["h"])(l,{onClick:e.clickStart},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.start")),1)]),_:1},8,["onClick"])])),e.hasStartTimer?(Object(i["s"])(),Object(i["e"])("div",d,[e.hasPauseTimer?(Object(i["s"])(),Object(i["e"])(l,{key:0,onClick:e.clickTogglePause},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.resume")),1)]),_:1},8,["onClick"])):(Object(i["s"])(),Object(i["e"])(l,{key:1,"is-gray":"",onClick:e.clickTogglePause},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.pause")),1)]),_:1},8,["onClick"])),Object(i["h"])(l,{onClick:e.clickStop},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.stop")),1)]),_:1},8,["onClick"])])):Object(i["f"])("",!0)])],2)}var p=s("5502");function j(e,t,s,c,n,a){return Object(i["s"])(),Object(i["e"])("button",{class:e.classes,onClick:t[1]||(t[1]=(...t)=>e.handleClick(...t))},[Object(i["w"])(e.$slots,"default")],2)}var y=Object(i["i"])({name:"BaseButton",props:{isGray:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:t}){const s=Object(i["c"])(()=>({"base-button":!0,"base-button_gray":e.isGray})),c=()=>t("click");return{classes:s,handleClick:c}}});s("a02d");y.render=j;var f,_=y;(function(e){e[e["init"]=0]="init",e[e["pause"]=1]="pause",e[e["prepare"]=2]="prepare",e[e["work"]=3]="work",e[e["rest"]=4]="rest"})(f||(f={}));class g{constructor(){this._state=f.init,this._prevState=f.init}transition(e){this._prevState=this._state,this._state=e}reset(){this._state=f.init,this._prevState=f.init}get state(){return this._state}get prevState(){return this._prevState}}const k={home:"home",settings:"settings"},v={class:"home-time-info"},w={class:"home-time-info__list"},C={class:"home-time-info__item"},S={class:"home-time-info__item"},q={class:"home-time-info__item"},E={class:"home-time-info__item"},z={class:"home-time-info__total"},V={class:"home-time-info__duration"};function N(e,t,s,c,n,a){return Object(i["s"])(),Object(i["e"])("div",v,[Object(i["h"])("ul",w,[Object(i["h"])("li",C,Object(i["z"])(e.i18n.t("states.prepare"))+": "+Object(i["z"])(e.state.prepare)+" "+Object(i["z"])(e.i18n.t("time_unit")),1),Object(i["h"])("li",S,Object(i["z"])(e.i18n.t("states.rest"))+": "+Object(i["z"])(e.state.rest)+" "+Object(i["z"])(e.i18n.t("time_unit")),1),Object(i["h"])("li",q,Object(i["z"])(e.i18n.t("states.work"))+": "+Object(i["z"])(e.state.work)+" "+Object(i["z"])(e.i18n.t("time_unit")),1),Object(i["h"])("li",E,Object(i["z"])(e.i18n.t("settings.cycles"))+": "+Object(i["z"])(e.state.cycles),1)]),Object(i["h"])("div",z,[Object(i["g"])(Object(i["z"])(e.i18n.t("home.total_time"))+": ",1),Object(i["h"])("div",V,Object(i["z"])(e.totalFormatTime),1)])])}function x(e){const t=Math.floor(e/60),s=Math.round(e-60*t),i=t<10?"0"+t:t,c=s<10?"0"+s:s;return[i,c].join(":")}var T=Object(i["i"])({name:"HomeTimeInfo",setup(){const e=Object(p["c"])(),t=Object(o["b"])(),s=Object(i["c"])(()=>e.state.prepare+e.state.rest*e.state.cycles+e.state.work*e.state.cycles),c=Object(i["c"])(()=>x(s.value));return{i18n:t,total:s,totalFormatTime:c,state:e.state}}});s("520f");T.render=N;var I=T;const B={class:"home-timer"},K={class:"home-timer__title"},P={class:"home-timer__remained"};function $(e,t,s,c,n,a){const r=Object(i["x"])("home-timer-cycles");return Object(i["s"])(),Object(i["e"])("div",B,[Object(i["h"])("div",K,Object(i["z"])(e.title),1),Object(i["h"])("div",P,Object(i["z"])(e.remainedFormatTime),1),Object(i["h"])(r,{keep:e.keepCycles,total:e.cycles},null,8,["keep","total"])])}const L={class:"home-timer-cycles"},A={class:"home-timer-cycles__title"},U={class:"home-timer-cycles__keep"},D={class:"home-timer-cycles__total"};function F(e,t,s,c,n,a){return Object(i["s"])(),Object(i["e"])("div",L,[Object(i["h"])("div",A,Object(i["z"])(e.title)+":",1),Object(i["h"])("span",U,Object(i["z"])(e.keep),1),Object(i["h"])("span",D,"/"+Object(i["z"])(e.total),1)])}var M=Object(i["i"])({name:"HomeTimerCycles",props:{keep:{type:Number,required:!0},total:{type:Number,required:!0}},setup(){const e=Object(o["b"])(),t=e.t("home.cycles");return{title:t}}});s("e202");M.render=F;var H=M,R=Object(i["i"])({name:"HomeTimer",components:{HomeTimerCycles:H},props:{remained:{type:Number,required:!0},remainedCycles:{type:Number,required:!0},stateMachine:{type:g,required:!0}},setup(e){const t=Object(o["b"])(),s=Object(p["c"])(),c=Object(i["c"])(()=>s.state.cycles-e.remainedCycles),n=Object(i["c"])(()=>x(e.remained)),a=Object(i["c"])(()=>{switch(e.stateMachine.state){case f.prepare:return t.t("states.prepare");case f.work:return t.t("states.work");case f.rest:return t.t("states.rest");default:return t.t("states.pause")}});return{keepCycles:c,remainedFormatTime:n,title:a,cycles:s.state.cycles}}});s("a12b");R.render=$;var J=R,Q=Object(i["i"])({name:"Home",components:{BaseButton:_,HomeTimeInfo:I,HomeTimer:J},data:()=>({sm:new g,remained:0,remainedCycles:0,intervalID:0}),computed:Object.assign(Object.assign({},Object(p["b"])(["prepare","rest","work","cycles"])),{hasStartTimer(){return this.sm.state!==f.init},hasPauseTimer(){return this.sm.state===f.pause},classes(){return{home:!0,home_start:this.sm.state!==f.init,home_work:this.sm.state===f.work,home_rest:this.sm.state===f.rest}}}),methods:{clickSettings(){this.sm.transition(f.init),this.$router.push({name:k.settings})},clickStart(){this.sm.transition(f.prepare),this.remained=this.prepare,this.remainedCycles=this.cycles,this.intervalID=setInterval(this.changeTimer.bind(this),1e3)},clickStop(){this.sm.reset(),clearInterval(this.intervalID)},clickTogglePause(){this.sm.state===f.pause?(this.sm.transition(this.sm.prevState),this.intervalID=setInterval(this.changeTimer.bind(this),1e3)):(this.sm.transition(f.pause),clearInterval(this.intervalID))},changeTimer(){this.remained-=1,this.remained>0||(this.sm.state===f.work?(this.remained=this.rest,this.sm.transition(f.rest)):(this.remained=this.work,this.remainedCycles-=1,this.sm.transition(f.work)),this.remainedCycles<0&&this.clickStop())}}});s("bb60");Q.render=O;var G=Q;const W={class:"settings"},X={class:"settings__wrap"},Y={class:"settings__title"},Z={class:"settings__main"},ee={class:"settings__note"},te={class:"settings__note"},se={class:"settings__note"},ie={class:"settings__controls"};function ce(e,t,s,c,n,a){const r=Object(i["x"])("base-input-number"),o=Object(i["x"])("base-field"),l=Object(i["x"])("base-button");return Object(i["s"])(),Object(i["e"])("div",W,[Object(i["h"])("div",X,[Object(i["h"])("h1",Y,Object(i["z"])(e.$t("settings.title")),1),Object(i["h"])("div",Z,[Object(i["h"])(o,{class:"settings__field"},{label:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("states.prepare")),1),Object(i["h"])("span",ee,", "+Object(i["z"])(e.$t("time_unit")),1)]),default:Object(i["E"])(()=>[Object(i["h"])(r,{modelValue:e.prepare,"onUpdate:modelValue":t[1]||(t[1]=t=>e.prepare=t)},null,8,["modelValue"])]),_:1}),Object(i["h"])(o,{class:"settings__field"},{label:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("states.rest")),1),Object(i["h"])("span",te,", "+Object(i["z"])(e.$t("time_unit")),1)]),default:Object(i["E"])(()=>[Object(i["h"])(r,{modelValue:e.rest,"onUpdate:modelValue":t[2]||(t[2]=t=>e.rest=t)},null,8,["modelValue"])]),_:1}),Object(i["h"])(o,{class:"settings__field"},{label:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("states.work")),1),Object(i["h"])("span",se,", "+Object(i["z"])(e.$t("time_unit")),1)]),default:Object(i["E"])(()=>[Object(i["h"])(r,{modelValue:e.work,"onUpdate:modelValue":t[3]||(t[3]=t=>e.work=t)},null,8,["modelValue"])]),_:1}),Object(i["h"])(o,{class:"settings__field"},{label:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("settings.cycles")),1)]),default:Object(i["E"])(()=>[Object(i["h"])(r,{modelValue:e.cycles,"onUpdate:modelValue":t[4]||(t[4]=t=>e.cycles=t)},null,8,["modelValue"])]),_:1})]),Object(i["h"])("div",ie,[Object(i["h"])(l,{onClick:e.handleSave},{default:Object(i["E"])(()=>[Object(i["g"])(Object(i["z"])(e.$t("actions.close")),1)]),_:1},8,["onClick"])])])])}const ne={class:"base-field"},ae={class:"base-field__label"};function re(e,t,s,c,n,a){return Object(i["s"])(),Object(i["e"])("label",ne,[Object(i["h"])("span",ae,[Object(i["w"])(e.$slots,"label")]),Object(i["w"])(e.$slots,"default")])}var oe=Object(i["i"])({name:"BaseField"});s("b36c");oe.render=re;var le=oe;function ue(e,t,s,c,n,a){return Object(i["F"])((Object(i["s"])(),Object(i["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.quantity=t),type:"number",maxlength:e.maxlength,autocomplete:"off",class:"base-input-number",onKeyup:t[2]||(t[2]=(...t)=>e.handleKeyup(...t)),onKeydown:t[3]||(t[3]=(...t)=>e.handleKeydown(...t)),onBlur:t[4]||(t[4]=(...t)=>e.handleBlur(...t))},null,40,["maxlength"])),[[i["B"],e.quantity,void 0,{number:!0}]])}var be=Object(i["i"])({name:"BaseInputNumber",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1e11},step:{type:Number,default:1},maxlength:{type:Number,default:4}},emits:["update:modelValue"],data:({modelValue:e})=>({quantity:e,oldValue:e,isKeydown:!1}),watch:{quantity:function(){this.evaluateQuantity()},min:function(e){this.quantity<e&&(this.quantity=e)},max:function(e){this.quantity>e&&(this.quantity=e)}},mounted(){this.emitChange(!0)},methods:{emitChange(e=!1){this.oldValue=this.quantity,e&&(this.quantity=this.modelValue<this.min?this.min:this.modelValue),this.$emit("update:modelValue",this.quantity)},increment(){this.quantity?this.quantity=this.quantity<this.max?this.quantity+this.step:this.max:this.quantity=this.min},decrement(){this.quantity?this.quantity=this.quantity>this.min?this.quantity-this.step:this.min:this.quantity=this.min},evaluateQuantity(){this.isKeydown||this.quantity.toString().length>0&&this.quantity!==this.oldValue&&this.emitChange()},handleBlur(){0!==this.quantity.toString().length?(this.quantity<this.min&&(this.quantity=this.min),this.quantity>this.max&&(this.quantity=this.max)):this.quantity=this.oldValue},handleKeyup(){this.isKeydown=!1,this.evaluateQuantity()},handleKeydown(e){return this.isKeydown=!0,38===e.keyCode?(this.increment(),void e.preventDefault()):40===e.keyCode?(this.decrement(),void e.preventDefault()):void([46,8,9,27,13].includes(e.keyCode)||65===e.keyCode&&(e.ctrlKey||e.metaKey)||67===e.keyCode&&(e.ctrlKey||e.metaKey)||82===e.keyCode&&(e.ctrlKey||e.metaKey)||88===e.keyCode&&(e.ctrlKey||e.metaKey)||e.keyCode>=35&&e.keyCode<=39||(110===e.keyCode||190===e.keyCode||(e.shiftKey||e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105))&&e.preventDefault())}}});s("cf4a");be.render=ue;var me=be;const he="changePrepare",de="changeRest",Oe="changeWork",pe="changeCycles";var je=Object(i["i"])({name:"Settings",components:{BaseButton:_,BaseField:le,BaseInputNumber:me},setup(){const e=Object(p["c"])(),t=Object(b["c"])(),s=Object(i["c"])({get:()=>e.state.prepare,set:t=>e.commit(he,t)}),c=Object(i["c"])({get:()=>e.state.rest,set:t=>e.commit(de,t)}),n=Object(i["c"])({get:()=>e.state.work,set:t=>e.commit(Oe,t)}),a=Object(i["c"])({get:()=>e.state.cycles,set:t=>e.commit(pe,t)}),r=()=>t.push({name:k.home});return{prepare:s,rest:c,work:n,cycles:a,handleSave:r}}});s("8cad");je.render=ce;var ye=je;const fe=Object(b["a"])({history:Object(b["b"])("/tabata/"),routes:[{path:"/",name:k.home,component:G},{path:"/settings/",name:k.settings,component:ye}]});function _e(e){return localStorage.getItem(e)}function ge(e,t){localStorage.setItem(e,t)}const ke={prepare:"prepare",rest:"rest",work:"work",cycles:"cycles"},ve=Object(p["a"])({state:()=>{const e=_e(ke.prepare),t=_e(ke.rest),s=_e(ke.work),i=_e(ke.cycles);return{prepare:null!==e?Number.parseInt(e,10):2,rest:null!==t?Number.parseInt(t,10):20,work:null!==s?Number.parseInt(s,10):30,cycles:null!==i?Number.parseInt(i,10):8}},mutations:{[he](e,t){e.prepare=t,ge(ke.prepare,t.toString())},[de](e,t){e.rest=t,ge(ke.rest,t.toString())},[Oe](e,t){e.work=t,ge(ke.work,t.toString())},[pe](e,t){e.cycles=t,ge(ke.cycles,t.toString())}}});s("f95d");Object(i["d"])(r).use(u).use(fe).use(ve).mount("#app")},cf4a:function(e,t,s){"use strict";s("b356")},d8fe:function(e,t,s){"use strict";s("bd34")},e081:function(e,t,s){},e202:function(e,t,s){"use strict";s("7429")},f8f5:function(e,t,s){},f95d:function(e,t,s){}});