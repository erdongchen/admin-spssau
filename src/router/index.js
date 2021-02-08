import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../page/login.vue";
import Manage from "../page/manage.vue";
import OperatingIndex from "../page/operatingIndex.vue";
import BasicInformation from "../page/basicInformation.vue";
import NoInvoice from "../page/noInvoice.vue";
import WeChatOrders from "../page/weChatOrders.vue";
import VipTime from "../page/vipTime.vue";
import MobilePhone from "../page/mobilePhone.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: '/',
    component: OperatingIndex,
    meta: ['运营指标'],
  },
  {
    path: '/',
    component: BasicInformation,
    meta: ['基本信息'],
  },
  {
    path: '/',
    component: NoInvoice,
    meta: ['未开发票'],
  },
  {
    path: '/',
    component: WeChatOrders,
    meta: ['微信订单'],
  },
  {
    path: '/',
    component: VipTime,
    meta: ['会员时间'],
  },
  {
    path: '/',
    component: MobilePhone,
    meta: ['会员时间'],
  },
  {
    path: "/",
    name: "Manage",
    component: Manage,
    children: [{
      path: '/OperatingIndex',
      component: OperatingIndex,
      meta: ['运营指标'],
    }]
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;