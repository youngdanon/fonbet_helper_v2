(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),l=c(16),s=c.n(l),i=(c(25),c(26),c(27),c(4)),r=c(17),o=c(18),d=c(20),j=c(19),u=c(3),v=c.n(u),m=c(0);function b(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],l=c[1],s=e.eventId,r=e.level;return Object(n.useEffect)((function(){v()({method:"get",url:"/api/event_blocks_info/",params:{event_id:s}}).then((function(e){l(e.data)}));var e=setInterval((function(){v()({method:"get",url:"/api/event_blocks_info/",params:{event_id:s}}).then((function(e){l(e.data)}))}),2500);return function(){return clearInterval(e)}}),[]),Object(m.jsx)("div",{className:"blockLog-table level-"+r,children:a.map((function(e){return Object(m.jsxs)("div",{className:"row log",children:[Object(m.jsx)("div",{className:"log-item score col-2 col-lg-1",children:e.score}),Object(m.jsx)("div",{className:"log-item time col-2 col-lg-1",children:e.time}),Object(m.jsx)("div",{className:"log-item factor col-2 col-lg-1",children:e.factor}),e.param?Object(m.jsx)("div",{className:"log-item param col-2 col-lg-1",children:e.param}):Object(m.jsx)("div",{className:"log-item param col-2 col-lg-1"}),Object(m.jsx)("div",{className:"log-item value col-2 col-lg-1",children:e.value})]})}))})}var h=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={open:!1},n}return Object(o.a)(c,[{key:"toggleOpen",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this.state.open?"opened":"closed",t=this.props.eventToRender;return Object(m.jsxs)("div",{className:"foldable",children:[Object(m.jsxs)("div",{className:"line row",onClick:this.toggleOpen.bind(this),children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-7 event-name level-"+t.level,children:Object(m.jsx)("h6",{children:t.name})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:t.counters.map((function(e){return Object(m.jsx)("div",{className:"counter",children:Object(m.jsx)("p",{children:e})})}))})]},t.id),this.state.open?Object(m.jsx)("div",{className:e,children:Object(m.jsx)(b,{eventId:t.id,level:t.level})}):""]})}}]),c}(n.Component);function O(e){var t=e.liveEvents;return Object(m.jsx)("div",{className:"table-header",children:Object(m.jsxs)("div",{className:"line row",children:[Object(m.jsx)("div",{className:"col-md-12 col-lg-7 event-name",children:Object(m.jsxs)("h6",{children:["\u0421\u043e\u0431\u044b\u0442\u0438\u0439 \u043d\u0430\u0439\u0434\u0435\u043d\u043e: ",t.length]})}),Object(m.jsx)("div",{className:"col-md-12 col-lg-5 counters",children:["1","X","2","1X","X2","12","\u04241","\u04242","\u0422\u0411","\u0422\u041c","F"].map((function(e){return Object(m.jsx)("div",{className:"counter",children:e})}))})]})})}function p(e){var t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],l=c[1],s=Object(n.useState)([]),r=Object(i.a)(s,2),o=(r[0],r[1]);Object(n.useEffect)((function(){v()({method:"get",url:"api/sports/"}).then((function(e){o(e.data);var t=[];e.data.map((function(e){t.push(e.id)})),l(t)}))}),[]);var d=Object(n.useState)([]),j=Object(i.a)(d,2),u=j[0],b=j[1];return Object(n.useEffect)((function(){v()({method:"get",url:"/api/live_events/",params:{sports:a.join()}}).then((function(e){b(e.data)}));var e=setInterval((function(){v()({method:"get",url:"/api/live_events/",params:{sports:a.join()}}).then((function(e){b(e.data)}))}),2500);return function(){return clearInterval(e)}}),[a]),Object(m.jsxs)("div",{className:"events-table",children:[Object(m.jsx)(O,{liveEvents:u}),Object(m.jsx)("div",{className:"table-body",children:u.map((function(e){return Object(m.jsx)(h,{eventToRender:e})}))})]})}var f=function(){return Object(m.jsxs)("div",{className:"col-md-12 col-lg-11 wrapper",children:[Object(m.jsx)("h1",{children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f:"}),Object(m.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),l(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(f,{})}),document.getElementById("root")),g()}},[[47,1,2]]]);
//# sourceMappingURL=main.657559fe.chunk.js.map