import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/public/public.css";
import "@/assets/css/index.css";
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false

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