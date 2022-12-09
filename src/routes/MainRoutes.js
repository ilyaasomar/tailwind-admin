import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate,
  } from "react-router-dom";
  import Layout from '../components/Layout';
  import Home from '../pages/Home';
  import Customer from '../pages/Customers'
  export const router = createBrowserRouter([
      {
        path: "/",
        element: (
            <Layout />
        ),
        children: [
          {
            path: "/customers",
            element: <Customer />,
          },
        ],
      },
    ]);