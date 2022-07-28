<template>
  <div class="home" style = "padding: 10px">
<!--    功能区-->
    <div style = "margin: 10px 0">
      <el-button type = primary @click = "add" >新增</el-button>
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
      <el-table-column prop="id" label="ID"  sortable />
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="nickname" label="昵称" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="address" label="地址" />

      <el-table-column fixed="right" label="Operations"  width="180">
        <template #default="scope">
          <el-button   size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-popconfirm title="Are you sure to delete this?">
            <template #reference>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
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
<!--弹窗-->
      <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="30%"
      >
        <el-form label-width="120px">
          <el-form-item :model = "form" label="用户名">
            <el-input style = "width: 80%" :model = "form.name"/>
          </el-form-item>
          <el-form-item :model = "form" label="昵称">
            <el-input style = "width: 80%" :model = "form.nickname"/>
          </el-form-item>
          <el-form-item :model = "form" label="年龄">
            <el-input style = "width: 80%" :model = "form.age"/>
          </el-form-item>
          <el-form-item :model = "form" label="性别">
            <el-radio-group v-model="form.sex" class="my-2">
              <el-radio label="男" size="small">男</el-radio>
              <el-radio label="女" size="small">女</el-radio>
              <el-radio label="other" size="small">其他</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :model = "form" label="地址">
            <el-input type = "textarea" style = "width: 80%" :model = "form.address"/>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="save"
        >Confirm</el-button
        >
      </span>
        </template>
      </el-dialog>
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
      tableData:[],
      dialogVisible:false,  //弹窗默认关闭
      form:{
        username:''
      }  //添加的表单
    })
    // 添加表单
    const add = ()=>{
        state.dialogVisible = true;
        state.form = {};//清空表单元素
    }
    // 添加表单的确认按钮
    const save = ()=>{

    }
    // const handleEdit = (index,row)=>{
    //
    // }
    // const handleDelete = (index,row)=>{
    //
    // }
    return {
      ...toRefs(state),
      add,
      save
    }
  }

}
</script>
