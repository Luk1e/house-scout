import { lazyLoadComponent } from "../utils/helpers/lazyLoadComponent";

const HomePage = lazyLoadComponent(() => import("../pages/home/HomePage"));
const AddListingPage = lazyLoadComponent(
  () => import("../pages/add-listing/AddListingPage")
);
const ListingPage = lazyLoadComponent(
  () => import("../pages/listing/ListingPage")
);

export const lazyPages = {
  HomePage,
  ListingPage,
  AddListingPage,
};
