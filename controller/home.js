const HomeService = require('../service/home');

const HomeController = {
  async index(ctx) {
    ctx.response.body = `<h1>Index page</h1>`
  },
  async home(ctx){
    console.log(ctx.request.query)
    ctx.response.body = `<h1>Home Page</h1>`
  },
  async homeParams(ctx) {
    ctx.response.body = `<h1>Home Params: ${ctx.params.name}</h1>`
  },
  async login(ctx) {
    await ctx.render('home/login', {
      btnName: 'Submit'
    })
  },
  async register(ctx) {
    let {
      name,
      password
    } = ctx.request.body
    if (name === 'addone' && password === '123') {
      ctx.response.body = `Hello， ${name}！`
    } else {
      ctx.response.body = '账号信息错误'
    }
  }
}

module.exports = HomeController;