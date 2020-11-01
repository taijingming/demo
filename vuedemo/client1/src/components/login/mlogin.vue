<template>
  <div>
    <div class="myinput">
      <input
        type="text"
        v-model="inp1"
        @change="change1($event)"
        class="inp1"
        placeholder="请输入手机号"
      />
      <div class="yanzheng">
        <input
          type="text"
          v-model="verif"
          class="inp2"
          placeholder="请输入验证码"
        />
        <span class="yanzheng-r" @click="verif1()" v-html="svg"></span>
      </div>
      <div :style="{ visibility: isShow }" class="hidden1">{{ msg }}</div>
      <div class="btn" @click="login()">登录</div>
      <div class="anniu">
        <div>
          <input type="checkbox" checked name id />
          <span>记住账号</span>
        </div>
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
  data() {
    return {
      isShow: "hidden",
      svg: "获取验证码",
      inp1: "",
      verif: "",
      msg: "",
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
        console.log("err");
      } else {
        this.isShow = "hidden";
      }
    },
    verif1() {
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      if (res1) {
        this.$axios("/verif").then((res) => {
          this.svg = res.data.data;
        });
      } else {
        alert("请输入正确号码");
      }
    },

    login() {
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      let f = new FormData();
      f.append("mobile", this.inp1);
      f.append("verif", this.verif);
      if (res1 && this.verif) {
        this.$axios
          .post("/login", f, {
            header: { "content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            // console.log(res.data.code);
            if (res.data.code == 2001) {
              localStorage.setItem("isLogin", true);
              this.$router.push("/home");
            }
            if (res.data.code == 4001) {
              this.msg = "验证码有误，请重新输入";
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
input:focus {
  outline: none;
}
.myinput {
  padding: 20px 0;
}
.anniu {
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.inp1 {
  width: 300px;
  height: 28px;
}
.inp2 {
  width: 180px;
  height: 28px;
  margin-right: 20px;
}
.myinput > div {
  font-size: 12px;
}
.myinput input {
  margin: 15px 0;
  padding: 15px 5px;
}
.btn {
  width: 300px;
  height: 38px;
  text-align: center;
  background-color: rgb(73, 25, 3);
  font-size: 18px;
  color: #ffffff;
  line-height: 38px;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgb(73, 25, 3);
}
.yanzheng {
  display: flex;
  justify-items: flex-start;
}
.yanzheng-r {
  margin-left: 15px;
  display: block;
  height: 38px;
  text-align: center;
  line-height: 55px;
  cursor: pointer;
}
.yanzheng-r:hover {
  color: rgb(73, 25, 3);
}
.hidden1 {
  height: 30px;
  line-height: 30px;
  color: red;
}
</style>