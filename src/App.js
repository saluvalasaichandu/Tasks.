import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Products from "./components/Products";

const router=createBrowserRouter([
  {path:"/",
  element:<Home/>},
  {path:"/products",
  element:<Products/>}
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
