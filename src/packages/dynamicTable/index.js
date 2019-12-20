import dynamicTable from './dynamicTable.vue'

dynamicTable.install = function(Vue) {
  Vue.component(dynamicTable.name, dynamicTable)
}

export default dynamicTable;
