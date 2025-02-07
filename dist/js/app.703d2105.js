(function(){"use strict";var t={4710:function(t,e,o){var s=o(5130),r=o(6768),n=o(4232);const i={class:"container py-4 text-center",style:{"overflow-y":"hidden"}},a={class:"d-flex justify-content-between mb-4"},l={class:"display-1 mb-5",style:{"font-size":"calc(4.5rem + 1vw)"}},c={class:"d-flex justify-content-center gap-4 my-3 flex-wrap"},d=["onClick"],h={key:0,class:"mt-3"},u={class:"mt-5 mb-5"},m={key:1,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},p={class:"text-center mb-3"},g={class:"fw-bold"},y={class:"list-group mt-3 mb-3"},b={key:2,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},v={class:"text-center mb-3"},f={key:0,class:"list-group"},k={key:0},w=["onClick"],x={key:2,class:"text-muted text-center mt-4"},C={class:"d-flex justify-content-between mt-3"},H={key:3,class:"position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center fade-in"},L={class:"mb-3"};function E(t,e,o,E,M,j){return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.Lk)("div",a,[(0,r.Lk)("div",null,[(0,r.Lk)("button",{onClick:e[0]||(e[0]=t=>j.setLanguage("en")),class:"btn btn-light me-2 border border-secondary"},"🇺🇸"),(0,r.Lk)("button",{onClick:e[1]||(e[1]=t=>j.setLanguage("fr")),class:"btn btn-light border border-secondary"},"🇫🇷")]),(0,r.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>j.toggleTheme&&j.toggleTheme(...t)),class:"btn btn-light border border-secondary"},"Go "+(0,n.v_)(j.themeButtonText),1)]),e[17]||(e[17]=(0,r.Lk)("h1",{class:"display-1 fw-bold radley-regular mb-3"},"Emoti’Diary",-1)),(0,r.Lk)("h2",l,(0,n.v_)(M.averageMoodEmoji),1),(0,r.Lk)("div",c,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(M.moods,(t=>((0,r.uX)(),(0,r.CE)("button",{key:t.name,onClick:e=>j.selectMood(t),class:(0,n.C4)(["btn","btn-outline-primary","btn-lg","rounded-circle","shadow-lg","p-4","fs-1",{"bg-primary":M.selectedMood===t}])},(0,n.v_)(t.emoji),11,d)))),128))]),M.selectedMood?((0,r.uX)(),(0,r.CE)("div",h,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>M.moodNote=t),class:"form-control mb-2",placeholder:"Add a note... (optional)"},null,512),[[s.Jo,M.moodNote]]),(0,r.Lk)("button",{onClick:e[4]||(e[4]=(...t)=>j.logMood&&j.logMood(...t)),class:"btn btn-success"},"Log Mood")])):(0,r.Q3)("",!0),(0,r.Lk)("div",u,[(0,r.Lk)("button",{onClick:e[5]||(e[5]=t=>M.showStats=!0),class:"btn btn-primary w-100 py-4 shadow-lg mb-4 mt-5"},(0,n.v_)(M.texts.viewStats),1),(0,r.Lk)("button",{onClick:e[6]||(e[6]=t=>M.showHistory=!0),class:"btn btn-secondary w-100 py-3 shadow-lg"},(0,n.v_)(M.texts.viewHistory),1)]),M.showStats?((0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",{class:(0,n.C4)([j.modalClass,"p-4 rounded shadow-lg w-75 position-relative"]),style:{"max-height":"80vh","overflow-y":"auto"}},[(0,r.Lk)("button",{onClick:e[7]||(e[7]=t=>M.showStats=!1),class:(0,n.C4)(["btn-close",j.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,r.Lk)("h2",p,(0,n.v_)(M.texts.statsTitle),1),(0,r.Lk)("p",g,(0,n.v_)(M.texts.averageMood)+": "+(0,n.v_)(M.averageHappiness)+"%",1),(0,r.Lk)("ul",y,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(M.moods,((t,e)=>((0,r.uX)(),(0,r.CE)("li",{key:e,class:"list-group-item"},[(0,r.Lk)("span",null,(0,n.v_)(t.emoji)+" "+(0,n.v_)(t.name)+": "+(0,n.v_)(j.getMoodCount(t.name)),1)])))),128))]),e[15]||(e[15]=(0,r.Lk)("i",null,"TODO: Radar Chart here",-1))],2)])):(0,r.Q3)("",!0),M.showHistory?((0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("div",{class:(0,n.C4)([j.modalClass,"p-4 rounded shadow-lg w-75 position-relative"]),style:{"max-height":"80vh","overflow-y":"auto"}},[(0,r.Lk)("button",{onClick:e[8]||(e[8]=t=>M.showHistory=!1),class:(0,n.C4)(["btn-close",j.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,r.Lk)("h2",v,(0,n.v_)(M.texts.historyTitle),1),M.moodHistory.length?((0,r.uX)(),(0,r.CE)("ul",f,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(j.displayedMoodHistory,((t,o)=>((0,r.uX)(),(0,r.CE)("li",{key:o,class:"list-group-item d-flex justify-content-between align-items-center"},[(0,r.Lk)("span",null,[(0,r.eW)((0,n.v_)(t.date)+" - "+(0,n.v_)(t.mood)+" ",1),t.note?((0,r.uX)(),(0,r.CE)("small",k,"("+(0,n.v_)(t.note)+")",1)):(0,r.Q3)("",!0)]),(0,r.Lk)("button",{onClick:t=>j.deleteMood(o),class:"btn btn-secondary btn-sm"},e[16]||(e[16]=[(0,r.Lk)("strong",null," X ",-1)]),8,w)])))),128))])):(0,r.Q3)("",!0),M.moodHistory.length>M.visibleCount?((0,r.uX)(),(0,r.CE)("button",{key:1,onClick:e[9]||(e[9]=(...t)=>j.showMoreHistory&&j.showMoreHistory(...t)),class:"btn btn-link mt-2"},(0,n.v_)(M.texts.showMore),1)):0===M.moodHistory.length?((0,r.uX)(),(0,r.CE)("p",x,(0,n.v_)(M.texts.noMoods),1)):(0,r.Q3)("",!0),(0,r.Lk)("button",{onClick:e[10]||(e[10]=t=>M.showClearPopup=!0),class:"btn btn-danger w-100 mt-5"},(0,n.v_)(M.texts.clearAll),1),(0,r.Lk)("div",C,[(0,r.Lk)("button",{onClick:e[11]||(e[11]=(...t)=>j.exportHistoryAsJson&&j.exportHistoryAsJson(...t)),class:"btn btn-success flex-grow-1 me-2"},(0,n.v_)(M.texts.exportJson),1),(0,r.Lk)("button",{onClick:e[12]||(e[12]=(...t)=>j.importHistoryAsJson&&j.importHistoryAsJson(...t)),class:"btn btn-success flex-grow-1"},(0,n.v_)(M.texts.importJson),1)])],2)])):(0,r.Q3)("",!0),M.showClearPopup?((0,r.uX)(),(0,r.CE)("div",H,[(0,r.Lk)("div",{class:(0,n.C4)([j.modalClass,"p-4 rounded shadow-lg text-center position-relative"])},[(0,r.Lk)("button",{onClick:e[13]||(e[13]=t=>M.showClearPopup=!1),class:(0,n.C4)(["btn-close",j.closeButtonClass]),style:{position:"absolute",top:"10px",right:"10px"}},null,2),(0,r.Lk)("p",L,(0,n.v_)(M.texts.confirmClear),1),(0,r.Lk)("button",{onClick:e[14]||(e[14]=(...t)=>j.clearHistory&&j.clearHistory(...t)),class:"btn btn-danger w-100"},(0,n.v_)(M.texts.yesClear),1)],2)])):(0,r.Q3)("",!0)])}o(8992),o(4520),o(2577),o(8872),o(4603),o(7566),o(8721);var M={data(){return{language:navigator.language.startsWith("fr")?"fr":"en",texts:{},theme:localStorage.getItem("theme")||"light",translations:{},moods:[{name:"Happy",emoji:"😊",value:3},{name:"Neutral",emoji:"😐",value:0},{name:"Sad",emoji:"😢",value:-3},{name:"Excited",emoji:"🎉",value:4},{name:"Angry",emoji:"😡",value:-1},{name:"Relaxed",emoji:"😌",value:2}],selectedMood:null,moodNote:"",moodHistory:[],showStats:!1,showHistory:!1,showClearPopup:!1,averageHappiness:0,averageMoodEmoji:"😶",visibleCount:5}},computed:{displayedMoodHistory(){return this.moodHistory.slice(0,this.visibleCount)},themeButtonText(){return"light"===this.theme?"dark 🌑":"light 🌞"},themeClass(){return"dark"===this.theme?"bg-dark text-white":"bg-light text-dark"},modalClass(){return"dark"===this.theme?"bg-dark text-white":"bg-white text-dark"},closeButtonClass(){return"dark"===this.theme?"btn-close-dark":""}},created(){this.loadTranslations(),this.loadMoodHistory(),this.calculateHappiness(),this.autoSetTheme(),console.log("Loaded texts:",this.texts)},methods:{async loadTranslations(){try{const t=localStorage.getItem("translations");if(t)this.translations=JSON.parse(t);else{const t=await fetch("/translations.json");this.translations=await t.json(),localStorage.setItem("translations",JSON.stringify(this.translations))}this.texts=this.translations[this.language]||{}}catch(t){console.error("Error loading translations:",t)}},autoSetTheme(){const t=window.matchMedia("(prefers-color-scheme: dark)");this.theme=t.matches?"dark":"light",this.applyTheme()},setLanguage(t){this.language=t,this.loadTranslations()},selectMood(t){this.selectedMood=this.selectedMood===t?null:t},logMood(){if(!this.selectedMood)return;const t={mood:this.selectedMood.emoji,note:this.moodNote,value:this.selectedMood.value,date:(new Date).toLocaleDateString()};this.moodHistory.unshift(t),this.selectedMood=null,this.moodNote="",this.saveMoodHistory(),this.calculateHappiness()},saveMoodHistory(){try{this.moodHistory.length%5===0&&localStorage.setItem("moodHistory",JSON.stringify(this.moodHistory))}catch(t){console.error("Error saving history:",t)}},loadMoodHistory(){try{const t=localStorage.getItem("moodHistory");this.moodHistory=t?JSON.parse(t):[]}catch(t){console.error("Error loading history:",t),alert("Error loading history:",t)}},clearHistory(){this.moodHistory=[],localStorage.removeItem("moodHistory"),this.showClearPopup=!1,this.calculateHappiness()},deleteMood(t){try{this.moodHistory.splice(t,1),this.saveMoodHistory(),this.calculateHappiness()}catch(e){console.error("Error deleting mood:",e),alert("Error deleting mood:",e)}},calculateHappiness(){if(!this.moodHistory.length)return this.averageHappiness=0,void(this.averageMoodEmoji="😶");const t=this.moodHistory.reduce(((t,{value:e})=>t+e),0),e=t/this.moodHistory.length;this.averageHappiness=Math.round(e/4*100),this.averageMoodEmoji=this.averageHappiness>50?"😁":this.averageHappiness>10?"😊":this.averageHappiness>=-10?"😐":this.averageHappiness>=-50?"☹️":"😢"},getMoodCount(t){const e=this.moods.find((e=>e.name===t));return this.moodHistory.filter((t=>t.mood===e.emoji)).length},showMoreHistory(){this.visibleCount+=5},toggleTheme(){this.theme="light"===this.theme?"dark":"light",localStorage.setItem("theme",this.theme),this.applyTheme()},applyTheme(){document.body.classList.toggle("bg-dark","dark"===this.theme),document.body.classList.toggle("text-white","dark"===this.theme),document.body.classList.toggle("bg-light","light"===this.theme),document.body.classList.toggle("text-dark","light"===this.theme)},exportHistoryAsJson(){try{if(!this.moodHistory.length)return alert("Error: No mood history to export.");const t=new Blob([JSON.stringify(this.moodHistory,null,2)],{type:"application/json"}),e=URL.createObjectURL(t),o=document.createElement("a");o.href=e,o.download="mood_history.json",document.body.appendChild(o),o.click(),URL.revokeObjectURL(e)}catch(t){console.error("Error exporting JSON:",t),alert("Error exporting JSON:",t)}},importHistoryAsJson(){try{const t=document.createElement("input");t.type="file",t.accept=".json",t.onchange=async t=>{const e=t.target.files[0];if(!e)return alert("Error: No file selected.");const o=new FileReader;o.onload=async t=>{try{const e=JSON.parse(t.target.result);if(!Array.isArray(e))return alert("Error: Invalid JSON format.");this.moodHistory=e,this.saveMoodHistory(),this.calculateHappiness()}catch(e){console.error("Error importing JSON:",e),alert("Error importing JSON:",e)}},o.readAsText(e)},t.click()}catch(t){console.error("Error importing JSON:",t),alert("Error importing JSON:",t)}}}},j=o(1241);const S=(0,j.A)(M,[["render",E],["__scopeId","data-v-341ee8dd"]]);var _=S;o(9310);(0,s.Ef)(_).mount("#app")}},e={};function o(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,s,r,n){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],n=t[d][2];for(var a=!0,l=0;l<s.length;l++)(!1&n||i>=n)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(a=!1,n<i&&(i=n));if(a){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,r,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,i=s[0],a=s[1],l=s[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(l)var d=l(o)}for(e&&e(s);c<i.length;c++)n=i[c],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(d)},s=self["webpackChunkmood_tracker"]=self["webpackChunkmood_tracker"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[504],(function(){return o(4710)}));s=o.O(s)})();
//# sourceMappingURL=app.703d2105.js.map