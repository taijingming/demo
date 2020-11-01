<template>
  <div>
    <div class="editinfoBox">
      <div class="tip">基本资料</div>
      <el-divider content-position="left"></el-divider>
      <div class="editBody">
        姓 名：<input
          type="text"
          v-model="intName"
          placeholder="请输入您的名字"
        /><br /><br />
        性 别：
        <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio><br /><br />
        手 机：<span>{{ intPhone }}</span> <br /><br />
        邮 箱：<input
          type="text"
          v-model="intEmail"
          @change="change1($event)"
          placeholder="请输入邮箱"
        /><br /><br />
        <div class="block">
          <span class="demonstration">出生日期：</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
          <div
            class="block1"
            style="
              border-top: 1px dashed #cccccc;
              height: 1px;
              overflow: hidden;
            "
          ></div>
          <!-- <div class="editBtn" @click="save1()">保存</div> -->
          <el-button class="editBtn" :plain="true" @click="save1()"
            >保存</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
  </div>
</template>
<script>
import { log } from "util";
export default {
  data() {
    return {
      intName: "",
      intPhone: "",
      intEmail: "",
      radio: "1",
      input: "",
      value1: "",
      value2: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    };
  },
  methods: {
    change1(e) {
      let reg1 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
      if (reg1.test(this.intEmail)) {
        e.target.style.border = "1px solid #000000";
      } else {
        e.target.style.border = "1px solid red";
      }
    },
    save1() {
      let reg1 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;

      if (this.radio == "1") {
        this.radio = "男";
      } else {
        this.radio = "女";
      }
      this.value2 = `${new Date().getFullYear(this.value2)}-${
        new Date().getMonth(this.value2) + 1
      }-${new Date().getDate(this.value2)}`;
      let f = new FormData();
      f.append("intName", this.intName);
      f.append("intEmail", this.intEmail);
      f.append("radio", this.radio);
      f.append("birth", this.value2);
      // console.log(reg1.test(this.intEmail));
      if (reg1.test(this.intEmail) && this.intName) {
        this.$axios
          .post("/editinfo", f, {
            header: { "content-Type": "application/x-www-form-urlencoded" },
          })
          .then((res) => {
            if (res.data.code == 2001) {
              this.$message({
                message: "恭喜你，保存信息成功",
                type: "success",
                offset: 106,
              });
              this.$router.push("/userinfo");
            }
          });
      } else {
        this.$message({
          message: "请先完善信息",
          type: "error",
          offset: 106,
        });
      }
    },
  },
  mounted() {
    if (localStorage.isLogin) {
      this.$axios("/userinfo").then((res) => {
        this.intPhone = res.data.phone;
        // this.img = res.data.img[0].img;
      });
    }
  },
};
</script>
<style scoped="scoped">
input::-webkit-input-placeholder {
  font-size: 12px;
  color: rgba(68, 40, 24, 0.5);
}
.editinfoBox input {
  padding: 8px 15px 8px 5px;
  border: 1px solid rgb(220, 223, 230);
}
input:focus {
  outline: none;
}
.editBody {
  padding: 15px 0;
}
.editinfoBox {
  position: relative;
  top: 50px;
  margin: 100px auto;
  width: 600px;
  padding: 50px;
  border: 1px solid #ccc;
}
.editBtn {
  width: 100px;
  padding: 5px 10px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
  border-radius: 5px;
}
.editBtn:hover {
  background-color: #442818;
  color: #ccc;
}
.block1 {
  margin-top: 20px;
}
.tip {
  color: #442818;
  font-size: 18px;
  font-weight: 700;
}
</style>