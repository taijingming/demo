'use strict';
const fs = require("fs")
const Service = require('egg').Service;
class HomeService extends Service {
    async home() {
        var sql = 'select * from goods';
        var result = await this.app.mysql.query(sql)
        return result
    }
    async index() {
        const { ctx } = this;
        ctx.response.type = 'html';
        let res1 = fs.readFileSync(__dirname + '/../public/index.html');
        return res1
    }
}
module.exports = HomeService;