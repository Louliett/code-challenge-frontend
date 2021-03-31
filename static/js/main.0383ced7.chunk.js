(this["webpackJsonpcode-challenge-frontend"]=this["webpackJsonpcode-challenge-frontend"]||[]).push([[0],{124:function(e,n,a){},125:function(e,n,a){},126:function(e,n,a){},128:function(e,n,a){},131:function(e,n,a){},135:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(24),o=a.n(r),i=a(99),s=a(36),l=a(91),d=a(12),u="GET_IMAGES_REQUEST",g="GET_IMAGES_SUCCESS",m="GET_IMAGES_FAILURE",j="SET_PAGE_NUMBER",f="OPEN_IMAGE_MODAL",b="CLOSE_IMAGE_MODAL",O="SET_IMAGE_INFO",p="SET_NEW_IMAGE_INFO",h={images:[],loading:!0,error:!1,errorMessage:"",pageNumber:1,apiHasMoreImgs:!1,openImageModal:!1,openInfoModal:!1,imageInfo:{description:"Loading...",urls:{raw:"Loading"},user:{first_name:"Loading...",last_name:"Loading..."}},imageIndex:null};var I=Object(s.c)({imageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:!1,errorMessage:""});case g:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,erorr:!1,errorMessage:"",images:[].concat(Object(l.a)(e.images),Object(l.a)(n.payload.images)),apiHasMoreImgs:n.payload.hasMore});case m:return Object(d.a)(Object(d.a)({},e),{},{error:!0,errorMessage:n.payload,loading:!1,apiHasMoreImgs:!1});case j:return Object(d.a)(Object(d.a)({},e),{},{pageNumber:e.pageNumber+1});case f:return Object(d.a)(Object(d.a)({},e),{},{openImageModal:!0,imageInfo:n.payload.imageInfo,imageIndex:n.payload.imageIndex});case b:return Object(d.a)(Object(d.a)({},e),{},{openImageModal:!1,imageInfo:h.imageInfo});case p:var a=0,t=e.images.length-1;return n.payload<a?Object(d.a)(Object(d.a)({},e),{},{imageInfo:e.images[a],imageIndex:a}):n.payload>t?Object(d.a)(Object(d.a)({},e),{},{imageInfo:e.images[t],imageIndex:t,pageNumber:e.pageNumber+1}):Object(d.a)(Object(d.a)({},e),{},{imageInfo:e.images[n.payload],imageIndex:n.payload});default:return e}}}),x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,v=Object(s.e)(I,x(Object(s.a)(i.a))),_=a(15),M=(a(124),a(125),a(126),a(2));function N(){return Object(M.jsx)("div",{className:"splash_header",children:Object(M.jsx)("span",{className:"app_title",children:Object(M.jsx)("b",{children:"Splash"})})})}function y(){return Object(M.jsx)(N,{})}var E=a(149),C=a(150),k=a(146),w=a(148),R=a(55);a(128);function S(e){return Object(M.jsx)("div",{className:"image_grid",children:Object(M.jsxs)(E.a,{centered:!0,stackable:!0,padded:"horizontally",children:[console.log(window.innerWidth," WIDTH"),e.images.map((function(n,a){return e.images.length===a+1?Object(M.jsx)(C.a,{innerRef:e.lastImageRef,children:Object(M.jsx)(E.a.Column,{computer:5,mobile:16,children:Object(M.jsx)("img",{className:"image",src:n.urls.regular,alt:n.alt_description,onClick:function(){e.onImageClick(n,a)}})},n.id)},n.id):Object(M.jsx)(E.a.Column,{computer:5,mobile:16,children:Object(M.jsx)("img",{className:"image",src:n.urls.regular,alt:n.alt_description,onClick:function(){e.onImageClick(n,a)}})},n.id)})),Object(M.jsx)("br",{}),Object(M.jsx)("div",{children:e.loading&&Object(M.jsx)(k.a,{active:!0,inline:"centered"})}),Object(M.jsx)("div",{children:e.error&&Object(M.jsx)(w.a,{negative:!0,size:"large",children:Object(M.jsxs)(w.a.Content,{children:[Object(M.jsx)(R.a,{name:"exclamation triangle",size:"large"}),Object(M.jsx)(w.a.Header,{children:"Error"}),Object(M.jsx)("p",{children:e.errorMessage})]})})})]})})}var A=a(53),P=a.n(A),L=a(72),T="BCLphaiVtu7iU1ttolxvP3lk1uYjbNyCzMSfKi8OP-w",G="https://api.unsplash.com/photos",z={fetchImagesPerPage:function(e){return D.apply(this,arguments)}};function D(){return(D=Object(L.a)(P.a.mark((function e(n){var a,t,c,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new Headers).append("Authorization","Client-ID ".concat(T)),t={method:"GET",headers:a,redirect:"follow"},e.next=5,fetch("".concat(G,"?page=").concat(n,"&per_page=30"),t);case 5:return c=e.sent,console.log(n," page nummer"),console.log(c," message"),e.next=10,c.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H={getImagesPerPage:function(e){return function(a){a({type:u}),z.fetchImagesPerPage(e).then((function(e){if(console.log(e.ok," OK"),e.errors){var t=e.errors[0];console.log("error",e),a(n(t))}else if(e.ok&&void 0!==e.ok){var c=e.length>0;a(function(e,n){return{type:g,payload:{images:e,hasMore:n}}}(e,c))}else a(n("Too Many Requests!"))}))};function n(e){return{type:m,payload:e}}},setPageNumber:function(){return{type:j}},setImageInfo:function(e){return{type:O,payload:e}},setNewImageInfo:function(e){return{type:p,payload:e}},openImageModal:function(e,n){return{type:f,payload:{imageInfo:e,imageIndex:n}}},closeImageModal:function(){return{type:b}}};function U(){var e=Object(_.b)(),n=Object(_.c)((function(e){return e.imageReducer.images})),a=Object(_.c)((function(e){return e.imageReducer.loading})),c=Object(_.c)((function(e){return e.imageReducer.error})),r=Object(_.c)((function(e){return e.imageReducer.errorMessage})),o=Object(_.c)((function(e){return e.imageReducer.apiHasMoreImgs})),i=Object(_.c)((function(e){return e.imageReducer.pageNumber})),s=function(e,n,a,c){var r=Object(t.useRef)();return Object(t.useCallback)((function(t){e||(r.current&&r.current.disconnect(),r.current=new IntersectionObserver((function(e){e[0].isIntersecting&&c&&a(n.setPageNumber())})),t&&r.current.observe(t))}),[e,c])}(a,H,e,o);return Object(t.useEffect)((function(){e(H.getImagesPerPage(i))}),[i]),Object(M.jsx)(S,{images:n,loading:a,error:c,errorMessage:r,lastImageRef:s,onImageClick:function(n,a){e(H.openImageModal(n,a))}})}var B=a(105),W=a(147);a(131);function F(e){return Object(M.jsxs)(W.a,{closeIcon:!0,open:e.openImageModal,centered:!1,onClose:e.closeImageModal,className:"modal_content",children:[Object(M.jsx)("div",{className:"left_chevron",onClick:function(){e.onChevronClick(-1)},children:Object(M.jsx)(R.a,{size:"huge",color:"grey",name:"chevron left"})}),Object(M.jsx)("img",{className:"image_modal",src:e.imageInfo.urls.regular,alt:e.imageInfo.alt_description}),Object(M.jsx)("div",{className:"right_chevron",onClick:function(){e.onChevronClick(1)},children:Object(M.jsx)(R.a,{size:"huge",color:"grey",name:"chevron right"})}),Object(M.jsx)("div",{className:"info_circle",onClick:function(){e.onInfoClick()},children:Object(M.jsx)(R.a,{size:"huge",color:"grey",name:"info circle"})}),Object(M.jsxs)(W.a,{dimmer:"inverted",closeIcon:!0,open:e.openInfoModal,onClose:e.closeInfoModal,size:"small",className:"modal_info",children:[Object(M.jsxs)("div",{className:"top_half",children:[Object(M.jsx)("img",{src:e.imageInfo.urls.regular,alt:e.imageInfo.alt_description,className:"info_image"}),Object(M.jsxs)("div",{className:"description_username",children:[Object(M.jsxs)("h2",{children:[" Title: ",e.imageInfo.description||"Splash!"," "]}),Object(M.jsxs)("h3",{children:[" Author: ",e.imageInfo.user.username," "]})]})]}),Object(M.jsx)("hr",{className:"modal_divider"}),Object(M.jsxs)("div",{className:"bottom_half",children:[Object(M.jsxs)("div",{className:"meta_info",children:[Object(M.jsxs)("p",{children:["Width: ",e.imageInfo.width]}),Object(M.jsxs)("p",{children:["Height: ",e.imageInfo.height]}),Object(M.jsxs)("p",{children:["Created On: ",new Date(e.imageInfo.created_at).toLocaleDateString()]}),Object(M.jsxs)("p",{children:["Sponsored By: ",null===e.imageInfo.sponsorship||void 0===e.imageInfo.sponsorship?"N/A":e.imageInfo.sponsorship.sponsor.name]})]}),Object(M.jsxs)("div",{className:"like_icon",children:[Object(M.jsx)(R.a,{name:"like",color:"red",size:"large"})," ",e.imageInfo.likes]}),Object(M.jsx)("div",{className:"download_icon",onClick:function(){e.onDownload(e.imageInfo.urls.raw)},children:Object(M.jsx)(R.a,{name:"download",color:"black",size:"large",colo:"grey"})})]})]})]})}function J(e){var n=Object(_.b)(),a=Object(_.c)((function(e){return e.imageReducer.openImageModal})),c=Object(t.useState)(!1),r=Object(B.a)(c,2),o=r[0],i=r[1],s=Object(_.c)((function(e){return e.imageReducer.imageInfo})),l=Object(_.c)((function(e){return e.imageReducer.imageIndex}));return Object(M.jsx)(F,{openImageModal:a,closeImageModal:function(){n(H.closeImageModal())},openInfoModal:o,closeInfoModal:function(){i(!1)},imageInfo:s,onChevronClick:function(e){var a=l+e;n(H.setNewImageInfo(a))},onInfoClick:function(){i(!0)},onDownload:function(e){fetch(e).then(function(){var e=Object(L.a)(P.a.mark((function e(n){var a,t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.blob();case 2:a=e.sent,(t=document.createElement("a")).href=URL.createObjectURL(a),t.setAttribute("download","image.jpg"),t.click();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}})}function K(e){return Object(M.jsxs)("div",{className:"home_div",children:[Object(M.jsx)(y,{}),Object(M.jsx)(U,{}),Object(M.jsx)(J,{})]})}function V(e){return Object(M.jsx)(K,{})}var X=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(V,{})})};a(134);o.a.render(Object(M.jsx)(c.a.StrictMode,{children:Object(M.jsx)(_.a,{store:v,children:Object(M.jsx)(X,{})})}),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.0383ced7.chunk.js.map