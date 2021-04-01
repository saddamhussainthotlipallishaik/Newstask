import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store';
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: () => import('@/components/Login'),
        meta: {isAuthenticated: false, showNav: true}
    },
    {
        path:'/register',
        component: () => import('@/components/Register'),
        meta: {isAuthenticated: false, showNav: true}
    },
    {
        path: "/dashboard",
        name:'dashboard',
        component: () => import('@/components/NewsDashboard'),
        meta: {isAuthenticated: true}
    },
    {
        path:'/profile',
        component:()=> import ('@/components/Profile'),
        meta: {isAuthenticated:true}
    },
    {
        path:'/favourites',
        component:()=> import ('@/components/Favourites'),
        meta: {isAuthenticated:true}
    },
    {
        path:'*',
        redirect:'/'
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.isAuthenticated)) {
        if(store.getters.isAuthenticated) {
            next();
        } else {
            next('/')
        }
    } else {
        next()
    }
})
export default router;