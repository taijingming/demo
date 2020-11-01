'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async addorder() {
    const { ctx } = this;
    console.log(this.ctx.request.query);
    ctx.body = await ctx.service.addorder.addorder(this.ctx.request.query);
  }
  async getorder() {
    const { ctx } = this;
    ctx.body = await ctx.service.addorder.getorder(this.ctx.request.query);
  }
  async getsearch() {
    const { ctx } = this;
    ctx.body = await ctx.service.addorder.getsearch(this.ctx.request.query);
  }
  async register() {
    const { ctx } = this;
    // console.log(this.ctx.request.body)

    ctx.body = await this.ctx.service.user.register(this.ctx.request.body);
  }

  async login() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.user.login(this.ctx.request.body);
  }

  async verif() {
    this.ctx.body = await this.ctx.service.user.verif()
  }

  async forgetpwd() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.user.forgetpwd(this.ctx.request.body);
  }
}

module.exports = HomeController;
