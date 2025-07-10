import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-full flex justify-center flex-nowrap items-center">
      <div className="container my-5 p-5">
        <Outlet />
      </div>
    </div>
  );
}