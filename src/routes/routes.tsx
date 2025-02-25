import { createBrowserRouter } from "react-router";
import Splash from "../pages/Splash";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NewMonth from "../pages/NewMonth";
import NewExpense from "../pages/expenses/NewExpense";
import UpdateExpense from "../pages/expenses/UpdateExpense";
import NotFound from "../pages/NotFound";
import AllExpenses from "../pages/expenses/AllExpenses";
import Home from "../pages/Home";
import AppLayout from "../pages/Layouts/AppLayout";

export enum RouteLinks {
  SPLASH = "/",
  LOGIN = "/auth",
  SIGNUP = "/auth/signup",
  NEW_MONTH = "/expenses/new-month",
  NEW_EXPENSE = "/expenses/new",
  UPDATE_EXPENSE = "/expenses/update/:id",
  ALL_EXPENSES = "/expenses",
  HOME = "/home",
  NOT_FOUND = "*",
}
export const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        index: true,
        element: <Splash />,
      },
      {
        path: "auth",
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "expenses",
            children: [
              {
                index: true,
                element: <AllExpenses />,
              },
              {
                path: "new",
                element: <NewExpense />,
              },
              {
                path: "update/:id",
                element: <UpdateExpense />,
              },
              {
                path: "new-month",
                element: <NewMonth />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
