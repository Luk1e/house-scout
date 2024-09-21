import { useState } from "react";
import { DeleteEstateComponents } from "../../../components";

function Buttons() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className="border border-[#676E76] p-[10px] rounded-[8px] font-firaGo500 text-[12px] hover:bg-[#808A93] hover:text-[#FFFFFF] transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        ლისტინგის წაშლა
      </button>

      {isOpen && (
        <DeleteEstateComponents
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}

export default Buttons;
