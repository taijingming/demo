<template>
  <div>
    <input
      type="text"
      v-model="inp1"
      ref="myinput"
      @input="change1($event)"
      :style="{ border: xx }"
      placeholder="请输入手机号"
    />
    <div class="picBox">
      <input type="text" v-model="verif1" placeholder="请输入验证码" />
      <span @click="verif()" v-html="msg"></span>
    </div>
    <!-- <template> -->
    <el-button class="next1" @click="send()" :plain="true">下一步</el-button>
    <!-- </template> -->
    <!-- <div class="next1" @click="send()">下一步</div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      inp1: "",
      verif1: "",
      msg: "点击获取验证码",
      xx: "",
    };
  },
  mounted() {
    this.$refs.myinput.focus();
  },
  methods: {
    change1(e) {
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      if (!res1) {
        this.xx = "1px solid red";
      } else {
        this.xx = "1px solid #000000";
      }
    },
    verif() {
      let reg1 = /^1[3456789]\d{9}$/;
      let res1 = reg1.test(this.inp1);
      if (res1) {
        this.$axios("/verif").then((res) => {
          this.msg = res.data.data;
        });
      } else if (!res1) {
        this.$refs.myinput.style.border = "1px solid red";
      }
    },
    send() {
      let f = new FormData();
      f.append("mobile", this.inp1);
      f.append("verif", this.verif1);
      this.$axios
        .post("/resetpwd", f, {
          header: { "content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 2001) {
            this.$parent.componentId = "reset2";
          } else if (res.data.code == 4001) {
            this.$message({
              showClose: true,
              message: res.data.info,
              type: "error",
              offset: 80,
            });
          }
        });
    },
  },
};
</script>
<style scoped='scoped'>
.resetBox {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 100px auto;
}
.resetBox > span {
  font-size: 20px;
  color: rgb(141, 106, 84);
}
input {
  padding: 10px;
  height: 40px;
  width: 300px;
  margin: 10px 0;
}
.resetBox input:focus {
  outline: none;
}
.picBox {
  height: 40px;
  line-height: 40px;
}
span {
  margin: 30px 0;
  height: 42px;
  line-height: 42px;
  text-align: center;
}
.next1 {
  width: 300px;
  margin-top: 25px;
  background-color: #442818;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.next1:hover {
  background-color: rgb(73, 25, 3);
}
</style>