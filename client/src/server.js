import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router';
import App from './App';


const url = process.argv[2];

const buffer = renderToString(
	<StaticRouter location={url || ''} context={{}}>
		<Switch>
			<Route path="/:pageNo" component={App} />
		</Switch>
	</StaticRouter>
);

console.log(buffer);

process.exit();