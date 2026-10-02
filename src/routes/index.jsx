import { createBrowserRouter } from "react-router";
import App from "../App";
import Koleksi from "../pages/BookDetail";
import Katalog from "../pages/Books";
import Pusat from "../pages/Pusat";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/koleksi",
        element: <Koleksi />,
      },
      {
        path: "/katalog",
        element: <Katalog />,
      },
      {
        path: "/pusat",
        element: <Pusat />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;