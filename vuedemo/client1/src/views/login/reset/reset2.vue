<template>
  <div>
    <div class="resetpwd1Box">
      <input
        type="password"
        v-model="pwd1"
        @change="change1($event)"
        placeholder="请输入新密码"
      />
      <input
        type="password"
        v-model="pwd2"
        @change="change2($event)"
        placeholder="请再次确认密码"
      />
      <div class="resetBtn" @click="send()">重置密码</div>
    </div>
  </div>
</template>  
<script>
import { log } from "util";
export default {
  data() {
    return {
      pwd1: "",
      pwd2: "",
    };
  },
  methods: {
    change1(e) {
      let reg1 = /^[a-zA-Z]\w{5,17}$/;
      let res1 = reg1.test(this.pwd1);
      if (!res1) {
        e.target.style.border = "1px solid red";
      } else {
        e.target.style.border = "1px solid #000000";
      }
    },
    change2(e) {
      if (this.pwd1 != this.pwd2) {
        e.target.style.border = "1px solid red";
      } else {
        e.target.style.border = "1px solid #000000";
      }
    },
    send() {
      let reg1 = /^[a-zA-Z]\w{5,17}$/;
      let res1 = reg1.test(this.pwd1);
      if (res1 && this.pwd1 == this.pwd2) {
        this.$axios
          .post(
            "/reset2",
            {
              pwd: this.pwd1,
            },
            {
              header: { "content-Type": "application/x-www-form-urlencoded" },
            }
          )
          .then((res) => {
            if (res.data.code == 2001) {
              alert("密码修改成功");
              this.$router.push("/home");
            }
          });
      }
    },
  },
};
</script>
<style scoped="scoped">
.resetpwd1Box {
  margin: 50px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
}
.resetpwd1Box input {
  padding: 10px;
  height: 40px;
  margin: 10px 0;
}
input:focus {
  outline: none;
}
.resetBtn {
  width: 300px;
  height: 38px;
  text-align: center;
  background-color: #442818;
  font-size: 18px;
  color: #ffffff;
  line-height: 38px;
  border-radius: 5px;
}
</style>