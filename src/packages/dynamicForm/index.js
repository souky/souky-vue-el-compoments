
import dynamicForm from './dynamicForm.vue'

dynamicForm.install = function(Vue) {
  Vue.component(dynamicForm.name, dynamicForm)
}

export default dynamicForm;
