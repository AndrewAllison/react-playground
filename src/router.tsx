// src/router.tsx
import {
	createRootRoute,
	createRoute,
	createRouter,
} from '@tanstack/react-router';

import App from './App';
import Home from './pages/Home';
import Challenge01 from './pages/challenges/basics/Challenge01.tsx';
import Challenge02 from './pages/challenges/basics/Challenge02.tsx';

const rootRoute = createRootRoute({
	component: App,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

const challenge01Route = createRoute({
	getParentRoute: () => rootRoute,
	path: '/challenge/01',
	component: Challenge01,
});

const challenge02Route = createRoute({
	getParentRoute: () => rootRoute,
	path: '/challenge/02',
	component: Challenge02,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	challenge01Route,
	challenge02Route,
]);

export const router = createRouter({ routeTree });

// Required for devtools
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}
