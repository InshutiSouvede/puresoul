import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import AppLayout from "../pages/Layouts/AppLayout";
import UnProtecteRoutesLayout from "../pages/Layouts/UnProtecteRoutesLayout";
import AssessmentSelector from "../pages/AssessmentSelector";
import PureSoulWelcomePage from "../pages/WelcomePage";
import ProtecteRoutesLayout from "../pages/Layouts/ProtectedRouted";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NewBook from "../pages/NewBook";
import NewExpert from "../pages/NewExpert";

export enum RouteLinks {
  LOGIN = "/auth/login",
  SIGNUP = "/auth/signup",
  PROFILE = "/profile",
  HOME = "/",
  DASHBOARD = "/dashboard",
  UPDATE_PROFILE = "/profiles/update-mine",
  ALL_PROFILES = "/profiles",
  NOT_FOUND = "*",
  ASSESSMENTS = "/assessments",
  NEW_BOOK = "/books/new",
  NEW_EXPERT = "experts/new",
}
export const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <AppLayout />,
        children: [
      {
        element: <UnProtecteRoutesLayout />,
        children: [
          {
            path: "auth",
            children: [
              {
                path: "login",
                element: <Login />,
              },
              {
                path: "signup",
                element: <Signup />,
              },
            ],
          },
        ],
      },
          {
            index: true,
            element: <PureSoulWelcomePage />,
          },
          {
            path: "assessments",
            element: <AssessmentSelector />,
          },
          {
            element: <ProtecteRoutesLayout />,
            children: [
              {
                path: "dashboard",
                element: <Dashboard />,
              },
              {
                path: "profile",
                element: <Profile />,
              },
              {
                path: RouteLinks.NEW_BOOK,
                element:<NewBook />
              },
              {
                path: RouteLinks.NEW_EXPERT,
                element:<NewExpert />
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
