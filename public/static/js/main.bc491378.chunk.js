(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{131:function(e,t,n){e.exports=n(274)},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),c=n.n(o),i=(n(136),n(27)),s=n.n(i),l=n(42),u=(n(138),n(26)),m=function(e){return e.children},d=(n(139),function(e){return r.a.createElement(m,null,r.a.createElement("div",{className:"jumbotron"},e.children))}),p=n(12),f=n(13),b=n(16),h=n(14),v=n(22),E=n(15),O=n(23),y=function(e){return console.log("UserINC"),{type:"ADD_FIVE",data:e}},N=function(e){return function(){var t=Object(l.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w("Rabson");case 3:a=t.sent,console.log(a),n(y(e)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0);case 11:return t.abrupt("return","done");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()};function w(e){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(h.a)(t).call(this,e))).userCount=function(e){n.setState({number:e.target.value})},n.state={number:0},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"handleSubmit",value:function(e){alert("The value is: "+this.input.value),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(m,null,"Home",r.a.createElement("div",null,this.props.counter,r.a.createElement("input",{value:this.state.number,type:"number",onChange:function(t){return e.userCount(t)}}),r.a.createElement("button",{onClick:function(){return e.props.onIncrementByUser(e.state.number)}},"Increment by user"),r.a.createElement("button",{onClick:this.props.onIncrement},"Increment"),r.a.createElement("button",{onClick:this.props.onDecrement},"Decrement")))}}]),t}(a.Component),S=Object(O.b)((function(e){return{counter:e.counter.counter}}),(function(e){return{onIncrement:function(){return e({type:"INC"})},onDecrement:function(){return e({type:"DRC"})},onIncrementByUser:function(t){return e(N(Number(t)))}}}))(j),D=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(h.a)(t).call(this,e))).userCount=function(e){n.setState({number:e.target.value})},n.state={number:0},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"handleSubmit",value:function(e){alert("The value is: "+this.input.value),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(m,null," ShowTodo ")}}]),t}(a.Component),P=Object(O.b)((function(e){return{counter:e.counter.counter}}),(function(e){return{onIncrement:function(){return e({type:"INC"})},onDecrement:function(){return e({type:"DRC"})},onIncrementByUser:function(t){return e(N(Number(t)))}}}))(D),k=n(2),C=n(6),I=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={todotodo:"dgsfhd"},n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"handleSubmit",value:function(e){alert("The value is: "+this.state.todo),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(m,null,r.a.createElement("div",{class:"container"},r.a.createElement(k.d,{initialValues:{todo:""},onSubmit:function(t,n){(0,n.setSubmitting)(!1),e.props.history.push("/showtodo")},validationSchema:C.object().shape({todo:C.string().email().required("Required")})},(function(e){e.values;var t=e.touched,n=e.errors,a=(e.dirty,e.isSubmitting),o=(e.handleChange,e.handleBlur,e.handleSubmit);e.handleReset;return r.a.createElement(k.c,{onSubmit:o},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"Todo"),r.a.createElement(k.b,{name:"todo",type:"text",className:"form-control"+(n.todo&&t.todo?" is-invalid":"")}),r.a.createElement(k.a,{name:"todo",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2",disabled:a},"Add todo")))}))))}}]),t}(a.Component),q=Object(O.b)((function(e){return{counter:e.counter.counter}}),(function(e){return{onIncrement:function(){return e({type:"INC"})},onDecrement:function(){return e({type:"DRC"})},onIncrementByUser:function(t){return e(N(Number(t)))}}}))(I),x=n(25),R=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(x.b,{to:"/",className:"logo"},"Todo World"),r.a.createElement("div",{className:"header-right"},r.a.createElement(x.b,{to:"/"},"Home"),r.a.createElement(x.b,{to:"/showtodo"},"Show todo"),r.a.createElement(x.b,{to:"/addtodo"},"Add todo")))},F=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(k.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:C.object().shape({firstName:C.string().required("First Name is required"),lastName:C.string().required("Last Name is required"),email:C.string().email("Email is invalid").required("Email is required"),password:C.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:C.string().oneOf([C.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(t){e.props.history.push("/showtodo")},render:function(e){var t=e.errors,n=(e.status,e.touched);return r.a.createElement(k.c,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement(k.b,{name:"firstName",type:"text",className:"form-control"+(t.firstName&&n.firstName?" is-invalid":"")}),r.a.createElement(k.a,{name:"firstName",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement(k.b,{name:"lastName",type:"text",className:"form-control"+(t.lastName&&n.lastName?" is-invalid":"")}),r.a.createElement(k.a,{name:"lastName",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(k.b,{name:"email",type:"text",className:"form-control"+(t.email&&n.email?" is-invalid":"")}),r.a.createElement(k.a,{name:"email",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(k.b,{name:"password",type:"password",className:"form-control"+(t.password&&n.password?" is-invalid":"")}),r.a.createElement(k.a,{name:"password",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement(k.b,{name:"confirmPassword",type:"password",className:"form-control"+(t.confirmPassword&&n.confirmPassword?" is-invalid":"")}),r.a.createElement(k.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Register")))}})))))}}]),t}(a.Component),T=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(m,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement(k.d,{initialValues:{email:"",password:""},onSubmit:function(t,n){(0,n.setSubmitting)(!1),sessionStorage.setItem("auth",!0),e.props.history.push("/showtodo")},validationSchema:C.object().shape({email:C.string().email().required("Required"),password:C.string().required("Required")})},(function(e){e.values;var t=e.touched,n=e.errors,a=(e.dirty,e.isSubmitting),o=(e.handleChange,e.handleBlur,e.handleSubmit);e.handleReset;return r.a.createElement(k.c,{onSubmit:o},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"Email"),r.a.createElement(k.b,{name:"email",type:"text",className:"form-control"+(n.email&&t.email?" is-invalid":"")}),r.a.createElement(k.a,{name:"email",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"firstName"},"Password"),r.a.createElement(k.b,{name:"password",type:"text",className:"form-control"+(n.password&&t.password?" is-invalid":"")}),r.a.createElement(k.a,{name:"password",component:"div",className:"invalid-feedback"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2",disabled:a},"Register")))})))," ")," "))}}]),t}(a.Component);var _=function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){e.apply(this,arguments)}()}),[]);var t=!!sessionStorage.getItem("auth");return r.a.createElement("div",{className:"App"},t?r.a.createElement(m,null,r.a.createElement(R,null),r.a.createElement(d,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/addtodo",component:q}),r.a.createElement(u.a,{path:"/signup",component:F}),r.a.createElement(u.a,{path:"/showtodo",component:P}),r.a.createElement(u.a,{path:"/Home",component:S})))):r.a.createElement(d,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(19),A=n(60);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={counter:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INC":return V({},e,{counter:e.counter+1});case"DRC":return V({},e,{counter:e.counter-1});case"ADD_FIVE":return V({},e,{counter:e.counter+t.data});default:return e}},M=n(130);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={todos:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.actionTypes){case"TODO_ADD":return J({},e,{data:[].concat(Object(M.a)(e.todos),[t.data])});case"TODO_DELETE":return J({},e,{todos:e.todos.filter((function(e){return e.value!==t.value}))});default:return e}},z=n(128),G=n(129),K=Object(B.c)({counter:H,todo:$}),Q=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||B.d,Y=Object(G.a)(),Z=Object(B.e)(K,Q(Object(B.a)((function(e){return function(t){return function(n){console.log("[Middleware] Dispatching",n);var a=t(n);return console.log("[Middleware] next state",e.getState()),a}}}),z.a,Y))),ee=r.a.createElement(x.a,null,r.a.createElement(O.a,{store:Z},r.a.createElement(_,null)));c.a.render(ee,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[131,1,2]]]);
//# sourceMappingURL=main.bc491378.chunk.js.map