import { lazyLayouts } from "../layouts";
import { lazyPages } from "../pages";

export default function PublicRoutes() {
  const { PublicLayout } = lazyLayouts;

  return {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <lazyPages.HomePage />,
      },
      {
        path: "/add-listing",
        element: <lazyPages.AddListingPage />,
      },
      {
        path: "/listing/:id",
        element: <lazyPages.ListingPage />,
      },
      {
        path: "*",
        element: <div>error</div>,
      },
    ],
  };
}
