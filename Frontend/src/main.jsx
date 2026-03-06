import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import ProductTagGenerator from "./components/ProductTagGenerator";
import ImpactGenerator from "./components/ProductImpactGenerator";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "generate-tags",
        element: <ProductTagGenerator />,
      },
      {
        path: "generate-impact",
        element: <ImpactGenerator />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={route}></RouterProvider>,
);
