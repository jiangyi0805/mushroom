import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import toast from './components/common/toast/index';

Vue.config.productionTip = false

Vue.use(VueLazyLoad)
Vue.use(toast)

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')