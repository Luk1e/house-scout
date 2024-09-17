import { ArrowIcon } from "../../../../assets/icons";
import FilterProps from "../types/FilterProps";

function RegionFilter({ isOpen, onToggle }: FilterProps) {
  return (
    <div className="relative flex ">
      <button
        onClick={() => onToggle()}
        className={`flex items-center rounded-[6px] px-[14px] py-[8px] gap-[4px] ${
          isOpen ? "bg-[#F3F3F3]" : ""
        }`}
      >
        <span>რეგიონი</span>
        <ArrowIcon rotate={isOpen} />
      </button>

      {/* {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-4">
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" />
              Option 1
            </label>
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" />
              Option 2
            </label>
            <label className="flex items-center gap-2 mb-2">
              <input type="checkbox" />
              Option 3
            </label>
          </div>
          <div className="p-4 border-t border-gray-300">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
              Apply
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default RegionFilter;
