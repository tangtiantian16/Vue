<template>
  <div class="overflow">
    <el-container>
      <el-header>
        <div class="overflow_main">
          <div class="overflow_top">
            <div class="overflow_left">
              <a href="">{{ mingzi }}</a>
              <span><a href="">注册</a></span>
            </div>
            <div class="overflow_right">
              <ul>
                <li class="active">商城首页</li>
                <li><i class="el-icon-thirdtouxiang"></i>个人中心</li>
                <li @click="gouwuches()">
                  <i class="el-icon-thirdgouwuche1"></i
                  >购物车
                </li>
                <li v-if="shoucangjia">
                  <i class="el-icon-thirdshoucangjia"></i>收藏夹
                </li>
              </ul>
            </div>
          </div>
          <div class="overflow_bottom">
            <div class="overflow_logo">
              <img src="../assets/logo.jpg" alt="" />
            </div>
            <div class="overflow_search">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
              >
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="visibilty"></div>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="overflow_content">
          <div class="overflow_tabber">
            <div class="overflow_list">
              <ul>
                <li>全部分类</li>
                <li>首页</li>
                <li>闪购</li>
                <li>生鲜</li>
                <li>团购</li>
                <li>全球购</li>
              </ul>
            </div>
          </div>
          <div class="overflow_middle">
            <div class="list">
              <ul>
                <li v-for="(item, index) in list" :key="index">
                  <i
                    class="el-icon-thirdgouwuche1"
                    style="margin-right: 20px"
                  />{{ item.a }}<span>&gt;</span>
                </li>
              </ul>
            </div>
            <div class="lunbo">
              <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="310px">
                  <el-carousel-item
                    v-for="(item, index) in imglist"
                    :key="index"
                  >
                    <img :src="item.src" alt="" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="person">
              <div class="title">商城头条</div>
              <div class="avator">
                <div class="img">
                  <img src="../assets/logo.jpg" alt="" />
                </div>
                <div class="introduce">
                  <div class="nicheng">{{ mingzi }}</div>
                  <div class="onclick">点击更多优惠活动</div>
                </div>
              </div>
              <div class="avatorlogin">
                <el-button
                  style="width: 100px; height: 30px"
                  type="warning"
                  @click="denglu()"
                  >登陆</el-button
                >
                <el-button
                  style="width: 100px; height: 30px"
                  type="warning"
                  @click="zhuce()"
                  >注册</el-button
                >
              </div>
              <div class="notice">
                <p>商城壤品一分秒杀</p>
                <p>商城壤品一分秒杀</p>
                <p>秒杀</p>
                <p>秒杀</p>
                <p>秒杀</p>
                <p>秒杀</p>

              </div>
              <img class="imgg" src="../assets/4.jpg" alt="" />
            </div>
          </div>
          <div class="imgbuju">
            <div class="imagetitle">
              <div class="imageleft">活动<span>(每期活动优惠享不停)</span></div>
              <div class="imagesort">
                <ul>
                  <li>更多活动&gt;</li>
                </ul>
              </div>
            </div>
            <div class="imagelist">
              <img src="../assets/first.png" alt="" />
              <img src="../assets/second.png" alt="" />
              <img src="../assets/third.png" alt="" />
              <img src="../assets/fourth.png" alt="" />
            </div>
          </div>
          <div class="phone" @click="phone()">
            <div class="phometiotle">
              <div class="phoneleft">手机专场<span>(手机风暴)</span></div>
              <div class="phonesort">
                <ul>
                  <li v-for="(item, index) in lists" :key="index">
                    {{ item.a }}
                  </li>

                  <li>更多手机&gt;</li>
                </ul>
              </div>
            </div>
            <div class="phoneimage">
              <div class="first">
                <img src="../assets/phone1.png" alt="" />
              </div>
              <div class="second">
                <div class="third">
                  <img src="../assets/phone2.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="fourth">
                  <img src="../assets/phone3.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="fifth">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone4.jpg" alt="" />
              </div>
              <div class="sixth">
                <div class="seven">
                  <img src="../assets/phone5.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="eight">
                  <img src="../assets/phone6.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="nine">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone7.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="computer" @click="computer()">
            <div class="computertiotle">
              <div class="computerleft">手机专场<span>(手机风暴)</span></div>
              <div class="computersort">
                <ul>
                  <li v-for="(item, index) in listes" :key="index">
                    {{ item.a }}
                  </li>
                  <li>更多电脑&gt;</li>
                </ul>
              </div>
            </div>
            <div class="computerimage">
              <div class="first">
                <img src="../assets/phone1.png" alt="" />
              </div>
              <div class="second">
                <div class="third">
                  <img src="../assets/phone2.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="fourth">
                  <img src="../assets/phone3.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="fifth">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone4.jpg" alt="" />
              </div>
              <div class="sixth">
                <div class="seven">
                  <img src="../assets/phone5.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
                <div class="eight">
                  <img src="../assets/phone6.jpg" alt="" />
                  <p>荣耀8</p>
                  <i>￥2999</i>
                </div>
              </div>
              <div class="nine">
                <p>荣耀8</p>
                <i>￥2999</i>
                <img src="../assets/phone7.jpg" alt="" />
              </div>
            </div>
          </div>
          <!-- <hr style="height:1px;border:none;border-top:1px dashed #0066CC;" /> -->
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import "../components/main.less";
export default {
  data() {
    return {
      shoucangjia: false,
      mingzi: "",
      input3: "",
      list: [],
      lists: [],
      listes: [],
      imglist: [
        { src: require("../assets/1.jpg") },
        { src: require("../assets/2.jpg") },
        { src: require("../assets/3.jpg") },
        { src: require("../assets/4.jpg") },
      ],
    };
  },
  methods: {
    gouwuches() {
      this.$router.push("/money");
    },
    denglu() {
      this.$router.push("/login");
    },
    zhuce() {
      this.$router.push("/login");
    },
    phone() {
      this.$router.push("/information");
    },
    computer() {
      this.$router.push("/information");
    },
    get() {
      var _this = this;
      _this.$http
        .post("/api/user/main", {})
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
    post() {
      var _this = this;
      _this.$http
        .post("/api/user/sort", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.listes = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    computerget() {
      var _this = this;
      _this.$http
        .post("/api/user/sorts", {})
        .then(function (response) {
          if ((response.staus = 200)) {
            console.log(response.data.data);
            _this.listes = response.data.data;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted(){
    // var _this = this;
// var b = _this.$route.params.Isd;
    // console.log(b)
  },
  created() {
    var _this = this;
    _this.get();
    _this.post();
    _this.computerget();
    
    var a = _this.$route.params.Id;
    _this.mingzi = a ? a : "请登录";
    _this.shoucangjia = a ? true : false;
  },
};
</script>
