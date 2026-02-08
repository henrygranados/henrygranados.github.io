import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/experience", element: <Experience /> },
      { path: "/portfolio", element: <Portfolio /> },
    ],
  },
]);
