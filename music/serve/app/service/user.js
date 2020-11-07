'use strict';
const Service = require('egg').Service;
const svgCaptcha = require("svg-captcha");
const { mysql } = require('../../config/plugin');

class UserService extends Service {
    //注册
    async register(userinfo) {
        const { ctx } = this;
        console.log("register请求", userinfo);//{user:"",password:""}
        let sql = `select *from user where name="${userinfo.user}"`
        let results = await this.app.mysql.query(sql)
        if (results[0]) {
            console.log(results);
            return { code: 4002, info: "账号已被注册" }
        } else {
            let sql = `insert into user (name,password,registerTime) values ("${userinfo.user}","${userinfo.password}","${userinfo.registerTime}")`
            let results1 = await this.app.mysql.query(sql)
            if (results1.affectedRows > 0) {
                console.log(results1);
                //注册成功，告诉浏览器做cookie缓存
                this.ctx.session.isLogin = userinfo.user;
                return { code: 2001, info: "注册成功", user: userinfo.user }
            } else {
                return { code: 5001, info: "注册失败,请稍后再试" }
            }
        }
    }
    //登录
    async login(userinfo) {
        console.log("账号密码登录", userinfo);
        let sq1 = `select * from user where name="${userinfo.user}" `
        let sq2 = `select * from user where name="${userinfo.user}" and password="${userinfo.password}"`
        let res1 = await this.app.mysql.query(sq1);
        let res2 = await this.app.mysql.query(sq2);
        if (res1[0]) {//验证账号是否存在
            if (res2[0]) {//账号存在、密码正确
                //验证通过，用户账号正确，浏览器做cookie缓存
                this.ctx.session.user = userinfo.user;
                return { code: 2001, info: "登录成功", user: userinfo.user }
            } else {
                return { code: 4001, info: "密码错误" }
            }
        } else {
            return { code: 4002, info: "账号不存在" }
        }
    }
    //验证码
    async verif() {
        const { ctx } = this;
        console.log("请求验证码");
        const data = svgCaptcha.create({
            ignoreChars: '0o1iz2', // 验证码字符中排除 0o1iz2
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            background: '#cc9966'
        });
        this.ctx.session.verif = data.text;
        return data;
    }
}

module.exports = UserService;