import dynamicForm from './dynamicForm/dynamicForm.vue'

const components = [
  dynamicForm
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  });
}

export default install
