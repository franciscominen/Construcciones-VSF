(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{358:function(t,o,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(82).default)("07383fd1",content,!0,{sourceMap:!1})},379:function(t,o,r){"use strict";r(358)},380:function(t,o,r){var e=r(81)(!1);e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]),e.push([t.i,'@-webkit-keyframes scale-in-br-data-v-247bb4af{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br-data-v-247bb4af{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br-data-v-247bb4af{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br-data-v-247bb4af{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top-data-v-247bb4af{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top-data-v-247bb4af{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom-data-v-247bb4af{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom-data-v-247bb4af{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}@-webkit-keyframes slide-in-right-data-v-247bb4af{0%{transform:translateX(1000px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slide-in-right-data-v-247bb4af{0%{transform:translateX(1000px);opacity:0}to{transform:translateX(0);opacity:1}}@-webkit-keyframes fade-in-fwd-data-v-247bb4af{0%{transform:translateZ(-80px);opacity:0}to{transform:translateZ(0);opacity:1}}@keyframes fade-in-fwd-data-v-247bb4af{0%{transform:translateZ(-80px);opacity:0}to{transform:translateZ(0);opacity:1}}@-webkit-keyframes fade-in-bottom-data-v-247bb4af{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fade-in-bottom-data-v-247bb4af{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@-webkit-keyframes fade-in-data-v-247bb4af{0%{opacity:0}to{opacity:1}}@keyframes fade-in-data-v-247bb4af{0%{opacity:0}to{opacity:1}}[data-v-247bb4af]:root{background-attachment:fixed}*[data-v-247bb4af]{margin:0;padding:0;box-sizing:border-box}html[data-v-247bb4af]{scroll-behavior:smooth}body[data-v-247bb4af]{background-color:#f8fbf8;overflow-x:hidden}main[data-v-247bb4af]{padding:0 5%}ul[data-v-247bb4af]{list-style:none}a[data-v-247bb4af]{text-decoration:none}h1[data-v-247bb4af],h2[data-v-247bb4af],h3[data-v-247bb4af],h4[data-v-247bb4af],h5[data-v-247bb4af]{font-family:"Red Hat Display",sans-serif}a[data-v-247bb4af],button[data-v-247bb4af],p[data-v-247bb4af]{font-family:"Red Hat Text",sans-serif}button[data-v-247bb4af]{background:transparent;border:none;cursor:pointer}.navbar-mobile[data-v-247bb4af]{display:none}@media(max-width:1024px){.navbar-desktop[data-v-247bb4af]{display:none!important}.navbar-mobile[data-v-247bb4af]{display:block}}[data-v-247bb4af]::-webkit-scrollbar{width:10px}[data-v-247bb4af]::-webkit-scrollbar-track{background:transparent}[data-v-247bb4af]::-webkit-scrollbar-thumb{background:#5d86ef;border-radius:5px;padding:5px 0}.hooper[data-v-247bb4af]{height:100%;width:100%;position:inherit}.hooper[data-v-247bb4af],.hooper .hooper-list .hooper-track .hooper-slide img[data-v-247bb4af]{max-height:400px;min-height:50px;max-width:600px;min-width:300px;-o-object-fit:cover;object-fit:cover}.hooper .hooper-list .hooper-track .hooper-slide img[data-v-247bb4af]{height:100%!important;width:100%!important;border-radius:60px 6px 6px 6px}.hooper .hooper-list .hooper-pagination[data-v-247bb4af]{position:relative;right:0;bottom:2.2em}@media(max-width:900px){.hooper .hooper-list .hooper-pagination[data-v-247bb4af]{position:relative;right:0;bottom:3em}}',""]),t.exports=e},412:function(t,o,r){"use strict";r.r(o);var e=r(199),n=(r(200),r(403),{name:"ModelImagesCarousel",components:{Hooper:e.a,Slide:e.d,HooperPagination:e.c},props:{model:Object},data:function(){return{hooperSettings:{itemsToShow:1,centerMode:!1,wheelControl:!1,infiniteScroll:!0,autoPlay:!0,transition:600}}}}),f=(r(379),r(51)),component=Object(f.a)(n,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("hooper",{attrs:{settings:t.hooperSettings}},[r("slide",[r("img",{attrs:{src:t.model.img1,alt:""}})]),t._v(" "),r("slide",[r("img",{attrs:{src:t.model.img2,alt:""}})]),t._v(" "),r("slide",[r("img",{attrs:{src:t.model.img3,alt:""}})]),t._v(" "),r("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],1)}),[],!1,null,"247bb4af",null);o.default=component.exports}}]);