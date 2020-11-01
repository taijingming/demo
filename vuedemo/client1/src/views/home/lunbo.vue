<template>
  <div id="slider">
    <div class="window" @mouseover="stop" @mouseleave="play">
      <ul class="container" :style="containerStyle">
        <li>
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[sliders.length - 1].img"
            alt=""
          />
        </li>
        <!-- v-for="(item, index) in sliders" :key="index" -->
        <li v-for="(item, index) in sliders" :key="index">
          <router-link :to="`${image1}`">
            <img
              :style="{ width: imgWidth + 'px' }"
              :src="sliders[index].img"
              alt=""
              @click="image2(index)"
            />
          </router-link>
        </li>
        <li>
          <img
            :style="{ width: imgWidth + 'px' }"
            :src="sliders[0].img"
            alt=""
          />
        </li>
      </ul>
      <ul class="direction">
        <li class="left" @click="move(1519, 1, speed)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            ersion="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"
            />
          </svg>
        </li>
        <li class="right" @click="move(1519, -1, speed)">
          <svg
            class="icon"
            width="30px"
            height="30.00px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"
            />
          </svg>
        </li>
      </ul>
      <ul class="dots">
        <li
          v-for="(dot, i) in sliders"
          :key="i"
          :class="{ dotted: i === currentIndex - 1 }"
          @click="jump(i + 1)"
        ></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "slider",
  props: {
    initialSpeed: {
      type: Number,
      default: 30,
    },
    initialInterval: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      sliders: [
        {
          img:
            "https://images.weserv.nl/?url=static.21cake.com/upload/images/8605b1014c08216f826411bd67555830.jpg",
        },
        {
          img:
            "https://images.weserv.nl/?url=static.21cake.com/upload/images/160eb1b5c21c9f1b30bebb45a0cb91ad.jpg",
        },
        {
          img:
            "https://images.weserv.nl/?url=static.21cake.com/upload/images/9fedee0ae661ba0effa2d8dedf8cc4f0.jpg",
        },
        {
          img:
            "https://images.weserv.nl/?url=static.21cake.com/upload/images/2c0b6f6e574c8a9e89d747a5bb4095ec.jpg",
        },
        {
          img:
            "https://images.weserv.nl/?url=static.21cake.com/upload/images/844e0d2640e384013f0f20383df5f251.jpg",
        },
      ],
      imgWidth: 1519,
      currentIndex: 1,
      distance: -1519,
      transitionEnd: true,
      speed: this.initialSpeed,
      image1: "1",
    };
  },
  computed: {
    containerStyle() {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`,
      };
    },
    interval() {
      return this.initialInterval * 1000;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.play();
      window.onblur = function () {
        this.stop();
      }.bind(this);
      window.onfocus = function () {
        this.play();
      }.bind(this);
    },
    move(offset, direction, speed) {
      console.log(speed);
      if (!this.transitionEnd) return;
      this.transitionEnd = false;
      direction === -1
        ? (this.currentIndex += offset / 1519)
        : (this.currentIndex -= offset / 1519);
      if (this.currentIndex > 5) this.currentIndex = 1;
      if (this.currentIndex < 1) this.currentIndex = 5;

      const destination = this.distance + offset * direction;
      this.animate(destination, direction, speed);
    },
    animate(des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp);
        this.temp = null;
      }
      this.temp = window.setInterval(() => {
        if (
          (direc === -1 && des < this.distance) ||
          (direc === 1 && des > this.distance)
        ) {
          this.distance += speed * direc;
        } else {
          this.transitionEnd = true;
          window.clearInterval(this.temp);
          this.distance = des;
          if (des < -7595) this.distance = -1519;
          if (des > -1519) this.distance = -1519;
        }
      }, 20);
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1;
      const offset = Math.abs(index - this.currentIndex) * 1519;
      const jumpSpeed =
        Math.abs(index - this.currentIndex) === 0
          ? this.speed
          : Math.abs(index - this.currentIndex) * this.speed;
      this.move(offset, direction, jumpSpeed);
    },
    play() {
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.timer = window.setInterval(() => {
        this.move(1519, -1, this.speed);
      }, this.interval);
    },
    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    },
    image2(index) {
      if (index == "0") {
        this.image1 = "1";
      } else if (index == "1") {
        this.image1 = "2";
      } else if (index == "2") {
        this.image1 = "3";
      } else if (index == "3") {
        this.image1 = "4";
      } else if (index == "4") {
        this.image1 = "5";
      }
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,
ul {
  list-style: none;
}
#slider {
  text-align: center;
}
.window {
  position: relative;
  width: 1519px;
  height: 520px;
  margin: 0 auto;
  overflow: hidden;
}
.window img {
  height: 540px;
  margin-top: 70px;
}
.container {
  display: flex;
  position: absolute;
}
.left,
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  cursor: pointer;
}
.left {
  left: 2%;
  padding-left: 12px;
  padding-top: 10px;
}
.right {
  right: 2%;
  padding-right: 12px;
  padding-top: 10px;
}
img {
  user-select: none;
}
.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 3px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: #333;
  cursor: pointer;
}
.dots .dotted {
  background-color: orange;
}
</style>