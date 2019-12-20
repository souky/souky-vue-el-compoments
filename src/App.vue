<template>
  <div id="app">

    <dynamic-form ref="dy1" className="" :formData='formData' labelWidth="160px" refname="form1"
  :disabled="false" size="mini" :model="baseInfo" />

    <table-pages :pages="pages"/>

    <opt-btns :data="rows" />

    <format-input :model="baseInfo.asd" />
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      formData:{},
      baseInfo:{},
      pages:{
        pageNum:1,
        pageSize:10,
        total:222
      },
      rows:{}
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
