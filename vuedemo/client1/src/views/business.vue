<template>
    <div>
        <div class="qiye_daohang_box">
            <div class="table_row">
                <tablerow v-for="el in img" :data1=el></tablerow>
            </div>
        </div>
        <div class="company-box">
            <logos></logos>
            <cards></cards>
            <dingzhi></dingzhi>
            <livemassage></livemassage>
        </div>
       
    </div>
</template>
<script>
    import tablerow from '@/components/qiye_components/tablerow.vue'
    import logos from '@/components/qiye_components/logos.vue'
    import cards from '@/components/qiye_components/cards.vue'
    import dingzhi from '@/components/qiye_components/dingzhi.vue'
    import livemassage from '@/components/qiye_components/livemassage.vue'
    export default {
        components: {
            tablerow,
            logos,
            cards,
            dingzhi,
            livemassage
        },
        data() {
            return {
                img: [
                    "https://b.21cake.com/activity/site/business_area/img/a93b7d402c6b4f4399d7aa2d3f75668e.png",
                    "https://b.21cake.com/activity/site/business_area/img/f4dcb6e49a48f4c2df58c82ad41cd12e.png",
                    "https://b.21cake.com/activity/site/business_area/img/72d9f57323a18656c191b4a42dab0442.png",
                    "https://b.21cake.com/activity/site/business_area/img/6a165b7061ea195682ff6baf5c9b718c.png"
                ],

            }
        },

    }
</script>
<style>
    a{
        text-decoration: none;
    }
    .qiye_daohang_box {
        width: 100%;
        height: 300px;
        background-image: url(../assets/e8b3810b6ee8c7bba4bab60be854eda6.png);
        background-size: 1920px 300px;
        background-repeat: no-repeat;
        line-height: 300px;
        margin-top: 84px;
    }

    .table_row {
        display: flex;
        width: 70%;
        margin: 0 auto;
    }
    .company-box{
        width: 100%;
    }
</style>