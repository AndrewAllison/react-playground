import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
  </StrictMode>,
);
