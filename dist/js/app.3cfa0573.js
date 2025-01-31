(function(){"use strict";var t={419:function(t,e,o){var s=o(5130),n=o(6768),i=o(4232);const r={class:"container py-4 text-center",style:{"overflow-y":"hidden"}},a={class:"d-flex justify-content-between mb-4"},l={class:"display-1 mb-5",style:{"font-size":"calc(4.5rem + 1vw)"}},c={class:"d-flex justify-content-center gap-4 my-3 flex-wrap"},d=["onClick"],h={key:0,class:"mt-3"},u={class:"mt-5 mb-5"},m={key:1,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},g={class:"text-center mb-3"},p={class:"fw-bold"},y={class:"list-group mt-3 mb-3"},b={key:2,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},v={class:"text-center mb-3"},k={key:0,class:"list-group"},f={key:0},C=["onClick"],w={key:2,class:"text-muted text-center mt-4"},x={key:3,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},H={class:"mb-3"};function L(t,e,o,L,M,E){return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("div",a,[(0,n.Lk)("div",null,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=t=>E.setLanguage("en")),class:"btn btn-light me-2 border border-secondary"},"🇺🇸"),(0,n.Lk)("button",{onClick:e[1]||(e[1]=t=>E.setLanguage("fr")),class:"btn btn-light border border-secondary"},"🇫🇷")]),(0,n.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>E.toggleTheme&&E.toggleTheme(...t)),class:"btn btn-light border border-secondary"},"Go "+(0,i.v_)(E.themeButtonText),1)]),e[16]||(e[16]=(0,n.Lk)("h1",{class:"display-1 fw-bold radley-regular mb-3"},"Emoti’Diary",-1)),(0,n.Lk)("h2",l,(0,i.v_)(M.averageMoodEmoji),1),(0,n.Lk)("div",c,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(M.moods,(t=>((0,n.uX)(),(0,n.CE)("button",{key:t.name,onClick:e=>E.selectMood(t),class:(0,i.C4)(["btn","btn-outline-primary","btn-lg","rounded-circle","shadow-lg","p-4","fs-1",{"bg-primary":M.selectedMood===t}])},(0,i.v_)(t.emoji),11,d)))),128))]),M.selectedMood?((0,n.uX)(),(0,n.CE)("div",h,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>M.moodNote=t),class:"form-control mb-2",placeholder:"Add a note... (optional)"},null,512),[[s.Jo,M.moodNote]]),(0,n.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>E.logMood&&E.logMood(...t)),class:"btn btn-success"},"Log Mood")])):(0,n.Q3)("",!0),(0,n.Lk)("div",u,[(0,n.Lk)("button",{onClick:e[5]||(e[5]=t=>M.showStats=!0),class:"btn btn-primary w-100 py-4 shadow-lg mb-4 mt-5"},(0,i.v_)(M.texts.viewStats),1),(0,n.Lk)("button",{onClick:e[6]||(e[6]=t=>M.showHistory=!0),class:"btn btn-secondary w-100 py-3 shadow-lg"},(0,i.v_)(M.texts.viewHistory),1)]),M.showStats?((0,n.uX)(),(0,n.CE)("div",m,[(0,n.Lk)("div",{class:(0,i.C4)([E.modalClass,"p-4 rounded shadow-lg w-75 position-relative"]),style:{"max-height":"80vh","overflow-y":"auto"}},[(0,n.Lk)("button",{onClick:e[7]||(e[7]=t=>M.showStats=!1),class:(0,i.C4)(["btn-close",E.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,n.Lk)("h2",g,(0,i.v_)(M.texts.statsTitle),1),(0,n.Lk)("p",p,(0,i.v_)(M.texts.averageMood)+": "+(0,i.v_)(M.averageHappiness)+"%",1),(0,n.Lk)("ul",y,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(M.moods,((t,e)=>((0,n.uX)(),(0,n.CE)("li",{key:e,class:"list-group-item"},[(0,n.Lk)("span",null,(0,i.v_)(t.emoji)+" "+(0,i.v_)(t.name)+": "+(0,i.v_)(E.getMoodCount(t.name)),1)])))),128))]),e[14]||(e[14]=(0,n.Lk)("i",null,"TODO: Radar Chart here",-1))],2)])):(0,n.Q3)("",!0),M.showHistory?((0,n.uX)(),(0,n.CE)("div",b,[(0,n.Lk)("div",{class:(0,i.C4)([E.modalClass,"p-4 rounded shadow-lg w-75 position-relative"]),style:{"max-height":"80vh","overflow-y":"auto"}},[(0,n.Lk)("button",{onClick:e[8]||(e[8]=t=>M.showHistory=!1),class:(0,i.C4)(["btn-close",E.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,n.Lk)("h2",v,(0,i.v_)(M.texts.historyTitle),1),M.moodHistory.length?((0,n.uX)(),(0,n.CE)("ul",k,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(E.displayedMoodHistory,((t,o)=>((0,n.uX)(),(0,n.CE)("li",{key:o,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,n.Lk)("span",null,[(0,n.eW)((0,i.v_)(t.date)+" - "+(0,i.v_)(t.mood)+" ",1),t.note?((0,n.uX)(),(0,n.CE)("small",f,"("+(0,i.v_)(t.note)+")",1)):(0,n.Q3)("",!0)]),(0,n.Lk)("button",{onClick:t=>E.deleteMood(o),class:"btn btn-secondary btn-sm"},e[15]||(e[15]=[(0,n.Lk)("strong",null," X ",-1)]),8,C)])))),128))])):(0,n.Q3)("",!0),M.moodHistory.length>M.visibleCount?((0,n.uX)(),(0,n.CE)("button",{key:1,onClick:e[9]||(e[9]=(...t)=>E.showMoreHistory&&E.showMoreHistory(...t)),class:"btn btn-link mt-2"},(0,i.v_)(M.texts.showMore),1)):0===M.moodHistory.length?((0,n.uX)(),(0,n.CE)("p",w,(0,i.v_)(M.texts.noMoods),1)):(0,n.Q3)("",!0),(0,n.Lk)("button",{onClick:e[10]||(e[10]=t=>M.showClearPopup=!0),class:"btn btn-danger w-100 mt-5"},(0,i.v_)(M.texts.clearAll),1),(0,n.Lk)("button",{onClick:e[11]||(e[11]=(...t)=>E.exportHistoryAsJson&&E.exportHistoryAsJson(...t)),class:"btn btn-success w-100 mt-3"},(0,i.v_)(M.texts.exportJson),1)],2)])):(0,n.Q3)("",!0),M.showClearPopup?((0,n.uX)(),(0,n.CE)("div",x,[(0,n.Lk)("div",{class:(0,i.C4)([E.modalClass,"p-4 rounded shadow-lg text-center position-relative"])},[(0,n.Lk)("button",{onClick:e[12]||(e[12]=t=>M.showClearPopup=!1),class:(0,i.C4)(["btn-close",E.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,n.Lk)("p",H,(0,i.v_)(M.texts.confirmClear),1),(0,n.Lk)("button",{onClick:e[13]||(e[13]=(...t)=>E.clearHistory&&E.clearHistory(...t)),class:"btn btn-danger w-100"},(0,i.v_)(M.texts.yesClear),1)],2)])):(0,n.Q3)("",!0)])}o(8992),o(4520),o(2577),o(8872),o(4603),o(7566),o(8721);var M={data(){return{language:navigator.language.startsWith("fr")?"fr":"en",texts:{},theme:localStorage.getItem("theme")||"light",translations:{},moods:[{name:"Happy",emoji:"😊",value:3},{name:"Neutral",emoji:"😐",value:0},{name:"Sad",emoji:"😢",value:-3},{name:"Excited",emoji:"🎉",value:4},{name:"Angry",emoji:"😡",value:-1},{name:"Relaxed",emoji:"😌",value:2}],selectedMood:null,moodNote:"",moodHistory:[],showStats:!1,showHistory:!1,showClearPopup:!1,averageHappiness:0,averageMoodEmoji:"😶",visibleCount:5}},computed:{displayedMoodHistory(){return this.moodHistory.slice(0,this.visibleCount)},themeButtonText(){return"light"===this.theme?"dark 🌑":"light 🌞"},themeClass(){return"dark"===this.theme?"bg-dark text-white":"bg-light text-dark"},modalClass(){return"dark"===this.theme?"bg-dark text-white":"bg-white text-dark"},closeButtonClass(){return"dark"===this.theme?"btn-close-dark":""}},created(){this.loadTranslations(),this.loadMoodHistory(),this.calculateHappiness(),this.autoSetTheme()},methods:{async loadTranslations(){try{const t=localStorage.getItem("translations");if(t)this.translations=JSON.parse(t);else{const t=await fetch("/translations.json");this.translations=await t.json(),localStorage.setItem("translations",JSON.stringify(this.translations))}this.texts=this.translations[this.language]||{}}catch(t){console.error("Error loading translations:",t)}},autoSetTheme(){const t=window.matchMedia("(prefers-color-scheme: dark)");this.theme=t.matches?"dark":"light",this.applyTheme()},setLanguage(t){this.language=t,this.loadTranslations()},selectMood(t){this.selectedMood=this.selectedMood===t?null:t},logMood(){if(!this.selectedMood)return;const t={mood:this.selectedMood.emoji,note:this.moodNote,value:this.selectedMood.value,date:(new Date).toLocaleDateString()};this.moodHistory.unshift(t),this.selectedMood=null,this.moodNote="",this.saveMoodHistory(),this.calculateHappiness()},saveMoodHistory(){try{this.moodHistory.length%5===0&&localStorage.setItem("moodHistory",JSON.stringify(this.moodHistory))}catch(t){console.error("Error saving history:",t)}},loadMoodHistory(){try{const t=localStorage.getItem("moodHistory");this.moodHistory=t?JSON.parse(t):[]}catch(t){console.error("Error loading history:",t),alert("Error loading history:",t)}},clearHistory(){this.moodHistory=[],localStorage.removeItem("moodHistory"),this.showClearPopup=!1,this.calculateHappiness()},deleteMood(t){try{this.moodHistory.splice(t,1),this.saveMoodHistory(),this.calculateHappiness()}catch(e){console.error("Error deleting mood:",e),alert("Error deleting mood:",e)}},calculateHappiness(){if(!this.moodHistory.length)return this.averageHappiness=0,void(this.averageMoodEmoji="😶");const t=this.moodHistory.reduce(((t,{value:e})=>t+e),0),e=t/this.moodHistory.length;this.averageHappiness=Math.round(e/4*100),this.averageMoodEmoji=this.averageHappiness>50?"😁":this.averageHappiness>10?"😊":this.averageHappiness>=-10?"😐":this.averageHappiness>=-50?"☹️":"😢"},getMoodCount(t){const e=this.moods.find((e=>e.name===t));return this.moodHistory.filter((t=>t.mood===e.emoji)).length},showMoreHistory(){this.visibleCount+=5},toggleTheme(){this.theme="light"===this.theme?"dark":"light",localStorage.setItem("theme",this.theme),this.applyTheme()},applyTheme(){document.body.classList.toggle("bg-dark","dark"===this.theme),document.body.classList.toggle("text-white","dark"===this.theme),document.body.classList.toggle("bg-light","light"===this.theme),document.body.classList.toggle("text-dark","light"===this.theme)},exportHistoryAsJson(){try{if(!this.moodHistory.length)return alert("Error: No mood history to export.");const t=new Blob([JSON.stringify(this.moodHistory,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),o=document.createElement("a");o.href=e,o.download="mood_history.json",document.body.appendChild(o),o.click(),URL.revokeObjectURL(e)}catch(t){console.error("Error exporting JSON:",t),alert("Error exporting JSON:",t)}}}},E=o(1241);const j=(0,E.A)(M,[["render",L],["__scopeId","data-v-29fb1bbe"]]);var _=j;o(901);(0,s.Ef)(_).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,i){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],i=t[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(a=!1,i<r&&(r=i));if(a){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],a=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(l)var d=l(o)}for(e&&e(s);c<r.length;c++)i=r[c],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},s=self["webpackChunkmood_tracker"]=self["webpackChunkmood_tracker"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(419)}));s=o.O(s)})();
//# sourceMappingURL=app.3cfa0573.js.map