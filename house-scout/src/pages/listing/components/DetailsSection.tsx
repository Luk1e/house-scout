import { EstateProps } from "../types";

import Buttons from "./Buttons";
import LeftSide from "./LeftSide";
import AgentDetails from "./AgentDetails";
import EstateDetails from "./EstateDetails";

function DetailsSection({ estate }: EstateProps) {
  return (
    <section className="flex flex-col relative  sm:gap-[68px] 1700px:w-[1620px] 2xl:flex-row">
      {/* left side */}
      <LeftSide estate={estate} />

      {/* right side */}
      <div className="flex flex-col sm:w-[503px] gap-[40px]">
        {/* price */}
        <h2 className="text-[48px] font-firaGo700">
          {String(estate?.price)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ", ")
            .trim()}{" "}
          ₾
        </h2>

        {/* details */}
        <EstateDetails estate={estate} />

        {/* address */}
        <p className="font-firaGo400 text-[16px] text-[#808A93]">
          {estate?.description}
        </p>

        {/* agent */}
        <AgentDetails estate={estate} />

        {/* delete listing */}
        <Buttons />
      </div>
    </section>
  );
}

export default DetailsSection;
