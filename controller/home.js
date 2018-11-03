const HomeService = require('../service/home');

const HomeController = {
  async getCategory(ctx) {
    let res = await HomeService.getCategory();
    ctx.response.body = res;
  },

  async getMarkdown(ctx) {
    let query = ctx.request.query;
    
    let res = await HomeService.getMarkdown(query.category);

    ctx.response.body = res;
  },

  async insertArt(ctx) {
    let res = await HomeService.insertArt();
    console.log(res)
  }
}

module.exports = HomeController;