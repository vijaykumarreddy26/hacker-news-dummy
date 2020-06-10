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

    return html.replace(
        '<div id="root"></div>',
        `<div id="root"></div>
          <script>
            ${(newsList) ? `//<![CDATA[
          window.INITIAL_DATA = ${JSON.stringify({newsList: newsList, pageNo: pageNo})}
          //]]>` : ''}
      </script>`
        )
};

exports.renderData = async (ctx) => {
    exec(`node ${resolve('server_renders/listpage.js')} ${req.url} ${escape(JSON.stringify({ doctorDetails: docData, pageMeta: meta, canonicalLink: canonicalLink }))} ${escape(JSON.stringify(global.__APP_CONFIG__))}`, (err, stdout) => {
        if (err) {
            error(err)
            error(`Error occured while fetching as bot for ${req.url}`)
            renderDoctorMarkup(req, res, docData, meta, structuredData, '', canonicalLink);
        } else {
            renderDoctorMarkup(req, res, docData, meta, structuredData, stdout, canonicalLink);
        }
    })
}

