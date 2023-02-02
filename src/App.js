import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/react-for-beginners",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
  {
    path: "/navigation",
    element: <Navigation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
