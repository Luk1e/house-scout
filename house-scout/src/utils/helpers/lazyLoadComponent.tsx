import { lazy, Suspense } from "react";
import LoaderComponent from "../../components/loader/LoaderComponent";

type ImportComponentFunction<T = React.ComponentType> = () => Promise<{
  default: T;
}>;

export const lazyLoadComponent = (importFunc: ImportComponentFunction) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => (
    <Suspense fallback={<LoaderComponent color="darkmagenta" />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
