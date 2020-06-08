import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router';
import Browse from 'components/Browse/Browse';

const url = process.argv[2];



const buffer = renderToStaticMarkup(
	<StaticRouter location={url || ''} context={{}}>
		<Switch>
			<Route path="/:cityName" component={Browse} />
		</Switch>
	</StaticRouter>
);

console.log(buffer);

process.exit();