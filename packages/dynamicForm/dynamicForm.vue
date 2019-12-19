<template>
  <el-form :model="model" :label-width="labelWidth" :style="styles"
    :ref="refname"  :disabled="disabled" :size="size">
    <div :class="['form-body',className]" style="padding:10px 0px">
      <div v-for="(e,index) in formData" :key="index">
        <el-form-item v-if="!e.hide" :label="e.label" :prop="index" :rules="(e.disabled || disabled)?[]:defaultRules[e.validate]"
        :class="{'form-items':true,'readonly':disabled,'rows':e.isRows,'rows-half':e.isRowsHalf}">
          <!-- input -->
          <el-input v-if="e.formType == 'input'" :disabled="e.disabled" :readonly="e.readonly"
          v-model="model[index]" :placeholder="disabled?'':e.placeholder" :maxlength="e.maxlength" @focus="fn(e.focus)" @bulr="fn(e.bulr)"></el-input>
          <el-input v-if="e.formType == 'password'" :disabled="e.disabled" :readonly="e.readonly" type="password"
          v-model="model[index]" :placeholder="disabled?'':e.placeholder" :maxlength="e.maxlength" @focus="fn(e.focus)" @bulr="fn(e.bulr)"></el-input>
          <!-- select -->
          <el-select clearable v-if="e.formType == 'select'" :disabled="e.disabled" :readonly="e.readonly"
           v-model="model[index]" :placeholder="disabled?'':e.placeholder"  @change="fn(e.change)">
            <el-option v-for="ee in optionList[index]" :key="ee.key" :label="ee.value" :value="ee.key"></el-option>
          </el-select>
          <!-- date -->
          <el-date-picker v-if="e.formType == 'date'" :disabled="e.disabled" :readonly="e.readonly"
           v-model="model[index]" :placeholder="disabled?'':e.placeholder" type="date" :picker-options="e.picker"></el-date-picker>

          <el-date-picker v-if="e.formType == 'datetime'" :disabled="e.disabled" :readonly="e.readonly"
          v-model="model[index]" :placeholder="disabled?'':e.placeholder" type="datetime" :picker-options="e.picker"></el-date-picker>
          <!-- switch  -->
          <el-switch  v-if="e.formType == 'switch'" :disabled="e.disabled" v-model="model[index]"></el-switch>
          <!-- checkbox  -->
          <el-checkbox-group v-if="e.formType == 'checkbox' && model[index]" v-model="model[index]"
          :disabled="e.disabled" :readonly="e.readonly">
            <el-checkbox v-for="ee in optionList[index]" :key="ee.key" :label="ee.key" :name="index">{{ee.value}}</el-checkbox>
          </el-checkbox-group>
          <!-- radios  -->
          <el-radio-group v-if="e.formType == 'radios' && model[index]" v-model="model[index]"
          :disabled="e.disabled" :readonly="e.readonly">
            <el-radio v-for="ee in optionList[index]" :key="ee.key" :label="ee.key">{{ee.value}}</el-radio>
          </el-radio-group>
          <!-- textarea  -->
          <el-input v-if="e.formType == 'textarea'" v-model="model[index]" :maxlength="e.maxlength" :placeholder="disabled?'':e.placeholder"
          :rows="e.rowsSize" :resize='e.resize' type="textarea" :disabled="e.disabled" :readonly="e.readonly"></el-input>

          <FormatInput v-if="e.formType == 'formatInput' && !disabled" v-model="model[index]" :placeholder="disabled?'':e.placeholder"
          :disabled="e.disabled" :size="size" :decimal="e.decimal?2:e.decimal" :append="e.append" :readonly="e.readonly"></FormatInput>

          <FormatInput v-if="e.formType == 'formatInput' && disabled" v-model="model[index]" :placeholder="disabled?'':e.placeholder"
          :disabled="disabled" :size="size" :decimal="e.decimal?2:e.decimal" :append="e.append" :readonly="e.readonly"></FormatInput>
        </el-form-item>
      </div>
    </div>
  </el-form>
</template>

<script type="text/javascript">
import DefaultRules from '@/defaultData/DefaultRules'
export default {
  data() {
      return {
          defaultRules:this.DefaultRules
      }
  },
  props:['formData','labelWidth','styles','size','model','disabled','refname','optionList','className'],
	mounted:function(){
	},
  methods:{
		getForm(){
			return this.$refs[this.refname];
		},
    setOption(optionList){
      this.optionList = optionList
    },
    fn(fun){
      if(fun){
        let parent = this.$parent;
        let flag = true;
        while (flag) {
          if(parent){
            if(parent[fun] == undefined){
              parent = parent.$parent;
            }else{
              parent[fun]();
              flag = false;
            }
          }else{
            flag = false;
          }
        }
      }
    }
  }
}
</script>
