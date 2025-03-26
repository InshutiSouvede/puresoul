import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AppLayout from "../pages/Layouts/AppLayout";
import UnProtecteRoutesLayout from "../pages/Layouts/UnProtecteRoutesLayout";
import AssessmentSelector from "../pages/AssessmentSelector";
import PureSoulWelcomePage from "../pages/WelcomePage";
import ProtecteRoutesLayout from "../pages/Layouts/ProtectedRouted";

export enum RouteLinks {
  LOGIN = "/auth",
  SIGNUP = "/auth/signup",
  UPDATE_PROFILE = "/profiles/update-mine",
  ALL_PROFILES = "/profiles",
  HOME = "/",
  NOT_FOUND = "*",
  ASSESSMENTS = "/assessments",
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
                element: <Home />,
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
