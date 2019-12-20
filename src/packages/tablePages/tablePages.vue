<template lang="html">
  <el-pagination class="pages"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-sizes="[10,20,50,100,500]"
    :page-size="pages.pageSize"
    :current-page="pages.pageNum"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pages.total">
  </el-pagination>
</template>

<script>
export default {
  name:'table-pages',
  props:['pages'],
  methods: {
    handleSizeChange(val) {
      this.pages.pageNum = 1;
      this.pages.pageSize = val;
      this.$emit('getTableData');
    },
    handleCurrentChange(val) {
      this.pages.pageNum = val;
      this.$emit('getTableData');
    }
  },
}
</script>
