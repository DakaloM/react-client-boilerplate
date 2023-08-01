import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import { useStateContext } from "./context/ContextProvider";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Success from "./pages/success/Success";

function App() {

  const { user } = useStateContext();

  

  const Layout = () => {
    return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>

        <Navbar />
        <Outlet />
        {/* <Footer /> */}

      </div>
    )
  }

  const ProtectedRoutes = ({children}) => {
      if(user === null) {
        return  <Navigate to="/login" />
      }
      return children
  }

  

  // const router = createBrowserRouter([
  //   {
  //     path: "/", element: <Layout />, children: [
  //       {path: "/", element:<Home />},
  //       {path: "/home", element:<Home />},
  //       {path: "/about", element:<About />},
  //       {path: "/contact", element:<Contact />},
  //     ],


  //   },

    
  // ])

  const router = createBrowserRouter([
    {path: '/login', element: <Login />},
    {path: '/register', element: <Register />},
    {path: '/resetPassword/:token', element: <ResetPassword />},
    {path: '/forgotPassword', element: <ForgotPassword />},
    {path: '/success', element: <Success />},
    {
      path: '/', element :
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>,

        children : [
          {path: '/', element: <Home />},
          
        ]
    },
  ])



  return (
    <div className="App theme-light light" style={{
      
    }}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
