import {createWebHistory,createRouter} from 'vue-router';
import DataGet from './components/DataGet.vue';
import GetComponent from './components/GetComponent.vue';
import PostComponent from  './components/PostComponent.vue';
import UpdateComponent from './components/UpdateComponent.vue';
import IncrementComponent from './components/IncrementComponent.vue';
import LoginPage from './components/LoginPage.vue';
import DashboardPage from './components/DashboardPage.vue';
import MoviesPage from './components/MoviesPage.vue';
import store from './store/modules/store';


import guest from './middleware/guest'
import auth from './middleware/auth'
import isSubscribed from './middleware/isSubscribed'

const routes=[
    {
        name:'DataGet',
        path:'/post/:id',
        component:DataGet
    },
    {
        name:'GetComponent',
        path:'/',
        component:GetComponent
    },
    {
    name:'PostComponent',
    path:'/insert',
    component:PostComponent

    },
    {
        name:'UpdateComponent',
        path:'/update/:id',
        component:UpdateComponent
    },
    {
        name:'IncrementComponent',
        path:'/statemanagement',
        component:IncrementComponent
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        meta:{
            middleware:[
                guest
            ]
        }
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: DashboardPage,
        meta: {
            middleware: [
                auth
            ]},

       
        children: [{
            path: '/dashboard/movies',
            name: 'dashboard.movies',
            component: MoviesPage,
            meta: {
                middleware: [
                    auth,
                    isSubscribed
                ]
            }
        }
    ],
    }

    
];

 const router=  createRouter({
    history:createWebHistory(),
    routes

 });
 router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
         store
    }
    return middleware[0]({
        ...context
    })
})
 export default router;

