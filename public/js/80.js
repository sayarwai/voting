/*! For license information please see 80.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80],{3744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}},2080:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_});var o=r(821),n={style:{"--bs-breadcrumb-divider":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")"},"aria-label":"breadcrumb"},a={class:"breadcrumb"},i={class:"breadcrumb-item"},c=(0,o.createTextVNode)("Home"),l=(0,o.createElementVNode)("li",{class:"breadcrumb-item active","aria-current":"page"},"Create Competitors",-1),s={class:"col-12"},u=(0,o.createElementVNode)("div",{class:"card"},[(0,o.createElementVNode)("div",{class:"card-header py-3 d-flex align-items-center justify-content-between"},[(0,o.createElementVNode)("div",{class:"d-flex align-items-center"},[(0,o.createElementVNode)("i",{class:"fa fa-plus-circle me-2"}),(0,o.createTextVNode)(" Create Competitors ")])])],-1),d={class:"card-body"},m={class:"mt-3"},p=(0,o.createElementVNode)("label",{for:"role",class:"form-label"},"Role",-1),f=[(0,o.createElementVNode)("option",{selected:"",disabled:""},"select a role",-1),(0,o.createElementVNode)("option",{value:"prince"},"prince",-1),(0,o.createElementVNode)("option",{value:"princess"},"princess",-1),(0,o.createElementVNode)("option",{value:"performance"},"performance",-1)],h={key:0,class:"text-danger fw-bold"},v={class:"mt-3"},y=(0,o.createElementVNode)("label",{for:"name",class:"form-label"},"Competitor Name",-1),g={key:0,class:"text-danger fw-bold"},b={class:"mt-3"},w=(0,o.createElementVNode)("label",{for:"name",class:"form-label"},"Competitor Photo",-1),E={key:0,class:"text-danger fw-bold"},N={class:"mt-3"},x=(0,o.createElementVNode)("label",{for:"no",class:"form-label"},"Competitor No",-1),V={key:0,class:"text-danger fw-bold"},k=["disabled"];function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},n=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var n=t&&t.prototype instanceof d?t:d,a=Object.create(n.prototype),i=new x(o||[]);return a._invoke=function(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return k()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var l=s(e,t,r);if("normal"===l.type){if(o=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function d(){}function m(){}function p(){}var f={};c(f,n,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(V([])));v&&v!==t&&r.call(v,n)&&(f=v);var y=p.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function o(n,a,i,c){var l=s(e[n],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==C(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}var n;this._invoke=function(e,r){function a(){return new t((function(t,n){o(e,r,t,n)}))}return n=n?n.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=s(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,u;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function V(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,c(y,"constructor",p),c(p,"constructor",m),m.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new b(l(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=V,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:V(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function B(e,t,r,o,n,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(o,n)}const S={data:function(){return{competitor:{name:"",role:"select a role",photo:"",no:""},errors:"",loading:!1}},components:{Master:r(348).Z},created:function(){this.$Progress.start()},mounted:function(){this.$Progress.finish()},computed:{},methods:{addCompetitor:function(){var e,t=this;return(e=L().mark((function e(){var r,o,n,a,i,c;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.parse(localStorage.auth),t.loading=!0,(o=new FormData).append("name",t.competitor.name),o.append("role",t.competitor.role),o.append("photo",t.competitor.photo),o.append("no",t.competitor.no),console.log(o),e.next=10,axios.post("/api/competitor/create",o,{headers:{Authorization:"Bearer ".concat(r.data.token)}});case 10:n=e.sent,a=n.data,i=a.data,c=a.success,console.log(i),!1===c?(t.errors=i,t.loading=!1):(t.errors={},t.product={name:"",role:"select a role",photo:"",no:""},t.loading=!1,t.$store.commit("toast",i),t.$Progress.start(),t.$router.push({name:"competitor-list",params:{competitor:t.competitor.role}}));case 14:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){B(a,o,n,i,c,"next",e)}function c(e){B(a,o,n,i,c,"throw",e)}i(void 0)}))})()}}};const _=(0,r(3744).Z)(S,[["render",function(e,t,r,C,L,B){var S=this,_=(0,o.resolveComponent)("router-link"),P=(0,o.resolveComponent)("Master");return(0,o.openBlock)(),(0,o.createBlock)(P,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("nav",n,[(0,o.createElementVNode)("ol",a,[(0,o.createElementVNode)("li",i,[(0,o.createVNode)(_,{to:{name:"home"}},{default:(0,o.withCtx)((function(){return[c]})),_:1})]),l])]),(0,o.createElementVNode)("div",s,[u,(0,o.createElementVNode)("div",d,[(0,o.createElementVNode)("form",{onSubmit:t[4]||(t[4]=(0,o.withModifiers)((function(){return B.addCompetitor&&B.addCompetitor.apply(B,arguments)}),["prevent"])),enctype:"multipart/form-data"},[(0,o.createElementVNode)("div",m,[p,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return L.competitor.role=e}),class:"form-select",id:"role"},f,512),[[o.vModelSelect,L.competitor.role]]),S.errors.role?((0,o.openBlock)(),(0,o.createElementBlock)("small",h,"Please select a category")):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",v,[y,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return L.competitor.name=e}),class:"form-control",id:"name"},null,512),[[o.vModelText,L.competitor.name]]),S.errors.name?((0,o.openBlock)(),(0,o.createElementBlock)("small",g,(0,o.toDisplayString)(S.errors.name[0]),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",b,[w,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return L.competitor.photo=e}),class:"form-control",id:"name"},null,512),[[o.vModelText,L.competitor.photo]]),S.errors.photo?((0,o.openBlock)(),(0,o.createElementBlock)("small",E,(0,o.toDisplayString)(S.errors.photo[0]),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",N,[x,(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return L.competitor.no=e}),class:"form-control",id:"no"},null,512),[[o.vModelText,L.competitor.no]]),S.errors.no?((0,o.openBlock)(),(0,o.createElementBlock)("small",V,(0,o.toDisplayString)(S.errors.no[0]),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("button",{class:"btn btn-primary mt-3 text-white",type:"submit",disabled:!0===L.loading},"Add Competitor",8,k)],32)])])]})),_:1})}]])},348:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(821),n={class:"container"},a={class:"row my-3"};var i={class:"navbar navbar-expand-lg bg-primary position-sticky top-0",style:{"z-index":"1000"}},c=[(0,o.createStaticVNode)('<div class="container-fluid"><a class="navbar-brand text-white d-flex align-items-center" href="#"><img src="/images/logo_ucsm.png" class="me-2" style="width:30px;" alt=""><span class="fw-bold h3 mb-0">Dashboard</span></a><button class="btn btn-light menu-btn" type="button" data-bs-toggle="modal" data-bs-target="#admin"><i class="fa fa-bars text-primary"></i></button></div>',1)];const l={};var s=r(3744);const u=(0,s.Z)(l,[["render",function(e,t,r,n,a,l){return(0,o.openBlock)(),(0,o.createElementBlock)("nav",i,c)}]]);var d={class:"modal fade",id:"admin",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},m={class:"modal-dialog modal-dialog-centered"},p={class:"modal-content"},f=(0,o.createElementVNode)("div",{class:"modal-header d-flex align-items-center"},[(0,o.createElementVNode)("h3",{class:"welcome mb-0"},"dashboard"),(0,o.createElementVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},v={class:"text-center"},y=["onClick"];const g={data:function(){return{role:[{name:"Prince",slug:"prince"},{name:"Princess",slug:"princess"},{name:"Best Performance",slug:"performance"}]}},computed:{},methods:{menuBtn:function(e){e&&(this.$Progress.start(),this.$router.push({name:"competitor-list",params:{competitor:e}}))}}},b={components:{Header:u,Menu:(0,s.Z)(g,[["render",function(e,t,r,n,a,i){var c=this;return(0,o.openBlock)(),(0,o.createElementBlock)("div",d,[(0,o.createElementVNode)("div",m,[(0,o.createElementVNode)("div",p,[f,(0,o.createElementVNode)("div",h,[(0,o.createElementVNode)("div",v,[(0,o.createElementVNode)("ul",null,[(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("button",{"data-bs-dismiss":"modal",onClick:t[0]||(t[0]=function(e){return c.$router.push({name:"urls"})}),class:"my-2 w-75 text-white btn-lg btn btn-primary rounded-pill"}," Urls for QR Code ")]),(0,o.createElementVNode)("li",null,[(0,o.createElementVNode)("button",{"data-bs-dismiss":"modal",onClick:t[1]||(t[1]=function(e){return c.$router.push({name:"create-competitors"})}),class:"my-2 w-75 text-white btn-lg btn btn-primary rounded-pill"}," Create Competitors ")]),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(a.role,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",{key:e.name},[(0,o.createElementVNode)("button",{"data-bs-dismiss":"modal",class:"my-2 w-75 text-white btn-lg btn btn-primary rounded-pill",onClick:function(t){return i.menuBtn(e.slug)}},(0,o.toDisplayString)(e.name)+" List",9,y)])})),128))]),(0,o.createElementVNode)("button",{"data-bs-dismiss":"modal",class:"my-3 w-75 text-white btn-lg btn btn-success rounded-pill",onClick:t[2]||(t[2]=function(e){return c.$store.dispatch("logout")})},"Logout")])])])])])}]])}},w=(0,s.Z)(b,[["render",function(e,t,r,i,c,l){var s=(0,o.resolveComponent)("Header"),u=(0,o.resolveComponent)("Menu");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[(0,o.createVNode)(s),(0,o.createVNode)(u),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.renderSlot)(e.$slots,"default")])])])}]])}}]);
//# sourceMappingURL=80.js.map