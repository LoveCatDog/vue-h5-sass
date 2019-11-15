# cms-car

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 路由钩子 ：主要是给使用者在路由发生变化时进行的一些特殊的处理而定义的函数
总体来讲，vue里面提供三大类钩子，两种函数
1、全局钩子
2、某个路由的钩子
3、组件内钩子
两种函数：
1、Vue.beforeEach(function(to.from,next){});//在跳转之前执行
2、Vue.AfterEach(function(to.from){});//在跳转之前判断

vuex持久化：vuex-persistedstate
vuex是在中大型项目中必不可少的状态管理组件，刷新会重新更新状态，但有时候希望固定到本地，减少无用接口访问，以及更佳的用户体验
