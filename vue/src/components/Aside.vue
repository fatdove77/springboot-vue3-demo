<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style = "width: 200px;min-height: calc( 100vh - 50px);"
      :default-openeds = "[`1`]"
  >
    <el-sub-menu index="1">
      <template #title>系统管理</template >
        <el-menu-item index="user">用户管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Aside"
}
</script>

<style scoped>

</style>