import { EstateType } from "../../toolkit/types";
import {
  AddressIcon,
  BedroomIcon,
  AreaIcon,
  ZipCodeIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";

interface EstateCardComponents {
  estate: EstateType;
}

function EstateCardComponent({ estate }: EstateCardComponents) {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col h-[455px] cursor-pointer my-10 sm:px-[10px]"
      onClick={() => navigate(`/listing/${estate.id}`)}
    >
      <div>
        <img
          src={estate.image}
          className="w-full 1700:w-[384px] h-[307px] rounded-t-[14px]"
        />
        <p className="absolute top-0 translate-y-full translate-x-1/4 left-0  text-[#FFFFFF] text-[12px] font-firaGo500 bg-[#02152680] w-fit py-[6px] px-[16px] rounded-[15px]">
          {estate?.is_rental == 0 ? "ქირავდება" : "იყიდება"}
        </p>
      </div>

      <div className="flex flex-col w-full border border-[#DBDBDB] border-t-0 rounded-b-[14px] px-[25px] py-[22px]  gap-[20px]">
        <div>
          {/* price */}
          <h3 className="font-firaGo700 text-[28px]">
            {String(estate?.price)
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
              .trim()}{" "}
            ₾
          </h3>

          {/* address */}
          <div className="flex text-[16px] font-firaGo400 text-[#021526b3] gap-[4px]  items-center">
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <AddressIcon />
            </div>
            {estate.address}
          </div>
        </div>

        {/* details */}
        <div className="flex gap-[32px]">
          {/* bedrooms */}
          <div className="flex text-[16px] font-firaGo400 text-[#021526b3] gap-[4px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <BedroomIcon />
            </div>
            {estate.bedrooms}
          </div>

          {/* area */}
          <div className="flex text-[16px] font-firaGo400 text-[#021526b3] gap-[4px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <AreaIcon />
            </div>

            <span className="inline-flex items-baseline text-[16px] font-firaGo400 text-[#021526b3]">
              {estate?.area} მ
              <sup className="!text-[10px] relative top-[-0.6em] left-[0.2em] font-firaGo400 text-[#021526b3]">
                2
              </sup>
            </span>
          </div>

          {/* zip code */}
          <div className="flex text-[16px] font-firaGo400 text-[#021526b3] gap-[4px]">
            <div className="w-[24px] h-[24px] flex items-center justify-center">
              <ZipCodeIcon />
            </div>
            {estate.zip_code}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EstateCardComponent;
