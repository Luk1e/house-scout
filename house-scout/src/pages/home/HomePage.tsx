import { useEffect, useState } from "react";
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
import FilterParams from "./components/FilterParams";
import { useSearchParams } from "react-router-dom";
import { EstateType } from "../../toolkit/types";

function HomePage() {
  const dispatch: DispatchType = useDispatch();
  const [searchParams] = useSearchParams();
  const [filteredEstates, setFilteredEstates] = useState<EstateType[]>([]);

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
  }, [dispatch]);

  useEffect(() => {
    if (estates) {
      const mergedEstates: any[] = [];

      const regionParams = searchParams.get("regions");
      const bedrooms = searchParams.get("bedrooms");
      const minPrice = searchParams.get("min");
      const maxPrice = searchParams.get("max");
      const minSpace = searchParams.get("minSpace");
      const maxSpace = searchParams.get("maxSpace");

      if (regionParams) {
        regionParams.split(",").map(Number);
        mergedEstates.push(
          estates?.filter((estate) =>
            regionParams.includes(estate.city.region_id.toString())
          )
        );
      }

      if (bedrooms) {
        mergedEstates.push(
          estates?.filter((estate) => estate.bedrooms == Number(bedrooms))
        );
      }

      if (minPrice && maxPrice) {
        mergedEstates.push(
          estates?.filter(
            (estate) =>
              estate.price < Number(maxPrice) &&
              estate.price >= Number(minPrice)
          )
        );
      }

      if (minSpace && maxSpace) {
        mergedEstates.push(
          estates?.filter(
            (estate) =>
              estate.area < Number(maxSpace) && estate.area >= Number(minSpace)
          )
        );
      }

      // if there are no filters display all estates, otherwise filter
      if (
        !regionParams &&
        !bedrooms &&
        !minPrice &&
        !maxPrice &&
        !minSpace &&
        !maxSpace
      ) {
        setFilteredEstates(estates);
      } else {
        setFilteredEstates(
          mergedEstates
            .flat()
            .filter(
              (obj1, i, arr) =>
                arr.findIndex((obj2) => obj2.id === obj1.id) === i
            )
        );
      }
    }
  }, [estates, searchParams]);

  return (
    <main className="px-10 py-5 md:px-15 md:py-10 lg:px-28 xl:py-15 2xl:px-[150px] 2xl:py-[64px] font-firaGo500 flex items-center justify-center">
      <div className="1700px:w-[1600px] 1600px:w-[1500]">
        <FilterPanel />
        <FilterParams />
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-16 sm:gap-y-10  mt-5">
            {filteredEstates.length > 0 ? (
              filteredEstates.map((estate) => (
                <div
                  key={estate.id}
                  className="max-w-fit sm:max-w-[384px] [&>*]:!p-0 [&>*]:!m-0 [&>div>div]:shadow-cardShadow"
                >
                  <EstateCardComponent estate={estate} />
                </div>
              ))
            ) : (
              <p>ლისტინგი ვერ მოიძებნა</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default HomePage;
