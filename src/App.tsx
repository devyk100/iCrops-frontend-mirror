// import { useState } from 'react'
import "./App.css";
import {
  createBrowserRouter,
  isRouteErrorResponse,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

// export const BACKEND_URL = "http://maps.icrisat.org/";
export const BACKEND_URL = "http://localhost:8090/";
export const startRoute = "/react";
const router = createBrowserRouter([
  {
    path: startRoute + "/data",
    element: <Dashboard />,
    // ErrorBoundary: ErrorBoundary
  },
  {
    path: startRoute + "/data/:dataid",
    element: <SpecificData />,
  },
  {
    path: startRoute + "/",
    element: <Landing />,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: startRoute + "/login",
    element: <Login />,
  },
  {
    path: startRoute + "/signup",
    element: <SignUp />,
  },
]);

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops some error occured in the application</div>;
  }
}

import Dashboard from "./pages/dashboard/Dashboard";
import SpecificData from "./pages/SpecificData";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import store from "./store";
import { Provider } from "react-redux";
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
      ,
    </>
  );
}
export default App;
