import { lazyLayouts } from "../layouts";

export default function PublicRoutes() {
  const { PublicLayout } = lazyLayouts;

  return {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "*",
        element: <div>error</div>,
      },
    ],
  };
}
