import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: () => import('@/components/Login'),
        meta: {isAuthenticated: false}
    },
    {
        path:'/register',
        component: () => import('@/components/Register'),
        meta: {isAuthenticated: false}
    },
    {
        path: "/dashboard",
        component: () => import('@/components/NewsDashboard'),
        meta: {isAuthenticated: true}
    },
    {
        path:'/profile',
        component:()=> import ('@/components/Profile'),
        meta: {isAuthenticated:true}
    },
    
]

const router = new VueRouter({
    routes
});

// let a = 'saddam';
// router.beforeEach((to, from, next) => {
//     if(to.meta.isAuthenticated) {
//         if(a === 'saddam') {
//             next()
//         } else {
//             next('/')
//         }
//     } else {
//         next()
//     }
// })
export default router;