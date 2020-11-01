'use strict';
const Controller = require('egg').Controller;
const fs = require("fs")
class HomeController extends Controller {
    async home() {
        const { ctx } = this;
        ctx.body = await this.ctx.service.home.home()
    }
    async all() {
        const { ctx } = this;
        // ctx.body = await this.ctx.service.home.index()
        // ctx.body = "9999"
        console.log(666666)
        ctx.response.type = 'html';
        ctx.body = fs.readFileSync(__dirname + '/../public/index.html');
    }
}
module.exports = HomeController;