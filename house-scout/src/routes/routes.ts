import { useRoutes } from "react-router-dom";

import PublicRoutes from "./publicRoutes";

export default function Router() {
  return useRoutes([PublicRoutes()]);
}
