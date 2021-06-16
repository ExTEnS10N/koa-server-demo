const Router = require('@koa/router');
const api  = new Router({prefix: '/api'});
api.post('/', async (ctx, next) => {
    ctx.body = {error: false, msg: 'Api 正常工作'};
    await next();
})
module.exports = api;