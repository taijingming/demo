<template>
  <div>
    <div class="loginbox">
      <img
        width="100%"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600838323094&di=bdb7a178bd78b776a503ff3c89c27021&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201408%2F18%2F20140818154735_NrErn.jpeg"
        alt
      />
      <div class="loginbox_title">
        <div class="loginT">
          <div class="loginT_l" @click="fn('userLogin')">账号密码登录</div>
          <div>|</div>
          <div class="loginT_r" @click="fn1('mLogin')">手机验证码登录</div>
        </div>
        <component :is="componentId"></component>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from "@/components/login/login.vue";
import mLogin from "@/components/login/mlogin.vue";
export default {
  data() {
    return {
      componentId: "userLogin",
    };
  },
  components: {
    userLogin,
    mLogin,
  },
  methods: {
    fn(arg) {
      console.log(arg);
      this.componentId = arg;
    },
    fn1(arg) {
      this.componentId = arg;
    },
  },
};
</script>
<style scoped='scoped'>
.loginbox {
  position: relative;
  top: 100px;
}
.loginbox_title {
  width: 388px;
  padding: 50px;
  border: 1px solid #ccc;
  position: absolute;
  top: 0px;
  right: 200px;
  background-color: #ffffff;
}
.loginT {
  display: flex;
  justify-content: space-around;
}
.loginT .loginT_l,
.loginT .loginT_r {
  cursor: pointer;
}
.loginT .loginT_l:hover,
.loginT .loginT_r:hover {
  color: rgb(73, 25, 3);
}
</style>