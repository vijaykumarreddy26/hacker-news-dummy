const Koa = require('koa');
const koaRouter = require('@koa/router');
const serve = require('koa-static');
const hackerController = require('./controllers/hackerController');

/**
 * create koa app instance
 */
const app = new Koa();
const PORT = process.env.PORT || 9000;

app.use(async (ctx, next) => {
    if(ctx.path === "/"){
        await next();
    }else {
        await serve(__dirname + '/../public/', {
            maxAge: 365 * 24 * 60 * 60,
        })(ctx,next);
    }   
});
    



// app.use(mount('/static', serve(__dirname + '/static', {defer: true})))
/*app.use(async (ctx) => {
    await send(ctx, ctx.path, { root: __dirname + '/../public/' });
  }) */

const router = new koaRouter();

/**
 * news search router  
 */
router.get('/api/v1/search', hackerController.fetchData);

/**
 * render base html 
 */
router.get('/:pageNo?', hackerController.fetchDataForHtml, hackerController.renderTemplate);

/*
*   Attach routes to app instance
*/
app.use(router.routes());




app.listen(PORT);
