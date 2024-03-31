import { createBrowserRouter } from "react-router-dom";
import LandingPageView from "../pages/landing-page-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageView />,
  },
  {
    path: "/home",
    element: <LandingPageView />,
  },
]);

export { router };
