import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../../store/store";
import { getEstates } from "../../../toolkit/real-estates/estatesSlice";
import { LoaderComponent, EstateCardComponent } from "../../../components";
import "react-multi-carousel/lib/styles.css";
import ReactCarousel from "react-multi-carousel";
import { responsive } from "./responsive";
import ButtonGroup from "./ButtonGroup";

interface CarouselProps {
  region_id: number;
}

function Carousel({ region_id }: CarouselProps) {
  const dispatch: DispatchType = useDispatch();
  const { estates, isLoading } = useSelector(
    (state: StateType) => state.estates
  );

  useEffect(() => {
    dispatch(getEstates());
  }, [dispatch]);

  const filteredEstates =
    estates?.filter((estate) => estate.city.region_id == region_id) || [];

  if (isLoading) return <LoaderComponent />;

  return (
    <div className="relative w-full flex justify-center mb-32">
      <div className="w-full overflow-hidden 1700px:w-[1600px] h-[510px]">
        <ReactCarousel
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          responsive={responsive}
          partialVisible={false}
        >
          {filteredEstates.map((estate) => (
            <div key={estate.id}>
              <EstateCardComponent estate={estate} />
            </div>
          ))}
        </ReactCarousel>
      </div>
    </div>
  );
}

export default Carousel;
