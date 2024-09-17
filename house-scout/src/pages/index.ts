import { lazyLoadComponent } from "../utils/helpers/lazyLoadComponent";

const HomePage = lazyLoadComponent(() => import("../pages/home/HomePage"));

export const lazyPages = {
  HomePage,
};
