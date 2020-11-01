'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
    async car() {
        const { ctx } = this;
        // console.log(this.ctx.session.phone);
        ctx.body = await this.ctx.service.car.car()
    }
    async addGoods() {
        const { ctx } = this;
        // console.log(this.ctx.session.phone, this.ctx.request.query);
        ctx.body = await this.ctx.service.car.addGoods(this.ctx.request.query)
    }
    async qingkongCar() {
        const { ctx } = this;
        // console.log(this.ctx.session.phone, this.ctx.request.query);
        // console.log(99999);
        ctx.body = await this.ctx.service.car.qingkongCar()
    }
    async deleteCar() {
        const { ctx } = this;
        // console.log(this.ctx.session.phone, this.ctx.request.query);
        // console.log(99999);
        ctx.body = await this.ctx.service.car.deleteCar(this.ctx.request.query)
        // ctx.body = "删除单个商品"
    }
}
module.exports = UserController;