'use strict';

const Controller = require('egg').Controller;
const fs = require("fs")
const path = require("path")
class UserController extends Controller {
    async register() {
        const { ctx } = this;
        let t = new Date();
        let d = t.getDate()
        let m = t.getMonth() + 1;
        let y = t.getFullYear();
        let registerTime = y + "-" + m + "-" + d;
        ctx.request.body.registerTime = registerTime;
        ctx.body = await ctx.service.user.register(ctx.request.body);
    }
    async login() {
        const { ctx } = this;

        ctx.body = await ctx.service.user.login(ctx.request.body);
    }
    async verif() {
        const { ctx } = this;
        console.log("请求验证码");
        ctx.body = await ctx.service.user.verif();
    }

}


module.exports = UserController;