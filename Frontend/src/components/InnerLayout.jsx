import Header from "./InnerHeader.jsx";
import { Outlet } from "react-router-dom";

function InnerLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default InnerLayout;
