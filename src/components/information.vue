<template>
    <div class="over_informations">
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
                  <li @click="gouwuche()"><i class="el-icon-thirdgouwuche1" ></i>购物车</li>
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
          <div class="nav">
        <div class="w">
          <div class="dropdown fl">
            <div class="dt">全部商品分类</div>
          </div>
          <!--右侧导航-->
          <div class="navitems fl">
            <ul>
              <li><a href="#">服装城</a></li>
              <li><a href="#">美妆馆</a></li>
              <li><a href="#">传智超市</a></li>
              <li><a href="#">全球购</a></li>
              <li><a href="#">闪购</a></li>
              <li><a href="#">团购</a></li>
              <li><a href="#">拍卖</a></li>
              <li><a href="#">有趣</a></li>
            </ul>
          </div>
        </div>
      </div>
        <!--nav结束-->
        <!--详情页内容部分-->
        <div class="de_container w">
          <!--面包屑导航-->
          <div class="crumb_wrap">
            <a href="#">{{list.first}} </a>
            〉<a href="#">{{list.second}} </a>
            〉<a href="#">{{list.third}}</a>
            〉<a href="#">{{list.fourth}}</a>
          </div>
          <!--产品介绍模块-->
          <div class="product_intro clearfix">
            <!--左侧预览区域-->
            <div class="magnify">
              <!-- 左边产品图片区域 -->
                <div class="left_contaner">
                  <div class="middle_img" @mouseover="boxMouseOver" @mouseleave="boxMouseLeave">
                  <!-- 产品图片 -->
                    <img :src="middleImg" alt="">
                    <!-- 阴影盒子 -->
                    <div class="shade" @mouseover="shadeMouseOver" @mousemove="shadeMouseMove" ref="shade" v-show="isShade"></div>
                  </div>
                  <!-- 缩略图容器 -->
                  <div class="carousel">
                  <!-- 左箭头 -->
                    <div class="left_arrow arrow" @click="leftArrowClick">
                      <p style="line-height: 92px;text-align: center;font-weight: bold;
    font-size: 25px;">&lt;</p>
                    </div>
                    <!-- 缩略图展示盒子 -->
                    <div class="show_box">
                      <ul class="picture_container" ref="middlePicture">
                        <li class="picture_item" @mouseover="tabPicture(item)" v-for="(item, index) in pictureList" :key="index">
                          <img :src="item.url" class="small_img" alt="">
                        </li>
                      </ul>
                    </div>
                    <!-- 向右箭头 -->
                    <div class="right_arrow arrow" @click="rightArrowClick">
                      <p style="line-height: 92px;text-align: center;font-weight: bold;
    font-size: 25px;">&gt;</p>
                    </div>
                  </div>
                </div>
                <!-- 右边放大区域 -->
                <div class="right_contanier" v-show="isBig">
                  <img :src="middleImg" ref="bigImg" class="big_img" alt="">
                </div>
              </div>
          <!-- </div> -->
            <!--右侧产品详细区域-->
            <div class="itemInfo_wrap fr" v-if="aaa">
              <div class="sku_name">{{list.name}}</div>
              <div class="news">推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返</div>
              <div class="summary">
                <dl class="summary_price">
                  <dt>价格</dt>
                  <dd>
                    <i class="price">￥{{list.price}}</i>
                    <a href="#"> 降价通知</a>
                    <div class="mark">累计评价{{list.pingjia}}</div>
                  </dd>
                </dl>
                <dl class="summary_promotion">
                  <dt>促销</dt>
                  <dd>
                    <em>加购价</em>
                    满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换 购热销商品 详情 》
                  </dd>
                </dl>
                <dl class="summary_support">
                  <dt>支持</dt>
                  <dd>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</dd>
                </dl>
                <dl class="choose_color">
                  <dt>选择颜色</dt>
                  <dd>
                    <ul style="float:left">
                    <li v-for="(item,index) in lists" :key="index"><a href="javascript:;" class="current">{{item.a}}</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl class="choose_version">
                  <dt>选择版本</dt>
                  <dd>
                    <a href="javascript:;" class="current">公开版</a>
                    <a href="javascript:;">移动5g</a>
                  </dd>
                </dl>
                <dl class="choose_type">
                  <dt>购买方式</dt>
                  <dd>
                    <a href="javascript:;" class="current">官方标配</a>
                    <a href="javascript:;">移动优惠购</a>
                  </dd>
                </dl>
                <div class="choose_btns">
                  <a href="#" class="addcar">立即购买</a>
                  <a href="#" class="addcar" @click="addgouwuche()">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
          <!--产品细节模块product_detail-->
        </div>
        <!--详情页内容部分-->
        <div class="mian" id="t1">
          <div class="m-l">
            <div id="tabs">
              <ul class="lists">
                <li class="list_navs">商品推荐</li>
                <!-- <li class="list_navs">规格与包装</li> -->
              </ul>
              <ul class="tabs">
                <li class="tab_navs on">
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                  <div class="demo">
                    <img src="../assets/aside_img.jpg" alt="">
                    <p>华为Huawei P20 Pro 全面屏徕卡</p>
                    <strong>￥19.00</strong>
                  </div>
                </li>
                <!-- <li class="tab_navs">规格与包装</li> -->
              </ul>
            </div>
          </div>
          <div class="m-r">
            <div id="tab">
              <ul class="list">
                <li class="list_nav">商品介绍</li>
              </ul>
              <ul class="tab">
                <li class="tab_nav on">
                  <div class="item">
                    <p>
                      <a href="#" class="more">查看更多参数<i class="arrow"></i></a>
                    </p>
                    <img src="../assets/detail_img1.jpg" alt="">
                    <img src="../assets/detail_img1.jpg" alt="">
                    <img src="../assets/detail_img1.jpg" alt="">
                    <img src="../assets/detail_img1.jpg" alt="">
                  </div>
                </li>
                <li class="tab_nav">规格与包装</li>
                <li class="tab_nav">售后保障</li>
                <li class="tab_nav">商品(50000)</li>
                <li class="tab_nav">手机社区</li>
              </ul>
            </div>
          </div>
        </div>
        <!--footer开始-->
        </el-main>
      </el-container>
    </div>
