import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../store/store";
import { useEffect } from "react";
import {
  deleteEstate,
  reset,
} from "../../toolkit/real-estates/deleteEstateSlice";
import { useNavigate, useParams } from "react-router-dom";

interface ButtonProps {
  onClose: () => void;
}

function Buttons({ onClose }: ButtonProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const { isLoading, success } = useSelector(
    (state: StateType) => state.deleteEstate
  );

  useEffect(() => {
    if (success) {
      navigate("/");
    }
    return () => {
      dispatch(reset());
    };
  }, [success, navigate, dispatch]);

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onClose}
        className="flex max-h-max items-center justify-center bg-[#FFFFFF] rounded-[10px] px-[16px] py-[10px] text-[#F93B1D] border-[#F93B1D] border gap-[2px] hover:bg-[#F93B1D] hover:text-[#FFFFFF] transition-all duration-300"
      >
        გაუქმება
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="flex h-full items-center justify-center bg-[#F93B1D] rounded-[10px] !px-[16px] py-[10px] text-[#FFFFFF] hover:bg-[#DF3014] transition-all duration-300 ml-5 disabled:cursor-not-allowed"
        onClick={() => dispatch(deleteEstate({ id: Number(id) }))}
      >
        დადასტურება
      </button>
    </div>
  );
}

export default Buttons;
