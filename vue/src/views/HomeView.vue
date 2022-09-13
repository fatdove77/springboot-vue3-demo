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
      <el-input v-model="search" placeholder="输入关键字"  style = "width: 20%" clearable ></el-input>
      <el-button type = primary style = "margin-left: 10px" @click = "load">查询</el-button>
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
      <el-table-column prop="nickName" label="昵称" />
      <el-table-column prop="sex" label="性别" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="address" label="地址" />

      <el-table-column fixed="right" label="Operations"  width="180">
        <template #default="scope">
          <el-button   size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="Are you sure to delete this?" @confirm = "handleDelete(scope.row.id)" >
            <template #reference>
              <el-button size="mini" type="danger" >删除</el-button>
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
          v-model:total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
<!--弹窗-->
      <el-dialog
          v-model="dialogVisible"
          title="Tips"
          width="30%"
      >
        <el-form label-width="120px" v-model = "form">
          <el-form-item  label="用户名">
            <el-input style = "width: 80%" v-model = "form.username"/>
          </el-form-item>
          <el-form-item  label="昵称">
            <el-input style = "width: 80%" v-model = "form.nickName"/>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input style = "width: 80%" v-model = "form.age"/>
          </el-form-item>
          <el-form-item  label="性别">
            <el-radio-group v-model="form.sex" class="my-2">
              <el-radio label="男" size="small">男</el-radio>
              <el-radio label="女" size="small">女</el-radio>
              <el-radio label="other" size="small">其他</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item  label="地址">
            <el-input type = "textarea" style = "width: 80%" v-model = "form.address"/>
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
import {onMounted, onUpdated,reactive, toRefs,} from "vue";
import request from "@/utils/request";
import { ElMessage } from 'element-plus';
export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    const state = reactive({
      search:'',
      currentPage:1,  //分页当前页
      pageSize:10, //默认一页显示十个
      total:30, //默认有30个数据  //表单的总条数
      tableData:[], //网页主体部分的表格
      dialogVisible:false,  //弹窗默认关闭
      form:{
      }  //添加的表单
    })

    onMounted(()=>{
      load();
    })
    onUpdated(()=>{
      // load();
    })
    //查询方法
    const load = ()=>{
      request.get("/api/user",{
        params:{
          pageNum:state.currentPage,
          pageSize:state.pageSize,
          search:state.search,
        }
      }).then(res=>{
        state.tableData = res.data.records;
        state.total = res.data.total;
      })

    }
    // 打开添加表单弹窗,
    const add = ()=>{
        state.dialogVisible = true;
        state.form = {};//清空表单元素
    }
    // 添加表单的确认按钮
    const save = ()=>{
      if(state.form.id){
        request.put("/api/user",state.form).then((res)=>{
          console.log(res);
          if(res.code==='0'){
            ElMessage.success("成功");
          }
          else {
            ElMessage.error(res.msg);
          }
        })
      }
      else {
        request.post("/api/user",state.form).then((res)=>{
          console.log(res);
        })
      }
      state.dialogVisible = false;

    }
    const handleEdit = (row)=>{
      state.form = JSON.parse(JSON.stringify(row));
      state.dialogVisible = true;
    }

    //改变页面显示数据触发
    const handleSizeChange = ()=>{
        load();
    }

    /*
    改变当前页码触发
     */
    const handleCurrentChange = ()=>{
        load();
    }
    const handleDelete = (id)=>{
      console.log(id);
      request.delete("api/user/"+id).then(res=>{
        if(res.code==='0'){
          ElMessage.success("删除成功");
        }
        else {
          ElMessage.error(res.msg);
        }
        load();//重新加载表格数据
      })
    }
    return {
      ...toRefs(state),
      add,
      save,
      load,
      handleEdit,
      handleSizeChange,
      handleCurrentChange,
      handleDelete,

    }
  }

}
</script>
