import Vue from 'vue'
import VueRouter from 'vue-router'

import _ from 'lodash'
// import Layout from '@/page/Layout/index.vue'; //
import Login from '@/page/Login/index.vue'; //登录
import Error404 from '@/page/error404.vue'; //页面404
import Home from '@/page/Home/index.vue'; //首页
import Register from '@/page/Login/register.vue'; //注册


import Cars from '@/page/Cars/index.vue'; //车辆
import Help from '@/page/Help/index.vue'; //救援
import Message from '@/page/Message/index.vue'; //消息

import My from '@/page/My/index.vue'; //我的

//主页五大主题
import MyCar from "@/view/Home/myCar.vue"; //我的车辆
import MyCarDetail from "@/view/Home/MyCarDetail.vue"; //我的车辆---车辆详情
import Lendrepay from "@/view/Home/Lendrepay.vue"; //借还款
import LendMoney from "@/view/Home/LendMoney.vue"; //借款
import RepayMoney from "@/view/Home/RepayMoney.vue"; //还款




import UserInfoDetail from "@/view/userInfo/details.vue"; //用户详情

import StudyChild from "@/view/Study/child.vue"; //子组件
import StudyParent from "@/view/Study/parent.vue"; //父组件








Vue.use(VueRouter);
VueRouter.prototype.openPage = function (link, query) {
    this.push({
        path: link,
        query: _.assign({
            token: new Date().getTime()
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
            path: '/cars',
            name: 'Cars',
            component: Cars,
            meta: {
                title: '车辆'
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
        },
        {
            path: '/my/details/:id',
            name: "UserInfoDetail",
            component: UserInfoDetail,
            meta: {
                title: '用户详情'
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
            path: '/mycar/:id',
            name: "MyCarDetail",
            component: MyCarDetail,
            meta: {
                title: '车辆详情'
            }
        },
        {
            path: '/lendrepay',
            name: 'Lendrepay',
            component: Lendrepay,
            meta: {
                title: '借还款'
            },
        },
        {
            path: '/lendmoney',
            name: 'LendMoney',
            component: LendMoney,
            meta: {
                title: '借款'
            },
        },
        {
            path: '/repaymoney',
            name: 'RepayMoney',
            component: RepayMoney,
            meta: {
                title: '还款'
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
        {
            path: '/study/child',
            component: StudyChild,
            name: 'StudyChild',
            meta: {
                title: '子组件'
            }
        }, {
            path: '/study/parent',
            component: StudyParent,
            name: 'StudyParent',
            meta: {
                title: '父组件'
            }
        }

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