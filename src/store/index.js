import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex); //将Vuex注册到vue中


// 
const localStorageStore = {
    // 定义状态
    state: {
        navTitle: JSON.parse(localStorage.getItem('navTitle')) || {},
        urlPath: JSON.parse(localStorage.getItem('urlPath')) || {}, //保存一个对象
        cityName: localStorage.getItem('cityName') || '地位中', //保存一个城市名字
    },
    // 修改状态
    mutations: {
        setInfo(state, path) {
            state.urlPath = path
        },
        getNavTitle(state, value) {
            state.navTitle = value
        },
        getCityName(state, value) {
            state.cityName = value;
        }
    }
};

// 头部加载条
const Apploading = {
    state: {
        nowStatus: 'loading'
    },
    mutations: {
        nowStatus(state, data) {
            state.nowStatus = data
        }
    },
    getters: {
        nowStatus(state) {
            return state.nowStatus
        }
    }
}

export default new Vuex.Store({
    modules: {
        Apploading,
        localStorageStore
    },
    plugins: [persistedState({
        // storage: window.sessionStorage
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, {
                expires: 7, //设置7天之后过期
            }),
            removeItem: key => Cookies.remove(key)
        },
    })]
})