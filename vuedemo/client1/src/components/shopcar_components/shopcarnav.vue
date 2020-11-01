<template>
    <div class="shopcarnav">
        <p class="shangpin">商品</p>
        <p class="birth_card">生日牌</p>
        <p class="dan_price">单价</p>
        <p class="dan_price">数量</p>
        <p class="jine">金额</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.shopcarnav{
    height: 46px;
    width: 1202px;
    display: flex;
    margin: 150px auto 50px;
    border: 1px solid #E1E1E1;
    background-color: #FAFAFA;
    line-height: 46px;
    color: #684029;
    font-size: 14px;
}
.shopcarnav .shangpin{
    width: 285px;
    height: 44px;
    margin-left: 166px;
}
.shopcarnav .birth_card{
    width: 300px;
    height: 44px;
}
.shopcarnav .dan_price{
    width: 115px;
    height: 44px;
}
.shopcarnav .jine{
    width: 180px;
    height: 44px;
}
</style>