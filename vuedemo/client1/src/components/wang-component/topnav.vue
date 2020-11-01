<template>
  <div class="top-nav">
    <div class="nav-left">
      <div style="margin-left: 30px">logo</div>
      <div class="nav-mid">
        <router-link to="/home">首页</router-link>
        <router-link to="/cake">蛋糕</router-link>
        <router-link to="/bread">面包</router-link>
        <router-link to="/ice">冰淇淋</router-link>
        <router-link to="/coffice">咖啡下午茶</router-link>
        <router-link to="/aroundcity">全球送</router-link>
        <router-link to="/business">企业专区</router-link>
      </div>
    </div>
    <div class="nav-right">
      <span>APP下载</span>
      <span>上海↓</span>
      <router-link to="">消息</router-link>
      <template v-if="isShow">
        <router-link to="/login">登录</router-link>
        <span style="margin: 0 -20px">/</span>
        <router-link to="/register">注册</router-link>
      </template>
      <el-dropdown v-else>
        <span class="el-dropdown-link" @click="toRegister()">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">我的订单</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus"
            >我的优惠券</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-circle-plus-outline"
            >我的纪恋日</el-dropdown-item
          >
          <el-dropdown-item @click.native="qiuet()" icon="el-icon-check"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <router-link to="/shopcar">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: "true",
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/userinfo");
    },
    qiuet() {
      localStorage.isLogin = null;
      this.$router.push("/login");
    },
  },
  mounted() {
    if (localStorage.isLogin == "true") {
      this.isShow = "";
    } else {
      this.isShow = "true";
    }
  },
 
};
</script>

<style scoped="scoped">
a {
  color: #584133;
  text-decoration: none;
  margin: 10px 20px;
  line-height: 65px;
  font-size: 14px;
}
.nav-right .el-dropdown-link {
  color: #584133;
}
.el-dropdown-link:hover,
a:hover {
  color: #be9b78;
}

.nav-left {
  display: flex;
}

.nav-left div {
  line-height: 80px;
}

.nav-mid {
  margin-left: 50px;
}
.top-nav {
  position: fixed;
  display: flex;
  top: 0;
  padding-left: 100px;
  background-color: white;
  width: 100%;
  box-shadow: 5px 5px 5px #e9e9e9;
  z-index: 9999;
}
.nav-right {
  line-height: 75px;
  margin-left: 100px;
}
span {
  font-size: 14px;
  cursor: pointer;
  margin: 0 10px;
  color: #584133;
}
.el-dropdown-link {
  cursor: pointer;
  color: #be9b78;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
