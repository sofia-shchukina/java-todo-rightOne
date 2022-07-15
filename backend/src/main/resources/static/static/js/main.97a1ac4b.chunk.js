(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{68:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(32),i=n.n(r),a=n(11),d=n(10),s=n(13),u=n.n(s),j=function(){return u.a.get("/api/todo").then((function(t){return t.data}))},l=function(t){return u.a.get("/api/todo/".concat(t)).then((function(t){return t.data}))},b={OPEN:"IN_PROGRESS",IN_PROGRESS:"DONE"},p={todo:"OPEN",doing:"IN_PROGRESS",done:"DONE"},h={OPEN:"Todo",IN_PROGRESS:"Doing",DONE:"Done"},O=n(5),f=n(3),x=n(2),v=n(0);function g(){return Object(v.jsxs)(m,{children:[Object(v.jsx)(O.c,{exact:!0,to:"/",children:"Home"}),Object(v.jsx)(O.c,{to:"/board/todo",children:"Todo"}),Object(v.jsx)(O.c,{to:"/board/doing",children:"Doing"}),Object(v.jsx)(O.c,{to:"/board/done",children:"Done"})]})}var m=x.b.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-6ppbkg-0"})(["display:flex;justify-content:space-evenly;a{padding:4px;text-decoration:none;color:hotpink;}a.active{background:hotpink;color:white;}"]);function N(){return Object(v.jsxs)("header",{children:[Object(v.jsx)(y,{children:"Super Kanban"}),Object(v.jsx)(g,{})]})}var y=x.b.h1.withConfig({displayName:"Header__Heading",componentId:"sc-1313ecv-0"})(["margin:0;padding:12px;"]);function S(t){var e=t.todo,n=t.onAdvance,o=t.onDelete;return Object(v.jsxs)(D,{children:[Object(v.jsx)(O.b,{to:"/details/".concat(e.id),children:"Details"}),Object(v.jsx)(O.b,{to:"/edit/".concat(e.id),children:"Edit"}),n&&Object(v.jsx)(_,{adv:!0,onClick:function(){return n(e)},children:"Advance"}),o&&Object(v.jsx)(_,{del:!0,onClick:function(){return o(e.id)},children:"Delete"})]})}var D=x.b.section.withConfig({displayName:"TodoActions__Wrapper",componentId:"sc-q5x805-0"})(["display:flex;justify-content:space-between;"]),_=x.b.button.withConfig({displayName:"TodoActions__ButtonComp",componentId:"sc-q5x805-1"})([""," ",""],(function(t){return t.del?"background-color: lightcoral;":""}),(function(t){return t.adv?"background-color: lightblue;":""}));function w(t){var e=t.todo,n=t.onAdvance,o=t.onDelete;return Object(v.jsxs)(C,{children:[Object(v.jsx)("h3",{children:e.description}),Object(v.jsx)(S,{todo:e,onAdvance:n,onDelete:o})]})}var C=x.b.section.withConfig({displayName:"TodoItem__TodoItemStyleComp",componentId:"sc-6lr0op-0"})(["border:1px solid #333;border-radius:8px;padding:12px;box-shadow:1px 2px 8px #666;"]);function E(t){var e=t.className,n=t.title,o=t.todos,c=t.onAdvance,r=t.onDelete;return Object(v.jsxs)("section",{className:e,children:[Object(v.jsx)("h2",{children:n}),Object(v.jsx)(I,{children:o.map((function(t){return Object(v.jsx)("li",{children:Object(v.jsx)(w,{todo:t,onAdvance:c,onDelete:r})},t.id)}))})]})}var I=x.b.ul.withConfig({displayName:"Board__List",componentId:"sc-1yu0kxh-0"})(["list-style:none;padding:0;margin:0;display:grid;grid-gap:12px;"]);function A(t){var e=t.todos,n=t.onAdvance,o=t.onDelete,c=e.filter((function(t){return"OPEN"===t.status})),r=e.filter((function(t){return"IN_PROGRESS"===t.status})),i=e.filter((function(t){return"DONE"===t.status}));return Object(v.jsxs)(T,{children:[Object(v.jsx)(E,{title:"Todo",todos:c,onAdvance:n}),Object(v.jsx)(E,{title:"Doing",todos:r,onAdvance:n}),Object(v.jsx)(E,{title:"Done",todos:i,onDelete:o})]})}var T=x.b.main.withConfig({displayName:"BoardsOverview__Wrapper",componentId:"sc-2ppav9-0"})(["overflow-y:scroll;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:12px;padding:0 12px;"]);function P(t){var e=t.onAdd,n=Object(o.useState)(""),c=Object(d.a)(n,2),r=c[0],i=c[1];return Object(v.jsxs)(k,{onSubmit:function(t){t.preventDefault(),r&&e(r).then((function(){return i("")}))},children:[Object(v.jsx)("input",{type:"text",value:r,onChange:function(t){return i(t.target.value)}}),Object(v.jsx)("button",{children:"Add"})]})}var k=x.b.form.withConfig({displayName:"NewTodo__Wrapper",componentId:"sc-1sqp046-0"})(["display:grid;grid-template-columns:1fr min-content;padding:12px;"]),R=x.b.div.withConfig({displayName:"PageLayout",componentId:"sc-1b3dpzk-0"})(["position:fixed;top:0;left:0;width:100%;height:100%;display:grid;grid-template-rows:min-content 1fr min-content;"]);function B(t){var e=t.todos,n=t.advanceTodo,o=t.removeTodo,c=t.createNewTodo;return Object(v.jsxs)(R,{children:[Object(v.jsx)(N,{}),Object(v.jsx)(A,{todos:e,onAdvance:n,onDelete:o}),Object(v.jsx)(P,{onAdd:c})]})}function F(t){var e=t.description,n=t.status;return Object(v.jsxs)(G,{children:[Object(v.jsx)("h2",{children:e}),Object(v.jsxs)("p",{children:["Status: ",n]}),Object(v.jsx)(O.b,{to:"/",children:"Back"})]})}var G=x.b.section.withConfig({displayName:"TodoDetails__Wrapper",componentId:"sc-1etwhir-0"})(["padding:12px;"]);function W(){var t=Object(f.h)().id,e=Object(o.useState)(),n=Object(d.a)(e,2),c=n[0],r=n[1];return Object(o.useEffect)((function(){l(t).then((function(t){return r(t)})).catch((function(t){return console.error(t)}))}),[t]),c?Object(v.jsxs)(R,{children:[Object(v.jsx)(N,{}),Object(v.jsx)(F,Object(a.a)({},c))]}):Object(v.jsx)("p",{children:"loading"})}function q(t){var e=t.todos,n=t.onAdvance,o=t.onDelete,c=Object(f.h)().statusSlug,r=p[c],i=e.filter((function(t){return t.status===r})),a=function(t){return h[t]}(r);return Object(v.jsxs)(R,{children:[Object(v.jsx)(N,{}),Object(v.jsx)(L,{title:a,todos:i,onAdvance:"DONE"!==r?n:void 0,onDelete:"DONE"===r?o:void 0})]})}var L=Object(x.b)(E).withConfig({displayName:"BoardPage__BoardStyled",componentId:"sc-1xcdg9l-0"})(["padding:0 12px;"]),z=n(16);function H(t){var e=function(t,e){var n=Object(o.useState)({description:t.description,status:t.status}),c=Object(d.a)(n,2),r=c[0],i=c[1],s=Object(f.g)();return{formData:r,handleSubmit:function(n){n.preventDefault();var o=Object(a.a)(Object(a.a)({},t),r);e(o).then((function(){return s.push("/")}))},handleChange:function(t){var e=t.target,n=e.name,o=e.value;i(Object(a.a)(Object(a.a)({},r),{},Object(z.a)({},n,o)))},resetForm:function(){i({description:t.description,status:t.status})}}}(t.todo,t.onSave),n=e.formData,c=e.handleSubmit,r=e.handleChange,i=e.resetForm;return Object(v.jsxs)(J,{onSubmit:c,children:[Object(v.jsxs)("label",{children:["Description",Object(v.jsx)("input",{type:"text",name:"description",value:n.description,onChange:r})]}),Object(v.jsxs)("label",{children:["Status",Object(v.jsxs)("select",{name:"status",value:n.status,onChange:r,children:[Object(v.jsx)("option",{value:"OPEN",children:"open"}),Object(v.jsx)("option",{value:"IN_PROGRESS",children:"doing"}),Object(v.jsx)("option",{value:"DONE",children:"done"})]})]}),Object(v.jsx)("button",{type:"button",onClick:i,children:"Reset"}),Object(v.jsx)("button",{children:"Save"})]})}var J=x.b.form.withConfig({displayName:"TodoForm__Wrapper",componentId:"sc-vzq0wb-0"})(["display:grid;grid-gap:12px;place-content:center;input,select{display:block;width:100%;}"]);function K(t){var e=t.onSave,n=Object(f.h)().id,c=Object(o.useState)(),r=Object(d.a)(c,2),i=r[0],a=r[1];return Object(o.useEffect)((function(){l(n).then(a).catch(console.error)}),[n]),Object(v.jsxs)(R,{children:[Object(v.jsx)(N,{}),i?Object(v.jsx)(H,{todo:i,onSave:e}):Object(v.jsx)("p",{children:"loading"})]})}function M(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){j().then((function(t){return c(t)})).catch((function(t){return console.error(t)}))}),[]);var r=function(t){var e;(function(t){return u.a.put("/api/todo/".concat(t.id),t)})(Object(a.a)(Object(a.a)({},t),{},{status:(e=t.status,b[e])})).then((function(){return j()})).then((function(t){return c(t)})).catch((function(t){return console.error(t)}))},i=function(t){return function(t){return u.a.delete("/api/todo/".concat(t))}(t).then((function(){return j()})).then((function(t){return c(t)})).catch((function(t){return console.error(t)}))};return Object(v.jsx)(O.a,{children:Object(v.jsxs)(f.d,{children:[Object(v.jsx)(f.b,{exact:!0,path:"/",children:Object(v.jsx)(B,{todos:n,advanceTodo:r,removeTodo:i,createNewTodo:function(t){return function(t){return u.a.post("/api/todo",{description:t,status:"OPEN"})}(t).then((function(){return j()})).then((function(t){return c(t)})).catch((function(t){return console.error(t)}))}})}),Object(v.jsx)(f.b,{path:"/board/:statusSlug",children:Object(v.jsx)(q,{todos:n,onAdvance:r,onDelete:i})}),Object(v.jsx)(f.b,{path:"/edit/:id",children:Object(v.jsx)(K,{onSave:function(t){return function(t){return u.a.put("/api/todo/".concat(t.id,"/update"),t)}(t).then((function(){return j()})).then((function(t){return c(t)})).catch((function(t){return console.error(t)}))}})}),Object(v.jsx)(f.b,{path:"/details/:id",children:Object(v.jsx)(W,{})}),Object(v.jsx)(f.b,{path:"/",children:Object(v.jsx)(f.a,{to:"/"})})]})})}var Q,U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),r(t),i(t)}))},V=n(36),X=Object(x.a)(Q||(Q=Object(V.a)(["\n* {\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  font-family: sans-serif;\n}\n"])));i.a.render(Object(v.jsxs)(c.a.StrictMode,{children:[Object(v.jsx)(X,{}),Object(v.jsx)(M,{})]}),document.getElementById("root")),U()}},[[68,1,2]]]);
//# sourceMappingURL=main.97a1ac4b.chunk.js.map