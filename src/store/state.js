// 存放数据的地方
const state = {
    count: 1,
    msg: '你好啊',
    lookList: [
        {flag: false,name: '库存结构', id:1},
        {flag: false,name: '库存功效',id:2},
        {flag: false,name: '库存共享',id:3},
        {flag: false,name: '已锁车',id:4},
        {flag: false,name: '超期库存',id:5},
        {flag: false,name: '金融车',id:6},
    ],
    carList: [
      {flag: true,name: '车型', id:1},
      {flag: false,name: '车系', id:2},
    ],
    show: true,
}

export default state
