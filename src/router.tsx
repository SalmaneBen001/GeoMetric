import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Countries from "./pages/Countries";
import Compare from "./pages/Compare";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "/countries", Component: Countries },
      { path: "/compare", Component: Compare },
      { path: "/settings", Component: Settings },
      { path: "*", Component: NotFound },
    ],
  },
]);
