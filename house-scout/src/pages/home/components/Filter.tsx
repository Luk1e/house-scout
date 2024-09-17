import {
  RegionFilter,
  PriceCategory,
  SpaceFilter,
  BedroomFilter,
} from "./filters";

import { useState } from "react";

function Filter() {
  const [openFilter, setOpenFilter] = useState<number>(-1);

  const handleOpenFilter = (filterId: number) => {
    setOpenFilter(openFilter === filterId ? -1 : filterId);
  };

  return (
    <div className="flex border-[#DBDBDB] border rounded-[10px] p-[6px] gap-[24px]">
      <RegionFilter
        isOpen={openFilter === 0}
        onToggle={() => handleOpenFilter(0)}
      />
      <PriceCategory
        isOpen={openFilter === 1}
        onToggle={() => handleOpenFilter(1)}
      />
      <SpaceFilter
        isOpen={openFilter === 2}
        onToggle={() => handleOpenFilter(2)}
      />
      <BedroomFilter
        isOpen={openFilter === 3}
        onToggle={() => handleOpenFilter(3)}
      />
    </div>
  );
}

export default Filter;
