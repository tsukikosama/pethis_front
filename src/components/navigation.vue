<template>
  <div>
      <el-menu
        
        class="el-menu-demo"
        mode="horizontal"
        default-active="this.$route.path"
        :router="true"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
  <el-menu-item index="/">首页</el-menu-item>
  
  <el-menu-item index="/club" >养宠club</el-menu-item>
  <el-menu-item index="/business">核心业务</el-menu-item>
  <el-menu-item index="/news">企业动态</el-menu-item>
  <el-menu-item index="/about">关于我们</el-menu-item>
  <el-menu-item index="">联系我们</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>