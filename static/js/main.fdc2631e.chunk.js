(this["webpackJsonpreact-practice-list-edit-sort-filter"]=this["webpackJsonpreact-practice-list-edit-sort-filter"]||[]).push([[0],{1710:function(e,t,n){var r={"./ReadMe.md":1711,"./af_ZA":159,"./af_ZA.js":159,"./ar":160,"./ar.js":160,"./az":161,"./az.js":161,"./cz":162,"./cz.js":162,"./de":163,"./de.js":163,"./de_AT":164,"./de_AT.js":164,"./de_CH":165,"./de_CH.js":165,"./el":166,"./el.js":166,"./en":167,"./en.js":167,"./en_AU":168,"./en_AU.js":168,"./en_AU_ocker":169,"./en_AU_ocker.js":169,"./en_BORK":170,"./en_BORK.js":170,"./en_CA":171,"./en_CA.js":171,"./en_GB":172,"./en_GB.js":172,"./en_IE":173,"./en_IE.js":173,"./en_IND":174,"./en_IND.js":174,"./en_NG":175,"./en_NG.js":175,"./en_US":176,"./en_US.js":176,"./en_ZA":177,"./en_ZA.js":177,"./es":178,"./es.js":178,"./es_MX":179,"./es_MX.js":179,"./fa":180,"./fa.js":180,"./fi":181,"./fi.js":181,"./fr":182,"./fr.js":182,"./fr_CA":183,"./fr_CA.js":183,"./fr_CH":184,"./fr_CH.js":184,"./ge":185,"./ge.js":185,"./id_ID":186,"./id_ID.js":186,"./it":187,"./it.js":187,"./ja":188,"./ja.js":188,"./ko":189,"./ko.js":189,"./nb_NO":190,"./nb_NO.js":190,"./nep":191,"./nep.js":191,"./nl":192,"./nl.js":192,"./nl_BE":193,"./nl_BE.js":193,"./pl":194,"./pl.js":194,"./pt_BR":195,"./pt_BR.js":195,"./pt_PT":196,"./pt_PT.js":196,"./ru":197,"./ru.js":197,"./sk":198,"./sk.js":198,"./sv":199,"./sv.js":199,"./tr":200,"./tr.js":200,"./uk":201,"./uk.js":201,"./vi":202,"./vi.js":202,"./zh_CN":203,"./zh_CN.js":203,"./zh_TW":204,"./zh_TW.js":204,"./zu_ZA":205,"./zu_ZA.js":205};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=1710},1813:function(e,t,n){},1814:function(e,t,n){},1815:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(45),o=n.n(c),s=n(19),i=n(30),u=n(214),l=n(22),d=n.n(l),f=n(10);n(69),n(27);var p=n(216);var j=n(207),m=n.n(j),y=n(208),b=n.n(y),E=n(209),O=n.n(E);var _=function(e){const t=r.Children.only(e),n=t.props,c=t.type,o=function(e){class t extends r.Component{render(){return a.a.createElement(s.ReactReduxContext.Consumer,null,t=>{let n=t.store;Object(p.a)(t,["store"]);return a.a.createElement(s.ReactReduxContext.Provider,{value:{store:n.liftedStore,storeState:n.liftedStore.getState()}},a.a.createElement(e,this.props))})}}return t}(Object(s.connect)(e=>e)(c));class i extends r.Component{render(){return a.a.createElement(o,n)}}return i.instrument=e=>d()((e,t)=>c.update(n,e,t),e),i}(a.a.createElement(b.a,{toggleVisibilityKey:"ctrl-h",changePositionKey:"ctrl-q",changeMonitorKey:"ctrl-m",defaultIsVisible:!0},a.a.createElement(m.a,{theme:"tomorrow"}),a.a.createElement(O.a,{keyboardEnabled:!0}))),v=n(37),h=n(14),g=n(7);function w(){const e=Object(h.a)(["\n  background: blueviolet;\n  border-radius: 10px;\n  padding: 4px;\n  color: white;\n  font-size: 12pt;\n"]);return w=function(){return e},e}function x(){const e=Object(h.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n"]);return x=function(){return e},e}function C(){const e=Object(h.a)(["\n  text-align: left;\n  padding: 4px;\n  font-size: 12pt;\n"]);return C=function(){return e},e}function k(){const e=Object(h.a)(["\n  box-sizing: border-box;\n  border: solid 3px gray;\n  overflow: hidden;\n  flex-grow: 1;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  max-width: ","%;\n"]);return k=function(){return e},e}function D(){const e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  flex-grow: 1;\n  ","\n  justify-content: space-between;\n"]);return D=function(){return e},e}function T(){const e=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n"]);return T=function(){return e},e}const U=g.default.div(T()),S=g.default.div(D(),({gray:e})=>e?"& > ".concat(z," { background: lightgray; }"):""),z=g.default.div(k(),({size:e})=>e||33),A=g.default.div(C()),I=Object(g.default)(A)(x()),R=g.default.div(w()),K=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});function B({price:e}){return a.a.createElement(A,null,K.format(e))}function N(e,t){if(!e||!t)return!1;const n=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});switch(t){case"asc":return(t,r)=>n.compare(t[e],r[e]);case"desc":return(t,r)=>n.compare(r[e],t[e]);case"default":default:return!1}}const F={sort:{sortByKey:!1,directionKey:0},sortOptions:{},sortTitle:{asc:"\\/",desc:"/\\",default:"||"},filter:!1};function P(e,t){switch(t.type){case"sortInit":{const n=t.payload,r=n.key,a=n.dataIndex,c=n.sortDirections;return Object(f.a)(Object(f.a)({},e),{},{sortOptions:Object(f.a)(Object(f.a)({},e.sortOptions),{},{[r]:{dataIndex:a,sortDirections:c}})})}case"sortToggle":{const n=t.payload.sortByKey,r=(e.sort.sortByKey===n?e.sort:{directionKey:0}).directionKey,a=r===e.sortOptions[n].sortDirections.length-1?0:r+1;return Object(f.a)(Object(f.a)({},e),{},{sort:{sortByKey:n,directionKey:a}})}default:return e}}function H(){const e=Object(h.a)(["\n  cursor: pointer;\n"]);return H=function(){return e},e}function L(){const e=Object(h.a)(["\n  user-select: none;\n"]);return L=function(){return e},e}const Z=Object(g.default)(z)(L()),M=Object(g.default)(Z)(H());function Q({data:e,filter:t,loading:n,error:c,columns:o}){const s=Object(r.useReducer)(P,F),i=Object(v.a)(s,2),u=i[0],l=i[1];Object(r.useEffect)(()=>{o.filter(e=>e.sortDirections).forEach(({key:e,dataIndex:t,sortDirections:n})=>{l({type:"sortInit",payload:{key:e,dataIndex:t,sortDirections:n}})})},[o,l]);const d=function(e){const t=e.sort,n=t.sortByKey,r=t.directionKey,a=e.sortOptions[n]||{},c=a.dataIndex,o=a.sortDirections,s=(void 0===o?[]:o)[r]||!1;return[N(c,s),s]}(u),f=Object(v.a)(d,2),p=f[0],j=f[1],m=p?e.slice(0).sort(p):e,y=t?m.filter(e=>e.name.toLowerCase().includes(t.toLowerCase())):m;return a.a.createElement(U,null,a.a.createElement(S,{key:"header-row"},o.map(({title:e,size:t,key:n,sortDirections:r})=>{const c="".concat("header-row","-").concat(n);if(r&&u.sort){const r=u.sort.sortByKey,o=n===r?u.sortTitle[j]:u.sortTitle.default;return a.a.createElement(M,{key:c,onClick:()=>{l({type:"sortToggle",payload:{sortByKey:n}})},size:t},a.a.createElement(A,null,e),a.a.createElement(A,null,o))}return a.a.createElement(Z,{key:c,size:t},a.a.createElement(A,null,e))})),a.a.createElement(G,{data:y,columns:o}))}function G({data:e,columns:t}){return e.map((e,n)=>{const r="row-".concat(n);return a.a.createElement(S,{key:r},a.a.createElement(J,{rowKey:r,item:e,columns:t}))})}function J({rowKey:e,item:t,columns:n}){return n.map(n=>a.a.createElement(z,{key:"".concat(e,"-").concat(n.key),size:n.size},n.render?n.render(t):t))}var V=n(18),W=n.n(V),X=n(38);var q=n(48),Y=n(215);const $={id:{faker:"random.uuid"},name:{faker:"commerce.productName",length:15},email:{faker:"internet.email"},count:{faker:"random.number"},price:{faker:"finance.amount(100, 1000000, 2)"},currency:{static:"USD"}};function ee(){return te.apply(this,arguments)}function te(){return(te=Object(q.a)(W.a.mark((function e(t=5){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(Y.a)().schema("products",$,t).build().then(e=>new Promise(t=>{setTimeout(()=>t(e.products),1e3)}),e=>console.error(e)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=W.a.mark(ae),re=W.a.mark(ce);function ae({payload:e={}}){var t,n,r;return W.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.count,n=void 0===t?5:t,a.next=4,Object(X.a)(ee,n);case 4:return r=a.sent,a.next=7,Object(X.b)({type:"PRODUCTS_FETCH_SUCCEEDED",payload:{data:r,loading:!1}});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(X.b)({type:"PRODUCTS_FETCH_FAILED",payload:{error:a.t0.message,loading:!1}});case 13:case"end":return a.stop()}}),ne,null,[[0,9]])}function ce(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(X.c)("PRODUCTS_FETCH_REQUESTED",ae);case 2:case"end":return e.stop()}}),re)}var oe=ce;const se={data:[],loading:!1,error:!1};var ie=n(11);function ue(){const e=Object(h.a)(["\n  display: flex;\n"]);return ue=function(){return e},e}function le(){const e=Object(h.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]);return le=function(){return e},e}const de=g.default.div(le()),fe=g.default.button(ue());var pe=n(36);function je(){const e=Object(h.a)(["\n  display: flex;\n"]);return je=function(){return e},e}const me=g.default.div(je()),ye=e=>"?search=".concat(e);function be({filterFromQuery:e}){const t=Object(ie.d)(),n=Object(ie.e)().pathname,c=Object(r.useState)(e),o=Object(v.a)(c,2),s=o[0],i=o[1];return a.a.createElement(me,null,a.a.createElement("input",{type:"text",onChange:e=>{e.preventDefault(),i(e.target.value)},onKeyUp:e=>{if(13===e.keyCode){const r=e.target.value.length?ye(e.target.value):n;t.push(r)}},value:s}),a.a.createElement(pe.b,{to:ye(s)},a.a.createElement("button",null,"\u0418\u0441\u043a\u0430\u0442\u044c")))}n(1813);const Ee=[{key:"name",title:"Name",dataIndex:"name",sortDirections:["default","asc","desc"],size:45,render:e=>a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null,e.name),a.a.createElement(R,null,e.count))},{key:"price",title:"Price",dataIndex:"price",sortDirections:["default","asc","desc"],size:30,render:e=>a.a.createElement(B,{price:e.price})},{key:"actions",title:"Actions",size:25,render:(e,t={edit:()=>{},delete:()=>{}})=>a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:t.edit(e)},"Edit"),a.a.createElement("button",{onClick:t.delete(e)},"Delete"))}];var Oe=Object(s.connect)(e=>({products:e.products}))((function({products:e,dispatch:t}){const n=e.data,c=e.loading,o=e.error,s=new URLSearchParams(Object(ie.e)().search).get("search")||"";return Object(r.useEffect)(()=>{t({type:"PRODUCTS_FETCH_REQUESTED",payload:{count:100}})},[t]),a.a.createElement("div",{className:"products"},a.a.createElement(de,null,a.a.createElement(be,{filterFromQuery:s}),a.a.createElement(fe,null,"Add New")),a.a.createElement(Q,{data:n,filter:s,loading:c,error:o,columns:Ee,filterBy:"name"}))}));const _e=Object(u.a)(),ve=Object(i.c)({products:function(e=se,{type:t,payload:n}){switch(t){case"PRODUCTS_FETCH_REQUESTED":return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case"PRODUCTS_FETCH_SUCCEEDED":{const t=n.data;return Object(f.a)(Object(f.a)({},e),{},{data:t,loading:!1,error:!1})}case"PRODUCTS_FETCH_FAILED":{const t=n.error;return Object(f.a)(Object(f.a)({},e),{},{error:t,loading:!1})}default:return e}}}),he=Object(i.e)(ve,Object(i.d)(Object(i.a)(_e),_.instrument()));_e.run(oe);var ge=he;n(1814);var we=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(pe.a,null,a.a.createElement(Oe,null)))};const xe=document.getElementById("root");o.a.render(a.a.createElement(s.Provider,{store:ge},a.a.createElement(we,null),a.a.createElement(_,null)),xe)},217:function(e,t,n){e.exports=n(1815)}},[[217,1,2]]]);
//# sourceMappingURL=main.fdc2631e.chunk.js.map