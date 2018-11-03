const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const path = require('path')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const cors = require('koa2-cors');

const app = new Koa()
const router = require('./router')

app.use(staticFiles(path.resolve(__dirname, './public')))
app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true // 开启转义 防Xss
  }
}))

app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser())

router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})