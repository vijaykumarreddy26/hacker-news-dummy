const fetch = require("node-fetch");
const path = require('path');
const fs = require('fs');
const { exec } =  require('child_process');


/*cont ReactDOMServer = require("react-dom/server");
import { StaticRouter} = require("react-router");


/*exports getPageData = async () => {
    // This context object contains the results of the render
    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
} */
/**
 * render html by passing data
 * @param {string} url 
 * @param {string} data 
 */
const renderServerHtml = async (url, data) => {
    return new Promise((resolve) => {
        exec(`node ${path.resolve('server_renders/page.js')} ${url} ${escape(data)}`, (err, stdout, stderr) => {
            resolve(stdout? stdout : '');
        });
    });
}

/*
*   method for rendering intital html and replacing root with data
*/
exports.renderTemplate = async (ctx) => {
    let html = '';
    let newsList = ctx.pageData;
    let pageNo = ctx.pageNo || undefined;
    if(process.env.NODE_ENV !== 'production'){
        const response = await fetch('http://localhost:3000')
        html = await response.text();
        html = html.replace(
            '<base href = "/"/>',
            '<base href = "http://localhost:3000/"/>'
        )
    } else {
        html = await fs.promises.readFile(path.resolve('public/index.html'), 'utf8');
    }
    let pageData = JSON.stringify({newsList: newsList, pageNo: pageNo});
    let renderedHtml  = await renderServerHtml(ctx.path, pageData);
    return html.replace(
        '<div id="root"></div>',
        `<div id="root">${renderedHtml}</div>
          <script>
            ${(newsList) ? `//<![CDATA[
          window.INITIAL_DATA = ${pageData}
          //]]>` : ''}
      </script>`
        )
};


