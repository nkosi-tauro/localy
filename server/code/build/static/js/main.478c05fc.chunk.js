(this["webpackJsonpsocial-good"]=this["webpackJsonpsocial-good"]||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),r=a(18),i=a.n(r),o=a(8),l=a(15),d=a(19),j=a(3);var u=function(){return Object(n.jsx)("div",{className:"header-item",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:[Object(n.jsx)(o.b,{className:"navbar-brand text-white",to:"/",children:Object(n.jsx)("span",{className:"logo",children:"Localy"})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{className:"nav-link text-white",to:"/organization",children:"Organizations"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{className:"nav-link text-white",to:"/meetup",children:"Meetups"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{className:"nav-link text-white",to:"/news",children:"News"})})]})})]})})},b=a(30),h=a.n(b);var m=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsxs)("p",{className:"footer-text text-white",children:["Made with \xa0",Object(n.jsx)(h.a,{className:"footer-heart"}),"\xa0 by",Object(n.jsxs)("a",{href:"https://github.com/david-osas",className:"footer-link",target:"_blank",rel:"noreferrer",children:[" ",Object(n.jsx)("em",{children:"Osas"})," "]}),",",Object(n.jsxs)("a",{href:"https://github.com/yashika51",className:"footer-link",target:"_blank",rel:"noreferrer",children:[" ",Object(n.jsx)("em",{children:"Yashika"})," "]}),",",Object(n.jsxs)("a",{href:"https://github.com/nkosi-tauro",className:"footer-link",target:"_blank",rel:"noreferrer",children:[" ",Object(n.jsx)("em",{children:"Nkosi"})," "]}),",",Object(n.jsxs)("a",{href:"https://github.com/aneeshkodali",className:"footer-link",target:"_blank",rel:"noreferrer",children:[" ",Object(n.jsx)("em",{children:"Aneesh"})," "]})]})})},p=a(9),O=a.n(p),f=a(16),x=a(14),g=a(21),v=a.p+"static/media/fund.b662193b.jpg",w=a.p+"static/media/meetup.5062c8f7.jpg",N=a.p+"static/media/news.63bc36fc.jpg";var y=function(){return Object(n.jsx)("div",{className:"app-container carousel-comp",children:Object(n.jsxs)("div",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-ride":"carousel",children:[Object(n.jsxs)("div",{className:"carousel-inner",children:[Object(n.jsxs)("div",{className:"carousel-item active",children:[Object(n.jsx)("img",{src:v,loading:"lazy",className:"carousel-img",alt:"placeholder"}),Object(n.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(n.jsx)("h5",{children:"Help a local organizations with funding"})})]}),Object(n.jsxs)("div",{className:"carousel-item",children:[Object(n.jsx)("img",{src:w,loading:"lazy",className:"carousel-img",alt:"placeholder"}),Object(n.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(n.jsx)("h5",{children:"Attend knowledge sharing meetups in your locality"})})]}),Object(n.jsxs)("div",{className:"carousel-item",children:[Object(n.jsx)("img",{src:N,loading:"lazy",className:"carousel-img",alt:"placeholder"}),Object(n.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(n.jsx)("h5",{children:"Get caught up with the latest business news"})})]})]}),Object(n.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleFade",role:"button","data-slide":"prev",children:[Object(n.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(n.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleFade",role:"button","data-slide":"next",children:[Object(n.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Next"})]})]})})},k=a.p+"static/media/fund.7ed43837.svg",z=a.p+"static/media/meeting.819d44f8.svg",S=a.p+"static/media/newspaper.cd5fea61.svg";var T=function(e){var t,a=e.text;switch(e.feature){case"organization":t=k;break;case"meetup":t=z;break;case"news":t=S;break;default:t=k}return Object(n.jsx)("div",{className:"app-container",children:Object(n.jsxs)("div",{className:"feature-header",children:[Object(n.jsx)("img",{src:t,className:"feature-header-icon",alt:"feature icon"}),Object(n.jsx)("p",{className:"feature-text",children:a})]})})},_=a.p+"static/media/placeholder1.7cbe8fe7.jpg";var E=function(e){var t,a,s=e.feature,c=e.id,r=e.item,i=Object(j.f)(),o=function(){var e="organization"===s?r.name:c;i.push({pathname:"".concat(s,"/").concat(e),state:{item:r}})};return"news"===s?(t=r.newsTitle,a=r.imgUrl?r.imgUrl:_,o=function(){window.open(r.newsUrl,"_blank")}):"organization"===s?(t=r.name,a=r.image_url):(t="Name of object",a=_),t=t.length>30?t.substr(0,30)+"...":t,Object(n.jsxs)("div",{onClick:o,children:[Object(n.jsx)("img",{src:a,loading:"lazy",className:"intro-grid-img",alt:t}),Object(n.jsx)("p",{className:"intro-grid-img-content",children:t})]})};var G=function(e){var t,a=e.feature,s=e.btnText,c=e.data,r=Object(j.f)();switch(a){case"news":t=c.news;break;case"organization":t=c.organization;break;default:t=c.meetups}return t.length>6&&(t=t.slice(0,7)),Object(n.jsx)("div",{className:"intro-grid app-color",children:Object(n.jsxs)("div",{className:"app-container",children:[Object(n.jsx)("div",{className:"intro-grid-scroll",children:t.map((function(e,t){return Object(n.jsx)("div",{className:"intro-grid-img-contain",children:Object(n.jsx)(E,{feature:a,id:t,item:e})},"introGrid"+t)}))}),Object(n.jsx)("button",{type:"button",className:"app-btn",onClick:function(){r.push(a)},children:s})]})})};var A=function(e){var t=e.data,a=[{feature:"organization",header:"Donate to local organizations, such as businesses, schools, hospitals and more, to help grow such institutions. You can help by donating money or offering services",btnText:"See more local organizations to fund"},{feature:"meetup",header:"Schedule knowledge sharing meetups in your locality, such as conferences, workshops and more, to help increase the skills and knowledge of business owners in your locality. You can also attend such meetups already scheduled in your locality",btnText:"See more meetups to attend"},{feature:"news",header:"Get the latest news on what is happening in the world of business and have up-to-date knowledge to help you in positioning your business for the future",btnText:"See more news articles"}];return Object(n.jsx)("div",{children:a.map((function(e,s){return Object(n.jsxs)("div",{children:[Object(n.jsx)(T,{text:e.header,feature:e.feature}),Object(n.jsx)(G,{feature:e.feature,btnText:e.btnText,data:t}),s!==a.length-1&&Object(n.jsx)("hr",{className:"app-rule"})]},"home"+s)}))})},C=a.p+"static/media/loading.4cfde298.gif";var L=function(){return Object(n.jsx)("div",{className:"loading",children:Object(n.jsx)("img",{src:C,alt:"l0oading"})})};function U(){return F.apply(this,arguments)}function F(){return(F=Object(x.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",body:JSON.stringify({type:"business"}),headers:{"content-type":"application/json"}},e.next=3,fetch("/server/news",t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=[1,2,3,4,5,6],t=Object(s.useState)(!0),a=Object(g.a)(t,2),c=a[0],r=a[1],i=Object(s.useState)({organization:e,meetups:e,news:e}),o=Object(g.a)(i,2),l=o[0],d=o[1];function j(){return(j=Object(x.a)(O.a.mark((function e(){var t,a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=e.sent,e.next=5,fetch("/server/organization");case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,d(Object(f.a)(Object(f.a)({},l),{},{organization:n,news:t})),r(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),c?Object(n.jsx)(L,{}):Object(n.jsxs)("div",{children:[Object(n.jsx)(y,{}),Object(n.jsx)(A,{data:l})]})},R=a(6);function q(e){return{type:"SET_LOADING",loading:e}}function M(e){return{type:"SET_NEWS",articles:e}}function J(e,t){return B.apply(this,arguments)}function B(){return(B=Object(x.a)(O.a.mark((function e(t,a){var n,s,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q(!0)),n={method:"POST",body:JSON.stringify({type:a}),headers:{"content-type":"application/json"}},e.next=4,fetch("/server/news",n);case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,t(M(c)),t(q(!1));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return{type:"SET_ORGS",primary:Object(R.a)(e),filter:Object(R.a)(e)}}var P=function(e){var t,a,s=e.item,c=e.feature,r=Object(l.b)(),i=Object(l.c)((function(e){return e.organization}));return i&&(i=i.primary),"news"===c?(a="".concat(s," news"),t=function(){J(r,s)}):(a=s,t="organization"===c?function(){i&&(i=i.filter((function(e){return e.organization_type===s})),r(function(e){return{type:"FILTER_ORGS",filter:Object(R.a)(e)}}(i)))}:function(){}),"time"===s?Object(n.jsxs)("div",{className:"filter-time",children:[Object(n.jsx)("button",{className:"btn btn-light dropdown-toggle filter-item",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:a}),Object(n.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(n.jsx)("span",{className:"dropdown-item",children:"Oldest"}),Object(n.jsx)("div",{className:"dropdown-divider"}),Object(n.jsx)("span",{className:"dropdown-item",children:"Newest"})]})]}):Object(n.jsx)("button",{type:"button",className:"btn btn-light filter-item",onClick:t,children:a})},Y=["business","school","hospital","orphanage","other"],W=["tech","science","finance","artisan skills","health","education","art","others"],H=["business","tech","science"];var K=function(e){var t,a=e.feature;switch(a){case"organization":t=Y;break;case"meetup":t=[].concat(Object(R.a)(W),["time"]);break;case"news":t=H;break;default:t=Y}return Object(n.jsxs)("div",{className:"bg-light filter",children:[Object(n.jsx)("p",{className:"filter-title",children:Object(n.jsx)("em",{children:"Categories"})}),Object(n.jsx)("div",{className:"filter-flex",children:Object(n.jsx)("div",{className:"filter-inner-bar",children:t.map((function(e,t){return Object(n.jsx)(P,{item:e,feature:a},t)}))})})]})};var Q=function(e){var t,a,s=e.feature,c=e.item,r=e.id,i=Object(j.f)(),o=function(){var e="organization"===s?c.name:r;i.push({pathname:"".concat(s,"/").concat(e),state:{item:c}})},l="Aliquam ligula libero nunc at mi viverra tincidunt.";return"news"===s?(t=c.newsTitle,o=function(){window.open(c.newsUrl,"_blank")},a=c.imgUrl?c.imgUrl:_):"organization"===s?(t=c.name?c.name:l,a=c.image_url?c.image_url:_):(t=l,a=_),t=t.length>50?t.substr(0,50)+"...":t,Object(n.jsxs)("div",{className:"card grid-card",onClick:o,children:[Object(n.jsx)("img",{src:a,loading:"lazy",className:"card-img-top",alt:s}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("p",{className:"card-text",children:t})})]})};var V=function(e){var t=e.feature,a=Object(l.c)((function(e){return e})),c=Object(l.b)(),r=Object(s.useState)({org:!1,meetup:!1,news:!1}),i=Object(g.a)(r,2),o=i[0],d=i[1],j=[1,2,3,4,5,6];function u(){return(u=Object(x.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(q(!0)),e.next=3,fetch("/server/organization");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,d(Object(f.a)(Object(f.a)({},o),{},{org:!0})),c(D(a)),c(q(!1));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"news"===t?(a.news&&(j=a.news),o.news||(J(c,"business"),d(Object(f.a)(Object(f.a)({},o),{},{news:!0})))):"organization"===t&&(a.organization&&(j=a.organization.filter),o.org||function(){u.apply(this,arguments)}()),a.loading?Object(n.jsx)(L,{}):Object(n.jsx)("div",{className:"app-container",children:Object(n.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4",children:j.map((function(e,a){return Object(n.jsx)("div",{className:"col",children:Object(n.jsx)(Q,{feature:t,id:a,item:e})},a)}))})})};var X=function(e){var t=e.feature;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{className:"list-title",children:["Showing ",t," list"]}),Object(n.jsx)(K,{feature:t}),Object(n.jsx)(V,{feature:t})]})};var Z=function(){var e=Object(j.h)().feature,t=Object(j.g)();Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]);var a,c,r,i,o,l,d,u=t.state.item;return"organization"===e&&u?(a=u.address,c=u.organization_type,r=u.owner,i=u.name,o=u.image_url,l=u.about):(a="Lorem ipsum dolor sit amet",c="Ipsum elit",r="Lorem ipsum",i="Name of Organization",o=_,l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),d="organization"===e?"Fund organization":"Attend meetup",Object(n.jsxs)("div",{className:"app-container item",children:[Object(n.jsx)("img",{src:o,alt:"dummy"}),Object(n.jsx)("h2",{children:i}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"item-pill-group",children:[Object(n.jsxs)("div",{className:"bg-light item-pill",children:["Organization top official: ",Object(n.jsx)("em",{children:r})]}),Object(n.jsxs)("div",{className:"bg-light item-pill",children:["Organization type: ",Object(n.jsx)("em",{children:c})]})]}),Object(n.jsx)("h5",{children:"About the organization"}),Object(n.jsx)("p",{children:l}),Object(n.jsxs)("p",{children:["Address of ",e,": ",Object(n.jsx)("em",{children:a})]}),Object(n.jsx)("button",{type:"button",className:"app-btn",children:d})]})};a(47),a(48),a(49),a(50),a(51);var $=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",children:Object(n.jsx)(I,{})}),Object(n.jsx)(j.a,{exact:!0,path:"/organization",children:Object(n.jsx)(X,{feature:"organization"})}),Object(n.jsx)(j.a,{exact:!0,path:"/meetup",children:Object(n.jsx)(X,{feature:"meetup"})}),Object(n.jsx)(j.a,{exact:!0,path:"/news",children:Object(n.jsx)(X,{feature:"news"})}),Object(n.jsx)(j.a,{exact:!0,path:"/:feature/:id",children:Object(n.jsx)(Z,{})})]}),Object(n.jsx)(m,{})]})};var ee=Object(d.b)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NEWS":return Object(R.a)(t.articles);default:return e}},loading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return t.loading;default:return e}},organization:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ORGS":return{primary:Object(R.a)(t.primary),filter:Object(R.a)(t.filter)};case"FILTER_ORGS":return{primary:Object(R.a)(e.primary),filter:Object(R.a)(t.filter)};default:return e}}}),te=Object(d.c)(ee);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(l.a,{store:te,children:Object(n.jsx)(o.a,{children:Object(n.jsx)($,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.478c05fc.chunk.js.map