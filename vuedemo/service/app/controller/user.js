'use strict';

const Controller = require('egg').Controller;
const fs = require("fs")
const path = require("path")
class UserController extends Controller {
	async register() {
		const { ctx } = this;
		//处理前端发送过来的数据
		if (this.ctx.request.files) {
			var filename1 = path.basename(this.ctx.request.files[0].filepath)
			var oldpath = `${this.ctx.request.files[0].filepath}`
			var newpath = `${__dirname}/../public/upload/${filename1}`
			fs.renameSync(oldpath, newpath)
			var imgurl = `http://127.0.0.1:7001/public/upload/${filename1}`
			this.ctx.request.body.img = imgurl
			ctx.body = await ctx.service.user.register(this.ctx.request.body);
		}
	}
	async login() {
		const { ctx } = this;
		ctx.body = await ctx.service.user.login(this.ctx.request.body);
	}
	async verif() {
		const { ctx } = this;
		ctx.body = await ctx.service.user.verif();
	}
	async resetpwd() {
		const { ctx } = this;
		ctx.body = await ctx.service.user.resetpwd(this.ctx.request.body);
	}
	async reset2() {
		const { ctx } = this;
		console.log(this.ctx.request.body, 999);
		ctx.body = await ctx.service.user.reset2(this.ctx.request.body);
		// ctx.body = 9999
	}
	async userinfo() {
		const { ctx } = this;
		ctx.body = await ctx.service.user.userinfo()

	}
	async editinfo() {
		const { ctx } = this;
		ctx.body = await ctx.service.user.editinfo(this.ctx.request.body)
	}
	async business() {
		const { ctx } = this;
		// console.log(this.ctx.request.query);
		console.log(this.ctx.request.body);
		ctx.body = await ctx.service.user.business(this.ctx.request.body)
	}
}


module.exports = UserController;