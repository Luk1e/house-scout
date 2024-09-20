import { lazyLoadComponent } from "../utils/helpers/lazyLoadComponent";

const HomePage = lazyLoadComponent(() => import("../pages/home/HomePage"));
const AddListingPage = lazyLoadComponent(
  () => import("../pages/add-listing/AddListingPage")
);

export const lazyPages = {
  HomePage,
  AddListingPage,
};
