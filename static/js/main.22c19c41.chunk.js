(this.webpackJsonpday6=this.webpackJsonpday6||[]).push([[0],{32:function(e,t,r){},33:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),s=r.n(o),c=(r(32),r.p,r(33),r(14)),u=r(15),i=r(17),d=r(16),l=r(2),b=r(10),p="ADD_COUNT",h="DEC_COUNT",j="ADD_TODO",O="DEL_TODO",f="ADD_TODO_SUCCESS",m="ADD_TODO_FAIL",g="ADD_TODO_RESET",y="DEL_TODO_SUCCESS",v="DEL_TODO_FAIL",x="ADD_USER",k="ADD_USER_RESET",D="CHECK_USER",_="LOGOUT_USER",N=r(1),C=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(c.a)(this,r),n=t.call(this,e),console.log(n.props.countData),n}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e){var t=this.props.todoData;e.todoData.isLoading&&!t.isLoading&&console.log("data updated")}},{key:"addCount",value:function(){this.props.addSubmit(2)}},{key:"addTodo",value:function(){var e=this._inputValue.value;if(""!==e){var t={task:e,key:Date.now()};this.props.addTodo(t)}this._inputValue.value=""}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"flex flex-col items-center justify-center",style:{height:"100vh"},children:[0==this.props.user.status?Object(N.jsx)(l.a,{to:"/"}):null,Object(N.jsxs)("h1",{className:!0,children:["Count : ",this.props.countData]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("button",{onClick:function(){return e.addCount()},className:"rounded-lg border-2 border-black p-2 m-1",children:"Increase"}),Object(N.jsx)("button",{onClick:function(){return e.props.minusSubmit(4)},className:"rounded-lg border-2 border-black p-2 m-1",children:"Decrease"})]}),Object(N.jsx)("div",{className:"mt-5",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"text",className:"border-black border-b-2 p-2 mr-2",placeholder:"What to do?",ref:function(t){return e._inputValue=t}}),this.props.todoData.isLoading?Object(N.jsx)("button",{className:"border-black border-2 p-2 rounded-lg",children:"Loading..."}):Object(N.jsx)("button",{className:"border-black border-2 p-2 rounded-lg",onClick:function(){return e.addTodo()},children:"Submit"}),Object(N.jsx)("ul",{children:this.props.todoData.data.map((function(t){return Object(N.jsxs)("li",{className:"border-b-2 border-gray-500 m-3 flex flex-row justify-between",children:[t.task,e.props.removeData.isLoading?Object(N.jsx)("button",{className:"text-white bg-red-600 py-1 px-3 rounded-lg",onClick:function(){return e.props.delTodo(t.key)},children:"Loading ... "}):Object(N.jsx)("button",{className:"text-white bg-red-600 py-1 px-3 rounded-lg",onClick:function(){return e.props.delTodo(t.key)},children:"Delete "})]})}))})]})}),Object(N.jsx)("button",{className:"border-black border-2 p-2 rounded-lg m-10",onClick:this.props.logoutUser,children:"Logout"})]})}}]),r}(a.a.Component),L={addSubmit:function(e){return{type:p,payload:e}},minusSubmit:function(e){return{type:h,payload:e}},addTodo:function(e){return function(t){try{t({type:j}),setTimeout((function(){t({type:f,payload:e})}),1e3)}catch(r){t({type:m,error:r})}}},delTodo:function(e){return function(t){try{t({type:O}),setTimeout((function(){t({type:y,payload:e})}),1e3)}catch(r){t({type:v,error:r})}}},logoutUser:function(){return{type:_}}},U=Object(b.b)((function(e){return{countData:e.count,todoData:e.todo,removeData:e.remove,user:e.user}}),L)(C);var S=function(){return Object(N.jsx)(U,{})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,47)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),o(e),s(e)}))},E=r(20),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e+t.payload;case h:return e-t.payload;default:return e}},A=r(8),P={isLoading:!1,data:[],error:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{isLoading:!0,data:Object(A.a)(e.data),error:null};case f:return{isLoading:!1,data:[].concat(Object(A.a)(e.data),[t.payload]),error:null};case m:return{isLoading:!1,data:Object(A.a)(e.data),error:t.error};case g:return{isLoading:!1,data:[],error:t.error};case O:case v:return{isLoading:!1,data:Object(A.a)(e.data),error:null};case y:return console.log(t.payload),{isLoading:!1,data:e.data.filter((function(e){return e.key!==t.payload})),error:null};default:return e}},W=(Object(E.a)({reducer:{count:w,todo:R}}),r(26)),F=r(9),I=r(27),B=r.n(I),V=r(4),J={isLoading:!1,data:[],error:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{isLoading:!0};case y:return console.log(t.payload),{isLoading:!1};case v:return{isLoading:!1};default:return e}},G={user:[],status:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{user:[].concat(Object(A.a)(e.user),[t.payload]),status:!1};case k:return{user:[],status:!1};case D:console.log(t.payload.username);var r=!1,n=!1;return e.user.forEach((function(e){Object.values(e)[0]==t.payload.username&&(r=!0,console.log("found"),n=!0)})),0==r&&alert("User not found"),{user:Object(A.a)(e.user),status:n};case _:return{user:Object(A.a)(e.user),status:!1};default:return e}},K=Object(V.b)({count:w,todo:R,remove:z,user:H}),M={key:"root",version:1,storage:B.a},q=Object(F.g)(M,K),Q=Object(E.a)({reducer:q,middleware:function(e){return e({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})}}),X=Object(F.h)(Q),Y=r(11),Z=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(){this.checkStatus()}},{key:"checkUser",value:function(){var e=this._inputName.value,t=this._inputPW.value;if(""!==e&&""!==t){var r={username:e,password:t};this.props.checkUser(r)}this._inputName.value="",this._inputPW.value=""}},{key:"checkStatus",value:function(){1==this.props.user.status&&console.log("test"),console.log("historytest")}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"flex flex-col justify-center items-center ",style:{height:"100vh"},children:[1==this.props.user.status?Object(N.jsx)(l.a,{to:"/home"}):null,Object(N.jsx)("h1",{className:"text-4xl m-10 border-b-2 border-black",children:"Login"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"text",className:"border-black border-b-2 p-2 mr-2",placeholder:"Username",ref:function(t){return e._inputName=t}}),Object(N.jsx)("input",{type:"text",className:"border-black border-b-2 p-2 mr-2",placeholder:"Password",ref:function(t){return e._inputPW=t}}),Object(N.jsx)("button",{className:"border-black border-2 p-2 rounded-lg",onClick:function(){return e.checkUser()},children:"Submit"})]}),Object(N.jsx)(Y.b,{to:"/register",className:"m-10 border-2 p-2 rounded-md",children:"Register?"})]})}}]),r}(a.a.Component),$={checkUser:function(e){return{type:D,payload:e}}},ee=Object(b.b)((function(e){return{user:e.user}}),$)(Z),te=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"addUser",value:function(){var e=this._inputName.value,t=this._inputPW.value;if(""!==e&&""!==t){var r={username:e,password:t};this.props.addUser(r)}this._inputName.value="",this._inputPW.value=""}},{key:"render",value:function(){var e=this;return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"flex flex-col justify-center items-center ",style:{height:"100vh"},children:[Object(N.jsx)("h1",{className:"text-4xl m-10 border-b-2 border-black",children:"Register"}),Object(N.jsxs)("div",{children:[Object(N.jsx)("input",{type:"text",className:"border-black border-b-2 p-2 mr-2",placeholder:"Username?",ref:function(t){return e._inputName=t}}),Object(N.jsx)("input",{type:"text",className:"border-black border-b-2 p-2 mr-2",placeholder:"Password?",ref:function(t){return e._inputPW=t}}),Object(N.jsx)("button",{className:"border-black border-2 p-2 rounded-lg",onClick:function(){return e.addUser()},children:"Submit"})]}),Object(N.jsx)(Y.b,{to:"/",className:"m-10 border-2 p-2 rounded-md",children:"Back to login"})]})})}}]),r}(a.a.Component),re={addUser:function(e){return{type:x,payload:e}}},ne=Object(b.b)((function(e){return{}}),re)(te);s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(Y.a,{className:"App bg-gray-500",children:Object(N.jsx)(b.a,{store:Q,children:Object(N.jsx)(W.a,{loading:null,persistor:X,children:Object(N.jsxs)(l.d,{children:[Object(N.jsx)(l.b,{path:"/home",component:S}),Object(N.jsx)(l.b,{path:"/register",component:ne}),Object(N.jsx)(l.b,{path:"/",component:ee})]})})})})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.22c19c41.chunk.js.map