import Vue from 'vue'
import App from './App.vue'
// import './plugins/element.js'
import ElementUI from 'element-ui'
import '@/assets/main.css'
import '@/assets/element-variables.scss'
import dy from '@/packages/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(dy)


new Vue({
  render: h => h(App),
}).$mount('#app')
