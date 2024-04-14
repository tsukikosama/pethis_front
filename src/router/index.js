//导入vuerouter
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({ 
    scrollBehavior(to, from, savePosition) { // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if (savePosition) {
        return savePosition;
    } else {
        var top;
        if (window.innerWidth >= 700) {
             top = 676
        } else {
             top = 267
        }
        return {
            x: 0,
            y: top
        }
    }
},
  
    // 配置路由规则
    routes: [
        {
            path : '/',
            name:'登录页面',
            component:()=>import('../pages/index.vue'),
            meta:{
                requireAuth: true
            }
        },
        {
            path : '/club',
            name:'俱乐部',
            component:()=>import('../pages/club.vue'),
            meta:{
                requireAuth: true
            }
        },
        {
            path : '/business',
            name:'业务',
            component:()=>import('../pages/business.vue'),
            meta:{
                requireAuth: true
            } 
        },
        {
            path : '/news',
            name:'新闻',
            component:()=>import('../pages/news.vue'),
            meta:{
                requireAuth: true
            } 
        },
        {
            path : '/about',
            name:'关于',
            component:()=>import('../pages/about.vue'),
            meta:{
                requireAuth: true
            } 
        }
        
        
        
    ]
    
    
})
