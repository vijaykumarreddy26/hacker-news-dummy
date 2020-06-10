import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router';
import Browse from '';

const url = process.argv[2];

/*
*  component for  server side rendering
*/

const buffer = renderToStaticMarkup(
	<StaticRouter location={url || ''} context={{}}>
		<Switch>
			<Route path="/" component={Browse} />
		</Switch>
	</StaticRouter>
);

console.log(buffer);

process.exit();