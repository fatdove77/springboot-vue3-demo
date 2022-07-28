<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style = "width: 200px;min-height: calc( 100vh - 50px);"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><AddLocation /></el-icon>
        <span>Navigator One</span>
      </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><List /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
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