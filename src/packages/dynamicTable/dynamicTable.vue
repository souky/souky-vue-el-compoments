<template>
	<div class="dynamicTable">
		<div v-if="tableData.headers.length == 0" style="width:100%;height:50px;line-height:50px;text-align:center;cursor:default;color:#c7c7c7">
			此项无内容
		</div>
    <!-- table setting -->
    <el-table v-else :data="tableData.data" :align='tableData.align' header-row-class-name="zs-table-header"
		style="width: 100%;height:calc(100% - 52px)" :max-height="tableData.maxHeight" @selection-change="handleSelectionChange">
			<el-table-column v-if="tableData.hasCheck == '1'" type="selection" width="55"></el-table-column>
			<el-table-column v-if="tableData.hasIndex == '1'" align='center' type="index" width="60" label="序号"></el-table-column>
      <template v-for="(e,index) in tableData.headers">

				<el-table-column fixed="right" :key="index"  v-if="e.operations == '1' && tableData.hasEdit == '1'" :align='e.align == ""?"center":e.align' :width="e.width" class-name="operations" :label="e.label">
          <template slot-scope="scope">
						<div class="op_items" v-if="tableData.hasShowButton == '1'">
              <el-button size="mini" plain type="primary" title="查看" icon="el-icon-search" @click="show(scope.row)"></el-button>
            </div>
						<div class="op_items" v-if="tableData.hasUploadButton == '1'">
              <el-button size="mini" plain type="warning" title="上传" icon="el-icon-upload" @click="upload(scope.row)"></el-button>
            </div>
            <div class="op_items" v-if="tableData.hasEditButton == '1'">
              <el-button size="mini" plain type="warning" title="修改" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
            </div>
            <div class="op_items" v-if="tableData.hasDeleteButton == '1'">
              <el-button size="mini" plain type="danger" title="删除" icon="el-icon-delete" @click="deletes(scope.row)"></el-button>
            </div>
          </template>
        </el-table-column>

        <template v-if="e.operations == '0'">

          <el-table-column :key="index" :show-overflow-tooltip="e.overflow == '1'?true:false" :align='e.align' :prop="e.name" :width="e.width" :label="e.label"
          v-if="e.formatType == '0'"
          ></el-table-column>

          <el-table-column :key="index" :show-overflow-tooltip="e.overflow == '1'?true:false" :align='e.align' :prop="e.name" :width="e.width" :label="e.label"
          v-if="e.formatType == '1'" :formatter="formatterArray" :filter-placement="e.formatter"
          ></el-table-column>

          <el-table-column :key="index" :show-overflow-tooltip="e.overflow == '1'?true:false" :align='e.align' :prop="e.name" :width="e.width" :label="e.label"
          v-if="e.formatType == '2'" :formatter="formatterDate" :filter-placement="e.formatter"
          ></el-table-column>
        </template>
			</template>

    </el-table>

    <!-- page setting -->
		<template v-if="tableData.showPages == '1'">
			<div class="pages">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="tableData.pageSizes" :page-size="tableData.pageSize" :current-page="tableData.pageNum" :layout="tableData.pageLayout" :total="tableData.pageTotal" />
			</div>
		</template>

  </div>
</template>

<script type="text/javascript">
export default {
	name:'dynamic-table',
  data() {
      return {
          msg:'',
      }
  },
  props:['tableData'],
  methods:{
		show(row) {
      this.$emit('show', row);
    },
    edit(row) {
      this.$emit('edit', row);
    },
		upload(row) {
      this.$emit('upload', row);
    },
    deletes(row) {
      this.$emit('deletes', row);
    },
    formatterArray(row, column, cellValue){
			let array = JSON.parse(column.filterPlacement)
			for(let x in array){
				if(x == cellValue){
					return array[x];
				}
			}
    },
    formatterDate(row, column, cellValue){
			if(null == cellValue){
				return '';
			}else{
				return this.formatData(new Date(cellValue),column.filterPlacement);
			}
    },
		handleSelectionChange(value){
			this.tableData.checkList = value;
		},
		handleSizeChange(val) {
			this.tableData.pageNum = 1;
			this.tableData.pageSize = val;
			this.$emit('getTableData');
    },
    handleCurrentChange(val) {
			this.tableData.pageNum = val;
			this.$emit('getTableData');
    },
		formatData(date,format){
			let o={
				"M+":date.getMonth()+1, //month
				"d+":date.getDate(), //day
				"h+": date.getHours(), //hour
				"m+": date.getMinutes(), //minute
				"s+" : date.getSeconds(), //second
				"q+" : Math.floor((date.getMonth()+3)/3), //quarter
				"S" : date.getMilliseconds() //millisecond
			}
			if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(date.getFullYear()+"").substr(4- RegExp.$1.length));
			for(var k in o)if(new RegExp("("+ k +")").test(format))
			format = format.replace(RegExp.$1,
			RegExp.$1.length==1? o[k] :
			("00"+ o[k]).substr((""+ o[k]).length));
			return format;
		}
  }
}
</script>
