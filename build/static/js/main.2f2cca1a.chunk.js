(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(35),r=n.n(l),o=n(19),u=n(30),i=(n(104),n(12)),m=n(65),s=(n(71),n(47)),p=n(3),f=n(4),h=n(6),d=n(5),E=n(7),b=n(50),v=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).textInput=null,n.setTextInputRef=function(e){n.textInput=e},n.focusTextInput=function(){n.textInput&&n.textInput.focus()},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.focusTextInput()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{type:"text",ref:this.setTextInputRef}),c.a.createElement("input",{type:"button",value:"Focus the text input",onClick:this.focusTextInput}))}}]),t}(c.a.Component),O=n(49);function j(e){return Object(a.useEffect)(function(){console.log(e)}),c.a.createElement(c.a.Fragment,null,e.list.map(function(t,n){return c.a.createElement("li",{key:t.id},c.a.createElement("span",null,t.name),c.a.createElement("button",{onClick:function(){return e.deleteItem(n)}},"\u5220\u9664"))}))}function k(e){var t=Object(a.useState)([{name:"\u6768\u5e42",id:0},{name:"\u674e\u6613\u5cf0",id:1},{name:"\u674e\u6613\u5cf0",id:2}]),n=Object(b.a)(t,2),l=n[0],r=n[1];return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement(j,{deleteItem:function(e){l.splice(e,1),r(l)},list:l})),c.a.createElement("button",{onClick:function(){return r([].concat(Object(O.a)(l),[{name:"\u5f20\u5929\u8d50",id:l.length}]))}},"\u589e\u52a0"))}function y(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)(function(){document.title="You clicked ".concat(n," times")});var r=function(e){var t=Object(a.useRef)();return Object(a.useEffect)(function(){t.current=e}),t.current}(n);return c.a.createElement("div",null,c.a.createElement("p",null,"You clicked ",n," times"),c.a.createElement("p",null,"Now: ",n,"\uff0c Before : ",r),c.a.createElement("button",{onClick:function(){return l(n+1)}},"Click me"))}var g=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={num:0,val:0},n.myRef=c.a.createRef(),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.getElementById("nohook").innerHTML=this.state.num,setTimeout(function(){console.log("3",e.state.val),e.setState({val:e.state.val+1}),console.log("4",e.state.val)},2e3)}},{key:"componentDidUpdate",value:function(){document.getElementById("nohook").innerHTML=this.state.num}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App",ref:this.myRef},c.a.createElement(v,null),c.a.createElement("div",null,"hook"),c.a.createElement(y,null),c.a.createElement("div",null,"nohook"),c.a.createElement("div",{id:"nohook"}),c.a.createElement(s.a,{type:"primary",onClick:function(){return e.setState({num:e.state.num+1})}},"click me"),c.a.createElement(k,null))}}]),t}(a.Component),C=(n(157),n(92)),T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).showSkeleton=function(){n.setState({loading:!0}),setTimeout(function(){n.setState({loading:!1})},3e3)},n.state={loading:!1},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"article"},c.a.createElement(C.a,{loading:this.state.loading},c.a.createElement("div",null,c.a.createElement("h4",null,"Ant Design, a design language"),c.a.createElement("p",null,"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."))),c.a.createElement(s.a,{onClick:this.showSkeleton,disabled:this.state.loading},"Show Skeleton"))}}]),t}(c.a.Component),I=n(21),S=function(e){function t(e){var n;return Object(p.a)(this,t),n=Object(h.a)(this,Object(d.a)(t).call(this,e)),console.log(Object(I.a)(Object(I.a)(n))),n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Topics"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"".concat(this.props.match.url,"/rendering")},"Rendering with React")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"".concat(this.props.match.url,"/components")},"Components")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"".concat(this.props.match.url,"/props-v-state")},"Props v. State"))),c.a.createElement(m.a,{path:"".concat(this.props.match.path,"/:topicId"),component:function(e){var t=e.match;return c.a.createElement("div",null,c.a.createElement("h3",null,t.params.topicId))}}),c.a.createElement(m.a,{exact:!0,path:this.props.match.path,render:function(){return c.a.createElement("h3",null,"Please select a topic.")}}))}}]),t}(a.Component),x=0,w="SHOW_ALL",D="SHOW_COMPLETED",L="SHOW_ACTIVE",_=function(e){var t=e.active,n=e.children,a=e.onClick;return c.a.createElement("button",{onClick:a,disabled:t,style:{marginLeft:"4px"}},n)},A=Object(o.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(_),R=function(){return c.a.createElement("div",null,c.a.createElement("span",null,"Show: "),c.a.createElement(A,{filter:w},"All"),c.a.createElement(A,{filter:L},"Active"),c.a.createElement(A,{filter:D},"Completed"))},W=function(e){var t,n=e.dispatch;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){var a;(e.preventDefault(),t.value.trim())&&(n((a=t.value,{type:"ADD_TODO",id:x++,text:a})),t.value="")}},c.a.createElement("input",{ref:function(e){t=e}}),c.a.createElement("button",{type:"submit"},"Add Todo")))},H=W=Object(o.b)()(W),V=function(e){var t=e.onClick,n=e.completed,a=e.text;return c.a.createElement("li",{onClick:t,style:{textDecoration:n?"line-through":"none"}},a)},B=function(e){var t=e.todos,n=e.toggleTodo;return c.a.createElement("ul",null,t.map(function(e){return c.a.createElement(V,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))}))},F=function(e,t){switch(console.warn(e),t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});default:return[]}},M=Object(o.b)(function(e){return{todos:F(e.todos,e.visibilityFilter)}},function(e){return{onTodoClick:function(t){e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}})(B),P=function(e){function t(){var e;return Object(p.a)(this,t),e=Object(h.a)(this,Object(d.a)(t).call(this)),console.warn(Object(I.a)(Object(I.a)(e))),e}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(H,null),c.a.createElement(M,null),c.a.createElement(R,null))}}]),t}(c.a.Component),G=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement(P,null)}}]),t}(c.a.Component),Y=c.a.createContext({value:"ceshi",changeValue:function(){}}),N=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.children)}}]),t}(c.a.Component),J=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement(Y.Consumer,null,function(e){var t=e.changeValue;return c.a.createElement("input",{onChange:t})})}}]),t}(c.a.Component),q=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement(Y.Consumer,null,function(e){var t=e.value;return c.a.createElement("div",null,t)})}}]),t}(c.a.Component),U=[{path:"/",exact:!0,component:g},{path:"/gujia",component:T},{path:"/topics",component:S},{path:"/shop",component:G},{path:"/content",component:function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).changeValue=function(e){n.setState({value:e.target.value})},n.state={value:"",changeValue:n.changeValue},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement(Y.Provider,{value:this.state},c.a.createElement(N,null,c.a.createElement(J,null)),c.a.createElement(N,null,c.a.createElement(q,null)))}}]),t}(c.a.Component)}];n(164);var $=function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{to:"/"},"index")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/topics"},"Topics")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/gujia"},"gujia")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/shop"},"shop")),c.a.createElement("li",null,c.a.createElement(i.b,{to:"/content"},"content"))),c.a.createElement("hr",null),U.map(function(e,t){return c.a.createElement(m.a,{key:t,path:e.path,exact:e.exact,component:e.component})})))},z=n(93),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(O.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map(function(e){return e.id===t.id?Object(z.a)({},e,{completed:!e.completed}):e});default:return e}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},X=Object(u.b)({todos:K,visibilityFilter:Q});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(u.c)(X);document.title="\u5f20\u666f\u950b",r.a.render(c.a.createElement(o.a,{store:Z},c.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,n){e.exports=n(166)}},[[95,2,1]]]);
//# sourceMappingURL=main.2f2cca1a.chunk.js.map