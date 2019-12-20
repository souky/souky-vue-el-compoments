import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
import ElementUI from 'element-ui'
import dy from '@/packages/index.js'
import '@/packages/css/main.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(dy)


new Vue({
  render: h => h(App),
}).$mount('#app')
