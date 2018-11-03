const router = require('koa-router')()
const HomeControllor = require('./controller/home')

module.exports = (app) => {
  router.get('/api/getCategory', HomeControllor.getCategory);

  router.get('/api/getMarkdown', HomeControllor.getMarkdown);

  // router.get('/api/insertArt', HomeControllor.insertArt);

  // router.get('/home', HomeControllor.home)

  // router.get('/home/:id/:name', HomeControllor.homeParams)

  // router.get('/login', HomeControllor.login)

  // router.post('/login/register', HomeControllor.register)
  
  // router.all('/*', async (ctx, next) => {
  //   ctx.response.status = 404
  //   ctx.response.body = '<h1>404 Not Found</h1>'
  // })

  app.use(router.routes()).use(router.allowedMethods())
}