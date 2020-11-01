<template>
  <div>
    <topnav></topnav>
    <router-view></router-view>
    <buttompart></buttompart>
  </div>
</template>
<script>
import topnav from "./components/wang-component/topnav.vue";
// import goodmodule from "./components/wang-component/goodmodule.vue";
import buttompart from "./views/buttompart.vue";

export default {
  name: "App",
  components: {
    topnav,
    // goodmodule,
    buttompart,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
