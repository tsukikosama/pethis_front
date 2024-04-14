import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router  from './router/index';
import request from './utils/request';
import VueRouter from 'vue-router';
import store from './vuex/index.js'
Vue.config.productionTip = false
Vue.use(VueRouter)

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.request = request;
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
Vue.prototype.clearValue = function(obj){
  // console.log(obj)
  
  for(let key of Object.keys(obj)){       
    console.log(key)           
    obj[key] = '';
    
}
  return obj;
}
