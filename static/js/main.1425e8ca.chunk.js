(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{21:function(e,c,n){},40:function(e,c,n){},43:function(e,c,n){"use strict";n.r(c);var t=n(2),s=n.n(t),i=n(14),a=n.n(i),l=(n(21),n(16)),r=(n.p,n(15)),d=n.n(r),j=(n(40),n(41),n(0));var o=function(){var e=Object(t.useState)([]),c=Object(l.a)(e,2),n=c[0],s=c[1];return Object(t.useEffect)((function(){d()({method:"get",url:"/api/live_events/"}).then((function(e){s(e.data)}))})),console.log(n),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(j.jsxs)("div",{className:"table",children:[Object(j.jsx)("div",{className:"table-header",children:Object(j.jsxs)("div",{className:"line",children:[Object(j.jsx)("div",{className:"col-12 col-md-8 event-name",children:Object(j.jsxs)("h5",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",n.length]})}),Object(j.jsx)("div",{className:"col-12 col-md-4 counters",children:["1","X","2","1X","X2","12","\u0422\u0411","\u0422\u041c","\u0412\u0441\u0435\u0433\u043e"].map((function(e){return Object(j.jsx)("div",{className:"counter",children:e})}))})]})}),Object(j.jsx)("div",{className:"table-body",children:n.map((function(e){return Object(j.jsxs)("div",{className:"line",children:[Object(j.jsx)("div",{className:"col-12 col-md-8 event-name level-"+e.level,children:Object(j.jsx)("h5",{children:e.name})}),Object(j.jsx)("div",{className:"col-12 col-md-4 counters",children:e.counters.map((function(e){return Object(j.jsx)("div",{className:"counter",children:e.value})}))})]},e.id)}))})]})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;n(e),t(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.1425e8ca.chunk.js.map