(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),l=c.n(s),r=(c(25),c(2)),i=(c(26),c(27),c(4)),o=c.n(i),u=c(0);function j(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],l=e.eventId;return Object(n.useEffect)((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){s(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){s(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(u.jsxs)("div",{className:"blockLog-table",children:[a.map((function(e){return Object(u.jsxs)("div",{className:"row log",children:[Object(u.jsx)("div",{className:"log-item score col-4 col-lg-3 text-muted",children:e.comment}),Object(u.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(u.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),e.param?Object(u.jsxs)("div",{className:"log-item param col-2 col-lg-2",children:[" ",Object(u.jsx)("b",{children:e.factor})," (",e.param,")"]}):Object(u.jsx)("div",{className:"log-item factor col-2 col-lg-2",children:Object(u.jsx)("b",{children:e.factor})}),Object(u.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),a.length?"":Object(u.jsx)("span",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}c(9);var d=c(20);function b(e){var t=e.props.event,c=e.props.k2value,a=Object(n.useState)(!1),s=Object(r.a)(a,2),l=s[0],i=s[1],o=Object(n.useState)("closed"),b=Object(r.a)(o,2),O=b[0],m=b[1],v=Object(d.a)("/static/media/alert.mp3"),h=Object(r.a)(v,1)[0];return Object(u.jsxs)("div",{className:"line row "+(c<=t.k2?"k2-alert":""),onClick:function(){i(!l),m(l?"closed":"opened")},children:[c<=t.k2?h:"",Object(u.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(u.jsx)("h6",{children:t.name})}),Object(u.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(u.jsx)("div",{className:"counter",children:e?Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e})}):Object(u.jsx)("p",{className:"text-muted",children:e})})}))}),l?Object(u.jsx)("div",{className:O,children:Object(u.jsx)(j,{eventId:t.id,level:t.level})}):""]},t.id)}function O(e){var t=e.liveEvents;return Object(u.jsx)("div",{className:"table-header",children:Object(u.jsxs)("div",{className:"line row",children:[Object(u.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(u.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(u.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(u.jsx)("div",{className:"counter",children:e})}))})]})})}var m=a.a.createContext();function v(e){var t=Object(n.useContext)(m),c=t.unselectSport,a=t.selectSport,s=e.sport.id,l=e.sport.name,i=Object(n.useState)(!0),o=Object(r.a)(i,2),j=o[0],d=o[1];return Object(u.jsx)("span",{className:"selector "+(j?"selected":"unselected"),onClick:function(){d(!j),j?c(s):a(s)},children:l},s)}function h(){var e=Object(n.useContext)(m),t=e.countersFilterUpdate,c=e.repeatsFilterUpdate,a=Object(n.useState)(0),s=Object(r.a)(a,2),l=s[0],i=s[1],o=Object(n.useState)(1),j=Object(r.a)(o,2),d=j[0],b=j[1];return Object(u.jsxs)("div",{className:"blocks-filters row",children:[Object(u.jsxs)("div",{className:"filter-item col-12 col-lg-5",children:[Object(u.jsx)("label",{className:"text-muted",children:" \u041c\u0438\u043d. \u043a\u043e\u043b-\u0432\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a: "}),Object(u.jsx)("input",{type:"number",value:l,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"filter-item col-12 col-lg-5",children:[Object(u.jsx)("label",{className:"text-muted",children:" \u041a\u043e\u043b-\u0432\u043e \u043a\u043e\u0442\u0438\u0440. \u043f\u043e\u0434\u0440\u044f\u0434: "}),Object(u.jsx)("input",{type:"number",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsx)("div",{className:"filter-item col-12 col-lg-2",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary btn-sm",onClick:function(){return function(e,n){t(e),c(n)}(l,d)},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})})]})}function f(e){var t=e.sportFilters;return Object(u.jsxs)("div",{className:"filters",children:[Object(u.jsx)(h,{}),Object(u.jsx)("div",{className:"sport-filters",children:t.map((function(e){return Object(u.jsx)(v,{sport:e})}))})]})}function p(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],s=c[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),j=i[0],d=i[1],v=Object(n.useState)(0),h=Object(r.a)(v,2),p=h[0],x=h[1],g=Object(n.useState)(1),N=Object(r.a)(g,2),S=N[0],k=N[1];Object(n.useEffect)((function(){o()({method:"get",url:"api/sports/"}).then((function(e){d(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),s(t)}))}),[]);var C=Object(n.useState)([]),w=Object(r.a)(C,2),E=w[0],F=w[1];return Object(n.useEffect)((function(){o()({method:"get",url:"/api/live_events/",params:{sports:a.join(),k1:p}}).then((function(e){F(e.data)}));var e=setInterval((function(){o()({method:"get",url:"/api/live_events/",params:{sports:a.join(),k1:p}}).then((function(e){F(e.data)}))}),2500);return function(){return clearInterval(e)}}),[a,p]),Object(u.jsxs)("div",{className:"events-table",children:[Object(u.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(u.jsx)(m.Provider,{value:{unselectSport:function(e){s(a.filter((function(t){return t!==e})))},selectSport:function(e){s(a.concat(e))},countersFilterUpdate:function(e){x(e)},repeatsFilterUpdate:function(e){k(e)}},children:Object(u.jsx)(f,{sportFilters:j})}),Object(u.jsx)(O,{liveEvents:E}),Object(u.jsx)("div",{className:"table-body",children:E.map((function(e){return Object(u.jsx)(b,{props:{event:e,k2value:S}})}))})]})}function x(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),l=Object(r.a)(s,2),i=l[0],j=l[1],d=Object(n.useState)(!1),b=Object(r.a)(d,2),O=b[0],v=b[1],h=Object(n.useState)(!1),f=Object(r.a)(h,2),p=f[0],x=f[1],g=Object(n.useState)("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),N=Object(r.a)(g,2),S=N[0],k=N[1],C=Object(n.useState)("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),w=Object(r.a)(C,2),E=w[0],F=w[1],_=Object(n.useState)(!1),y=Object(r.a)(_,2),I=y[0],P=y[1],T=Object(n.useContext)(m).auth;function B(e){switch(e.target.name){case"login":v(!0);break;case"password":x(!0)}}return Object(n.useEffect)((function(){P(!(S||E))}),[S,E]),Object(u.jsxs)("div",{className:"login-form",children:[Object(u.jsx)("h1",{children:"\u0412\u0445\u043e\u0434"}),O&&S&&Object(u.jsx)("div",{className:"error",children:S}),Object(u.jsx)("input",{onChange:function(e){return function(e){e.target.value?k(""):k("\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),a(e.target.value)}(e)},value:c,onBlur:function(e){return B(e)},name:"login",type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d"}),p&&E&&Object(u.jsx)("div",{className:"error",children:E}),Object(u.jsx)("input",{onChange:function(e){return function(e){e.target.value?F(""):F("\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),j(e.target.value)}(e)},value:i,onBlur:function(e){return B(e)},name:"password",type:"text",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(u.jsx)("button",{onClick:function(){o()({method:"POST",url:"/api/login/",data:{login:c,password:i}}).then((function(e){T(e.data.status)}))},type:"submit",disabled:!I,children:"\u0412\u043e\u0439\u0442\u0438"})]})}var g=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){a(e.data.status)}))}),[]),Object(n.useEffect)((function(){o()({method:"GET",url:"/api/is_auth/"}).then((function(e){a(e.data.status)}))}),[c]),Object(u.jsx)("div",{className:"col-md-12 col-lg-11 wrapper",children:Object(u.jsx)(m.Provider,{value:{auth:function(e){a(e)}},children:c?Object(u.jsx)(p,{}):Object(u.jsx)(x,{})})})},N=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.bd486fc2.chunk.js.map