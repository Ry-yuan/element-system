<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 视图显示地方 -->
    <el-container>
        <el-header class="app-header">X-System</el-header>
        <router-view/>
        <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app-header{
  text-align:center;
}
</style>
