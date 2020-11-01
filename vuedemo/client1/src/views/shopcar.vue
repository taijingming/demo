<template>
    <div class="shopcar_box_all">
    <shopcarnav></shopcarnav>
    <carproduct></carproduct>
    <goaccount></goaccount>
    </div>
</template>
<script>
     import shopcarnav from '@/components/shopcar_components/shopcarnav.vue'
     import carproduct from '@/components/shopcar_components/carproduct.vue'
     import goaccount from '@/components/shopcar_components/goaccount.vue'
export default {
   
    components:{
        shopcarnav,
        carproduct,
        goaccount
    }
}
</script>
<style>
.shopcar_box_all{
    width: 100%;
    margin-top: 85px;
}
</style>