import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import Root from "./Pages/Root";
import Body from "./Pages/Body";
import WatchPage from "./Pages/WatchPage";
import MainContainer from "./Component/MainContainer";
import Header from "./Pages/Header";
import ErrorPage from "./utils/Error/ErrorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <ErrorPage message="failed to load page" status={404} />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
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
