import {runApp} from 'ice';
import React from 'react';

runApp({
	app: {
		rootId: '__app'
	},
	router: {
		type: 'browser',
		fallback: <div>loading...</div>
	}
});