import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
import ElementUI from 'element-ui';
import '@/assets/element-variables.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
