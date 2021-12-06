(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),l=c.n(a),r=(c(25),c(26),c(27),c(3)),i=c(17),o=c(18),j=c(20),u=c(19),d=c(4),b=c.n(d),v=c(0);function m(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=e.eventId;return Object(n.useEffect)((function(){b()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}));var e=setInterval((function(){b()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(v.jsxs)("div",{className:"blockLog-table",children:[s.map((function(e){return Object(v.jsxs)("div",{className:"row log",children:[Object(v.jsx)("div",{className:"log-item score col-4 col-lg-3 text-muted",children:e.comment}),Object(v.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(v.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),e.param?Object(v.jsxs)("div",{className:"log-item param col-2 col-lg-2",children:[" ",Object(v.jsx)("b",{children:e.factor})," (",e.param,")"]}):Object(v.jsx)("div",{className:"log-item factor col-2 col-lg-2",children:Object(v.jsx)("b",{children:e.factor})}),Object(v.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),s.length?"":Object(v.jsx)("span",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}var O=function(e){Object(j.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={open:!1},n}return Object(o.a)(c,[{key:"toggleOpen",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this.state.open?"opened":"closed",t=this.props.eventToRender;return Object(v.jsxs)("div",{className:"line row",onClick:this.toggleOpen.bind(this),children:[Object(v.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(v.jsx)("h6",{children:t.name})}),Object(v.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(v.jsx)("div",{className:"counter",children:e?Object(v.jsx)("p",{children:Object(v.jsx)("b",{children:e})}):Object(v.jsx)("p",{className:"text-muted",children:e})})}))}),this.state.open?Object(v.jsx)("div",{className:e,children:Object(v.jsx)(m,{eventId:t.id,level:t.level})}):""]},t.id)}}]),c}(n.Component);function h(e){var t=e.liveEvents;return Object(v.jsx)("div",{className:"table-header",children:Object(v.jsxs)("div",{className:"line row",children:[Object(v.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(v.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(v.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(v.jsx)("div",{className:"counter",children:e})}))})]})})}var p=s.a.createContext();function f(e){var t=Object(n.useContext)(p),c=t.unselectSport,s=t.selectSport,a=e.sport.id,l=e.sport.name,i=Object(n.useState)(!0),o=Object(r.a)(i,2),j=o[0],u=o[1];return Object(v.jsx)("span",{className:"selector "+(j?"selected":"unselected"),onClick:function(){u(!j),j?c(a):s(a)},children:l},a)}function x(){var e=Object(n.useContext)(p).countersFilterUpdate,t=Object(n.useState)(0),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(v.jsxs)("div",{className:"counters-filter",children:[Object(v.jsx)("label",{className:"text-muted",children:" \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b-\u0432\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a:"}),Object(v.jsx)("input",{type:"number",value:s,onInput:function(t){return c=t.target.value,e(c),void a(c);var c}})]})}function g(e){var t=e.sportFilters;return Object(v.jsxs)("div",{className:"filters",children:[Object(v.jsx)("div",{className:"blockLog-filters",children:Object(v.jsx)(x,{})}),Object(v.jsx)("div",{className:"sport-filters",children:t.map((function(e){return Object(v.jsx)(f,{sport:e})}))})]})}function N(e){var t=Object(n.useState)([]),c=Object(r.a)(t,2),s=c[0],a=c[1],l=Object(n.useState)([]),i=Object(r.a)(l,2),o=i[0],j=i[1],u=Object(n.useState)(0),d=Object(r.a)(u,2),m=d[0],f=d[1];Object(n.useEffect)((function(){b()({method:"get",url:"api/sports/"}).then((function(e){j(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),a(t)}))}),[]);var x=Object(n.useState)([]),N=Object(r.a)(x,2),S=N[0],k=N[1];return Object(n.useEffect)((function(){b()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:m}}).then((function(e){k(e.data)}));var e=setInterval((function(){b()({method:"get",url:"/api/live_events/",params:{sports:s.join(),k1:m}}).then((function(e){k(e.data)}))}),2500);return function(){return clearInterval(e)}}),[s,m]),Object(v.jsxs)("div",{className:"events-table",children:[Object(v.jsx)(p.Provider,{value:{unselectSport:function(e){a(s.filter((function(t){return t!==e})))},selectSport:function(e){a(s.concat(e))},countersFilterUpdate:function(e){f(e)}},children:Object(v.jsx)(g,{sportFilters:o})}),Object(v.jsx)(h,{liveEvents:S}),Object(v.jsx)("div",{className:"table-body",children:S.map((function(e){return Object(v.jsx)(O,{eventToRender:e})}))})]})}var S=function(){return Object(v.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(v.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(v.jsx)(N,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.79815300.chunk.js.map