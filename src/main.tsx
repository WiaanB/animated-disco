import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.scss';
import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import NewGame from '@/pages/NewGame';
import AllGames from '@/pages/AllGames';
import PageNotFound from '@/pages/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "my-profile",
    element: <Profile />,
  },
  {
    path: "my-games",
    element: <AllGames />,
  },
  {
    path: "new-game",
    element: <NewGame />,
  },
  {
    path: "not-found",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
