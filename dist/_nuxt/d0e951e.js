(window.webpackJsonp=window.webpackJsonp||[]).push([[27,16,17],{297:function(t,o,e){t.exports=e.p+"img/logo-1.a5c06c6.svg"},300:function(t,o,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("584c4720",content,!0,{sourceMap:!1})},301:function(t,o,e){var content=e(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("13848067",content,!0,{sourceMap:!1})},303:function(t,o,e){"use strict";e.r(o);var n={name:"Footer",components:{SocialMediaLinks:e(291).default}},r=(e(333),e(51)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("footer",[n("section",{staticClass:"footer_mainWrapper"},[n("article",{staticClass:"footer_infoWrapper"},[n("img",{staticClass:"logo",attrs:{src:e(332),alt:"Viviendas Santa Fe"}}),t._v(" "),t._m(0),t._v(" "),n("SocialMediaLinks",{attrs:{classColor:"socialMedia_lightblue-mobile"}})],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])}),[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("p",[t._v("\n        Vos lo imaginas,"),e("br"),t._v("\n        nosotros lo construimos.\n      ")])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("article",{staticClass:"footer_infoWrapper"},[e("div",{staticClass:"footer_infoWrapper-container"},[e("h3",[t._v("Contactanos")]),t._v(" "),e("ul",{staticClass:"footer_list"},[e("li",[e("p",[t._v("+54 9 (342) 433 1234")])]),t._v(" "),e("li",[e("p",[t._v("+54 9 (342) 433 1234")])]),t._v(" "),e("li",[e("p",[t._v("viviendassantafe@gmail.com")])])])]),t._v(" "),e("div",{staticClass:"footer_infoWrapper-container"},[e("h3",[t._v("Encontranos en")]),t._v(" "),e("p",[e("strong",[t._v("Santa Fe")])]),t._v(" "),e("p",[t._v("Saavedra 1699 CP 3000")])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("article",{staticClass:"footer_infoWrapper"},[e("div",{staticClass:"footer_infoWrapper-container"},[e("h3",[t._v("Compania")]),t._v(" "),e("ul",{staticClass:"footer_list"},[e("li",[e("a",[t._v("Testimonios")])]),t._v(" "),e("li",[e("a",[t._v("Nosotros")])]),t._v(" "),e("li",[e("a",[t._v("Team")])]),t._v(" "),e("li",[e("a",[t._v("Contacto")])])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("article",{staticClass:"footer_infoWrapper"},[e("div",{staticClass:"footer_infoWrapper-container"},[e("h3",[t._v("Servicios")]),t._v(" "),e("ul",{staticClass:"footer_list"},[e("li",[e("a",[t._v("Construcciones")])]),t._v(" "),e("li",[e("a",[t._v("Modelos")])])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"copyright"},[e("p",[t._v("© All right reserved. Viviendas Santa Fe SRL 2022")])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{SocialMediaLinks:e(291).default,Footer:e(303).default})},305:function(t,o,e){"use strict";e.r(o);var n={name:"Navbar",data:function(){return{toggleDropdown:!1}},methods:{handleToggleDropdown:function(){return this.toggleDropdown=!this.toggleDropdown},goTo:function(t){this.$router.push(t)},closeDropdownAndgoTo:function(t){this.handleToggleDropdown(),this.$router.push(t)}}},r=(e(318),e(51)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("nav",[n("img",{attrs:{src:e(297),alt:"Viviendas Santa Fe"},on:{click:function(o){return t.goTo({path:"/",hash:"#home"})}}}),t._v(" "),n("ul",[n("li",[n("button",{on:{click:t.handleToggleDropdown}},[t._v("Inicio")]),t._v(" "),n("ul",{class:[t.toggleDropdown?"navbar_dropdown":"navbar_dropdown--disabled"]},[n("li",[n("button",{on:{click:function(o){return t.closeDropdownAndgoTo({path:"/",hash:"#about"})}}},[n("strong",[t._v(">")]),t._v(" Nosotros\n          ")])]),t._v(" "),n("li",[n("button",{on:{click:function(o){return t.closeDropdownAndgoTo({path:"/",hash:"#testimonials"})}}},[n("strong",[t._v(">")]),t._v(" Testimonios\n          ")])]),t._v(" "),n("li",[n("button",{on:{click:function(o){return t.closeDropdownAndgoTo({path:"/",hash:"#activity"})}}},[n("strong",[t._v(">")]),t._v(" Que hacemos\n          ")])])])]),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/constructions"}},[t._v("Construcciones")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/models"}},[t._v("Modelos")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/"}},[t._v("Equipo")])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"contact_navLink",attrs:{to:"/contact"}},[t._v("Contacto")])],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/admin"}},[n("img",{staticClass:"admin_icon",attrs:{src:e(317),alt:"Sing In"}})])],1)])])}),[],!1,null,"dca15886",null);o.default=component.exports},306:function(t,o,e){"use strict";e.r(o);var n={name:"NavbarMobile",components:{SocialMediaLinks:e(291).default},data:function(){return{isMobileMenuOpen:!1}},methods:{handleMobileMenu:function(){return this.isMobileMenuOpen=!this.isMobileMenuOpen},goTo:function(path){return this.$router.push(path)},goToAndCloseMenu:function(path){return this.handleMobileMenu(),this.$router.push(path)}}},r=(e(326),e(51)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("nav",{staticClass:"mobile-nav"},[n("div",{staticClass:"navClose_header"},[n("img",{staticClass:"nav_logo",attrs:{src:e(297),alt:""},on:{click:function(o){return t.goTo({path:"/",hash:"#home"})}}}),t._v(" "),n("img",{attrs:{src:e(320),alt:""},on:{click:t.handleMobileMenu}})]),t._v(" "),n("div",{class:[t.isMobileMenuOpen?"navOpen_wrapper":"navOpen_wrapper-close"]},[n("div",{staticClass:"navOpen_header"},[n("img",{staticClass:"nav_logo",attrs:{src:e(307),alt:""}}),t._v(" "),n("img",{attrs:{src:e(304),alt:"nav_closeBtn"},on:{click:t.handleMobileMenu}})]),t._v(" "),n("ul",{staticClass:"navLinks_mobile"},[n("li",[n("NuxtLink",{staticClass:"navLink_mobile",attrs:{to:"/"}},[n("button",{on:{click:t.handleMobileMenu}},[n("img",{attrs:{src:e(321),alt:""}}),t._v(" "),n("h4",[t._v("Inicio")])])])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"navLink_mobile",attrs:{to:"/constructions"}},[n("button",{on:{click:t.handleMobileMenu}},[n("img",{attrs:{src:e(322),alt:""}}),t._v(" "),n("h4",[t._v("Construcciones")])])])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"navLink_mobile",attrs:{to:"/models"}},[n("button",[n("img",{attrs:{src:e(323),alt:""}}),t._v(" "),n("h4",[t._v("Modelos")])])])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"navLink_mobile",attrs:{to:"/team"}},[n("button",[n("img",{attrs:{src:e(324),alt:""}}),t._v(" "),n("h4",[t._v("Equipo")])])])],1),t._v(" "),n("li",[n("NuxtLink",{staticClass:"navLink_mobile",staticStyle:{border:"none"},attrs:{to:"/contact"}},[n("button",[n("img",{attrs:{src:e(325),alt:""}}),t._v(" "),n("h4",[t._v("Contacto")])])])],1)]),t._v(" "),n("SocialMediaLinks",{attrs:{classColor:"socialMedia_white"}})],1)])}),[],!1,null,"7fba4c88",null);o.default=component.exports;installComponents(component,{SocialMediaLinks:e(291).default})},307:function(t,o,e){t.exports=e.p+"img/logo-3.e47a297.svg"},314:function(t,o,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("33164fa7",content,!0,{sourceMap:!1})},317:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyMSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUgMjMuMUM0LjY2NTE1IDIxLjgwMzMgMCAxNi4yOTgxIDAgMTAuNVY0LjJMMTAuNSAwTDIxIDQuMlYxMC41QzIxIDE2LjMwMDIgMTYuMzM0OCAyMS44MDMzIDEwLjUgMjMuMVpNMi4xIDUuMjVWMTAuNUMyLjE2IDEyLjkyNzcgMy4wMTM4OCAxNS4yNjg5IDQuNTMwOTQgMTcuMTY1M0M2LjA0Nzk5IDE5LjA2MTYgOC4xNDQ2NSAyMC40MDg1IDEwLjUgMjFDMTIuODU1MyAyMC40MDg1IDE0Ljk1MiAxOS4wNjE2IDE2LjQ2OTEgMTcuMTY1M0MxNy45ODYxIDE1LjI2ODkgMTguODQgMTIuOTI3NyAxOC45IDEwLjVWNS4yNUwxMC41IDIuMUwyLjEgNS4yNVoiIGZpbGw9IiM0QjcyRDciLz4KPHBhdGggZD0iTTEwLjUgMTAuNUMxMS45NDk3IDEwLjUgMTMuMTI1IDkuMzI0NzUgMTMuMTI1IDcuODc1QzEzLjEyNSA2LjQyNTI1IDExLjk0OTcgNS4yNSAxMC41IDUuMjVDOS4wNTAyNSA1LjI1IDcuODc1IDYuNDI1MjUgNy44NzUgNy44NzVDNy44NzUgOS4zMjQ3NSA5LjA1MDI1IDEwLjUgMTAuNSAxMC41WiIgZmlsbD0iIzRCNzJENyIvPgo8cGF0aCBkPSJNNS4yNSAxNC43QzUuNzY3NTMgMTUuNjQzMSA2LjUyNjM3IDE2LjQzMTggNy40NDg4NSAxNi45ODUzQzguMzcxMzIgMTcuNTM4NyA5LjQyNDMgMTcuODM3MiAxMC41IDE3Ljg1QzExLjU3NTcgMTcuODM3MiAxMi42Mjg3IDE3LjUzODcgMTMuNTUxMiAxNi45ODUzQzE0LjQ3MzYgMTYuNDMxOCAxNS4yMzI1IDE1LjY0MzEgMTUuNzUgMTQuN0MxNS43MjM3IDEyLjcwOTIgMTIuMjQwOSAxMS41NSAxMC41IDExLjU1QzguNzQ5NjUgMTEuNTUgNS4yNzYyNSAxMi43MDkyIDUuMjUgMTQuN1oiIGZpbGw9IiM0QjcyRDciLz4KPC9zdmc+Cg=="},318:function(t,o,e){"use strict";e(300)},319:function(t,o,e){var n=e(81)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]),n.push([t.i,'@-webkit-keyframes scale-in-br-data-v-dca15886{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br-data-v-dca15886{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br-data-v-dca15886{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br-data-v-dca15886{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top-data-v-dca15886{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top-data-v-dca15886{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom-data-v-dca15886{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom-data-v-dca15886{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}[data-v-dca15886]:root{background-attachment:fixed}*[data-v-dca15886]{margin:0;padding:0;box-sizing:border-box}html[data-v-dca15886]{scroll-behavior:smooth}body[data-v-dca15886]{background-color:#f8fbf8;overflow-x:hidden}main[data-v-dca15886]{padding:0 5%}ul[data-v-dca15886]{list-style:none}a[data-v-dca15886]{text-decoration:none}h1[data-v-dca15886],h2[data-v-dca15886],h3[data-v-dca15886],h4[data-v-dca15886],h5[data-v-dca15886]{font-family:"Red Hat Display",sans-serif}a[data-v-dca15886],button[data-v-dca15886],p[data-v-dca15886]{font-family:"Red Hat Text",sans-serif}button[data-v-dca15886]{background:transparent;border:none;cursor:pointer}.navbar-mobile[data-v-dca15886]{display:none}@media(max-width:1024px){.navbar-desktop[data-v-dca15886]{display:none!important}.navbar-mobile[data-v-dca15886]{display:block}}nav[data-v-dca15886]{z-index:5;display:flex;justify-content:space-between;align-items:center;background:#f8fbf8;position:fixed;width:100%;padding:24px 5%}nav img[data-v-dca15886]{width:180px;cursor:pointer}nav ul[data-v-dca15886]{align-self:end;display:flex;justify-content:center;align-items:center;grid-gap:56px;gap:56px}nav ul li a[data-v-dca15886]{font-size:18px;font-weight:500;color:#5d86ef}nav ul li a displafg .admin_icon[data-v-dca15886]{max-width:26px;margin:auto 0}nav ul li button[data-v-dca15886]{font-size:18px;font-weight:500;color:#5d86ef}nav ul li .contact_navLink[data-v-dca15886]{border:1px solid #5d86ef;padding:8px 18px;border-radius:5px}nav ul li a[data-v-dca15886]{display:flex;justify-content:center;align-items:center}nav ul li a .admin_icon[data-v-dca15886]{max-width:26px}nav .navbar_dropdown[data-v-dca15886]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;position:absolute;grid-gap:16px;gap:16px;background:#f8fbf8;padding:32px 22px 22px;margin:0 -24px;border-radius:6px}nav .navbar_dropdown li[data-v-dca15886]{color:#5d86ef;font-family:"Red Hat Text",sans-serif;font-size:16px}nav .navbar_dropdown--disabled[data-v-dca15886]{display:none}',""]),t.exports=n},320:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAzNSAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjIiIHkxPSIyIiB4Mj0iMzIuNzIyMiIgeTI9IjIiIHN0cm9rZT0iIzVEODZFRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjIiIHkxPSIxNC41IiB4Mj0iMzIuNzIyMiIgeTI9IjE0LjUiIHN0cm9rZT0iIzVEODZFRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjIiIHkxPSIyNyIgeDI9IjMyLjcyMjIiIHkyPSIyNyIgc3Ryb2tlPSIjNUQ4NkVGIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"},321:function(t,o,e){t.exports=e.p+"img/inicio-icon.6c2f3fa.svg"},322:function(t,o,e){t.exports=e.p+"img/constructions-icon.6ec80c5.svg"},323:function(t,o,e){t.exports=e.p+"img/models-icon.294ca4c.svg"},324:function(t,o,e){t.exports=e.p+"img/team-icon.0d94b22.svg"},325:function(t,o,e){t.exports=e.p+"img/contact-icon.6027876.svg"},326:function(t,o,e){"use strict";e(301)},327:function(t,o,e){var n=e(81)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]),n.push([t.i,'@-webkit-keyframes scale-in-br-data-v-7fba4c88{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br-data-v-7fba4c88{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br-data-v-7fba4c88{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br-data-v-7fba4c88{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top-data-v-7fba4c88{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top-data-v-7fba4c88{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom-data-v-7fba4c88{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom-data-v-7fba4c88{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}[data-v-7fba4c88]:root{background-attachment:fixed}*[data-v-7fba4c88]{margin:0;padding:0;box-sizing:border-box}html[data-v-7fba4c88]{scroll-behavior:smooth}body[data-v-7fba4c88]{background-color:#f8fbf8;overflow-x:hidden}main[data-v-7fba4c88]{padding:0 5%}ul[data-v-7fba4c88]{list-style:none}a[data-v-7fba4c88]{text-decoration:none}h1[data-v-7fba4c88],h2[data-v-7fba4c88],h3[data-v-7fba4c88],h4[data-v-7fba4c88],h5[data-v-7fba4c88]{font-family:"Red Hat Display",sans-serif}a[data-v-7fba4c88],button[data-v-7fba4c88],p[data-v-7fba4c88]{font-family:"Red Hat Text",sans-serif}button[data-v-7fba4c88]{background:transparent;border:none;cursor:pointer}.navbar-mobile[data-v-7fba4c88]{display:none}@media(max-width:1024px){.navbar-desktop[data-v-7fba4c88]{display:none!important}.navbar-mobile[data-v-7fba4c88]{display:block}}.mobile-nav[data-v-7fba4c88]{background:#5d86ef;position:fixed;width:100%;top:0;z-index:10}.mobile-nav .navClose_header[data-v-7fba4c88]{background:#f8fbf8;padding:22px 5%;display:flex;justify-content:space-between;align-items:center}.mobile-nav .navClose_header .nav_logo[data-v-7fba4c88]{min-width:120px;max-width:160px;-o-object-fit:contain;object-fit:contain}.mobile-nav .navOpen_wrapper[data-v-7fba4c88],.mobile-nav .navOpen_wrapper-close[data-v-7fba4c88]{transform:translateY(0);transition:.6s;background:#5d86ef;position:absolute;width:100%;height:100vh;z-index:11;top:0}.mobile-nav .navOpen_wrapper-close[data-v-7fba4c88]{transform:translateY(-100vh);transition:.6s cubic-bezier(.215,.61,.355,1)}.mobile-nav .navOpen_wrapper-close .navOpen_header[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navOpen_header[data-v-7fba4c88]{display:flex;justify-content:space-between;padding:22px 5%}.mobile-nav .navOpen_wrapper-close .navLinks_mobile[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile[data-v-7fba4c88]{display:flex;flex-direction:column;padding:20px 15%;margin-bottom:22px}.mobile-nav .navOpen_wrapper-close .navLinks_mobile .navLink_mobile[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile .navLink_mobile[data-v-7fba4c88]{display:flex;align-items:center;border-bottom:1px solid #f8fbf8;padding:12px 0;width:100%}.mobile-nav .navOpen_wrapper-close .navLinks_mobile .navLink_mobile button[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile .navLink_mobile button[data-v-7fba4c88]{display:flex;align-items:center;width:100%}.mobile-nav .navOpen_wrapper-close .navLinks_mobile .navLink_mobile button img[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile .navLink_mobile button img[data-v-7fba4c88]{width:58px}.mobile-nav .navOpen_wrapper-close .navLinks_mobile .navLink_mobile button h4[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile .navLink_mobile button h4[data-v-7fba4c88]{color:#f8fbf8;font-size:24px;font-weight:300}.mobile-nav .navOpen_wrapper-close .navLinks_mobile .nuxt-link-active button h4[data-v-7fba4c88],.mobile-nav .navOpen_wrapper .navLinks_mobile .nuxt-link-active button h4[data-v-7fba4c88]{font-weight:600}',""]),t.exports=n},332:function(t,o,e){t.exports=e.p+"img/logo-2.f2c03aa.svg"},333:function(t,o,e){"use strict";e(314)},334:function(t,o,e){var n=e(81)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]),n.push([t.i,'@-webkit-keyframes scale-in-br{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}:root{background-attachment:fixed}*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{background-color:#f8fbf8;overflow-x:hidden}main{padding:0 5%}ul{list-style:none}a{text-decoration:none}h1,h2,h3,h4,h5{font-family:"Red Hat Display",sans-serif}a,button,p{font-family:"Red Hat Text",sans-serif}button{background:transparent;border:none;cursor:pointer}.navbar-mobile{display:none}@media(max-width:1024px){.navbar-desktop{display:none!important}.navbar-mobile{display:block}}footer{padding:4em 10% 2em!important}footer .footer_mainWrapper{display:flex;justify-content:space-between;padding:1em 0 4em;border-bottom:1px solid #eaeaea}footer .footer_mainWrapper .footer_infoWrapper{display:flex;flex-direction:column;justify-content:space-between;grid-gap:55px;gap:55px}footer .footer_mainWrapper .footer_infoWrapper .logo{max-width:180px}footer .footer_mainWrapper .footer_infoWrapper h3{color:#263969;margin:0 0 12px}footer .footer_mainWrapper .footer_infoWrapper p{color:#5d86ef;font-size:16px}footer .footer_mainWrapper .footer_infoWrapper .footer_list{display:flex;flex-direction:column;grid-gap:8px;gap:8px;color:#5d86ef;font-size:16px}footer .copyright{padding-top:2em;color:#5d86ef;font-size:16px}@media(max-width:1024px){footer{padding:4em 10% 2em}footer .footer_mainWrapper{display:flex;flex-direction:column;justify-content:center;padding:1em 0 2em;border-bottom:1px solid #eaeaea}footer .footer_mainWrapper .footer_infoWrapper{display:flex;flex-direction:column;justify-content:center;grid-gap:0;gap:0}footer .footer_mainWrapper .footer_infoWrapper .footer_infoWrapper-container{margin:10px 0}footer .footer_mainWrapper .footer_infoWrapper .logo{max-width:180px;margin-bottom:18px}footer .footer_mainWrapper .footer_infoWrapper h3{color:#263969;margin:0 0 12px}footer .footer_mainWrapper .footer_infoWrapper p{font-size:16px}footer .footer_mainWrapper .footer_infoWrapper .footer_list{display:flex;flex-direction:column;grid-gap:8px;gap:8px;font-size:16px}footer .copyright{padding-top:2em;font-size:12px}}',""]),t.exports=n},345:function(t,o,e){var content=e(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("03ade892",content,!0,{sourceMap:!1})},365:function(t,o,e){t.exports=e.p+"img/house.30cc0d6.jpg"},366:function(t,o,e){t.exports=e.p+"img/mts.28e68ff.svg"},367:function(t,o,e){t.exports=e.p+"img/bed.ab96eb7.svg"},368:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxOCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjEgNi4yNjI5SDQuNVYzLjY3OTczQzQuNSAyLjc4NzY1IDUuMTEwMiAxLjk1OTExIDUuOTk0OSAxLjgxNDE2QzYuMjUzMzEgMS43NzA0NCA2LjUxODIxIDEuNzgzMjggNi43NzExMiAxLjg1MTc3QzcuMDI0MDMgMS45MjAyNyA3LjI1ODg4IDIuMDQyNzggNy40NTkyOCAyLjIxMDc2QzcuNjU5NjkgMi4zNzg3MyA3LjgyMDg0IDIuNTg4MTQgNy45MzE1IDIuODI0MzhDOC4wNDIxNSAzLjA2MDYzIDguMDk5NjYgMy4zMTgwMiA4LjEgMy41Nzg2Mkg5LjlDOS44OTk1NiAzLjA3ODcyIDkuNzkzODggMi41ODQ0NCA5LjU4OTczIDIuMTI3NTlDOS4zODU1OSAxLjY3MDc0IDkuMDg3NTIgMS4yNjE0MyA4LjcxNDY5IDAuOTI2MDA0QzguMzQxODYgMC41OTA1NzMgNy45MDI1MyAwLjMzNjQ0OCA3LjQyNDk2IDAuMTc5OTc2QzYuOTQ3NCAwLjAyMzUwNDMgNi40NDIxOCAtMC4wMzE4NDc5IDUuOTQxOCAwLjAxNzQ4MDZDNC4wNzA3IDAuMTk4MjIyIDIuNyAxLjg2ODc0IDIuNyAzLjczNzg5VjYuMjYyOUgwLjlDMC42NjEzMDUgNi4yNjI5IDAuNDMyMzg3IDYuMzU3MTYgMC4yNjM2MDQgNi41MjQ5NkMwLjA5NDgyMTEgNi42OTI3NiAwIDYuOTIwMzUgMCA3LjE1NzY1VjguOTQ3MTdDMCAxMS4yNzg5IDEuNTA2NiAxMy4yNjI2IDMuNiAxNC4wMDI2VjE3SDUuNFYxNC4zMTU3SDEyLjZWMTdIMTQuNFYxNC4wMDI2QzE2LjQ5MzQgMTMuMjYyNiAxOCAxMS4yNzg5IDE4IDguOTQ3MTdWNy4xNTc2NUMxOCA2LjkyMDM1IDE3LjkwNTIgNi42OTI3NiAxNy43MzY0IDYuNTI0OTZDMTcuNTY3NiA2LjM1NzE2IDE3LjMzODcgNi4yNjI5IDE3LjEgNi4yNjI5VjYuMjYyOVoiIGZpbGw9IiM1RDg2RUYiLz4KPC9zdmc+Cg=="},369:function(t,o){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMy44OTA2MlYxLjg3NUMzIDAuODQzNzUgMy45IDAgNSAwSDE1QzE2LjEgMCAxNyAwLjg0Mzc1IDE3IDEuODc1VjMuOUMxNS44NCA0LjI4NDM3IDE1IDUuMzE1NjMgMTUgNi41MzQzOFY4LjQzNzVINVY2LjUyNUM1IDUuMzE1NjMgNC4xNiA0LjI3NSAzIDMuODkwNjJaTTE4IDQuNjg3NUMxNi45IDQuNjg3NSAxNiA1LjUzMTI1IDE2IDYuNTYyNVY5LjM3NUg0VjYuNTYyNUM0IDYuMDY1MjIgMy43ODkyOSA1LjU4ODMxIDMuNDE0MjEgNS4yMzY2OEMzLjAzOTE0IDQuODg1MDQgMi41MzA0MyA0LjY4NzUgMiA0LjY4NzVDMS40Njk1NyA0LjY4NzUgMC45NjA4NTkgNC44ODUwNCAwLjU4NTc4NiA1LjIzNjY4QzAuMjEwNzE0IDUuNTg4MzEgMCA2LjA2NTIyIDAgNi41NjI1VjExLjI1QzAgMTIuMjgxMyAwLjkgMTMuMTI1IDIgMTMuMTI1VjE1SDRWMTMuMTI1SDE2VjE1SDE4VjEzLjEyNUMxOS4xIDEzLjEyNSAyMCAxMi4yODEzIDIwIDExLjI1VjYuNTYyNUMyMCA1LjUzMTI1IDE5LjEgNC42ODc1IDE4IDQuNjg3NVoiIGZpbGw9IiM1RDg2RUYiLz4KPC9zdmc+Cg=="},370:function(t,o,e){t.exports=e.p+"img/kitchen.26eab64.svg"},371:function(t,o,e){t.exports=e.p+"img/car.d7d2ae9.svg"},372:function(t,o,e){"use strict";e(345)},373:function(t,o,e){var n=e(81)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]),n.push([t.i,'@-webkit-keyframes scale-in-br-data-v-4434402c{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br-data-v-4434402c{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br-data-v-4434402c{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br-data-v-4434402c{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top-data-v-4434402c{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top-data-v-4434402c{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom-data-v-4434402c{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom-data-v-4434402c{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}[data-v-4434402c]:root{background-attachment:fixed}*[data-v-4434402c]{margin:0;padding:0;box-sizing:border-box}html[data-v-4434402c]{scroll-behavior:smooth}body[data-v-4434402c]{background-color:#f8fbf8;overflow-x:hidden}main[data-v-4434402c]{padding:0 5%}ul[data-v-4434402c]{list-style:none}a[data-v-4434402c]{text-decoration:none}h1[data-v-4434402c],h2[data-v-4434402c],h3[data-v-4434402c],h4[data-v-4434402c],h5[data-v-4434402c]{font-family:"Red Hat Display",sans-serif}a[data-v-4434402c],button[data-v-4434402c],p[data-v-4434402c]{font-family:"Red Hat Text",sans-serif}button[data-v-4434402c]{background:transparent;border:none;cursor:pointer}.navbar-mobile[data-v-4434402c]{display:none}@media(max-width:1024px){.navbar-desktop[data-v-4434402c]{display:none!important}.navbar-mobile[data-v-4434402c]{display:block}}.model_card[data-v-4434402c]{border:1px solid #5d86ef;border-radius:6px 6px 50px 6px;display:flex;flex-direction:column;align-items:flex-start;background:#f8fbf8;width:385px}.model_card img[data-v-4434402c]{max-width:385px}.model_card article[data-v-4434402c]{padding:18px;color:#5d86ef}.model_card article h1[data-v-4434402c]{font-size:28px;font-weight:lighter;margin-bottom:8px}.model_card article ul[data-v-4434402c]{display:flex;grid-gap:16px;gap:16px;font-family:"Red Hat Text",sans-serif;font-size:16px;font-weight:700;padding-bottom:32px}.model_card article ul img[data-v-4434402c]{margin-right:8px}.model_card article button[data-v-4434402c]{font-size:18px;font-weight:700;color:#73e262;padding:12px 20px;border:1px solid #73e262;border-radius:4px;transition:.2s}.model_card article button[data-v-4434402c]:hover{color:#f8fbf8;background:#73e262}',""]),t.exports=n},394:function(t,o,e){var content=e(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(82).default)("754d84ea",content,!0,{sourceMap:!1})},400:function(t,o,e){"use strict";e.r(o);var n={name:"ModelCard",props:{name:"",cantDorm:"",cantBath:"",mts:"",car:!1}},r=(e(372),e(51)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"model_card"},[n("img",{attrs:{src:e(365),alt:""}}),t._v(" "),n("article",[n("h1",[t._v(t._s(t.name))]),t._v(" "),n("ul",[n("li",[n("img",{attrs:{src:e(366),alt:""}}),t._v(t._s(t.mts))]),t._v(" "),n("li",[n("img",{attrs:{src:e(367),alt:""}}),t._v(t._s(t.cantDorm)+"\n      ")]),t._v(" "),n("li",[n("img",{attrs:{src:e(368),alt:""}}),t._v(t._s(t.cantBath)+"\n      ")]),t._v(" "),n("li",[n("img",{attrs:{src:e(369),alt:""}}),t._v(t._s(t.cantBath)+"\n      ")]),t._v(" "),n("li",[n("img",{attrs:{src:e(370),alt:""}}),t._v(t._s(t.cantBath)+"\n      ")]),t._v(" "),t.car?n("li",[n("img",{attrs:{src:e(371),alt:""}})]):t._e()]),t._v(" "),n("button",[t._v("Conocer Modelo")])])])}),[],!1,null,"4434402c",null);o.default=component.exports},413:function(t,o,e){"use strict";e(394)},414:function(t,o,e){var n=e(81),r=e(302),l=e(374),c=n(!1);c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap);"]),c.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&family=Red+Hat+Text:wght@300;400;500;600;700&display=swap);"]);var d=r(l);c.push([t.i,'@-webkit-keyframes scale-in-br-data-v-20e6b3d8{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@keyframes scale-in-br-data-v-20e6b3d8{0%{transform:scale(0);transform-origin:100% 100%;opacity:1}to{transform:scale(1);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes scale-out-br-data-v-20e6b3d8{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@keyframes scale-out-br-data-v-20e6b3d8{0%{transform:scale(1);transform-origin:100% 100%;opacity:1}to{transform:scale(0);transform-origin:100% 100%;opacity:1}}@-webkit-keyframes slide-in-top-data-v-20e6b3d8{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@keyframes slide-in-top-data-v-20e6b3d8{0%{transform:translateY(-1000px)}to{transform:translateY(0);opacity:1}}@-webkit-keyframes slide-out-bottom-data-v-20e6b3d8{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px);opacity:0}}@keyframes slide-out-bottom-data-v-20e6b3d8{0%{transform:translateY(0);opacity:1}to{transform:translateY(1000px)}}[data-v-20e6b3d8]:root{background-attachment:fixed}*[data-v-20e6b3d8]{margin:0;padding:0;box-sizing:border-box}html[data-v-20e6b3d8]{scroll-behavior:smooth}body[data-v-20e6b3d8]{background-color:#f8fbf8;overflow-x:hidden}main[data-v-20e6b3d8]{padding:0 5%}ul[data-v-20e6b3d8]{list-style:none}a[data-v-20e6b3d8]{text-decoration:none}h1[data-v-20e6b3d8],h2[data-v-20e6b3d8],h3[data-v-20e6b3d8],h4[data-v-20e6b3d8],h5[data-v-20e6b3d8]{font-family:"Red Hat Display",sans-serif}a[data-v-20e6b3d8],button[data-v-20e6b3d8],p[data-v-20e6b3d8]{font-family:"Red Hat Text",sans-serif}button[data-v-20e6b3d8]{background:transparent;border:none;cursor:pointer}.navbar-mobile[data-v-20e6b3d8]{display:none}@media(max-width:1024px){.navbar-desktop[data-v-20e6b3d8]{display:none!important}.navbar-mobile[data-v-20e6b3d8]{display:block}}div[data-v-20e6b3d8]{background:#f8fbf8 url('+d+") no-repeat fixed center 20em;background-size:contain}div .models_mainContainer[data-v-20e6b3d8]{padding:8em 7% 4em}div .models_mainContainer h1[data-v-20e6b3d8]{color:#5d86ef;font-size:48px;margin-bottom:12px}div .models_mainContainer p[data-v-20e6b3d8]{color:#5d86ef;font-size:18px;width:70%;margin-bottom:32px}div .models_mainContainer section[data-v-20e6b3d8]{display:flex;justify-content:space-between;align-items:center}@media(max-width:1375px){div[data-v-20e6b3d8]{background-size:250%}div .models_mainContainer[data-v-20e6b3d8]{padding:7em 7% 4em}div .models_mainContainer h1[data-v-20e6b3d8]{font-size:36px}div .models_mainContainer p[data-v-20e6b3d8]{width:auto}div .models_mainContainer section[data-v-20e6b3d8]{flex-direction:column;grid-gap:28px;gap:28px}}",""]),t.exports=c},429:function(t,o,e){"use strict";e.r(o);var n=e(305),r=e(306),l=e(316),c=e(303),d=e(400),f={name:"Models",components:{Footer:c.default,Navbar:n.default,NavbarMobile:r.default,ConsultModal:l.default,ModelCard:d.default}},m=(e(413),e(51)),component=Object(m.a)(f,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("Navbar",{staticClass:"navbar-desktop"}),t._v(" "),e("NavbarMobile",{staticClass:"navbar-mobile"}),t._v(" "),e("ConsultModal"),t._v(" "),e("main",{staticClass:"models_mainContainer"},[e("h1",[t._v("Nuestros Principales Modelos")]),t._v(" "),e("p",[t._v("\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error provident\n      consequuntur eius dolores sapiente doloribus commodi quod veritatis ipsa\n      quam? Est optio nam error quod, labore a consequuntur similique culpa.\n    ")]),t._v(" "),e("section",[e("ModelCard",{attrs:{name:"Modelo 1234",cantDorm:"3",cantBath:"2",mts:"123",car:!0}}),t._v(" "),e("ModelCard",{attrs:{name:"Modelo 4567",cantDorm:"2",cantBath:"1",mts:"84",car:!1}}),t._v(" "),e("ModelCard",{attrs:{name:"Modelo 7890",cantDorm:"1",cantBath:"1",mts:"72",car:!0}})],1)]),t._v(" "),e("Footer")],1)}),[],!1,null,"20e6b3d8",null);o.default=component.exports;installComponents(component,{Navbar:e(305).default,NavbarMobile:e(306).default,ConsultModal:e(316).default,Footer:e(303).default})}}]);