</template>
<script>
import '../components/information.less'
import $ from 'jquery'
export default {
  props: {
    middleImgWidth: {
      default: 350,
      type: Number
    }, // 产品图片宽
    middleImgHeight: {
      default: 400,
      type: Number
    }, // 产品图片高
    thumbnailHeight: {
      default: 100,
      type: Number
    }, // 缩略图容器高度
    imgList: Array, // 图片数据
    zoom: {
      default: 2, // 缩略比例,放大比例
      type: Number
    }
  },
  data () {
    return {
      input3: '',
      pictureList: [
        { url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1835797957,3723166691&fm=26&gp=0.jpg' },
        { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=788856701,2929863148&fm=26&gp=0.jpg' },
        { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1695213484,3659060757&fm=26&gp=0.jpg' },
        { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2875811731,1362950456&fm=26&gp=0.jpg' },
        { url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1665461524,2117868155&fm=26&gp=0.jpg' },
        { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2741736409,2565080996&fm=26&gp=0.jpg' }
      ],
      middleImg: '',
      bigImg: '',
      url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1835797957,3723166691&fm=26&gp=0.jpg',
      isShade: false,
      isBig: false,
      initX: 0,
      aaa: true,
      lists: [],
      list: [],
      initY: 0,
      leftX: 0,
      topY: 0,
      middleLeft: 0,
      itemWidth: 80
    }
  },
  created () {
    if (this.imgList && this.imgList.length) {
      this.pictureList = this.imgList
    }
    this.middleImg = this.pictureList[0].url
    // 计算缩略图的宽度,默认是显示4张图片,两边箭头的宽度和为50
    this.itemWidth = (this.middleImgWidth - 50) / 4
  },
  mounted () {
    this.get()
    
    this.getphone()
    this.$nextTick(() => {
      // 容器的高
      const imgWidth = this.middleImgHeight + this.thumbnailHeight + 20
      // 设置容器宽高
      $('.magnify').css({
        width: this.middleImgWidth,
        height: imgWidth
      })
      // 设置产品图宽高
      $('.middle_img').css({
        width: this.middleImgWidth,
        height: this.middleImgHeight
      })
      // 设置移动阴影图宽高
      $('.middle_img .shade').css({
        width: this.middleImgWidth / this.zoom,
        height: this.middleImgHeight / this.zoom
      })
      // 设置缩略图容器高
      $('.carousel').css({
        height: this.thumbnailHeight
      })
      // 设置每个缩略图宽
      $('.picture_item').css({
        width: this.itemWidth
      })
      // 设置放大后图片容器的宽高,left
      $('.right_contanier').css({
        left: this.middleImgWidth,
        width: imgWidth,
        height: imgWidth
      })
      // 设置放大图片的宽高(图片的放大倍数)
      $('.right_contanier .big_img').css({
        width: imgWidth * this.zoom,
        height: imgWidth * this.zoom
      })
    })
  },
  methods: {
    addgouwuche(){
        var _this = this
        _this.$router.push({
                      name: 'money',//这里必须有，没有的话传过去的值为undefined
                      path: '/money',
                      params: {
                        Id: '1'
                      }
                  })
    },
    getphone(){
      var _this = this;
      _this.$http
        .post("/api/user/phonesorts", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.lists = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    get(){
      var _this = this;
      _this.$http
        .post("/api/user/detail", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.list = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gouwuche(){
      this.$router.push('/money')
    },
    shouye() {
      var _this = this
        _this.$router.push({
                      name: 'Main',//这里必须有，没有的话传过去的值为undefined
                      path: '/',
                      params: {
                        Isd: '1'
                      }
                  })
    },
    // 产品图片鼠标移入事件,显示阴影,显示大图
    getPageScroll () {
      return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
      }
    },
    getEventPage (e) {
      return {
        pageX: e.clientX + this.getPageScroll().scrollLeft,
        pageY: e.clientY + this.getPageScroll().scrollTop
      }
    },
    boxMouseOver (e) {
      console.log(this.list)
      console.log(9999, e)
      e.preventDefault()
      e.stopPropagation()
      this.isShade = true
      this.isBig = true
      this.aaa = false
      // 计算阴影的位置
      let x = e.offsetX - $('.shade').width() / 2
      let y = e.offsetY - $('.shade').height() / 2
      const maxLeft = $('.middle_img').width() - $('.shade').width()
      const maxTop = $('.middle_img').height() - $('.shade').height()
      x = x <= 0 ? 0 : x
      x = x >= maxLeft ? maxLeft : x
      y = y <= 0 ? 0 : y
      y = y >= maxTop ? maxTop : y
      $('.shade').css({
        left: x,
        top: y
      })
    },
    shadeMouseMove (e) {
      e.preventDefault()
      e.stopPropagation()
      var x = this.getEventPage(e).pageX - $('.middle_img')[0].offsetParent.offsetLeft - $('.middle_img')[0].offsetParent.clientLeft
      var y = this.getEventPage(e).pageY - $('.middle_img')[0].offsetParent.offsetTop - $('.middle_img')[0].offsetParent.clientTop
      x -= $('.shade').width() / 2
      y -= $('.shade').height() / 2
      const maxLeft = $('.middle_img').width() - $('.shade').width()
      const maxTop = $('.middle_img').height() - $('.shade').height()
      x = x <= 0 ? 0 : x
      x = x >= maxLeft ? maxLeft : x
      y = y <= 0 ? 0 : y
      y = y >= maxTop ? maxTop : y
      $('.shade').css({
        left: x,
        top: y
      })
      const xRate = $('.big_img').width() / $('.middle_img').width()
      const yRate = $('.big_img').height() / $('.middle_img').height()
      $('.big_img').css({
        left: -x * xRate,
        top: -y * yRate
      })
    },
    shadeMouseOver (e) {
      e.preventDefault()
      e.stopPropagation()
    },
    boxMouseLeave (e) {
      this.isShade = false
      this.isBig = false
      this.aaa = true
    },
    tabPicture (item) {
      this.middleImg = item.url
    },
    leftArrowClick () {
      if (this.middleLeft < 0) {
        this.middleLeft += this.itemWidth
        $('.picture_container').animate({
          left: this.middleLeft
        }, 500)
      }
    },
    rightArrowClick () {
      if (this.middleLeft > -this.itemWidth * (this.pictureList.length - 4)) {
        this.middleLeft -= this.itemWidth
        $('.picture_container').animate({
          left: this.middleLeft
        }, 500)
      }
      console.log(this.middleLeft)
    }
  },
  
}
</script>
<style scoped>
    /* @import '../assets/detail.css'; */
    /* @import '../assets/common.css'; */

</style>
