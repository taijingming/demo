'use strict';

const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class HomeService extends Service {
    async verif() {
        //生成验证码，返回给调用者使用
        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            background: '#cc9966'
        });
        //把生成的验证码里面的文字缓存起来（保存到后端的内存变量中的）
        //告诉浏览器在本地设置一个cookies
        this.ctx.session.code = captcha.text;
        console.log(111111, this.ctx.session, 88888);
        return captcha;
    }

    async register(userinfo) {
        //前端传过来的所有数据
        //1、先取出verif跟上一次比较
        //2、去数据库中查找email 
        //3、存入数据库
        // this.ctx.session.code="333"
        console.log(userinfo)
        console.log(1111, this.ctx.session.code, 99996666)
        var sql = `select * from user where email="${userinfo.email}"`
        var sql2 = `select * from user where nickname="${userinfo.nickname}"`
        var results = await this.app.mysql.query(sql)
        var results3 = await this.app.mysql.query(sql2)
        // console.log(results3);
        if (results[0]) {
            return { code: 4002, info: "温馨提示：账号已经被注册过..." }
        } else if (results3[0]) {
            return { code: 4003, info: "温馨提示：昵称已经被注册过..." }
        }
        else {
            var sql1 = `insert into user  (email,password,nickname,phone) values ("${userinfo.email}","${userinfo.password}","${userinfo.nickname}","${userinfo.phone}")`
            await this.app.mysql.query(sql1)
            return { code: 2001, info: "恭喜你,注册成功 马上跳转到登录页面..." }
        }
    }

    async login(userinfo1) {
        var sql = `select * from user where email="${userinfo1.username}" and password="${userinfo1.password}"`
        var results = await this.app.mysql.query(sql)
        // console.log(results[0]);
        if (results[0]) {
            return { code: 2002, info: "登录成功" }
        } else {
            return { code: 4004, info: "温馨提示：账号或密码错误..." }

        }
    }

    async forgetpwd(userinfo2) {
        var sql = `update user set password="${userinfo2.password}" where email="${userinfo2.email}"`
        var results = await this.app.mysql.query(sql)
        // console.log(results)
        if (results.affectedRows > 1) {
            return { code: 2003, info: "修改成功" }
        } else {
            return { code: 3001, info: "账号错误，请检查账号是否注册" }
        }
    }
}

module.exports = HomeService;