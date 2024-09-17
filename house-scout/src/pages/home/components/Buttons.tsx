import { Link } from "react-router-dom";
import { PlusIcon } from "../../../assets/icons";

function Buttons() {
  return (
    <div className="flex h-full gap-[16px]">
      <Link
        to="/add-listing"
        className="flex w-[232px] h-full items-center justify-center bg-[#F93B1D] rounded-[10px] px-[16px] py-[10px] text-[#FFFFFF] gap-[2px] hover:border hover:border-[#F93B1D] hover:bg-[#DF3014] transition-all duration-300"
      >
        <PlusIcon /> ლისტინგის დამატება
      </Link>

      <Link
        to="add-agent"
        className="flex w-[230px] h-full items-center justify-center bg-[#FFFFFF] rounded-[10px] px-[16px] py-[10px] text-[#F93B1D] border-[#F93B1D] border gap-[2px] hover:bg-[#F93B1D] hover:text-[#FFFFFF] transition-all duration-300"
      >
        <PlusIcon /> აგენტის დამატება
      </Link>
    </div>
  );
}

export default Buttons;
