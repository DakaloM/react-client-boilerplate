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

function App() {

  const user = true;

  const Layout = () => {
    return (
      <div style={{display: "flex", flexDirection: "column", minHeight: "100vh", justifyContent: "space-between"}}>

        <Navbar />
        <Outlet />
        <Footer />

      </div>
    )
  }

  const ProtectedRoutes = ({children}) => {
      if(user !== true) {
        <Navigate to="/"/>
      }
      return children
  }

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        {path: "/", element:<Home />},
        {path: "/home", element:<Home />},
        {path: "/about", element:<About />},
        {path: "/contact", element:<Contact />},
      ],


    },

    
  ])

  // const router = createBrowserRouter([
  //   {path: '/login', element: <Login />},
  //   {path: '/register', element: <Register />},
  //   {
  //     path: '/', element :
  //       <ProtectedRoutes>
  //         <Layout />
  //       </ProtectedRoutes>,

  //       children : [
  //         {path: '/', element: <Home />},
  //         {path: '/categories', element: <Categories />},
  //         {path: '/members', element: <Members />},
  //         {path: '/editMember/:id', element: <EditMember />},
  //         {path: '/slides', element: <Slides />},
  //         // {path: '/editSlide/:id', element: <EditSlide />},
  //         {path: '/users', element: <Users />},
  //         {path: '/posts', element: <Posts />},
  //         {path: '/editPost/:id', element: <EditPost />},
  //         {path: '/testimonies', element: <Testimonies />},
  //       ]
  //   },
  // ])



  return (
    <div className="App theme-light light" style={{
      
    }}>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
