const Koa = require('koa');
const serve = require('koa-static');
const templates = require('./base.template');

const app = new Koa();

app.use(async (ctx) => {
    const body =  await templates.renderTemplate();
    ctx.body = body;
});


app.listen(9000);
