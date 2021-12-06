(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(16),l=n.n(a),r=(n(25),n(26),n(27),n(3)),i=n(17),o=n(18),j=n(20),d=n(19),u=n(4),v=n.n(u),b=n(0);function m(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],l=e.eventId;return Object(c.useEffect)((function(){v()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}));var e=setInterval((function(){v()({method:"get",url:"/api/event_blocks_info/",params:{event_id:l}}).then((function(e){a(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"blockLog-table",children:[s.map((function(e){return Object(b.jsxs)("div",{className:"row log",children:[Object(b.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(b.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),Object(b.jsx)("div",{className:"log-item factor col-2 col-lg-1",children:e.factor}),e.param?Object(b.jsx)("div",{className:"log-item param col-2 col-lg-1",children:e.param}):Object(b.jsx)("div",{className:"log-item param col-2 col-lg-1"}),Object(b.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})})),s.length?"":Object(b.jsx)("p",{className:"warning",children:"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043e\u043a \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u043e\u0431\u044b\u0442\u0438\u044e"})]})}var h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).state={open:!1},c}return Object(o.a)(n,[{key:"toggleOpen",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this.state.open?"opened":"closed",t=this.props.eventToRender;return Object(b.jsxs)("div",{className:"line row",onClick:this.toggleOpen.bind(this),children:[Object(b.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(b.jsx)("h6",{children:t.name})}),Object(b.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(b.jsx)("div",{className:"counter",children:Object(b.jsx)("p",{children:e})})}))}),this.state.open?Object(b.jsx)("div",{className:e,children:Object(b.jsx)(m,{eventId:t.id,level:t.level})}):""]},t.id)}}]),n}(c.Component);function p(e){var t=e.liveEvents;return Object(b.jsx)("div",{className:"table-header",children:Object(b.jsxs)("div",{className:"line row",children:[Object(b.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(b.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(b.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(b.jsx)("div",{className:"counter",children:e})}))})]})})}var O=s.a.createContext();function f(e){var t=Object(c.useContext)(O),n=t.unselectSport,s=t.selectSport,a=e.sport.id,l=e.sport.name,i=Object(c.useState)(!0),o=Object(r.a)(i,2),j=o[0],d=o[1];return Object(b.jsx)("span",{className:"selector "+(j?"selected":"unselected"),onClick:function(){d(!j),j?n(a):s(a)},children:l},a)}function x(e){var t=e.sportFilters;return Object(b.jsx)("div",{className:"sport-filters",children:t.map((function(e){return Object(b.jsx)(f,{sport:e})}))})}function g(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)([]),i=Object(r.a)(l,2),o=i[0],j=i[1];Object(c.useEffect)((function(){v()({method:"get",url:"api/sports/"}).then((function(e){j(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),a(t)}))}),[]);var d=Object(c.useState)([]),u=Object(r.a)(d,2),m=u[0],f=u[1];return Object(c.useEffect)((function(){v()({method:"get",url:"/api/live_events/",params:{sports:s.join()}}).then((function(e){f(e.data)}));var e=setInterval((function(){v()({method:"get",url:"/api/live_events/",params:{sports:s.join()}}).then((function(e){f(e.data)}))}),2500);return function(){return clearInterval(e)}}),[s]),Object(b.jsxs)("div",{className:"events-table",children:[Object(b.jsx)(O.Provider,{value:{unselectSport:function(e){a(s.filter((function(t){return t!==e})))},selectSport:function(e){a(s.concat(e))}},children:Object(b.jsx)(x,{sportFilters:o})}),Object(b.jsx)(p,{liveEvents:m}),Object(b.jsx)("div",{className:"table-body",children:m.map((function(e){return Object(b.jsx)(h,{eventToRender:e})}))})]})}var N=function(){return Object(b.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(b.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(b.jsx)(g,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),s(e),a(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.a647df08.chunk.js.map