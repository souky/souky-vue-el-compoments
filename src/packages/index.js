import dynamicForm from './dynamicForm/dynamicForm.vue'
import dynamicTable from './dynamicTable/dynamicTable.vue'
import formatInput from './formatInput/formatInput.vue'
import optBtns from './optBtns/optBtns.vue'
import tablePages from './tablePages/tablePages.vue'
import './css/main.css'

const components = [
  dynamicForm,
  dynamicTable,
  formatInput,
  optBtns,
  tablePages
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  });
}

export default {
  install,
  dynamicForm,
  dynamicTable,
  formatInput,
  optBtns,
  tablePages
}
