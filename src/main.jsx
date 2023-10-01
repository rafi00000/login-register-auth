import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./router/Route.jsx";
import AuthProvider from "./components/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* we called authProvider here because it will receive the whole routes as children */}
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
