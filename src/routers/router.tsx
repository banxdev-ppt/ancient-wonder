import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { publicRoutes } from "~/routers/menu";
import MainLayout from "~/layouts/MainLayout";

const element = createRoutesFromElements(
  <Route element={<MainLayout />}>
    {publicRoutes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
  </Route>
);

export const router = createBrowserRouter(element);
export const providerRouter = <RouterProvider router={router} />;