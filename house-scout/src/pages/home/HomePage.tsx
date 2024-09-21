import { useEffect } from "react";
import FilterPanel from "./components/FilterPanel";
import { DispatchType, StateType } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  getRegions,
  reset as resetRegions,
} from "../../toolkit/region/regionSlice";
import {
  getEstates,
  reset as resetEstates,
} from "../../toolkit/real-estates/estatesSlice";
import { EstateCardComponent, LoaderComponent } from "../../components";

function HomePage() {
  const dispatch: DispatchType = useDispatch();

  const { estates, isLoading } = useSelector(
    (state: StateType) => state.estates
  );

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getEstates());

    return () => {
      dispatch(resetRegions());
      dispatch(resetEstates());
    };
  }, []);

  const filteredEstates = estates ? [...estates] : [];

  console.log(estates);
  return (
    <main className="px-10 py-5 md:px-15 md:py-10 lg:px-28 lg:py-15 2xl:px-[162px] 2xl:py-[38px] font-firaGo500">
      <FilterPanel />

      {isLoading ? (
        <LoaderComponent />
      ) : (
        <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(384px,1fr))] gap-4 gap-y-16 sm:gap-y-10 mb-10 2xl:mb-40 mt-5">
          {filteredEstates.map((estate) => (
            <div
              key={estate.id}
              className="w-full [&>*]:!p-0 [&>*]:!m-0 [&>div>div]:shadow-cardShadow"
            >
              <EstateCardComponent estate={estate} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default HomePage;
