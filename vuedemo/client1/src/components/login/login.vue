<template>
  <div>
    <div class="myinput">
      <input
        type="text"
        class="zhanghao"
        v-model="inp1"
        @change="change1()"
        placeholder="请输入您的账号"
      />
      <input
        type="password"
        class="pwd"
        v-model="pwd"
        placeholder="请输入密码"
      />
      <div :style="{ visibility: isShow }" class="hidden1">{{ msg }}</div>
      <div class="loginBtn1" @click="login()">登录</div>
      <div class="anniu">
        <label class="anniu_l">
          <input type="checkbox" v-model="isChecked" checked />
          <span>记住账号</span>
        </label>
        <div>
          <router-link to="/resetpwd">忘记密码</router-link
          >&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/register">去注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      inp1: "",
      pwd: "",
      isShow: "hidden",
      msg: "",
      isChecked: "",
    };
  },
  methods: {
    change1(e) {
      this.inp1 = this.inp1.trim();
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      if (!res1) {
        this.msg = "号码有误，请重新输入";
        this.isShow = "visible";
      } else {
        this.isShow = "hidden";
      }
    },
    async login() {
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      let f = new FormData();
      f.append("mobile", this.inp1);
      f.append("pwd", this.pwd);
      if (res1) {
        this.$axios
          .post("/login", f, {
            header: { "content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            if (res.data.code == 2001) {
              //前端做缓存
              //后端缓存
              localStorage.setItem("isLogin", true);
              this.$router.push("/home");
            }
            if (res.data.code == 4001) {
              this.msg = "密码有误，请重新输入";
              this.isShow = "visible";
            }
            if (res.data.code == 4002) {
              this.msg = "账号不存在，请先注册";
              this.isShow = "visible";
            }
          });
      }
    },
  },
};
</script>
<style scoped='scoped'>
.myinput {
  padding: 20px 0;
}
.myinput > div {
  font-size: 12px;
}
.myinput input {
  margin: 15px 0;
  padding: 15px 5px;
}
.myinput input:focus {
  outline: none;
  padding: 0 5px;
}
.myinput .zhanghao,
.myinput .pwd {
  width: 300px;
  height: 28px;
}

.anniu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.loginBtn1 {
  width: 300px;
  height: 38px;
  background-color: #442818;
  font-size: 18px;
  color: #ffffff;
  line-height: 38px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.loginBtn1:hover {
  background-color: rgb(73, 25, 3);
}
.hidden1 {
  height: 30px;
  line-height: 30px;
  color: red;
}
input[type="checkbox"] {
  width: 10px;
  height: 10px;
  position: relative;
  top: 0px;
  left: -1px;
}
input::-webkit-input-placeholder {
  font-size: 12px;
  color: rgba(68, 40, 24, 0.5);
}
.anniu_l {
  padding: 0 5px;
  cursor: pointer;
}
</style>