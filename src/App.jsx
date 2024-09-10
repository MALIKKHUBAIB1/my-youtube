import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Body from "./Pages/Body";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

/* {
component that we have to build 
 Header 
 Body Comonent will have two components
   1->SideBar 
    2->Video container (it contain  list of  video )
 Filter button just like header 
 Video Detail Page with sideBar
 and more..... 
} */
