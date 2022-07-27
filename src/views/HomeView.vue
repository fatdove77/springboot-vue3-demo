<template>
  <div class="home" style = "padding: 10px">
<!--    功能区-->
    <div style = "margin: 10px 0">
      <el-button type = primary >新增</el-button>
      <el-button type = primary >导入</el-button>
      <el-button type = primary>导出</el-button>
    </div>
<!--    搜索区-->
    <div style = "margin:10px 0">
      <el-input v-model="search" placeholder="输入关键字"  style = "width: 20%"/>
      <el-button type = primary style = "margin-left: 10px">查询</el-button>
    </div>
<!--    表格-->
    <el-table
        :data="tableData"
        style="width: auto;"
        border
        stripe
    >
      <el-table-column prop="date" label="Date"  sortable />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations"  width="120">
        <template #default="scope">
          <el-button  link type="primary" size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-popconfirm title="Are you sure to delete this?">
            <template #reference>
              <el-button link type="primary" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style = "margin:10px 0">
      <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 20]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="30"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, toRefs} from "vue";

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    const state = reactive({
      search:'',
      currentPage:1,  //分页当前页
      pageSize:10, //默认一页显示十个
      total:30, //默认有30个数据
      tableData:[
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },]
    })
    return {
      ...toRefs(state),
    }
  }

}
</script>
