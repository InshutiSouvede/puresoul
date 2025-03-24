import { createBrowserRouter } from "react-router";
import Splash from "../pages/Splash";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AppLayout from "../pages/Layouts/AppLayout";
import AllProfiles from "../pages/AllProfiles";
import UpdateProfile from "../pages/UpdateProfile";
import UnProtecteRoutesLayout from "../pages/Layouts/UnProtecteRoutesLayout";
import AssessmentSelector from "../pages/AssessmentSelector";

export enum RouteLinks {
  SPLASH = "/",
  LOGIN = "/auth",

  SIGNUP = "/auth/signup",
  UPDATE_PROFILE = "/profiles/update-mine",
  ALL_PROFILES = "/profiles",
  HOME = "/home",
  NOT_FOUND = "*",
}
export const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <UnProtecteRoutesLayout />,
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
              {
                path:"questions",
                element: <AssessmentSelector/>
              },
            ],
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
            path: "profiles",
            children: [
              {
                index: true,
                element: <AllProfiles />,
              },
              {
                path: "update-mine",
                element: <UpdateProfile />,
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
