<template>
  <div>
    <lunbo></lunbo>
    <div class="box">
      <div class="imgbox">
        <a href="#imgbox1">
          <img :src="arr[0].img" alt="" />
        </a>
        <a href="#imgbox2">
          <img :src="arr[1].img" alt="" />
        </a>
        <a href="#imgbox3">
          <img :src="arr[2].img" alt="" />
        </a>
        <a href="#imgbox4">
          <img :src="arr[3].img" alt="" />
        </a>
        <a href="#imgbox5">
          <img :src="arr[4].img" alt="" />
        </a>
      </div>
      <div class="text-part">
        <span class="headline">新品</span>
        <span>/</span>
        <span>专区</span>
      </div>
      <new-product id="imgbox1"></new-product>
      <div class="text-part">
        <span class="headline">生日</span>
        <span>/</span>
        <span>专区</span>
      </div>
      <birthday id="imgbox2"></birthday>
      <div class="text-part">
        <span class="headline">儿童</span>
        <span>/</span>
        <span>专区</span>
      </div>
      <children id="imgbox3"></children>
      <div class="text-part">
        <span class="headline">聚会</span>
        <span>/</span>
        <span>专区</span>
      </div>
      <meeting id="imgbox4"></meeting>
      <div class="text-part">
        <span class="headline">活动门</span>
        <span>/</span>
        <span>是被吸引了吗</span>
      </div>
      <dodge-gate id="imgbox5"></dodge-gate>
      <div class="text-part">
        <span class="headline">廿一客</span>
        <span>/</span>
        <span>文章</span>
      </div>
      <sit-on></sit-on>
    </div>
  </div>
</template>
<script>
import buttompart from "@/views/buttompart.vue";
export default {
  data() {
    return {
      arr: [
        {
          img:
            "https://static.21cake.com/upload/images/bc369fca5990e32df765d24e08221112.jpg",
        },
        {
          img:
            "https://static.21cake.com/upload/images/9d85677ea56806bff908c431f7c764f7.jpg",
        },
        {
          img:
            "https://static.21cake.com/upload/images/43a4c974312a2be97a1d0d6616c3ab23.jpg",
        },
        {
          img:
            "https://static.21cake.com/upload/images/9e3f7fdd852d1b35f318076e3575412c.jpg",
        },
        {
          img:
            "https://static.21cake.com/upload/images/37752f6805d166b02e011c3b5c3b4972.png",
        },
      ],
    };
  },
  components: {
    lunbo: () => import("./home/lunbo.vue"),
    newProduct: () => import("./home/newProduct.vue"),
    birthday: () => import("./home/birthday"),
    children: () => import("./home/children"),
    meeting: () => import("./home/meeting"),
    dodgeGate: () => import("./home/dodgeGate"),
    sitOn: () => import("./home/sitOn"),
    buttompart,
  },

  mounted() {
    let getImages = (_url) => {
      if (_url !== undefined) {
        let _u = _url.substring(8); //https就是8
        // console.log("处理图片", "https://images.weserv.nl/?url=" + _u);
        return "https://images.weserv.nl/?url=" + _u;
      }
    };
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].img = getImages(this.arr[i].img);
    }
    if (localStorage.isLogin == "true") {
      // console.log("一登录");
    }
  },
};
</script>

<style scoped="scoped">
.box {
  width: 1100px;
  margin: 0 auto;
}
.imgbox {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.imgbox img {
  width: 200px;
  height: 100px;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #fafafa;
}
.headline {
  font-size: 26px;
}
.text-part {
  margin-top: 40px;
}
.text-part span {
  margin: 5px;
  color: #724228;
}
</style>