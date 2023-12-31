import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/webdesign/small-business-website-marketing.html",
      name: "webdesign",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Webdesign.vue")
    },
    {
      path: "/digitalmarketing/local-business-digital-marketing.html",
      name: "digitalmarketing",
      component: () =>
        import(
          /* webpackChunkName: "digitalmarketing" */ "./views/DigitalMarketing.vue"
        )
    },
    {
      path: "/thanks",
      name: "thanks",
      component: () =>
        import(/* webpackChunkName: "thanks" */ "./views/Thanks.vue")
    },
    {
      path: "/works/local-business-web.html",
      name: "works",
      component: () =>
        import(/* webpackChunkName: "works" */ "./views/Works.vue")
    },
    {
      path: "/pricing/web-app-local-business-pricing.html",
      name: "pricing",
      component: () =>
        import(/* webpackChunkName: "pricing" */ "./views/Pricing.vue")
    },
    {
      path: "/insider/",
      beforeEnter() {
        location.href = "https://web.netsitesonline.com";
      }
    },
    {
      path: "/message/",
      beforeEnter() {
        location.href = "https://calendly.com/netstudios/netsitesonline";
      }
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () =>
        import(/* webpackChunkName: "pricing" */ "./views/Privacy.vue")
    },
    {
      path: "/sample",
      beforeEnter() {
        location.href = "https://www.netstudios.com/img/img/briosopasta.pdf";
      }
    },
    {
      path: "/meeting/",
      target: "_blank",
      beforeEnter() {
        location.href =
          "https://calendly.com/netstudios/netsitesonline";
      }
    },
    {
      path: "/marketing/",
      beforeEnter() {
        location.href = "https://www.netsitesonline.com/marketing-agency/";
      }
    },
    {
      path: "/start/start-now.html",
      name: "start",
      component: () =>
        import(/* webpackChunkName: "start" */ "./views/Start.vue")
    },
    {
      path: "/ticket/",
      beforeEnter() {
        location.href = "http://support.yumapos.com/contact";
      }
    },
    {
      path: "/general-terms.html",
      beforeEnter() {
        location.href = "http://yumapos.com/start/terms/";
      }
    },
    {
      path: "/privacy.html",
      beforeEnter() {
        location.href = "http://yumapos.com/start/privacy/";
      }
    },
    {
      path: "/software-license-agreement.html",
      beforeEnter() {
        location.href = "https://yumapos.com/start/software-licensing/";
      }
    },
    {
      path: "/about/",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
