(this["webpackJsonpshopee-product-images-downloader"]=this["webpackJsonpshopee-product-images-downloader"]||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/logo.6f09d0c3.png"},17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),o=(a(22),a(14)),l=a.n(o),s=(a(23),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("img",{src:l.a,alt:"logo",id:"logo"}),r.a.createElement("div",{id:"brand"},"Shopee Images"))}),u=(a(24),a(3)),m=a.n(u),d=a(15),p=a(2),f=a(16),h=a.n(f),v=function(e){var t=e.lastIndexOf("."),a=e.substring(t+1),n=e.substring(0,t);return{itemId:a,shopId:n.substring(n.lastIndexOf(".")+1)}},g=(a(43),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(p.a)(i,2),l=o[0],s=o[1],u=Object(n.useState)([]),f=Object(p.a)(u,2),g=f[0],E=f[1],b=Object(n.useState)(!1),w=Object(p.a)(b,2),O=w[0],j=w[1],k=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,N=Object(n.createRef)();return r.a.createElement("div",{className:"GetUris"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),l){j(!0),E([]);var t=v(a),n=t.itemId,r=t.shopId;h.a.get("https://cors-anywhere.herokuapp.com/https://shopee.vn/api/v2/item/get?itemid=".concat(n,"&shopid=").concat(r)).then(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=t.data.item.images,e.next=4,n.forEach((function(e){var t="https://cf.shopee.vn/file/".concat(e);a.push(t)}));case 4:E(a),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},r.a.createElement("input",{type:"text",placeholder:"Enter product link...",required:!0,onChange:function(e){c(e.target.value),s(k.test(e.target.value))},ref:N}),r.a.createElement("div",{id:"clear",onClick:function(){N.current.value="",c("")}},r.a.createElement("div",{id:"line-1"}),r.a.createElement("div",{id:"line-2"})),r.a.createElement("button",{className:"get"},"Get"),0!==g.length&&r.a.createElement("div",{id:"note"},r.a.createElement("a",{href:"https://genk.vn/khac-phuc-loi-luu-anh-tu-doi-sang-dinh-dang-jfif-tren-google-chrome-68-trong-windows-10-20180808181614155.chn",target:"blank"},"Trouble with .jfif"))),r.a.createElement("div",{className:"result"},g.map((function(e){return r.a.createElement("div",{key:g.indexOf(e)},r.a.createElement("img",{src:e,alt:"res"}))}))),O&&r.a.createElement("div",{className:"Loading"},r.a.createElement("div",{className:"loader"}),r.a.createElement("div",null,"Loading...")))}),E=function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(g,null))},b=(a(44),function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"br-name"}," \xa9 Copyright 2020"),r.a.createElement("div",{className:"br-powered"},"Powered by Misa"))});a(45);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(E,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ca54a4be.chunk.js.map