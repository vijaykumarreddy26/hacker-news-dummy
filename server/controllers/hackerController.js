const fetch = require("node-fetch");
const templates = require('../base.template');

const AgloaUrl = "http://hn.algolia.com/api/v1/search";

/**
 * Get data from algolia news api
 * @constructor
 * @param {string} tags - algolia tags to search for.
 * @param {number} page - get data based on page number.
 */
exports.fetchData = async (ctx, next) => {
      try{
        const request = ctx.request;
        const url = `${AgloaUrl}?tags=${request.query.tags || ''}&page=${request.query.page || 0}`
        const response = await fetch(url);
        const json = await response.json();
        ctx.body =json;
      } catch(e){
        ctx.status = 400;
		ctx.body = "error occured while fetching data";
      }

}


/**
 * Ge data from algolia news
 * @constructor
 * 
 */
exports.fetchDataForHtml = async (ctx, next) => {
    try{
      const pageNo = ctx.params.pageNo || 1;
      const url = `${AgloaUrl}?tags=story&page=${pageNo}`
      const response = await fetch(url);
      const json = await response.json();
      ctx.pageData =json;
      ctx.pageNo = pageNo;
    } catch(e){
        ctx.pageData ='';
    }
   await next();
}

/*
* render initila html
*/
exports.renderTemplate = async (ctx, next) => {
    const body =  await templates.renderTemplate(ctx);
    ctx.body = body;
}

