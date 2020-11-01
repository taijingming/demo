<template>
    <div class="faq_all" v-show = flag>
        <div class="faq_box" >
            <div class="faq" v-for="el in text">
                <p>{{el.question}}<br>{{el.answer}}</p>
            </div>
            <span class="faq_close" @click=close></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                flag:false,
                text: [{
                        question: "Q1. 发票问题：",
                        answer: "A：卡券在使用时不能开具发票，请向售卖给您的客服或销售索要发票；发票开具内容为：蛋糕"
                    },
                    {
                        question: "Q2. 卡券有效期问题：",
                        answer: "A：卡券有效期请查看相关卡券背面的使用有效期。"
                    },
                    {
                        question: "Q3. 卡券丢失问题：",
                        answer: "A：此卡券视为现金，卡券丢失，概不挂失、补卡。"
                    },
                    {
                        question: "Q4. 卡券过期问题：",
                        answer: "A：如果到期后，您未使用或未刮开，可以联系我们的客服或销售人员进行换卡。"
                    }
                ]
            }
        },
        props:['show'],
        methods: {
            close(){
                this.flag = !this.flag
            }
        },

    }
</script>
<style>
    .faq_all{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        position: fixed;
        left: 0;
        top: 0;
    }
    .faq_box {
        width: 650px;
        height: 350px;
        background-color: #ffffff;
        position: relative;
        position: absolute;
        top:30%;
        left: 30%;
    }

    .faq {

        color: #73472E;
        font-size: 12px;
        text-align: left;
        padding: 10px;
    }

    .faq p {
        margin-left: 50px;
        margin-top: 10px;
    }

    .faq_close {
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