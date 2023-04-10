import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import store from './redux/store';
import ErrorPage from './error-page';
import Homepage from './routes/homepage/homepage';
import MyRecord from './routes/my-record/my-record';
import Recommend from './routes/recommend/recommend';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/my-record',
		element: <MyRecord />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/recommend',
		element: <Recommend />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
