(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(4),o=(a(13),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.completed,n=t.title,i=t.user,r=t.id;return Object(d.jsxs)("article",{"data-id":r,className:"TodoInfo ".concat(a?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:n}),i&&Object(d.jsx)(u,{user:i})]},r)},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})};function b(e){return l.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),u=Object(c.a)(i,2),m=u[0],O=u[1],f=Object(o.useState)(!1),p=Object(c.a)(f,2),x=p[0],v=p[1],y=Object(o.useState)(!1),S=Object(c.a)(y,2),N=S[0],I=S[1],g=Object(o.useState)(h),C=Object(c.a)(g,2),_=C[0],k=C[1],D=function(e){var t,a=((t=_).length>0?Math.max.apply(Math,Object(r.a)(t.map((function(e){return e.id})))):0)+1;k((function(t){return[].concat(Object(r.a)(t),[Object(s.a)(Object(s.a)({},e),{},{id:a})])}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),v(!a),I(!m),a&&m&&(D({user:b(m),id:0,title:a,completed:!1,userId:m}),n(""),O(0))},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(d.jsx)("input",{type:"text","data-cy":"titleInput",value:a,placeholder:"Enter a title",onChange:function(e){return v(!1),n(e.target.value)}}),x&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: "}),Object(d.jsxs)("select",{"data-cy":"userSelect",id:"user",value:m,onChange:function(e){return I(!1),O(Number(e.target.value))},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),N&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(j,{todos:_})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.05bc9177.chunk.js.map