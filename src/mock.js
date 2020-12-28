const Mock = require('mockjs')
const Random = Mock.Random

const newsData = function () {

    return {
        code: 0,
        msg: "操作成功",
        // data: articles,
    }

}

const mainData = function () {
    let articles = [{a:'零食'},{a:'手机'},{a:'家居'},{a:'数码'},{a:'老年用品'},{a:'婴儿用品'},{a:'男士用品'},{a:'女士用品'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}

const objectsort = function () {
    let articles = [{kuaidiname: '天天', kuaidiphone: '18852913622', kuaidiaddresss: '江苏省苏州市常熟市常熟理工学院东南校区'},]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}


const mainsData = function () {
    let articles = [{a:'小米'},{a:'荣耀'},{a:'华为'},{a:'锤子'},{a:'苹果'},{a:'vivo'},{a:'oppo'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}


const sortsData = function () {
    let articles = [{a:'玫瑰金'},{a:'红色'},{a:'蓝泽'},{a:'玫瑰红'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}

const detailData = function () {
    let articles = {first:'手机、数码、通讯'
    ,second:'手机',third:'Apple苹果',fourth:'iphone 6p系类'
    ,name:'Apple iphone 8p',pro_num:1,place: '苏州运输中心',
    price:'5600.00',pingjia:'5600',url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1835797957,3723166691&fm=26&gp=0.jpg'}

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}


const asData = function () {
    let articles = [{a:'小米'},{a:'荣耀'},{a:'华为'},{a:'MAC'},{a:'联想'},{a:'vivo'},{a:'oppo'}]

    return {
        code: 0,
        msg: "操作成功",
        data: articles,
    }

}
const Data = function () {
    return {
        code: 0,
        msg: "操作成功",
    }

}

Mock.setup({
    timeout: 500
})

// ``请严格注意get请求的地址``
Mock.mock('/api/user/loginuser', 'post',newsData )   //post请求
Mock.mock(RegExp("/api/user/loginuser"+".*"), 'get', newsData)   //get请求
Mock.mock('/api/user/user', 'post',Data )   //post请求
Mock.mock(RegExp("/api/user/user"+".*"), 'get', Data)   //get请求
Mock.mock('/api/user/main', 'post',mainData )   //post请求
Mock.mock(RegExp("/api/user/main"+".*"), 'get', mainData)
Mock.mock('/api/user/sort', 'post',mainsData )   //post请求
Mock.mock(RegExp("/api/user/sort"+".*"), 'get', mainData)
Mock.mock('/api/user/sorts', 'post',asData )   //post请求
Mock.mock(RegExp("/api/user/sorts"+".*"), 'get', asData)
Mock.mock('/api/user/sortobject', 'post',objectsort )   //post请求
Mock.mock(RegExp("/api/user/sortobject"+".*"), 'get', objectsort)
Mock.mock('/api/user/detail', 'post',detailData )   //post请求
Mock.mock(RegExp("/api/user/detail"+".*"), 'get', detailData)
Mock.mock('/api/user/phonesorts', 'post',sortsData )   //post请求
Mock.mock(RegExp("/api/user/phonesorts"+".*"), 'get', sortsData)