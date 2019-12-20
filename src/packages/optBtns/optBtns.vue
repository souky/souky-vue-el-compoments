<template lang="html">
  <div class="opt-btns">
    <el-button icon="el-icon-s-tools" title="操作" size="mini" circle @click="showOpt"></el-button>
    <div class="opt-mask" v-if="showMask" @click="close"></div>
    <transition name="el-fade-in">
      <div class="opt-btn transition-two-msec" v-show="showMask">
        <el-button icon="el-icon-search" type="success" title="查看" size="mini" circle @click="showInfof"></el-button>
        <el-button icon="el-icon-edit" :disabled="(data.isAudit == '2' || data.isAudit == '3' || data.isAudit == '4')" type="primary" title="修改" size="mini" circle @click="editInfof"></el-button>
        <el-button icon="el-icon-delete" :disabled="(data.isAudit == '2' || data.isAudit == '3' || data.isAudit == '4')" type="danger" title="删除" size="mini" circle @click="deleteInfof"></el-button>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name:'opt-btns',
  props: ['data'],
  data() {
      return {
        showMask:false,
      }
  },
  computed: {
  },
  mounted:function(){

  },
  methods: {
    showOpt(){
      this.showMask = true;
    },
    close(){
      this.showMask = false;
    },
    showInfof(){
      this.$emit('showInfo',this.data.id);
      this.close();
    },
    editInfof(){
      this.$emit('editInfo',this.data.id);
      this.close();
    },
    deleteInfof(){
      this.$emit('deleteInfo',this.data.id);
      this.close();
    }

  },
}
</script>
