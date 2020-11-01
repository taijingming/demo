<template>
    <div class="process_box_all" v-show = flag>
        <div class="process_box">
            <h1 class="chuxuka">储值卡-使用流程</h1>
            <span class="process_close" @click=close></span>
            <el-carousel class="process_img" arrow="always" :autoplay='false' :loop="false">
    
                <el-carousel-item v-for="el in item">
                    <h3>
                        <img :src="el.img" alt="">
                        <p class="buzhou">{{el.title}}</p>
                    </h3>
                </el-carousel-item>
            </el-carousel>
            
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag:false,
                item: [{
                        img: "https://b.21cake.com/activity/site/business_area/img/enjoy-01.png",
                        title: "Step1 - 登录/注册“21cake"
                    },
                    {
                        img: "https://b.21cake.com/activity/site/business_area/img/enjoy-02.png",
                        title: "Step2 - 进入个人中心"
                    },
                    {
                        img: "https://b.21cake.com/activity/site/business_area/img/gift-03.png",
                        title: "Step3 - 点击“卡券充值”"
                    },
                    {
                        img: "https://b.21cake.com/activity/site/business_area/img/gift-04.png",
                        title: "Step4 - 输入储值卡卡号密码，点击确认充值"
                    },
                    {
                        img: "https://b.21cake.com/activity/site/business_area/img/value-05.png",
                        title: "Step5 - 结算页点击“使用果实币”，勾选抵扣金额"
                    },
                    {
                        img: "https://b.21cake.com/activity/site/business_area/img/enjoy-06.png",
                        title: "Step6 - 果实币抵扣完成，下单结算"
                    }
                ],
                buzhou: ["Step1 - 登录/注册“21cake”",
                    "Step2 - 进入个人中心",
                    "Step3 - 点击“卡券充值”",
                    "Step4 - 输入储值卡卡号密码，点击确认充值",
                    "Step5 - 结算页点击“使用果实币”，勾选抵扣金额",
                    "Step6 - 果实币抵扣完成，下单结算"
                ]
            }
        },
        methods: {
            close(){
                this.flag = !this.flag
            }
        },
    }
</script>
<style>
    .process_box_all{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 9999;
    }
    .process_box {
        width: 740px;
        height: 600px;
        background-color: #ffffff;
        text-align: center;
        margin: 0 auto;
        position: relative;
    }

    .process_box .chuxuka {
        margin-bottom: 70px;
        padding-top: 50px;
        font-size: 14px;
        color: #684029;
    }

    .el-carousel__item {
        display: block;
    }

    .el-carousel__item h3 {
        width: 740px;
        height: 320px;
        font-size: 18px;
        text-align: center;
        /* margin-top: 200px; */
    }
    .el-carousel__item h3 p{
        z-index: 999;
    }
    .el-carousel__item h3 img {
        width: 600px;
        height: 320px;
        margin: 0 auto;

    }
    .el-carousel__button{
        display: none !important;
    }
    .process_close{
        width: 25px;
        height: 25px;
        display: inline-block;
        background-image: url(../../assets/close.png);
        background-repeat: no-repeat;
        background-size: 25px 25px;
        position: absolute;
        right: 10px;
        top: 10px;
        cursor: pointer;
    }
</style>