import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowIcon } from "../../../../assets/icons";
import FilterProps from "../types/FilterProps";

const spaceOptions = [50000, 100000, 150000, 200000, 300000];

function SpaceFilter({ isOpen, onToggle }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minSpace, setMinSpace] = useState<string>("");
  const [maxSpace, setMaxSpace] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const min = searchParams.get("minSpace");
    const max = searchParams.get("maxSpace");
    if (min) setMinSpace(min);
    if (max) setMaxSpace(max);
  }, [searchParams]);

  const handleApply = () => {
    const min = parseInt(minSpace);
    const max = parseInt(maxSpace);

    if (min > max) {
      setError("ჩაწერეთ ვალიდური მონაცემები");
    } else {
      setError("");
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("minSpace", minSpace);
      newSearchParams.set("maxSpace", maxSpace);
      setSearchParams(newSearchParams);
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
      setError("");
      const min = searchParams.get("minSpace");
      const max = searchParams.get("maxSpace");
      if (min) setMinSpace(min);
      if (max) setMaxSpace(max);
    };
  }, [isOpen, searchParams, onToggle]);

  return (
    <div className="relative flex">
      <button
        onClick={() => onToggle()}
        className={`flex items-center rounded-[6px] px-[14px] py-[8px] gap-[4px] ${
          isOpen ? "bg-[#F3F3F3]" : ""
        }`}
      >
        <span>ფართობი</span>
        <ArrowIcon rotate={isOpen} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute flex flex-col top-full mt-[20px] bg-white border border-[#DBDBDB] shadow-cardShadow rounded-[10px] p-[24px] z-10 w-[382px] gap-[24px]"
        >
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-[16px]">ფართობის მიხედვით</h4>
            {/* inputs */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-4">
                <div className="relative">
                  <input
                    type="number"
                    value={minSpace}
                    onChange={(e) => setMinSpace(e.target.value)}
                    placeholder="დან"
                    className={`w-[155px] border rounded-[6px] p-[10px] font-firaGo400 text-[14px] placeholder:text-[#02152666] pr-8 ${
                      error ? "border-[#F93B1D]" : "border-[#808A93]"
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2  font-firaGo400 text-[12px] text-[#2D3648]">
                    მ
                    <sup className="!text-[10px] relative top-[-0.3em] left-[0.2em] font-firaGo400 text-[#2D3648]">
                      2
                    </sup>
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="number"
                    value={maxSpace}
                    onChange={(e) => setMaxSpace(e.target.value)}
                    placeholder="მდე"
                    className={`w-[155px] border rounded-[6px] p-[10px] font-firaGo400 text-[14px] placeholder:text-[#02152666] pr-8 ${
                      error ? "border-[#F93B1D]" : "border-[#808A93]"
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2  font-firaGo400 text-[12px] text-[#2D3648]">
                    მ
                    <sup className="!text-[10px] relative top-[-0.3em] left-[0.2em] font-firaGo400 text-[#2D3648]">
                      2
                    </sup>
                  </span>
                </div>
              </div>

              {error && (
                <p className="font-firaGo400 text-[12px] text-[#F93B1D]">
                  {error}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-[16px]">
              {/* min space */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[14px]">
                  მინ. {"\u00A0"} მ
                  <sup className="!text-[7px] relative top-[-0.8em] left-[0.3em]">
                    2
                  </sup>
                </h3>
                <div>
                  {spaceOptions.map((space) => (
                    <button
                      key={`min-${space}`}
                      onClick={() => setMinSpace(space.toString())}
                      className="block w-full mb-2 text-left font-firaGo400 text-[14px]"
                    >
                      {space.toLocaleString()} მ
                      <sup className="!text-[10px] relative top-[-0.3em] left-[0.2em] font-firaGo400 text-[#2D3648]">
                        2
                      </sup>
                    </button>
                  ))}
                </div>
              </div>

              {/* max space */}
              <div className="flex flex-col gap-[16px]">
                <h3 className="text-[14px]">
                  მაქს. {"\u00A0"} მ
                  <sup className="!text-[7px] relative top-[-0.8em] left-[0.3em]">
                    2
                  </sup>
                </h3>
                <div>
                  {spaceOptions.map((space) => (
                    <button
                      key={`max-${space}`}
                      onClick={() => setMaxSpace(space.toString())}
                      className="block w-full mb-2 text-left font-firaGo400 text-[14px]"
                    >
                      {space.toLocaleString()} მ²
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
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

export default SpaceFilter;
