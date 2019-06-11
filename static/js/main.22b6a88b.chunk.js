(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,a,t){e.exports=t(79)},76:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),s=t.n(c),i=t(2),l=t(21),o=t(10),m=t(11),u=t(14),p=t(12),d=t(13),h=(t(54),t(55),t(42)),v=t(9),b=function(){return r.a.createElement("h2",{className:"title is-2 has-text-grey has-text-centered"},"404 NotFound")},E={app:{name:"Marvel Superheroes",version:"1.0.0"},api:{host:"https://gateway.marvel.com/v1/public",publicKey:"081757ccde0be78b0bf0c8a86cfc78a9",privateKey:"7f7eec9323ff5708245de8880c255c940a728be8",ts:Date.now()}},f={padding:"19px 0px 0px 0px"},y=function(){return r.a.createElement("nav",{className:"navbar is-fixed-top has-background-grey-darker"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"".concat("/marvel-app","/")},r.a.createElement("span",{className:"navbar-item has-text-weight-semibold is-size-4 has-text-white"},E.app.name)),r.a.createElement("small",{className:"has-text-white",style:f}," v",E.app.version),r.a.createElement("div",{className:"navbar-burger burger","data-target":"navMenuColorinfo-example"}," ",r.a.createElement("span",null)," ",r.a.createElement("span",null)," ",r.a.createElement("span",null))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"})))},g=function(e){function a(e){return Object(o.a)(this,a),Object(u.a)(this,Object(p.a)(a).call(this,e))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentWillMount",value:function(){this.props.fetchCharactersAction()}},{key:"render",value:function(){var e=this.props.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{isActive:e}),r.a.createElement("h2",{className:"title is-2 has-text-grey has-text-centered"},"Characters Component"))}}]),a}(n.Component),O=function(e){return r.a.createElement("div",{className:"pageloader has-background-grey-darker "+(e.isActive?"is-active":"")},r.a.createElement("span",{className:"title"},e.text))};O.defaultProps={text:"Loading..",isActive:!1};var N=O,w=t(20),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(p.a)(a).call(this,e))).onChange=t.onChange.bind(Object(w.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"onChange",value:function(e){switch(e.target.name){case"name":this.props.setNameAction(e.target.value);break;case"sortBy":this.props.setSortByAction(e.target.value)}}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.sortBy;return r.a.createElement("div",{className:"columns filters"},r.a.createElement("div",{className:"field column is-7"},r.a.createElement("div",{className:"control is-medium has-icons-right"},r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Restaurant or Address",name:"name",value:a,onChange:this.onChange}),r.a.createElement("span",{className:"icon is-medium is-right"},r.a.createElement("i",{className:"fas fa-search"})))),r.a.createElement("div",{className:"field column is-5 is-horizontal"},r.a.createElement("div",{className:"field-label is-normal"},r.a.createElement("label",{className:"label"},"Sort By")),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-medium is-fullwidth"},r.a.createElement("select",{name:"sortBy",onChange:this.onChange},r.a.createElement("option",{value:""},""===t?"Select":"-- Reset Filter"),r.a.createElement("option",{value:"highest_rated"},"Highest Rated"),r.a.createElement("option",{value:"lower_rated"},"Lower Rated")))))))}}]),a}(n.Component);j.defaultProps={name:"",sortBy:""};var x=t(25),C=t.n(x),k=t(39),_="TOGGLE_LOADING",A="FETCH_CHARACTERS",L=t(15),S=t(40),B=t.n(S),R=t(41),T=t.n(R),D={params:{apikey:E.api.publicKey,hash:T()(E.api.ts+E.api.privateKey+E.api.publicKey),ts:E.api.ts},method:"GET",headers:{Accept:"*/*"}},K=function(e){return function(e,a){return D.params=Object(L.a)({},D.params,a),B.a.get(E.api.host+e,D)}("/characters",e)},F={fetchCharactersAction:function(){return function(){var e=Object(k.a)(C.a.mark(function e(a,t){var n,r,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:_,payload:!0}),e.prev=1,n={limit:30},e.next=5,K(n);case 5:r=e.sent,c=r.data.data.results,a({type:A,payload:c}),a({type:_,payload:!1}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),a({type:_,payload:!1});case 15:case"end":return e.stop()}},e,null,[[1,11]])}));return function(a,t){return e.apply(this,arguments)}}()}},G=Object(l.b)(function(e){return{isLoading:e.app.isLoading}},F)(g),I=(t(76),function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(h.a,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"".concat("/marvel-app","/"),component:G}),r.a.createElement(v.a,{component:b}))))}}]),a}(n.Component)),X=function(e){var a=e.store,t=e.history;return r.a.createElement(l.a,{store:a},r.a.createElement(I,{history:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(78);var H=t(8),M=t(44),W={isLoading:!1},z={data:[]},J=Object(H.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case _:return Object(L.a)({},e,{isLoading:a.payload});default:return e}},characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case A:return Object(L.a)({},e,{data:a.payload});default:return e}}}),P=[M.a],U=Object(H.e)(J,{},Object(H.d)(H.a.apply(void 0,P),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),V=Object(i.a)();s.a.render(r.a.createElement(X,{store:U,history:V}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.22b6a88b.chunk.js.map