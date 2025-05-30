import { Navigate, Outlet, type RouteObject } from "react-router-dom";
import { Home } from "../content/home/home.tsx";
import { Layout } from "../layout";
import { Auth } from "../content/auth/auth.tsx";
import { Basket } from "../content/basket/basket.tsx";
import { MenuPage } from "../content/menu/menu.tsx";

export const appRoutesDefinition: RouteObject[] = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "*",
        element: <div />,
      },
      {
        path: "/",
        element: <Navigate to="/main" replace={true} />,
      },
      {
        path: "/main",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
];
