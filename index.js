const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const conditionGet = require('koa-conditional-get'); //etag relies
const etag = require('koa-etag');
const send = require('koa-send');
const api = require('./api/index');
const formatDate = require('./date');

const app = new Koa();

const host = '127.0.0.1';
const port = 8080;

app.on('error', (err, ctx) => {
    console.log(err);
});

app.use(conditionGet());
app.use(etag());
app.use(bodyParser({
    enableTypes: ['text', 'json', 'form'],
}));

app.use(api.routes());

app.use(async (ctx, next) => {
    console.log(`[${formatDate(new Date())}] ${ctx.method}: ${ctx.href}`);
    if ('/' == ctx.path) await send(ctx, path.normalize('./www/index.html'));
    else if(ctx.path.startsWith('/api')) await next();
    else await send(ctx, ctx.path, { root: path.join(__dirname, 'www') });
})

app.listen(port, host);

console.log(`服务已启动，地址: http://${host}:${port}`);