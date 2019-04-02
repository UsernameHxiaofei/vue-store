<template>
    <div>
      <div @click='addCount' class='header'>{{count}}</div>
      <!-- 过滤器的使用 -->
      <div>{{date | time}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Index',
    data() {
        return ({
            num:10,
            id: '',
            date: '',
        })
    },
    watch: { //监视数据的变化
      num: function (val, oldVal) {
        console.log(val, oldVal)
      }
    },
    created() {
        console.log(this.$route.params) //拿到页面跳转过来的参数
        this.id = this.$route.params.userId //拿到id发送axios请求获取数据
        this.date = new Date()
    },
    // 将store中的数据map成vue的计算属性开始展示
    computed: mapState(['count']),
    methods: {
        addCount () {
            this.$store.commit('addCount', {num: this.num})
        }
    }
}
</script>

<style lang='scss' scoped>
    .header{
        width: 100px;
        height: 100px;
        background-color: yellow;
        text-align: center;
        line-height: 100px;
        color: red;
        border-radius: 50%;
    }
</style>
