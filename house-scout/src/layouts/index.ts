import { lazyLoadComponent } from "../utils/helpers/lazyLoadComponent";

const PublicLayout = lazyLoadComponent(() => import("./PublicLayout"));

export const lazyLayouts = {
  PublicLayout,
};
