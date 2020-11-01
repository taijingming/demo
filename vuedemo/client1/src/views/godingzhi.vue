<template>
    <div class="dingzhi_box_all">
        <div class="godingzhi_topbg">
            <img :src="img[0]" alt="">
        </div>
        <prodetails></prodetails>
        <div class="dingzhi_centerimg">
            <img :src="img[1]" alt="">
        </div>
        <protuijian></protuijian>
    </div>
</template>
<script>
     import prodetails from '@/components/dingzhi_components/prodetails.vue'
     import protuijian from '@/components/dingzhi_components/protuijian.vue'
export default {
    components:{
        prodetails,
        protuijian
    },
    data() {
        return {
            img:["https://static.21cake.com/themes/site/img/goods/banner/PC-DetailsWinImg-248-01.jpg",
            "https://static.21cake.com/public/images/b5/6c/aa/c93d377af16f56d0bdf719c21c533a07.jpg?1482844896#w"
        ]
        }
    },
}
</script>
<style>
    .dingzhi_box_all{
        width: 100%;
    }
    .godingzhi_topbg{
        width: 100%;
    }
    .godingzhi_topbg img{
        width: 100%;
    }
    .dingzhi_centerimg{
        width: 1050px;
        margin: 0 auto;
    }
</style>