import tablePages from './tablePages.vue'

tablePages.install = function(Vue) {
  Vue.component(tablePages.name, tablePages)
}

export default tablePages;
