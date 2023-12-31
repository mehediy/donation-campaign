import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import CardDetails from "../components/CardDetails/CardDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://mehediy.github.io/data.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("https://mehediy.github.io/data.json"),
      },
      {
        path: "/donation/:id",
        element: <CardDetails />,
        loader: () => fetch("https://mehediy.github.io/data.json"),
      },
    ],
  },
]);
export default router;
