<template>
    <div class="over_money">
    <el-container>
        <el-header>
          <div class="overflow_main">
            <div class="overflow_top">
              <div class="overflow_left">
                <a href="">请登录</a>
                <span><a href="">注册</a></span>
              </div>
              <div class="overflow_right">
                <ul>
                  <li class="active" @click="shouye()">商城首页</li>
                  <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                  <li><i class="el-icon-thirdgouwuche1"></i>购物车</li>
                  <li><i class="el-icon-thirdshoucangjia"></i>收藏夹</li>
                </ul>
              </div>
            </div>
            <div class="overflow_bottom">
              <div class="overflow_logo">
                <img src="../assets/logo.jpg" alt="">
              </div>
              <div class="overflow_search">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              </div>
              <div class="visibilty"></div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div id="shopping-cart" class="page-shopping-cart"   v-if="table">
            <h4 class="cart-title">购物清单</h4>
            <!-- 标题 -->
            <div class="cart-product-title clearfix" >
                <div class="td-product fl">商品</div>
                <div class="td-num fl">数量</div>
                <div class="td-price fl">单价(元)</div>
                <div class="td-total fl">金额(元)</div>
                <div class="td-do fl">操作</div>
            </div>
            <!-- 内容 -->
            <div v-for='(item,index) in productList' :key="index">
            <div class="cart-product clearfix" >
              <table>
                <tbody>
                  <tr >
                    <td class="td-product">
                        <img :src="item.url" width="98" height="98" alt="">
                        <div class="product-info">
                          <h6>{{item.third}}</h6>
                          <p>品牌：{{item.name}}</p>
                          <p>配送仓储：{{item.place}}</p>
                        </div>
                        <div class="clearfix"></div>
                    </td>
                    <td class="td-num">
                        <div class="product-num">
                          <a href="javascript:;" class="num-reduce num-do fl" @click='item.pro_num--'><span></span></a>
                          <input type="text" class="num-input" v-model='item.pro_num'>
                          <a href="javascript:;" class="num-add num-do fr" @click='item.pro_num++'><span></span></a>
                        </div>
                    </td>
                    <td class="td-price">
                      <p class="red-text">￥<span class="price-text">{{item.price}}</span>.00</p>
                    </td>
                    <td class="td-total">
                      <p class="red-text">￥<span class="price-text">{{item.price*item.pro_num}}</span>.00</p>
                    </td>
                    <td class="td-do">
                      <a href="javascript:;" class="product-delete" @click='deleteOneProduct(index)'>删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- 最后一行统计 -->
            <div class="cart-product-info" >
                <a href="javascript:;" class="delete-product" @click='deleteProduct'><span></span>删除所选商品</a>
                <a href="#" class="keep-shopping"><span></span>继续购物</a>
                <a href="javascript:;" class="fr btn-buy" @click="jiesuanla()">去结算</a>
                <a href="javascript:;" class="fr product-total">￥<span>{{item.price*item.pro_num}}</span></a>
                <a href="javascript:;" class="fr check-num"><span>{{item.pro_num}}</span>件商品总计（不含运费）:</a>
            </div>
            </div>
        </div>
        <div class="addresstitle" v-if="path">
            <div class="addtitle">确认收货地址</div>
            <div class="addlist">
              <ul>
                <li v-for="(item,index) in kuaidilist" :key="index">
                  <div class="path top">
                    <div class="pathname">{{item.kuaidiname}}{{item.kuaidiphone}}</div>
                    <div class="pathaddress">{{item.kuaidiaddresss}}</div>
                    <p>编辑&nbsp;&nbsp;|&nbsp;&nbsp;删除</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="fukuanfangshi" v-if="fukuanmethod">
            <div class="addtitle">确认付款方式</div>
            <div class="fukuanmethod">
              <ul>
                <li>
                  <img  src="../assets/method1.jpg" alt="">
                </li>
                <li>
                  <img src="../assets/method2.jpg" alt="">
                </li>
                <li>
                  <img src="../assets/method3.jpg" alt="">
                </li>
                <li>
                  <img src="../assets/method4.png" alt="">
                </li>
                <li>
                  <img src="../assets/method5.jpg" alt="">
                </li>
                <li>
                  <img src="../assets/method6.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        <div id="shopping-cart" class="page-shopping-cart" v-if="jiesuan">
            <div class="cart-product-title clearfix" >
                <div class="td-product fl">商品</div>
                <div class="td-num fl">数量</div>
                <div class="td-price fl">单价(元)</div>
                <div class="td-total fl">金额(元)</div>
                <div class="td-do fl" style="visibility: hidden;">操作</div>
            </div>
            <!-- 内容 -->
            <div v-for='(item,index) in productList' :key="index">
            <div class="cart-product clearfix" >
              <table>
                <tbody>
                  <tr>
                    <td class="td-product">
                        <img :src="item.url" width="98" height="98" alt="">
                        <div class="product-info">
                          <h6>{{item.name}}</h6>
                        </div>
                        <div class="clearfix"></div>
                    </td>
                    <td class="td-num">
                        {{item.pro_num}}
                    </td>
                    <td class="td-price">
                      <p class="red-text">￥<span class="price-text">{{item.price}}</span>.00</p>
                    </td>
                    <td class="td-total">
                      <p class="red-text">￥<span class="price-text">{{item.price*item.pro_num}}</span>.00</p>
                    </td>
                    <td class="td-do" style="visibility: hidden;">
                      <a href="javascript:;" class="product-delete" @click='deleteOneProduct(index)'>删除</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
        </div>
        <div v-if="modle">
            <div class="message">
              <div class="maijiamessage">
                <div class="messageinput">
                  <p>买家留言</p>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="youhuijuan">
                  <p>优惠卷</p>
                  <select name="" id="">
                    <option value="">无</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="messages">
              <div class="maijiamessage">
                <div class="messageinput">
                  <p>买家留言</p>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="youhuijuan">
                  <p>红包</p>
                  <select name="" id="">
                    <option value="">无</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="messagees">
              <div class="maijiamessage" v-for='(item,index) in productList' :key="index">
                <div class="messageinput">
                  <p>买家留言</p>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="youhuijuan">
                  <p>合计（含运费）￥<span>{{item.price*item.pro_num}}</span></p>
                </div>
              </div>
            </div>
            <!-- jiesuan -->
            <div class="messager" v-for='(item,index) in productList' :key="index">
              <div class="maijiamessage">
                <div class="messageinput">
                  <p>买家留言</p>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
                <div class="youhuijuan">
                  <p>实付款<span>￥{{item.price*item.pro_num}}</span></p>
                  <p>寄送至{{kuaidilists.kuaidiaddresss}}</p>
                  <p>收货人{{kuaidilists.kuaidiname}} {{kuaidilists.kuaidiphone}}</p>
                  <el-button size="mini" @click="handle()" >提交订单</el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="paymethods">
            <div class="paylist">
              <ul>
                <li>商城首页</li>
                <li>支付宝</li>
                <li>物流</li>
                <!-- <li>4</li> -->
              </ul>
            </div>
            <div class="payintroduce">
            <ul>
              <li>合作伙伴</li>
              <li>联系我们</li>
              <li>网站地图</li>
              <li>@2020 cslg-web版权所有</li>
            </ul>
          </div>
          </div>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import '../components/money.less'
