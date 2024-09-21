import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "../../../store/store";
import { CloseIcon } from "../../../assets/icons";

function FilterParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { regions } = useSelector((state: StateType) => state.region);

  // Retrieve region IDs and map them to region names
  const regionIds = searchParams.get("regions")?.split(",").map(Number) || [];
  const regionOptions = regions
    ? regions
        .filter((region) => regionIds.includes(region.id))
        .map((region) => region)
    : [];

  // Function to remove query parameters
  const handleRemoveParam = (param: string) => {
    searchParams.delete(param);
    setSearchParams(searchParams); // Update URL without the deleted param
  };

  const handleRemoveRegion = (regionId: number) => {
    const updatedRegions = regionIds.filter((id) => id !== regionId);
    if (updatedRegions.length > 0) {
      searchParams.set("regions", updatedRegions.join(","));
    } else {
      searchParams.delete("regions");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-[16px] flex-wrap my-5">
      {/* Display Space Range */}
      {searchParams.get("minSpace") && searchParams.get("maxSpace") && (
        <div className="border rounded-[43px] border-[#DBDBDB] px-[10px] py-[6px] flex items-center gap-[4px] text-[14px] font-firaGo400 text-[#021526cc]">
          <span className="text-[14px] font-firaGo400 text-[#021526cc]">
            {searchParams.get("minSpace")} მ
            <sup className="!text-[10px] relative top-[-0.5em] left-[0.1em]">
              2
            </sup>{" "}
            - {searchParams.get("maxSpace")} მ
            <sup className="!text-[10px] relative top-[-0.5em] left-[0.1em]">
              2
            </sup>
          </span>
          <div className="flex items-center justify-center w-[14px] h-[14px]">
            <button
              onClick={() => {
                handleRemoveParam("minSpace");
                handleRemoveParam("maxSpace");
              }}
              className="[&>*]:h-[7px] [&>*]:w-[7px] text-[#354451] hover:text-[#021526]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {/* Display Price Range */}
      {searchParams.get("min") && searchParams.get("max") && (
        <div className="border rounded-[43px] border-[#DBDBDB] px-[10px] py-[6px] flex items-center gap-[4px] text-[14px] font-firaGo400 text-[#021526cc]">
          <span className="text-[14px] font-firaGo400 text-[#021526cc]">
            {searchParams.get("min")}₾ - {searchParams.get("max")}₾
          </span>
          <div className="flex items-center justify-center w-[14px] h-[14px]">
            <button
              onClick={() => {
                handleRemoveParam("min");
                handleRemoveParam("max");
              }}
              className="[&>*]:h-[7px] [&>*]:w-[7px] text-[#354451] hover:text-[#021526]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {/* Display Bedrooms */}
      {searchParams.get("bedrooms") && (
        <div className="border rounded-[43px] border-[#DBDBDB] px-[10px] py-[6px] flex items-center gap-[4px] text-[14px] font-firaGo400 text-[#021526cc]">
          <span className="text-[14px] font-firaGo400 text-[#021526cc]">
            {searchParams.get("bedrooms")}
          </span>

          <div className="flex items-center justify-center w-[14px] h-[14px]">
            <button
              onClick={() => handleRemoveParam("bedrooms")}
              className="[&>*]:h-[7px] [&>*]:w-[7px] text-[#354451] hover:text-[#021526]"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {/* Display Regions */}
      {regionOptions.length > 0 &&
        regionOptions.map((region) => (
          <div
            key={region.id}
            className="border rounded-[43px] border-[#DBDBDB] px-[10px] py-[6px] flex items-center justify-center gap-[4px] text-[14px] font-firaGo400 text-[#021526cc]"
          >
            <span className="text-[14px] font-firaGo400 text-[#021526cc]">
              {region.name}
            </span>
            <div className="flex items-center justify-center w-[14px] h-[14px]">
              <button
                className="[&>*]:h-[7px] [&>*]:w-[7px] text-[#354451] hover:text-[#021526]"
                onClick={() => handleRemoveRegion(region.id)}
              >
                <CloseIcon />
              </button>
            </div>
          </div>
        ))}

      {[...searchParams.keys()].length > 0 && (
        <p
          className="flex  justify-center items-center font-firaGo500 text-[14px] cursor-pointer text-[#354451] hover:text-[#021526]"
          onClick={() => setSearchParams({})}
        >
          გასუფთავება
        </p>
      )}
    </div>
  );
}

export default FilterParams;
