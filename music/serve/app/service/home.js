'use strict';
const Service = require('egg').Service;

class HomeService extends Service {
    async getData() {
        //轮播图数据
        const banner = await this.app.curl('http://localhost:3000/banner?type=2', {
            method: 'GET',
            dataType: 'json',
        });
        //推荐歌曲  /personalized?limit=
        const tuijian = await this.app.curl('http://localhost:3000/personalized?limit=10', {
            method: 'GET',
            dataType: 'json',
        });

        return { banner, tuijian }
    }
    async search() {
        //热搜歌曲
        const res = await this.app.curl('http://localhost:3000/search/hot?limit=30', {
            method: 'GET',
            dataType: 'json',
        });
        console.log(res);
        return res
    }

    async searchSong(data) {
        //搜索歌曲
        // console.log(999999999, data);
        const res = await this.app.curl(`http://localhost:3000/search/search?keywords=${data.info}`, {
            method: 'GET',
            dataType: 'json',
        });
        console.log(99, res);
        return res
    }
}

module.exports = HomeService;