const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  ctx.body = 'hellow koa'
})

router.get('/template', async (ctx, next) => {
  await ctx.render({
    title:'template',
    content: '在viewhook里自定义这个ctx.render的方法，然后在app.js中use这个中间件'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
