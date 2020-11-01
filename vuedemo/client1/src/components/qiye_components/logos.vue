<template>
    <div class="logos enterprise-box">
        <p><img :src="img[0].company" alt="" class="logos_img1"></p>
        <a href="">
            <img class="logos_img2" :src="img[1].logos[0].logo1" alt="">
            <p>{{img[1].logos[0].title}}</p>
        </a>
        <a href="">
            <img class="logos_img3" :src="img[1].logos[1].logo1" alt="">
            <p>{{img[1].logos[1].title}}</p>
        </a>
        <a href="">
            <img class="logos_img4" :src="img[1].logos[2].logo1" alt="">
            <p>{{img[1].logos[2].title}}</p>
        </a>
        <a href="">
            <img class="logos_img5" :src="img[1].logos[3].logo1" alt="">
            <p>{{img[1].logos[3].title}}</p>
        </a>
        <a href="">
            <span class="logos_other">
                <i></i>
                <i></i>
                <i></i>
            </span>
            <p>其他机构</p>
        </a>
    </div>
</template>
<style>
    .enterprise-box {
        width: 880px;
        margin: 70px auto;
        text-align: center;
    }

    .logos a {
        display: inline-block;
        margin: 20px 30px;
        text-decoration: none;
    }

    .logos_img1 {
        width: 216px;
        height: 33px;
    }

    .logos_img2 {
        width: 123px;
        height: 123px;
    }

    .logos_img3 {
        width: 294px;
        height: 120px;
    }

    .logos_img4 {
        width: 123px;
        height: 110px;
    }

    .logos_img5 {
        width: 120px;
        height: 120px;
    }
    .logos_other{
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #FAF8F7;
        line-height: 120px;
        text-align: center;
    }
    .logos_other i{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #73472E;
        display: inline-block;
        margin-left: 5px;
    }
    .logos p{
        color: #73472E;
    }
</style>
<script>
    export default {
        data() {
            return {
                img: [{
                        company: "https://b.21cake.com/activity/site/business_area/img/a1907c3d726dae1cc53db38d0659771c.png"
                    },
                    {
                        logos: [{
                                logo1: "https://b.21cake.com/activity/site/card_exchange/img/f_37.jpg",
                                title: "浙江大学"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/shlo.png",
                                title: "上药第一生化"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/quan.jpg",
                                title: "海淀区教育工会"
                            },
                            {
                                logo1: "https://b.21cake.com/activity/site/business_area/img/santian.jpg",
                                title: "月饼兑换"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>