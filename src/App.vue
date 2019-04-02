<template>
  <div id="app">
    <router-view/> <!-- 设置路由的出口 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100vh;
  background-color: #ccc;
}
</style>
