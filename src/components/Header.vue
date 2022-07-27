<template>
  <div  style="height:50px; line-height:50px; border-bottom: 1px solid #ccc;display:flex;">
    <div style="width:200px;padding-left: 30px;font-weight: bold;color:skyblue ">后台管理</div>
    <div style="flex:1"></div>
    <div style="width:100px">
      <el-dropdown style = "line-height: 50px;font-weight: bold;color:skyblue;">
        <span class="el-dropdown-link">
          肥鸽子
          <el-icon class="el-icon--right">
            <el-icon><ArrowDown /></el-icon>
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人系统</el-dropdown-item>
            <el-dropdown-item>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {


  // eslint-disable-next-line vue/multi-word-component-names
  name:"Header"

}
</script>

<style>

</style>