<template>
  <div>
    <div class="resetBox">
      <span>找回密码</span>
      <component :is="componentId"></component>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      componentId: "reset1",
    };
  },
  components: {
    reset1: () => import("@/views/login/reset/reset1.vue"),
    reset2: () => import("@/views/login/reset/reset2.vue"),
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
</style>