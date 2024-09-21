import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "../../../../assets/icons";
import FilterProps from "../types/FilterProps";

function BedroomFilter({ isOpen, onToggle }: FilterProps) {
  const [bedroomValue, setBedroomValue] = useState<number | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialBedroomValue = searchParams.get("bedrooms");
    if (initialBedroomValue) {
      setBedroomValue(Number(initialBedroomValue));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedroomValue(Number(e.target.value));
  };

  const handleSetBedrooms = () => {
    if (bedroomValue !== undefined) {
      searchParams.set("bedrooms", bedroomValue.toString());
      setSearchParams(searchParams);
      onToggle();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="relative flex" ref={dropdownRef}>
      <button
        onClick={() => onToggle()}
        className={`flex items-center rounded-[6px] px-[14px] py-[8px] gap-[4px] ${
          isOpen ? "bg-[#F3F3F3]" : ""
        }`}
      >
        <span>საძინებლების რაოდენობა</span>
        <ArrowIcon rotate={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute flex flex-col top-full mt-[20px] bg-white border border-[#DBDBDB] shadow-cardShadow rounded-[10px] p-[24px] z-10 w-[282px] gap-[32px]">
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-[16px]">საძინებლების რაოდენობა</h4>
            <input
              type="number"
              value={bedroomValue || ""}
              onChange={handleInputChange}
              placeholder="0"
              className="border border-[#808A93] rounded-[6px] w-[41px] text-center font-firaGo400 text-[14px] text-[#02152666]"
            />
          </div>

          <div>
            <button
              onClick={handleSetBedrooms}
              className="flex items-center justify-center bg-[#F93B1D] rounded-[8px] px-[14px] py-[8px] text-[#FFFFFF] text-[14px] hover:bg-[#DF3014] transition-all duration-300 ml-auto"
            >
              არჩევა
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BedroomFilter;
