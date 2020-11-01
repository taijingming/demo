<template>
  <div class="carproduct_box_all">
    <!-- v-if="flag" -->
    <div
      v-if="flag"
      v-for="(el, index) in pro_data"
      class="carproduct_box"
      :key="el.Gid"
    >
      <div class="pro_img">
        <img :src="el.img" alt="" />
      </div>
      <div class="pro_tdgz">
        <p class="time">最早配送时间{{ el.time }}</p>
        <p class="name">商品名称：{{ el.Gname }}</p>
        <p class="description">商品描述：{{ el.description | desc }}</p>
        <p class="guige">规格：{{ el.quality }}</p>
        <p class="zengsong">赠送{{ el.zengsong }}套餐具</p>
      </div>
      <div class="birthcard">
        <el-select v-model="value" placeholder="请选择生日牌">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="pro_price">￥{{ el.price }}.00</div>
      <div class="pro_sna">
        <button class="button" @click="sub(index)">-</button>
        <input class="input" type="text" v-model="el.number" />
        <button class="button" @click="add(index)">+</button>
      </div>
      <div class="pro_price">￥{{ el.sum_price }}.00</div>
      <p class="del" @click="del(el.Gid, index, $event)">
        <img src="../../assets/close.png" alt="" />
      </p>
    </div>
    <div class="carproduct_jiesuan">
      <div class="clear_car" @click="clear_all">全部清空</div>
      <div class="go_account">
        <p class="sum_price">总价：￥{{ total_price }}.00</p>
        <p class="discount">活动优惠：{{ discount }}</p>
        <p class="total">合计：￥{{ total }}.00</p>
        <!-- <button>结算</button> -->
      </div>
    </div>
  </div>
</template>
<style>
.carproduct_box_all {
  width: 1202px;
  margin: 0 auto;

  background-color: #fafafa;
}

.carproduct_box {
  display: flex;
  padding: 30px;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  color: #804029;
  position: relative;
}

.carproduct_box_all .pro_img img {
  width: 82px;
  height: 82px;
}

.pro_tdgz {
  padding: 10px;
  margin-left: 15px;
  margin-right: 60px;
}

.pro_tdgz .time {
  font-size: 12px;
  background-color: #cfac79;
  color: #fcf9db;
  text-align: center;
  padding: 3px 8px;
}

.pro_tdgz .description {
  font-size: 14px;
  color: #804029;
}

.pro_tdgz .guige {
  font-size: 14px;
  color: #d5bfa7;
}

.pro_tdgz .zengsong {
  font-size: 12px;
  color: #cecece;
  margin-top: 20px;
}
.carproduct_box .del img {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
}
.el-input__inner {
  height: 30px;
  width: 240px;
}

.birthcard,
.pro_price,
.pro_sna {
  margin-right: 60px;
  margin-top: 30px;
}

.pro_sna input {
  width: 50px;
  text-align: center;
  border: 1px solid #cecece;
  outline: none;
  padding: 1px;
}

.pro_sna button {
  width: 25px;
  border: 1px solid #cecece;
  padding: 1px;
  outline: none;
  background-color: #fff;
}

.carproduct_jiesuan {
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  border: 1px solid #cecece;
  margin-top: 100px;
  font-size: 14px;
  color: #804029;
}

.carproduct_jiesuan p {
  padding: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      number: 1,
      pro_data: [
        //     {
        //       img:
        //         "https://static.21cake.com/public/images/e7/b2/10/9a77616a382a9365310eb18bc7a84ff0.jpg",
        //       time: "2020-09-24 18:30~19:00",
        //       description: "Bailey's Love Triangle 百利甜情人",
        //       guige: "908g(2.0磅)",
        //       zengsong: "10",
        //       price: 298,
        //       sum_price: 298,
        //       number: 1,
        //     },
      ],
      total_price: 0,
      discount: 0,
      total: 0,
      flag: true,
      value: "",
      options: [
        {
          value: "选项1",
          label: "生日快乐",
        },
        {
          value: "选项2",
          label: "节日快乐",
        },
        {
          value: "选项3",
          label: "Happy Birthday",
        },
        {
          value: "选项4",
          label: "纪念日快乐",
        },
        {
          value: "选项5",
          label: "七夕快乐",
        },
      ],
    };
  },
  created() {
    let getImages = (_url) => {
      if (_url !== undefined) {
        let _u = _url.substring(8); //https就是8
        return "https://images.weserv.nl/?url=" + _u;
      }
    };
    if (localStorage.isLogin == "true") {
      this.$axios.get("/car").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].img = getImages(res.data[i].img);
          res.data[i].number = 1;
        }
        this.pro_data = res.data;
      });
    }
  },
  filters: {
    desc(a) {
      if (!a) {
        return "商品暂无描述";
      } else {
        return a;
      }
    },
  },
  methods: {
    add(index) {
      console.log("add");
      this.pro_data[index].number += 1;
      this.pro_data[index].sum_price =
        this.pro_data[index].number * this.pro_data[index].price;
      this.total_price =
        this.pro_data[index].number *
        this.pro_data[index].price *
        this.pro_data.length;
      this.total =
        this.pro_data[index].number *
          this.pro_data[index].price *
          this.pro_data.length -
        this.discount;
    },
    sub(index) {
      console.log("sub");
      if (this.pro_data[index].number > 1) {
        this.pro_data[index].number -= 1;
        this.pro_data[index].sum_price =
          this.pro_data[index].number * this.pro_data[index].price;
        this.total_price =
          this.pro_data[index].number *
          this.pro_data[index].price *
          this.pro_data.length;
        this.total =
          this.pro_data[index].number *
            this.pro_data[index].price *
            this.pro_data.length -
          this.discount;
      } else if (this.pro_data[index].number == 0) {
        this.pro_data[index].number = 1;
      }
    },
    async clear_all() {
      this.total_price = 0;
      this.total = 0;
      this.discount = 0;
      this.flag = false;
      if (localStorage.isLogin) {
        await this.$axios.get("/qingkongCar").then((res) => {
          if (res.data.code == 2001) {
            console.log(res.data.info);
          }
        });
      }
    },
    async del(arg, arg1, e) {
      console.log(arg, arg1);
      await this.$axios
        .get("/deleteCar", {
          params: {
            id: arg,
          },
        })
        .then((res) => {
          if (res.data.code == 2001) {
            this.pro_data.splice(arg1, 1);
          }
        });
    },
  },
};
</script>