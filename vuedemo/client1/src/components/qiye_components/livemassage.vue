<template>
    <div class="enterprise-box">
        <p><img :src="img" alt=""></p>
        

        <el-form class="form_box" ref="form" :model="form" label-width="80px">
            <el-form-item label="">
                <el-select v-model="form.region" placeholder="请选择所在城市" style="width: 100%;">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="天津" value="shanghai"></el-option>
                    <el-option label="杭州" value="beijing"></el-option>
                    <el-option label="无锡" value="shanghai"></el-option>
                    <el-option label="苏州" value="beijing"></el-option>
                    <el-option label="广州" value="shanghai"></el-option>
                    <el-option label="深圳" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.gongsi" placeholder="公司名称(必填)"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.name" placeholder="联系人(必填)"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.phone" placeholder="手机号(必填)"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input v-model="form.email" placeholder="邮箱(必填)"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input type="textarea" v-model="form.desc" placeholder="留言(必填)"></el-input>
              </el-form-item>
            
              <el-form-item>
                <el-button type="primary" @click="onSubmit" style="background-color: #73472E;border: none;margin-left: -68px">提交</el-button>
              </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                img:"https://b.21cake.com/activity/site/business_area/img/318bf8c7c631e61c2533a52138ad7067.png"
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
        }


    }
</script>
<style>
    @import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
    .form_box{
        margin-top: 50px;
    }
</style>