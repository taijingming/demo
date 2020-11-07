'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    ctx.body = "hi egg============"
  }
  async getData() {
    const { ctx, app } = this;
    // console.log(ctx.request.query);
    ctx.body = await ctx.service.home.getData()
    // ctx.body = "99999"
  }
  async search() {
    const { ctx, app } = this;
    // console.log(ctx.request.query);
    ctx.body = await ctx.service.home.search()
    // ctx.body = "99999"
  }
  async searchSong() {
    const { ctx, app } = this;
    ctx.body = await ctx.service.home.searchSong(ctx.request.query)

  }
}

module.exports = HomeController;
