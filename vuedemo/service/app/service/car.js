'use strict';
const Service = require('egg').Service;
class CarService extends Service {
    async deleteCar(info) {
        console.log(info);
        let sql = `select * from user where phone="${this.ctx.session.phone}"`;
        let result = await this.app.mysql.query(sql)
        console.log(result[0].Uid);
        let sql2 = `delete from car where  Uid= "${result[0].Uid}" && Gid= "${info.id}"`;//删除用户的单个商品
        let result2 = await this.app.mysql.query(sql2)
        // if (result2.affectedRows > 0) {
        return { code: 2001, info: "删除购物车成功" }
        // }
    }
    async qingkongCar() {
        let sql = `select * from user where phone="${this.ctx.session.phone}"`;
        let result = await this.app.mysql.query(sql)
        console.log(result[0].Uid);
        let sql2 = `delete from car where  Uid= "${result[0].Uid}"`;//清空当前用户的所有商品
        let result2 = await this.app.mysql.query(sql2);
        console.log(result2);
        return { code: 2001, info: "清空购物车成功" }
    }
    async car() {
        let sql = `select * from user where phone="${this.ctx.session.phone}"`;
        let result = await this.app.mysql.query(sql)
        console.log(result[0].Uid);
        let sql2 = `select * from car where Uid= "${result[0].Uid}"`;
        let result2 = await this.app.mysql.query(sql2);//当前用户的所有商品
        console.log(result2);
        let sql3 = 'select * from goods where Gid in ('
        for (var i = 0; i < result2.length; i++) {
            sql3 += `${result2[i].Gid},`
        }
        sql3 = sql3.substring(0, sql3.length - 1)
        sql3 += ")"
        let result3 = await this.app.mysql.query(sql3);
        console.log(result3);
        if (result3) {

            return result3
        } else {
            return {}
        }
    }
    async addGoods(goodsInfo) {
        let sql = `select * from user where phone="${this.ctx.session.phone}"`;
        let result = await this.app.mysql.query(sql)
        // console.log(result[0].Uid);
        //1获取当前用户的手机号
        //2通过手机号在car 添加商品id 
        console.log(goodsInfo);
        let sql2 = `insert into car (Uid,Gid) values ("${result[0].Uid}","${goodsInfo.Gid}")`
        let result2 = await this.app.mysql.query(sql2)
        console.log(result2);
        return { code: 2001, info: "加入购物车成功" }
    }
}
module.exports = CarService;
