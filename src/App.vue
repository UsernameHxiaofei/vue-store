<template>
  <div id="app">
    <router-view/> <!-- 设置路由的出口 -->
  </div>
</template>

<script>

//我是修改长线上的bug
//测试使用工具提交代码
/*
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

* */
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
