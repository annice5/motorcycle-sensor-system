import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/landing";
import About from "./pages/landing/components/about";
import Company from "./pages/landing/components/company";
import Services from "./pages/landing/components/services";
import Contact from "./pages/landing/components/contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
      children: [
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "company",
          element: <Company/>,
        },
        {
          path: "services",
          element: <Services/>,
        },

        {
          path: "contact",
          element: <Contact/>,
        },
      ],
    },
  ]);
  

  return <RouterProvider router={router} />;
}

export default App
