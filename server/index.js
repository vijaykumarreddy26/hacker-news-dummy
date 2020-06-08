const Koa = require('koa');
const koaRouter = require('@koa/router');
const serve = require('koa-static');
const templates = require('./base.template');
const hackerController = require('./controllers/hackerController');

const app = new Koa();
const router = new koaRouter();

router.get('/api/v1/search', hackerController.fetchData);

router.get('/', async (ctx) => {
    const body =  await templates.renderTemplate();
    ctx.body = body;
});

app.use(router.routes());


app.listen(9000);
