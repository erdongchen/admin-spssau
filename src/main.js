import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import VueCookies from "vue-cookies";
import axios from "../tests/unit/axios.js";
import "element-ui/lib/theme-chalk/index.css";
import api from "./mock/api.js";
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueCookies);
Vue.use(ElementUI);
// router.beforeEach( (to, from, next) => {
//   // 要访问的页面需要认证的话
//   const token = store.state.token;
//   if (to.meta.requireAuth) {
//     if (token){
//       next();
//     }else {
//       const token = window.localStorage.getItem('token');
//       if(token) {
//         store.dispatch('setUser', window.localStorage.getItem('uid'));
//         store.dispatch('setToken', token);
//         next();
//       }
//       else{
//         next('/login');
//       }
//     }
//   } else if (to.path === '/login' && window.localStorage.getItem('uid')) {
//     next('/manage')
//   }
//   next()
// })
router.beforeEach((to, from, next) => {
  console.log(window.localStorage.getItem("user"));
  console.log(to.fullPath);
  console.log(to.meta.loginRequest);
  if (to.meta.loginRequest) { //如果路由meta中loginRequest为true,进行拦截
    // if (this.$cookies.get("user")) {localStorage
    if (window.localStorage.getItem("user")) {
      console.log(1111111111111);
      next(); //如果已经登陆可直接进入页面
    } else { //否则跳入登录页，并记住要跳入的页面，以方便登录完成后直接进入该页面
      console.log(2222222222222);
      next({
        path: './login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");