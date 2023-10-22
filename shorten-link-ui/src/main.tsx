import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import VerificationPage from "./pages/VerificationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/verification-account",
    element: <VerificationPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
