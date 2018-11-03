const mdList = require('./temp');
const Client = require("mysql-pro");
const client = new Client({
    mysql: {
        host: "127.0.0.1",
        port: 3306,
        database: "blog",
        user: "root",
        password: ""
    }
});

const HomeService = {
  async getCategory() {
    let data = await client.query("select * from category");
    return data;
  },

  async getMarkdown(category) {
    let data = await client.query("select * from markdown where category = ?;", category);
    return data;
  },

  async insertArt() {
    let category = 'wx';
    await client.startTransaction();
    for(let i = 0 ; i < mdList[category].list.length ; i++) {
      let temp = mdList[category].list[i]
      await client.executeTransaction("insert into markdown set title=?,`desc`=?,time=?,category=?;", [temp.title,temp.desc,temp.time,category]);
    }
    await client.stopTransaction();
    return 1;
  }
}

module.exports = HomeService;