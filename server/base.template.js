const fetch = require("node-fetch");
const path = require('path');
const fs = require('fs');


exports.renderTemplate = async () => {
    const data = {
        'abc': 'adsf',
    }
    let html = '';
    if(process.env.NODE_ENV !== 'production'){
        const response = await fetch('http://localhost:3000')
        html = await response.text();
    } else {
        const html = await fs.promises.readFile(path.resolve('./build/index.html'), 'utf8');
    }

    return html.replace(
        '<div id="root"></div>',
        '<div id="root">asdfasdasfasfasd</div>'
        ).replace(
            '<base href = "/"/>',
            '<base href = "http://localhost:3000/"/>'
        )
};
