<template>
  <div class="registerBox">
    <img :src="bgimg" width="1580" height="680" alt />
    <div class="register">
      <div>用户注册</div>
      <input
        type="text"
        @change="change1($event)"
        v-model="inp1"
        placeholder="请输入手机号"
      />
      <input
        type="password"
        @change="change2($event)"
        v-model="inp2"
        placeholder="密码：请输入6~18字符，需同时英文开头和数字"
      />

      <input
        type="password"
        @change="change3($event)"
        v-model="inp3"
        placeholder="确认密码"
      />
      <label for="">
        头像: <input type="file" @change="change4($event)" />
      </label>

      <div class="duanxinyanzhengBox">
        <input
          type="text"
          class="duanxinyanzheng"
          v-model="inp4"
          placeholder="短信验证码"
        />
        <span class="getVerif" @click="verif()" v-html="svg"></span>
      </div>
      <div>
        <br />
        <p>请选择生日</p>
        <input type="date" v-model="inp5" placeholder="请选择生日" name id />
      </div>
      <div :style="{ visibility: isShow }" class="myint">{{ msg }}</div>
      <div class="registerBtn" @click="send()">注册</div>
      <div class="duanxinyanzhengBox1">
        <input type="checkbox" checked name id />
        <span>已阅读并同意</span>
        <a href="#">21会员协议</a>
        <span>和</span>
        <a href="#">隐私和保护</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file1: "",
      isShow: "hidden",
      inp1: "",
      inp2: "",
      inp3: "",
      inp4: "",
      inp5: "",
      svg: "获取验证码",
      msg: "",
      bgimg:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600838323094&di=fd33d4a13d45e679fd5da42edff802a6&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F03%2F55%2F35%2F73579c67fb01a82.jpg",
    };
  },

  methods: {
    change1(e) {
      this.inp1 = this.inp1.trim();
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      if (!res1) {
        // visibility: visible;
        this.msg = "号码有误，请重新输入";
        this.isShow = "visible";
        console.log("err");
      } else {
        this.isShow = "hidden";
      }
    },
    change2(e) {
      this.inp2 = this.inp2.trim();
      let reg2 = /^[a-zA-Z]\w{5,17}$/;
      let res2 = reg2.test(this.inp2);
      if (!res2) {
        // visibility: visible;
        this.msg = "密码格式错误，请重新输入";
        this.isShow = "visible";
        console.log("err");
      } else {
        this.isShow = "hidden";
      }
    },
    change3(e) {
      this.inp3 = this.inp3.trim();
      this.inp2 = this.inp2.trim();
      if (!(this.inp2 == this.inp3)) {
        this.msg = "两次密码不一致，请重新输入";
        this.isShow = "visible";
        console.log("err");
      } else {
        this.isShow = "hidden";
      }
    },

    change4(e) {
      console.log(e.target.files);
      this.file1 = e.target.files[0];
    },
    send() {
      let reg1 = /^1[3456789]\d{9}$/;
      let reg2 = /^[a-zA-Z]\w{5,17}$/;
      let res1 = reg1.test(this.inp1);
      let res2 = reg2.test(this.inp2);
      //获取用户交互结果 发给后端,
      let f = new FormData();
      f.append("mobile", this.inp1);
      f.append("pwd1", this.inp2);
      f.append("verif", this.inp4);
      f.append("birth", this.inp5);
      f.append("touxiang", this.file1);
      console.log(res1, res2, this.inp2 == this.inp3);
      if (res1 && res2 && this.inp2 == this.inp3) {
        this.$axios
          .post("/register", f, {
            header: { "content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            if (res.data.code == 2001) {
              this.$router.push("/login");
            }
          });
      }
    },
    verif() {
      console.log("6666");
      this.$axios("/verif").then((res) => {
        this.svg = res.data.data;
        this.isShow = "";
      });
    },
  },
};
</script>
<style scope="scoped">
.registerBox {
  position: relative;
  height: 980px;
  top: 100px;
}
.register {
  display: flex;
  flex-direction: column;
  width: 388px;
  position: absolute;
  top: 0;
  right: 200px;
  border: 1px solid #ccc;
  padding: 20px;
  justify-content: flex-start;
  background-color: #ffffff;
}
.duanxinyanzhengBox {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
.register input {
  padding: 15px 10px;
  margin-top: 20px;
  height: 28px;
  width: 300px;
  border: 1px solid #ccc;
}
.register input:focus {
  outline: none;
}
.register .duanxinyanzheng {
  width: 180px;
}
.register .registerBtn {
  width: 300px;
  height: 38px;
  text-align: center;
  background-color: #442818;
  font-size: 18px;
  color: #ffffff;
  line-height: 38px;
  border-radius: 5px;
  cursor: pointer;
}
.registerBtn:hover {
  background-color: rgb(73, 25, 3);
}
input[type="checkbox"] {
  width: 13px;
  height: 13px;
}
input[type="file"] {
  border: 0;
  margin: 0;
  height: 40px;
}
.myint {
  height: 35px;
  color: red;
}
.duanxinyanzhengBox1 {
  padding: 10px 20px;
  font-size: 14px;
  position: relative;
}
.duanxinyanzhengBox1 > input {
  position: absolute;
  top: -8px;
  left: -4px;
}
.duanxinyanzhengBox .getVerif {
  font-size: 12px;
  display: block;
  color: #cccccc;
  margin-left: 18px;
  padding: 8px 18px;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  font-size: 12px;
  color: rgba(68, 40, 24, 0.5);
}
</style>