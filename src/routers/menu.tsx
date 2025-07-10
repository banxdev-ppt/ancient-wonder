import type { IRoutes } from '~/@types/global';
import MainDetail from '~/views/detail/MainDetail';
import MainHome from '~/views/home/MainHome';

export const publicRoutes: IRoutes[] = [
  { path: "/", name: "home", element: <MainHome /> },
  { path: ":id", name: "detail", element: <MainDetail /> }
];