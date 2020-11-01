'use strict';
const Service = require('egg').Service;
const svgCaptcha = require("svg-captcha");
const { mysql } = require('../../config/plugin');

class UserService extends Service {
    async editinfo(userinfo) {
        console.log(userinfo);
        //   intName: '邰静明',
        //   intEmail: '1255@qq.com',
        //   radio: '1',
        //   birth: 'Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)'
        let sql = `update user set name="${userinfo.intName}",email="${userinfo.intEmail}",birth="${userinfo.birth}" ,sex="${userinfo.radio}"
        where phone="${this.ctx.session.phone}"`
        let results1 = await this.app.mysql.query(sql)
        console.log(results1, this.ctx.session.phone);
        if (results1.affectedRows > 0) {
            return { code: 2001, info: "资料更新成功" }
        } else {
            return { code: 4002, info: "资料更新失败" }
        }
    }
    async userinfo() {
        if (this.ctx.session.phone) {
            console.log('是否登录', this.ctx.session.phone);
            let sql = `select img from user where phone ="${this.ctx.session.phone}"`
            let results1 = await this.app.mysql.query(sql)
            console.log(results1.img);
            return { code: 2001, info: "用户已登录", phone: this.ctx.session.phone, img: results1 }
        } else {
            return { code: 4001, info: "用户未登录" }
        }
    }

    async reset2(arg) {
        console.log(this.ctx.session.phone1);//要修改密码的账号
        // console.log(arg.pwd);
        let sql = `update user set pwd="${arg.pwd}" where phone="${this.ctx.session.phone1}"`
        let results1 = await this.app.mysql.query(sql)
        console.log(results1);
        if (results1.affectedRows > 0) {
            return { code: 2001, info: "密码修改成功" }
        }
    }
    async resetpwd(phone) {
        var sql = `select *from user where phone="${phone.mobile}"`
        var results = await this.app.mysql.query(sql)
        if (phone.verif.toUpperCase() != this.ctx.session.verif.toUpperCase()) {
            return { code: 4001, info: "验证码错误" }
        } else {
            if (results[0]) {
                this.ctx.session.phone1 = phone.mobile;
                return { code: 2001, info: "手机号验证成功" }
            } else {
                return { code: 4002, info: "该手机还未注册" }
            }
        }
    }
    async register(userinfo) {//注册
        const { ctx } = this;
        console.log("register请求", userinfo, this.ctx.session.verif);
        if (userinfo.verif.toUpperCase() != this.ctx.session.verif.toUpperCase()) {
            return { code: 4001, info: "验证码错误" }
        } else {
            var sql = `select *from user where phone="${userinfo.mobile}"`
            var results = await this.app.mysql.query(sql)
            if (results[0]) {
                return { code: 4002, info: "手机号已经注册过" }
            } else {
                var sql = `insert into user (phone,pwd,birth,img) values ("${userinfo.mobile}","${userinfo.pwd1}","${userinfo.birth}","${userinfo.img}")`
                var results1 = await this.app.mysql.query(sql)
                if (results1.affectedRows > 0) {
                    return { code: 2001, info: "注册成功" }
                } else {
                    return { code: 5001, info: "注册失败,后端bug" }
                }
            }
        }
    }
    async login(userinfo) {
        const { ctx } = this;
        if (userinfo.verif) {//短信验证登录
            if (userinfo.verif.toUpperCase() != this.ctx.session.verif.toUpperCase()) {
                return { code: 4001, info: "验证码错误" }
            } else {
                let sql = `select * from user where phone="${userinfo.mobile}"`
                let results2 = await this.app.mysql.query(sql);
                if (results2[0]) {
                    //验证通过，用户账号正确，浏览器做cookie缓存
                    this.ctx.session.phone = userinfo.mobile;
                    return { code: 2001, info: results2[0] }
                } else {
                    return { code: 4002, info: "账号不存在" }
                }
            }
        } else if (userinfo.pwd) {//账号密码登录
            console.log("账号密码登录");
            let sql1 = `select * from user where phone="${userinfo.mobile}"`
            let sql2 = `select * from user where phone="${userinfo.mobile}" and pwd="${userinfo.pwd}"`
            let result1 = await this.app.mysql.query(sql1);
            let result2 = await this.app.mysql.query(sql2);
            if (result1[0]) {//验证账号是否存在
                if (result2[0]) {//账号存在、密码正确
                    //验证通过，用户账号正确，浏览器做cookie缓存
                    this.ctx.session.phone = userinfo.mobile;
                    return { code: 2001, info: "登录成功" }
                } else {
                    return { code: 4001, info: "密码错误" }
                }
            } else {
                return { code: 4002, info: "账号不存在" }
            }
        }

    }
    async verif() {
        const { ctx } = this;
        console.log("请求验证码");
        const data = svgCaptcha.create({
            size: 4,
            fontSize: 50,
            width: 100,
            height: 40,
            bacground: '#cc9966'
        });
        this.ctx.session.verif = data.text;
        return data;
    }
    async business(obj) {
        const { ctx } = this;
        console.log('留言');
        var sql = `insert into leave_message (city,CompanyName,ContactPerson,PhoneNumber,email,message) values ("${obj.city}","${obj.CompanyName}","${obj.ContactPerson}","${obj.PhoneNumber}","${obj.email}","${obj.message}")`
        const mesg = await this.app.mysql.query(sql);
        return mesg;
    }
}

module.exports = UserService;