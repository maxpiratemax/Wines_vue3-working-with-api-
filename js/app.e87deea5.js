(function(){"use strict";var n={1562:function(n,e,i){var t=i(9242),r=i(3396);function o(n,e,i,t,o,l){const s=(0,r.up)("m-comp");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(s)])}var l=i(7139);const s={class:"container pt-5"},c=(0,r._)("div",{class:"row mb-3"},[(0,r._)("div",{class:"col"},[(0,r._)("h1",null,"wine.ru")])],-1),a={class:"row"},u={class:"col-md-4"},d={class:"form-group"},f=(0,r._)("label",{for:"search",class:"mb-2"},"Поиск вина",-1),p=(0,r._)("hr",null,null,-1),w={class:"list-group"},h=["onClick"],v={class:"col-md-8"},m={class:"row"},g={class:"col-md-5"},_=["src","alt"],W={class:"col-md-7 mt-3"},b=(0,r._)("h5",null,"Подробнее:",-1),y=(0,r.Uk)(" Рейтинг - "),k=(0,r.Uk)(" География - "),O={key:0},x=(0,r._)("button",{class:"btn btn-primary"},"Купить",-1);function C(n,e,i,o,C,j){return(0,r.wg)(),(0,r.iD)("div",s,[c,(0,r._)("div",a,[(0,r._)("div",u,[(0,r._)("div",d,[f,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>C.search=n),type:"text",class:"form-control",id:"search",placeholder:"Винодельня, вино..."},null,512),[[t.nr,C.search,void 0,{trim:!0}]])]),p,(0,r._)("ul",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(j.filterWine,((n,e)=>((0,r.wg)(),(0,r.iD)("li",{key:n.id,onClick:n=>j.selectWine(e),class:(0,l.C_)([{active:C.selectedWineIndex===e},"list-group-item list-group-item-action pointer"])},(0,l.zw)(n.winery+" - "+n.wine),11,h)))),128))])]),(0,r._)("div",v,[(0,r._)("div",m,[(0,r._)("div",g,[(0,r._)("h2",null,(0,l.zw)(C.dWine.winery),1),(0,r._)("img",{src:C.dWine.image,alt:C.dWine.winery,class:"rounded wineImage"},null,8,_)]),(0,r._)("div",W,[b,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Uk)((0,l.zw)(C.dWine.winery)+" - ",1),(0,r._)("strong",null,(0,l.zw)(C.dWine.wine),1)]),(0,r._)("li",null,[y,(0,r._)("strong",null,(0,l.zw)(C.dWine.rating.average),1)]),(0,r._)("li",null,[k,(0,r._)("strong",null,(0,l.zw)(C.dWine.location),1)])]),C.phoneVis?((0,r.wg)(),(0,r.iD)("p",O,(0,l.zw)(C.dWine.wine),1)):(0,r.kq)("",!0),x])])])])])}i(6699);var j=i(6265),z=i.n(j);let I=[{winery:"Maselva",wine:"Emporda 2012",rating:{average:"4.9",reviews:"88 ratings"},location:"Spain\n·\nEmpordà",image:"https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",id:1}];var D={data(){return{dWines:[],dWine:I[0],selectedWineIndex:0,phoneVis:!1,search:""}},methods:{selectWine(n){this.dWine=this.filterWine[n],this.selectedWineIndex=n,window.scrollTo(0,0)}},computed:{filterWine(){let n=this.search.toLowerCase();return this.dWines.filter((e=>e.wine.toLowerCase().includes(n)||e.winery.toLowerCase().includes(n)||e.location.toLowerCase().includes(n)))}},watch:{filterWine(){this.selectedWineIndex=0,void 0!=this.filterWine[0]&&(this.dWine=this.filterWine[0])}},created(){z().get("https://api.sampleapis.com/wines/reds").then((n=>this.dWines=n.data)).catch((n=>console.log(n)))}},L=i(89);const T=(0,L.Z)(D,[["render",C]]);var U=T,A={name:"App",components:{MComp:U}};const E=(0,L.Z)(A,[["render",o]]);var M=E;(0,t.ri)(M).mount("#app")}},e={};function i(t){var r=e[t];if(void 0!==r)return r.exports;var o=e[t]={exports:{}};return n[t](o,o.exports,i),o.exports}i.m=n,function(){var n=[];i.O=function(e,t,r,o){if(!t){var l=1/0;for(u=0;u<n.length;u++){t=n[u][0],r=n[u][1],o=n[u][2];for(var s=!0,c=0;c<t.length;c++)(!1&o||l>=o)&&Object.keys(i.O).every((function(n){return i.O[n](t[c])}))?t.splice(c--,1):(s=!1,o<l&&(l=o));if(s){n.splice(u--,1);var a=r();void 0!==a&&(e=a)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[t,r,o]}}(),function(){i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,{a:e}),e}}(),function(){i.d=function(n,e){for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};i.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,o,l=t[0],s=t[1],c=t[2],a=0;if(l.some((function(e){return 0!==n[e]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(c)var u=c(i)}for(e&&e(t);a<l.length;a++)o=l[a],i.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return i.O(u)},t=self["webpackChunkwines"]=self["webpackChunkwines"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(1562)}));t=i.O(t)})();
//# sourceMappingURL=app.e87deea5.js.map