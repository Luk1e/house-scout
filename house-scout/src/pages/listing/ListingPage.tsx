import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, StateType } from "../../store/store";
import { useEffect } from "react";
import {
  getEstate,
  reset as resetGetEstate,
} from "../../toolkit/real-estates/estateSlice";
import LoaderComponent from "../../components/loader/LoaderComponent";
import { Carousel, HeaderSection, DetailsSection } from "./components";

function ListingPage() {
  const { id } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { estate, isLoading } = useSelector((state: StateType) => state.estate);

  useEffect(() => {
    dispatch(getEstate({ id: Number(id) }));
    return () => {
      dispatch(resetGetEstate());
    };
  }, [id, dispatch]);

  return (
    <main className="flex flex-col p-5 sm:p-20 items-center gap-[32px]">
      <HeaderSection />
      {isLoading ? <LoaderComponent /> : <DetailsSection estate={estate} />}

      <h2 className="flex text-[32px] w-full 1700px:w-[1591px]">
        ბინები მსგავს ლოკაციაზე
      </h2>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Carousel region_id={Number(estate?.city.region_id)} />
      )}
    </main>
  );
}

export default ListingPage;
