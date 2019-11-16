import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css'
import router from './router'
import store from './store'
import axios from 'axios'
import lodash from 'lodash'
import dayjs from 'dayjs'; //轻量的处理时间和日期的js库

// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios //不加时 请求为 this.axios.get()
Vue.prototype._ = lodash; //引入lodash
Vue.prototype._dayjs = dayjs;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/public/public.css";
import "@/assets/css/index.css";
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios; //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
Vue.prototype.HOME = '/api'; //重要在于这里，Vue.prototype.HOME = '/api'是一个定值，默认指向localhost，所有修改指向路径为'/api'，配置文件index.js定义的可跨域路径

// import "./config/index.js"
router.beforeEach((to, from, next) => {
    store.commit('nowStatus', 'loading')
    next()
})

router.afterEach((to, from, next) => {
    store.commit('nowStatus', 'end')
    setTimeout(() => {
        store.commit('nowStatus', 'hide')
    }, 900)
    setTimeout(() => {
        store.commit('nowStatus', 'normal')
    }, 1000)
})

document.addEventListener("touchstart", function () {}, true)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')