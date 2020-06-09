const Koa = require('koa');
const koaRouter = require('@koa/router');
const serve = require('koa-static');
const send = require('koa-send');

const hackerController = require('./controllers/hackerController');

const app = new Koa();
const PORT = process.env.PORT || 9000;

app.use(serve(__dirname + '/../public/'));
// app.use(mount('/static', serve(__dirname + '/static', {defer: true})))
/*app.use(async (ctx) => {
    await send(ctx, ctx.path, { root: __dirname + '/../public/' });
  }) */

const router = new koaRouter();

router.get('/api/v1/search', hackerController.fetchData);

router.get('/:pageNo?', hackerController.fetchDataForHtml, hackerController.renderTemplate);

app.use(router.routes());


app.listen(PORT);
