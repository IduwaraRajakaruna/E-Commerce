import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Myaccount from "./pages/Myaccount";
import Navbar from "./components/Navbar";

function App() { 

  const Layout = () => {
    return 
    <div>
      <Navbar />
    </div>;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/myaccount",
      element: <Myaccount />
    }
  ]);
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App
