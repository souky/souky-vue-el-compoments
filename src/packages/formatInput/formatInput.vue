<template lang="html">
  <div :class="inputClass">
      <input :disabled="disabled" class="el-input__inner" :style="style"   v-bind:value="formatValue" ref="input" v-on:input="updatevalue($event.target.value)"
        v-on:blur="onBlur" v-on:focus="selectAll"/>
      <div class="el-input-group__append" v-if="append != ''">{{append}}</div>
  </div>
</template>

<script>
const ACCOUNTING = require('@/defaultData/accounting.min.js');
export default {
  name:'format-input',
  props: {
      value: {
        type: [String, Number],
        default: 0,
        desc: '数值'
      },
      symbol: {
        type: String,
        default: '',
        desc: '货币标识符'
      },
      decimal: {
        type: Number,
        default: 2,
        desc: '小数位'
      },
      size:{
        type: String,
        default: '',
      },
      splitint:{
        type: String,
        default: ',',
      },
      splitfloat:{
        type: String,
        default: '.',
      },
      append:{
        type: String,
        default: '',
      },
      disabled:{
        default:false
      },
      align:{
        type: String,
        default: 'right',
      }
  },
  data() {
      return {
          focused: false,
          inputClass:'el-input',
          style:""
      }
  },
  computed: {
      formatValue() {
          if (this.focused) {
              return parseFloat(ACCOUNTING.unformat(this.value).toFixed(this.decimal));
          } else {
              return ACCOUNTING.formatMoney(this.value, this.symbol, this.decimal,this.splitint,this.splitfloat);
          }
      }
  },
  mounted:function(){
    if(this.size){
      switch (this.size) {
        case 'small': this.inputClass += ' el-input--small'
          break;
        case 'medium': this.inputClass += ' el-input--medium'
          break;
        case 'mini': this.inputClass += ' el-input--mini'
          break;
        default:
          this.inputClass += ''
      }
    }
    this.style = "text-align:"+this.align
    if(this.append != ''){
      this.inputClass += ' el-input-group el-input-group--append';
    }
  },
  methods: {
      updatevalue(value) {
          var formatvalue = parseFloat(ACCOUNTING.unformat(value).toFixed(this.decimal));
          this.$emit("input", formatvalue)
      },
      onBlur() {
          this.focused = false;
          this.$emit("blur");
          this.dispatch("ElFormItem", "el.form.blur", [this.value]);
      },
      selectAll(event) {
          this.focused = true;
          setTimeout(() => {
              event.target.select()
          }, 0)
      },
      dispatch(componentName, eventName, params) {
        var parent = this.$parent || this.$root;
        var name = parent.$options.componentName;
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) {
            name = parent.$options.componentName;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      }
  },
}
</script>
