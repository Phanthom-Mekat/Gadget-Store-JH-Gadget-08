import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stastics from "../pages/Stastics";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import ProductPage from "../components/HomePageComponent/products/ProductPage";

const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
          children: [
            {
              path: "/",
              element: <ProductPage/>,
              loader:()=>fetch('../../public/products.json')
            }
          ]
      },
      {
        path: "/stastics",
        element: <Stastics/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ]
    },
  ]);

export default route