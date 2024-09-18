import { Link } from "react-router-dom";
import { PlusIcon } from "../../../assets/icons";

import AddAgentComponent from "../../../components/add-agent/AddAgentComponent";
import { useState } from "react";

function Buttons() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-full gap-[16px] flex-col 2xl:flex-row">
      <Link
        to="/add-listing"
        className="flex w-[232px] h-full items-center justify-center bg-[#F93B1D] rounded-[10px] px-[16px] py-[10px] text-[#FFFFFF] gap-[2px] hover:bg-[#DF3014] transition-all duration-300"
      >
        <PlusIcon /> ლისტინგის დამატება
      </Link>

      <button
        onClick={() => setIsOpen(true)}
        className="flex w-[230px] h-full items-center justify-center bg-[#FFFFFF] rounded-[10px] px-[16px] py-[10px] text-[#F93B1D] border-[#F93B1D] border gap-[2px] hover:bg-[#F93B1D] hover:text-[#FFFFFF] transition-all duration-300"
      >
        <PlusIcon /> აგენტის დამატება
      </button>

      {isOpen && (
        <AddAgentComponent onClose={() => setIsOpen(false)} isOpen={isOpen} />
      )}
    </div>
  );
}

export default Buttons;
