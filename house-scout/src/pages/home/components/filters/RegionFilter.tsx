import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "../../../../assets/icons";
import FilterProps from "../types/FilterProps";
import { useSelector } from "react-redux";
import { StateType } from "../../../../store/store";

function RegionFilter({ isOpen, onToggle }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { regions } = useSelector((state: StateType) => state.region);

  const regionOptions = regions ? regions : [];

  useEffect(() => {
    const regionParams = searchParams.get("regions");
    if (regionParams) {
      setSelectedRegions(regionParams.split(",").map(Number));
    }
  }, [searchParams]);

  const handleRegionToggle = (id: number) => {
    setSelectedRegions((prev) =>
      prev.includes(id)
        ? prev.filter((regionId) => regionId !== id)
        : [...prev, id]
    );
  };

  const handleApply = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (selectedRegions.length > 0) {
      newSearchParams.set("regions", selectedRegions.join(","));
    } else {
      newSearchParams.delete("regions");
    }
    setSearchParams(newSearchParams);
    onToggle();
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
        onClick={onToggle}
        className={`flex items-center rounded-[6px] px-[14px] py-[8px] gap-[4px] ${
          isOpen ? "bg-[#F3F3F3]" : ""
        }`}
      >
        <span>რეგიონები</span>
        <ArrowIcon rotate={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute flex flex-col top-full mt-[20px] bg-white border border-[#DBDBDB] shadow-cardShadow rounded-[10px] p-[24px] z-10 w-max gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-[16px]">რეგიონის მიხედვით</h4>
            <div className="grid grid-cols-3 gap-[16px]">
              {regionOptions.map((region) => (
                <div key={region.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`region-${region.id}`}
                    checked={selectedRegions.includes(region.id)}
                    onChange={() => handleRegionToggle(region.id)}
                    className="mr-2 font-firaGo400 text-[20px] "
                  />
                  <label
                    htmlFor={`region-${region.id}`}
                    className="flex font-firaGo400 text-[14px] "
                  >
                    {region.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={handleApply}
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

export default RegionFilter;
