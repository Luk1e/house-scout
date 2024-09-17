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

function HomePage() {
  const dispatch: DispatchType = useDispatch();
  const regionSlice = useSelector((state: StateType) => state.region);
  const estatesSlice = useSelector((state: StateType) => state.estates);

  useEffect(() => {
    dispatch(getRegions());
    dispatch(getEstates());

    return () => {
      dispatch(resetRegions());
      dispatch(resetEstates());
    };
  }, []);

  console.log(regionSlice.regions);

  console.log(estatesSlice.estates);
  return (
    <main className="px-10 py-5 md:px-15 md:py-10 lg:px-28 lg:py-15 2xl:px-[162px] 2xl:py-[38px] font-firaGo">
      <FilterPanel />
    </main>
  );
}

export default HomePage;
