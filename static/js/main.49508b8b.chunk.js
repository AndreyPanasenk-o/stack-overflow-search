(this["webpackJsonpstack-overflow-search"]=this["webpackJsonpstack-overflow-search"]||[]).push([[0],{104:function(t,e,a){"use strict";a.r(e),a.d(e,"store",(function(){return at}));var n=a(0),c=a.n(n),o=a(10),s=a.n(o),r=(a(90),a(91),a(75)),i=a(13),l=a(17),d=a(16),u=a(148),j=a(149),h=a(30);function b(t,e){var a=e().filter;p(a);var n="https://api.stackexchange.com/2.2/questions?site=stackoverflow",c=p(a);c&&(n+=c),fetch(n).then((function(t){return t.json()})).then((function(e){t({type:"QUESTIONS_UPDATED",payload:Object(l.a)(Object(l.a)({},e),{},{questions:Object(d.a)(e.items)})})}))}var p=function(t){var e="&order=".concat(t.order,"&sort=").concat(t.sort);return t.from_date&&(e+="&fromdate=".concat(t.from_date.getTime())),t.to_date&&(e+="&todate=".concat(t.to_date.getTime())),t.tags.length&&(e+="&tagged=".concat(t.tags.join())),e};function g(t,e){var a=e().tagName,n="https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=desc&sort=popular&max=".concat(25,"&inname=").concat(a);fetch(n).then((function(t){return t.json()})).then((function(e){var a=e.items.map((function(t){return t.name}));t({type:"TAGS_POPULAR_FETCH",payload:a})}))}var f=a(66),m=a.n(f),O=a(6),v=Object(h.b)((function(t){return{tags:t.tags,filter:t.filter}}))((function(t){var e=Object(h.c)(),a=function(t){e({type:"TAG_NAME_CHANGED",payload:t.target.value}),e(g)};return Object(O.jsx)("div",{className:m.a.header,children:Object(O.jsx)(j.a,{multiple:!0,options:t.tags,getOptionLabel:function(t){return t},style:{width:300},onChange:function(a,n){e({type:"TAGS_UPDATED",payload:Object(l.a)(Object(l.a)({},t.filter),{},{tags:Object(d.a)(n)})}),e(b)},renderInput:function(t){return Object(O.jsx)(u.a,Object(l.a)(Object(l.a)({},t),{},{onChange:a,label:"Tags",variant:"outlined"}))}})})})),x=a(143),y=a(152),_=a(144),T=a(145),A=a(153),w=a(146),N=a(50),k=a(147),P=a(151),q=a(70),C=a.n(q),E=a(71),R=a.n(E),S=a(48),D=a(49),G=a(72),I=a.n(G),L=a(73),U=a.n(L),F=a(74),H=a.n(F),B=Object(x.a)((function(t){return Object(y.a)({root:{width:345,margin:24,backgroundColor:S.a[50]},cardHeader:{padding:16},infoIcon:{verticalAlign:"middle",color:S.a[500],marginLeft:"auto",marginRight:"auto",display:"block"},infoTitle:{width:78,textAlign:"center"},resolveIcon:{verticalAlign:"middle",color:D.a[500],marginLeft:"auto",marginRight:"auto",display:"block"},tags:{paddingTop:8,paddingRight:16,paddingBottom:8,paddingLeft:16},tag:{backgroundColor:S.a[200],borderRadius:4,marginRight:8,marginBottom:8},avatar:{backgroundColor:S.a[500]},questionText:{wordBreak:"break-word"}})})),M=function(t){var e=B();return Object(O.jsxs)(_.a,{className:e.root,children:[Object(O.jsx)(T.a,{className:e.cardHeader,subheader:t.owner.display_name,title:"Author:",titleTypographyProps:{variant:"caption",color:"textSecondary"},subheaderTypographyProps:{variant:"h6",color:"textPrimary"},avatar:Object(O.jsx)(A.a,{"aria-label":"recipe",className:e.avatar,children:Object(O.jsx)(C.a,{})})}),Object(O.jsx)(w.a,{children:Object(O.jsx)(N.a,{variant:"body1",color:"textPrimary",component:"p",className:e.questionText,children:t.title})}),Object(O.jsxs)(k.a,{children:[Object(O.jsxs)("span",{className:e.infoTitle,children:[Object(O.jsx)(R.a,{className:e.infoIcon,titleAccess:"Answers"}),t.answer_count]}),Object(O.jsxs)("span",{className:e.infoTitle,children:[Object(O.jsx)(I.a,{className:e.infoIcon,titleAccess:"Views"}),t.view_count]}),Object(O.jsxs)("span",{className:e.infoTitle,children:[Object(O.jsx)(U.a,{className:e.infoIcon,titleAccess:"Score"}),t.view_count]}),t.is_answered?Object(O.jsxs)("span",{className:e.infoTitle,children:[Object(O.jsx)(H.a,{className:e.resolveIcon,titleAccess:"Resolved"}),"Resolved"]}):""]}),Object(O.jsx)("div",{className:e.tags,children:t.tags.map((function(t){return Object(O.jsx)(P.a,{className:e.tag,label:t},t)}))})]})},J=a(56),Q=a.n(J),V=Object(h.b)((function(t){return{searchResult:t.searchResult}}))((function(t){var e;return Object(O.jsxs)("div",{className:Q.a.page,children:[Object(O.jsx)(v,{}),Object(O.jsx)("div",{className:Q.a.questions,children:null===(e=t.searchResult.questions)||void 0===e?void 0:e.map((function(t){return Object(O.jsx)(M,Object(l.a)({},t),t.question_id)}))})]})}));var W,z,Y=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{path:"/search",component:V}),Object(O.jsx)(i.b,{path:"*",children:Object(O.jsx)(i.a,{to:"/search"})})]})})},K=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,155)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),o(t),s(t)}))},X=a(28);!function(t){t.desc="desc",t.asc="asc"}(W||(W={})),function(t){t.activity="activity",t.votes="votes",t.creation="creation",t.hot="hot",t.week="week",t.month="month"}(z||(z={}));var Z=Object(X.combineReducers)({tags:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["ccc"],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TAGS_FETCH":case"TAGS_POPULAR_FETCH":return e.payload;default:return t}},tagName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TAG_NAME_CHANGED":return e.payload;default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tags:[],order:W.desc,sort:z.activity},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TAGS_UPDATED":return Object(l.a)(Object(l.a)({},e.payload),{},{tags:Object(d.a)(e.payload.tags)});default:return t}},searchResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{questions:[],has_more:!1,quota_max:0,quota_remaining:0},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"QUESTIONS_UPDATED":return Object(l.a)(Object(l.a)({},e.payload),{},{questions:Object(d.a)(e.payload.questions)});default:return t}}}),$=a(76),tt=a(77),et=Object(tt.composeWithDevTools)(Object(X.applyMiddleware)($.a)),at=Object(X.createStore)(Z,et);at.dispatch((function(t,e){var a="https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=desc&sort=popular&max=".concat(25);fetch(a).then((function(t){return t.json()})).then((function(e){var a=e.items.map((function(t){return t.name}));t({type:"TAGS_POPULAR_FETCH",payload:a})}))})),s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(h.a,{store:at,children:Object(O.jsx)(Y,{})})}),document.getElementById("root")),K()},56:function(t,e,a){t.exports={page:"style_page__1tWeC",questions:"style_questions__2GVqz"}},66:function(t,e,a){t.exports={header:"style_header__2GY-4"}},90:function(t,e,a){},91:function(t,e,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.49508b8b.chunk.js.map