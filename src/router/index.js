import Vue from 'vue'
import VueRouter from 'vue-router'

import _ from 'lodash'
// import Layout from '@/page/Layout/index.vue'; //
import Login from '@/page/Login/index.vue'; //登录
import Error404 from '@/page/error404.vue'; //页面404
import Home from '@/page/Home/index.vue'; //首页
import Register from '@/page/Login/register.vue'; //注册

import Help from '@/page/Help/index.vue'; //救援
import Message from '@/page/Message/index.vue'; //救援
import My from '@/page/My/index.vue'; //救援
import MyCar from "@/view/Car/myCar.vue"; //我的车辆
import MyCarDetail from "@/view/Car/MyCarDetail.vue"; //我的车辆---车辆详情







Vue.use(VueRouter);
VueRouter.prototype.openPage = function (link, query) {
    this.push({
        path: link,
        query: _.assign({
            thme: new Date().getTime()
        }, query || {})
    })
}
/**
 * 配置页面路由
 */

const newRouter = new VueRouter({
    mode: 'history', // //分为 hash 和 history
    scrollBehavior: () => ({
        y: 0
    }), //跳转页面的时候，让页面滚动到顶部
    routes: [{
            path: '/',
            redirect: '/login', //若为/则自动跳转到login
        }, {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                title: '登录'
            },
        }, {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                title: '注册'
            },
        }, {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                title: '主页'
            },
        },
        {
            path: '/help',
            component: Help,
            name: 'Help',
            meta: {
                title: '救援'
            },
        },
        {
            path: '/message',
            component: Message,
            name: 'Message',
            meta: {
                title: '消息'
            },
        },
        {
            path: '/user',
            component: My,
            name: 'My',
            meta: {
                title: '我的'
            },
            // },
            // {
            //     path: '/detail/:id',
            //     name: 'detail',
            //     component(resolve) {
            //         require(['@/view/detail/index.vue'], resolve)
            //     }
        },
        {
            path: '/mycar/:id',
            name: "MyCarDetail",
            component: MyCarDetail,
            meta: {
                title: '车辆详情'
            }
        },
        {
            path: '/mycar',
            name: 'MyCar',
            component: MyCar,
            meta: {
                title: '我的车辆'
            },
        },
        {
            path: '*',
            component: Error404,
            name: 'Error404',
            hidden: true,
            meta: {
                title: '404'
            }, //路由元信息
        },

        /**
         * <!-- 带查询参数，下面的结果为 /register?plan=private -->
        <router-link :to="{ path: 'register', query: { plan: 'private' }}"
          >Register</router-link
        >**/

    ]
});
/**
 * 重写路由的push方法
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
export default newRouter;