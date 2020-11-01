<template>
    <div class="enterprise-box">
        <div class="dingzhi ">  
            <p><img :src="imgs[0].title" alt=""></p>
            <a class="go_dingzhi_box" href="">
                <router-link to="/godingzhi" class="go_dingzhi">去定制>></router-link>
                <img :src="imgs[1].img" alt="">
            </a>
        </div>
        <div class="shop_link">
            <p><img :src="imgs[2].link" alt=""></p>
            <p class="tel">联系电话：0571-88801221</p>
            <p>联系邮箱：qiye@21cake.com</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgs:[{title:"https://b.21cake.com/activity/site/business_area/img/d3c59df1e0f84c6fcd2ec7020c930966.png"},
                {img:"https://b.21cake.com/activity/site/business_area/img/f38c4dea796195a9ca46f85c1a1858b2.jpg"},
                {link:"https://b.21cake.com/activity/site/business_area/img/ways-1.png"}
            ]
        }
    },
}
</script>
<style>
    .dingzhi{
        position: relative;
        margin-top: 200px;
    }
    .go_dingzhi_box{
        display: inline-block;
        margin-top: 40px;
    }
    .go_dingzhi{
        color: #BB9772;
        font-size: 12px;
        position: absolute;
        right: 92px;
        top: 55px;
    }
    .shop_link{
        margin-top: 100px;
    }
    .shop_link .tel{
        margin-top: 30px;
    }
    .shop_link p{
        font-size: 16px;
        color: #73472E;
        margin-top: 10px;
    }
</style>