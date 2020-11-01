<template>
  <div>
    <div class="userinfo">
      <div class="touxiangBox">
        <div class="touxiang touxiang_left">
          <img :src="img" alt="" />
        </div>
        <div class="user1">
          <div class="info">账号: {{ phone }}</div>
          <div class="u1">
            <router-link to="/editinfo">编辑个人资料</router-link>
          </div>
          <div @click="useraddress()" class="u2">地址管理</div>
          <div class="u3">订单管理</div>
        </div>
      </div>
      <div class="touxiang_right">
        <div class="yue">
          <div class="iconfont icon-yue"></div>
          <p>余额: 0￥</p>
        </div>
        <div class="quan">
          <div class="iconfont icon-youhuiquan"></div>
          <p>优惠券：0张</p>
        </div>
        <div class="daijinka">
          <div class="iconfont icon-daijinkaquan"></div>
          <p>代金卡：0张已用</p>
        </div>
      </div>
      <div class="userinfo_Body">
        <div class="userinfo_tit">
          <div class="uservip">会员中心</div>
          <p>您当前的身份是:<b>普通用户</b></p>
        </div>
        <img src="@/assets/userimg.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      phone: "",
      toux: "",
      img: "",
    };
  },
  methods: {
    changes() {
      console.log(this.toux);
    },
    useraddress() {
      this.$router.push("/useraddress");
    },
  },
  mounted() {
    this.$axios("/userinfo").then((res) => {
      // console.log(localStorage);
      this.phone = res.data.phone;
      this.img = res.data.img[0].img;
    });
  },
};
</script>
<style scoped='scoped'>
.user1 {
  font-size: 14px;
  margin-left: 5px;
}
.user1 > div {
  margin-top: 15px;
}
.touxiangBox,
.touxiang_right > div {
  display: flex;
  background-color: #f6f5f3;
  padding: 20px;
  height: 200px;
}
.touxiang_right > div {
  display: block;
  padding: 60px 80px;
}
.touxiang_right .iconfont {
  display: block;
  font-size: 40px;
  color: coral;
  /* padding: 20px; */
  margin-bottom: 25px;
}
.userinfo {
  margin: 50px auto;
  width: 80%;
  /* height: 650px; */
  background-color: #f6f5f3;
  display: flex;
  position: relative;
  top: 10px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.touxiang,
.touxiang img {
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  text-align: center;
  line-height: 100px;
  background-color: #555;
}
.userinfo .info {
  color: coral;
  font-size: 18px;
}
.touxiang > input {
  margin-left: 15px;
}
.touxiang_pic {
  position: absolute;
  top: 20px;
  left: 15px;
}
.touxiang_right {
  display: flex;
}
.touxiang_right p {
  font-size: 14px;
}
.touxiang_right > div {
  width: 220px;
}
.u1,
.u2,
.u3 {
  cursor: pointer;
}
.u1:hover,
.u2:hover,
.u3:hover {
  color: coral;
}
.userinfo_Body {
  width: 100%;
  background-color: #f6f5f3;
  text-align: center;
  padding: 30px 0 0;
  margin-bottom: 10px;
}
.uservip {
  font-size: 18px;
  color: coral;
  padding: 10px 0;
  font-weight: 700;
}
</style>