import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter, Route, Switch } from 'react-router';
import App from './App';


const url = process.argv[2];
global.initialServerData = process.argv[3];

const buffer = renderToString(
	<StaticRouter location={url || ''}>
		<App match={{params: url}} staticContext={true}></App>
	</StaticRouter>
);

console.log(buffer);

process.exit();