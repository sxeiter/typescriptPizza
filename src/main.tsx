import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart } from './Pages/Cart/Cart.tsx';
import { Menu } from './Pages/Menu/Menu.tsx';
import { Error } from './Pages/Error/Error.tsx';
import { Layout } from './layout/Menu/Menu.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]

	},
	{
		path: '*',
		element: <Error />

	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
