import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/Login'
 
Vue.use(Router)
//import login from '@/views/login/index'
// export const constantRouterMap = [{
//     path: '/login',
//     component: login,

// }]

// export default new Router({
//     scrollBehavior:() =>({ y:0}),
//     routes: constantRouterMap
// })


export const constantRouterMap = [
        {
            path: '/login',
            name:'login',
            component:Login
        },
        {
            path: '/authredirect',
            component: () => import('@/views/login/authredirect'),
            hidden: true
          }
    ]

    
export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })
  export const asyncRouterMap = [
    {
      path: '/permission',
      //component: Layout,
      redirect: '/permission/index',
      alwaysShow: true, // will always show the root menu
      meta: {
        title: 'permission',
        icon: 'lock',
        roles: ['admin', 'editor'] // you can set roles in root nav
      }
    }
]