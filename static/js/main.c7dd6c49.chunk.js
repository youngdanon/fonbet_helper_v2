(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{21:function(e,c,n){},40:function(e,c,n){},43:function(e,c,n){"use strict";n.r(c);var t=n(2),s=n.n(t),l=n(14),i=n.n(l),a=(n(21),n(16)),r=(n.p,n(15)),d=n.n(r),j=(n(40),n(41),n(0));var o=function(){var e=Object(t.useState)([]),c=Object(a.a)(e,2),n=c[0],s=c[1];return Object(t.useEffect)((function(){d()({method:"get",url:"/api/live_events/"}).then((function(e){s(e.data)}))})),console.log(n),Object(j.jsxs)("div",{className:"col-12 col-lg-11 wrapper",children:[Object(j.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(j.jsxs)("div",{className:"events-table",children:[Object(j.jsx)("div",{className:"table-header",children:Object(j.jsxs)("div",{className:"line",children:[Object(j.jsx)("div",{className:"col-12 col-lg-7 event-name",children:Object(j.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",n.length]})}),Object(j.jsx)("div",{className:"col-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","\u0412\u0441\u0435\u0433\u043e"].map((function(e){return Object(j.jsx)("div",{className:"counter",children:e})}))})]})}),Object(j.jsx)("div",{className:"table-body",children:n.map((function(e){return Object(j.jsxs)("div",{className:"line",children:[Object(j.jsx)("div",{className:"col-12 col-lg-7 event-name level-"+e.level,children:Object(j.jsx)("h6",{children:e.name})}),Object(j.jsx)("div",{className:"col-12 col-lg-5 counters",children:e.counters.map((function(e){return Object(j.jsx)("div",{className:"counter",children:Object(j.jsx)("p",{children:e.value})})}))})]},e.id)}))})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,l=c.getLCP,i=c.getTTFB;n(e),t(e),s(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.c7dd6c49.chunk.js.map