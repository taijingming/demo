<template>
    <div>
        <div class="cards enterprise-box">
            <p><img :src="img[0].title" alt=""></p>

                <div @click=faq class="kind_user">
                    查看用户常见FAQ >>
                </div>
            <div class="cards_box_all" @click=buzhou>
                <p class="cards_box" v-for="el in img[1].cards" href="">
                    <img class="cards_img" :src="el.cards_img" alt="">
                    <img class="cards_text" :src="el.cards_text" alt="">
                </p>
            </div>
        </div>
        <kindfaq v-show='flag'></kindfaq>
        <process v-show='flag1'></process>
       
    </div>
</template>
<script>
    import kindfaq from './kindfaq.vue'
    import process from './process.vue'
    export default {
        components: {
            kindfaq,
            process
        },
        data() {
            return {
               flag:false,
               flag1:false,
                img: [{
                        title: "https://b.21cake.com/activity/site/business_area/img/fdb877011cc47c565b1d1d9250af449c.png"
                    },
                    {
                        cards: [{
                                cards_text: "https://b.21cake.com/activity/site/business_area/img/2dbc273fa47da2dceab66e94e52c9f0b.png",
                                cards_img: "https://b.21cake.com/activity/site/business_area/img/enjoy.png",
                            },
                            {
                                cards_text: "https://b.21cake.com/activity/site/business_area/img/0c19d00dfc14e167589b621962625557.png",
                                cards_img: "https://b.21cake.com/activity/site/business_area/img/gift-card.png",
                            },
                            {
                                cards_text: "https://b.21cake.com/activity/site/business_area/img/9f340d5a6582d749c14f0b9373913b84.png",
                                cards_img: "https://b.21cake.com/activity/site/business_area/img/stored-value.png",
                            }

                        ]
                    }
                ]
            }
        },
        methods: {
      faq(){
          this.flag =! this.flag
      },
      buzhou(){
        this.flag1 =! this.flag1
      }
    },
    }
</script>
<style>
.cards_box_all{
    z-index: 0;
}
    .cards_box {
        display: inline-block;
        cursor: pointer;
       
    }

    .cards_box img {
        display: block;
    }

    .cards_text {
        width: 120px;
        height: 35px;
        margin: -50px auto;
    }

    .cards_img {
        transform: scale(0.7, 0.7);
    }

    .kind_user {
        background-image: url(../../assets/faq.png);
        background-repeat: no-repeat;
        background-position: 336px 0px;
        color: #BB9772;
        font-size: 14px;
        cursor: pointer;
    }

</style>