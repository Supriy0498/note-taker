(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{11:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),a=n(33),i=n.n(a),r=(n(35),n(4)),s=(n(11),n(8)),u=n.n(s),l=n(12),p=n(10),j=n.n(p);function d(t){var e=Object(o.useState)(""),n=Object(r.a)(e,2),a=n[0],i=n[1],s="/api/topics";function p(){return(p=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.post(s,{topic:a}).then((function(e){console.log(e),t.updateTopics()})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{action:"#",className:"input-topic",onSubmit:function(t){!function(){p.apply(this,arguments)}(),t.preventDefault()},children:[Object(c.jsx)("input",{type:"text",placeholder:"Create new topic",onChange:function(t){var e=t.target.value;i(e)},name:"topicName",value:a}),Object(c.jsx)("button",{className:"button-create",children:"Create"})]})})}var b=n(2);function h(t){var e=Object(b.f)();return Object(c.jsx)("div",{onClick:function(n){console.log("topic clicked"),e.push("/"+t.topicName+"/notes")},className:"topic",children:Object(c.jsx)("h4",{children:t.topicName})})}function f(t){var e="/api/topics",n=Object(o.useState)(["a","b"]),a=Object(r.a)(n,2),i=a[0],s=a[1];function p(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.a.get(e).then((function(t){console.log(t.data),s(t.data)})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log("start"),Object(o.useEffect)((function(){console.log("useEffect"),p()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{updateTopics:function(){p()}}),Object(c.jsx)("div",{children:"My Topics"}),i.map((function(e,n){return Object(c.jsx)(h,{changeContainer:t.changeContainer,topicName:e},n)}))]})}var O=n(18),m=n(23);function x(t){var e="/api/topic/"+t.topicName+"/notes",n=Object(o.useState)({title:"",content:""}),a=Object(r.a)(n,2),i=a[0],s=a[1];function p(){return(p=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:j.a.post(e,{topicName:t.topicName,title:i.title,content:i.content}).then((function(e){console.log(e),d(),t.updateNotes()})).catch((function(t){return console.log(t)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(){s({title:"",content:""})}function b(t){var e=t.target.name;s((function(n){return Object(m.a)(Object(m.a)({},n),{},Object(O.a)({},e,t.target.value))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{action:"#",className:t.theme?"input-note input-note-dark":"input-note input-note-light",onSubmit:function(t){console.log(i),t.preventDefault(),function(){p.apply(this,arguments)}()},children:[Object(c.jsx)("input",{className:t.theme?"input-dark":null,onChange:b,type:"text",placeholder:"Title",name:"title",value:i.title}),Object(c.jsx)("textarea",{className:t.theme?"input-dark":null,onChange:b,type:"text",rows:"4",placeholder:"Take a note...",name:"content",value:i.content}),Object(c.jsx)("button",{className:"button-add",children:"Add"})]})})}function g(t){console.log(t.id);var e="/api/topic/"+t.topicName+"/notes/"+t.id;return Object(c.jsxs)("div",{className:t.theme?"note note-dark":"note note-light",children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("p",{style:{marginBottom:"10px"},children:t.content}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){j.a.delete(e).then((function(e){console.log("deleting"),console.log(e.data),t.updateNotes()})).catch((function(t){return console.log(t)}))},children:"DELETE"})]})}function v(){var t=Object(b.g)().topic,e="/api/topic/"+t+"/notes",n=Object(o.useState)([{}]),a=Object(r.a)(n,2),i=a[0],s=a[1];function p(){return d.apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j.a.get(e).then((function(t){console.log(t.data.notes),s(t.data.notes)})).catch((function(t){return console.log(t)}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.useEffect)((function(){console.log("useEffect"),p()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{topicName:t,updateNotes:p}),Object(c.jsx)("div",{children:t}),i.map((function(e,n){return Object(c.jsx)(g,{id:e._id,topicName:t,title:e.title,content:e.content,updateNotes:p},n)}))]})}function N(t){var e=Object(o.useState)(!0),n=Object(r.a)(e,2),a=n[0],i=n[1],s=Object(o.useState)(""),u=Object(r.a)(s,2),l=u[0],p=u[1];return Object(c.jsx)("div",{children:a?Object(c.jsx)(f,{changeContainer:function(t){console.log("container changed"),console.log(t),p(t),i(!a)}}):Object(c.jsx)(v,{topicName:l})})}var k=function(t){return Object(c.jsx)("header",{className:t.theme?"header header-dark":"header header-light",children:Object(c.jsx)("h1",{style:{display:"inline-block"},children:"Note Keeper"})})},y=n(16);function w(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(N,{})})}var S=function(){var t=Object(o.useState)(0),e=Object(r.a)(t,2),n=(e[0],e[1],Object(o.useState)([])),a=Object(r.a)(n,2);return a[0],a[1],document.querySelector("body"),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(k,{}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(b.a,{exact:!0,path:"/:topic/notes",component:v})]})]})};i.a.render(Object(c.jsx)(S,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.26b0e108.chunk.js.map