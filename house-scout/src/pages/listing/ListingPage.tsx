import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, StateType } from "../../store/store";
import { useEffect } from "react";
import {
  getEstate,
  reset as resetGetEstate,
} from "../../toolkit/real-estates/estateSlice";

function ListingPage() {
  const { id } = useParams();
  const dispatch: DispatchType = useDispatch();
  const { estate } = useSelector((state: StateType) => state.estate);

  useEffect(() => {
    dispatch(getEstate({ id: Number(id) }));
    return () => {
      dispatch(resetGetEstate());
    };
  }, [id, dispatch]);
  
  console.log(estate);
  return <div>listing</div>;
}

export default ListingPage;
