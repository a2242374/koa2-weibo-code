const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true,
    blogList: [
      { id: 1, title: '标题1' },
      { id: 2, title: '标题2' },
      { id: 3, title: '标题3' }
    ]
  })
})

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

// router.get('/profile/:userName/:pageIndex', async (ctx, next) => {
//   const {userName, pageIndex} = ctx.params
//   ctx.body = {
//     title: 'profile page',
//     userName,
//     pageIndex
//   }
// })

router.post('/login', async (ctx, next) => {
  const {userName, password} = ctx.request.body
  ctx.body = {
    title: 'login page',
    userName, 
    password
  }
})

module.exports = router
