<template>
    <div>
        <!--search区域  -->
        <div class='header'>
            <input @input='iptChange' placeholder='请输入车系/车型' v-model='msg' />
        </div>
        <!-- main -->
        <div class='main'>
            <h4 class='ml'>库存台账</h4>
            <div class='content'>
            <div v-for='(item) in list' :key='item.id' class='box'>
                <span>{{item.count}}</span>
                <p>{{item.name}}</p>
            </div>
            </div>
        </div>
        <!-- footer -->
        <div class='main'>
            <h4 class='ml'>库存分析工具</h4>
            <div class='content'>
            <div  @click='onClick(item.id)' :class='{box: true, hover: item.flag}' v-for='(item) in lookList' :key='item.id'>
                <span class='radius'></span>
                <div>{{item.name}}</div>
            </div>
            </div>
        </div>

        <!-- tab -->
        <div class='tab'>
          <div class='car'>
            <span @click='addClass(item.id)' :class='{style: item.flag}'  v-for='item in carList' :key='item.id'>{{item.name}}</span>
            <div v-if='show'>
              <div class='content'>
                <div class="left">
                  <span></span>
                </div>
                <div class='right'>
                  <p>欢迎来到峡谷之巅</p>
                  <p>欢迎来到峡谷之巅</p>
                  <p>欢迎来到峡谷之巅</p>
                </div>
              </div>
            </div>
            <div v-else>车系</div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Home',
    data () {
        return ({
            msg: '',
            list: [
                {count:80, name: '全部', id:1},
                {count:30, name: '在线',id:2},
                {count:19, name: '在途',id:3},
                {count:59, name: '已锁车',id:4},
                {count:60, name: '超期库存',id:5},
                {count:43, name: '金融车',id:6},
            ],
            flag: true
        })
    },
    computed: mapState(['lookList','carList','show']),
    methods: {
        iptChange() {
            console.log(this.msg)
        },
        onClick (id) {
            this.$store.commit('changeFlag', {id})
        },
        addClass (id) {
            this.$store.commit('changeColor', {id})
        }

        // goIndex () {
        //     this.$router.push({name: 'index', params: { userId: '123' }})
        // }
    }
}
</script>

<style lang='scss' scoped>
    .header{
        width: 100%;
        height: 2rem;
        text-align: center;
        background-color: #fff;
        margin-bottom: 1rem;
        input{
            width: 60%;
            height: 1.4rem;
            margin-top:0.3rem;
            border:1px solid #ccc;
            border-radius: 0.6rem;
            padding-left: 1rem;
        }
    }
    .main{
        width: 100%;
        height: 10rem;
        background-color: #fff;
        .ml{
            margin-left: 1rem;
            margin-top: .5rem;
        }
        .content{
            padding-top: 1rem;
            color: '#1a1a1a';
            font-size: 0.9rem;
            .box{
                float: left;
                width: 33.3%;
                height:3rem;
                text-align: center;
                margin-bottom:.5rem;
                .radius{
                    display: inline-block;
                    width: 1.8rem;
                    height: 1.8rem;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                }
            }
        }

    }
    .tab{
      width: 100%;
      height: 10rem;
      background-color: #fff;
      margin-top: .5rem;
      .car{
        span{
          height: 2rem;
          line-height: 2rem;
          font-Size:1rem;
          display: inline-block;
          width: 50%;
          text-align: center;
        }
        .content{
          width:100%;
          height:4rem;
          background-color: #fff;
          box-sizing: border-box;
          padding: .5rem;
          .left{
            float: left;
            width: 30%;
            height:4rem;
            // background-color: greenyellow;
            padding: .5rem;
            box-sizing: border-box;
            span{
              display: inline-block;
              width: 100%;
              height: 100%;
              background-color: red;
            }
          }
          .right{
            float: right;
            width: 70%;
            height: 4rem;
            // background-color: yellow;
            box-sizing: border-box;
            p{
              padding-left: .4rem;
              font-size: .9rem;
              color: #1a1a1a
            }
          }
        }
      }
    }
    .hover{
        color: red;
    }
    .style{
      color: red;
      border-bottom: 1px solid red;
    }
</style>
