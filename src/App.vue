<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>asdasd</el-button>
    </div>
    <dynamicForm ref="dy1" className="twocel" :formData='formData' labelWidth="160px" refname="form1"
  :disabled="false" size="mini" :model="baseInfo" ></dynamicForm>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      formData:{},
      baseInfo:{},
    }
  },
  mounted:function(){
    window.console.log(this.msg);
    this.formData = {
      asd:{label:'大娃娃',formType:'input',validate:'notNullInput'},
      asd1:{label:'大刀王五',formType:'input',validate:'notNullInput'},
      asd2:{label:'大娃娃2',formType:'input',validate:'notNullInput'},
      asd3:{label:'3大娃娃',formType:'input',validate:'notNullInput'}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
