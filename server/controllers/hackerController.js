const fetch = require("node-fetch");

const AgloaUrl = "http://hn.algolia.com/api/v1/search";

/**
 * Ge data from algolia news
 * @constructor
 * @param {string} tags - Valid User mongoose id.
 * @param {string} numericFilters - Hash.
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