export default {
  data () {
    return {
      table: true,
      modle: false,
      jiesuan: false,
      path: false,
      fukuanmethod: false,
      input: '',
      kuaidilists:{kuaidiname: '天天', kuaidiphone: '18852913622', kuaidiaddresss: '江苏省苏州市常熟市常熟理工学院东南校区'},
      input3: '',
      kuaidilist: [],
      productList: [],
      
    }
  },
  computed: {
    isSelectAll () {
      return this.productList.every(function (val) { return val.select })
    },
    getTotal () {
      var _proList = this.productList.filter(function (val) { return val.select })
      var totalPrice = 0
      for (var i = 0; i < _proList.length; i++) {
        totalPrice += _proList[i].pro_num * _proList[i].pro_price
      }
      return { totalNum: _proList.length, totalPrice: totalPrice }
    }
  },
  methods: {
    dizhi(){
      var _this = this;
      _this.$http
        .post("/api/user/sortobject", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            // console.log(response.data.data);
            _this.kuaidilist = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     xinxi(){
      var _this = this;
      _this.$http
        .post("/api/user/detail", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.productList.push(response.data.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    jiesuanla () {
      this.table = false
      this.jiesuan = true
      this.path = true
      this.modle = true
      this.fukuanmethod = true
    },
    handle () {
      this.table = true
      this.jiesuan = false
      this.path = false
      this.modle = false
      this.fukuanmethod = false
      // table: false,
      // jiesuan: true,
    },
    shouye(){
      this.$router.push('/')
    },
    selectProduct (_isSelect) {
      for (var i = 0; i < this.productList.length; i++) {
        this.productList[i].select = !_isSelect
      }
    },
    deleteProduct () {
      this.productList = this.productList.filter(function (item) { return !item.select })
    },
    deleteOneProduct (index) {
      this.productList.splice(index, 1)
    }
  },
  created () {
    //  pro_img: _this.url,
    //                     pro_name: 'Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机',
    //                     pro_price: '5299.00',
    //                     // pro_brand: 'apple',
    //                     pro_place: '美国',
    //                     pro_num: 1,
    //                     pro_purity: '99.7%',
    //                     pro_brand: 'Apple iPhone 6s',
    //                     pro_depot: '浙江杭州/杭州中心'
    var _this = this
    var a = _this.$route.params.Id;
    if(a){
      _this.xinxi()
    }
    // var pro_num = _this.$route.params.pro_num;
    // productList.push('pro_img',pro_img)
    // var arr = []
    //   for (let i in a) {
    //       let o = {};
    //     o[i] = a[i];
    //     arr.push(o)
    //   }
    // _this.productList = arr
    // console.log(_this.productList)
  },
  mounted () {
    var _this = this
    this.dizhi()
    // _this.productList.pro_img = _this.$route.params.pro_img;
    // _this.productList.pro_price = _this.$route.params.pro_price;
    // _this.productList.pro_name = _this.$route.params.pro_name;
    // _this.productList.pro_place = _this.$route.params.pro_place;
    // _this.productList.pro_num = _this.$route.params.pro_num;
    // _this.productList.pro_purity = _this.$route.params.pro_purity;
    // _this.productList.pro_depot = _this.$route.params.pro_depot;
    // _this.productList.pro_brand = _this.$route.params.pro_brand;
    this.productList.map(function (item) {
      _this.$set(item, 'select', true)
    })
  }
}
</script>
