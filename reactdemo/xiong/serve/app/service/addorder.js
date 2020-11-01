'use strict';

const Controller = require('egg').Service;

class AddorderService extends Controller {
    async addorder(obj) {
        console.log(obj);
        let sql = `insert into myorder (quality,uid,sid,qianshou,price,time,info,address1,address2,phone1,phone2) 
        values ("${obj.quality}","${obj.uid}","${obj.sid}","${obj.qianshou}","${obj.price}","${obj.fahuoTime}",
        "${obj.info}","${obj.address1}","${obj.address2}","${obj.phone1}","${obj.phone2}")`
        const mesg = await this.app.mysql.query(sql);
        console.log(mesg);
        return "插入数据成功";
    }
    async getorder(info) {
        console.log(info);//全部订单、待付订单、
        if (info.state == "99") {
            let sql = `select * from myorder`;
            const res = await this.app.mysql.query(sql);
            return res;
        } else {
            let sql = `select * from myorder where state="${info.state}"`;
            const res = await this.app.mysql.query(sql);
            return res;
        }
    }
    async getsearch(info) {
        console.log(info);//全部订单、待付订单、
        let reg = /^1[3456789]\d{9}$/;
        if (reg.test(info.state)) {
            let sql = `select * from myorder where phone2="${info.state}"`;
            const res = await this.app.mysql.query(sql);
            return res;
        } else {
            console.log("名字查询");
            let sql = `select * from myorder where sid like "%${info.state}%"`;
            const res = await this.app.mysql.query(sql);
            console.log(res);
            return res;
        }

    }
}

module.exports = AddorderService
