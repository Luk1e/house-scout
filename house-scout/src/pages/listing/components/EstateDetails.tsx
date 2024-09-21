import {
  AreaIcon,
  AddressIcon,
  BedroomIcon,
  ZipCodeIcon,
} from "../../../assets/icons";

import { EstateProps } from "../types";

function EstateDetails({ estate }: EstateProps) {
  return (
    <div className="flex flex-col [&>div]:flex [&>div]:gap-[6px] [&>div]:items-center [&_*]:font-firaGo400 [&_*]:text-[24px] [&_*]:text-[#808A93]">
      <div>
        <div className="w-[22px] h-[22px] flex items-center justify-center">
          <AddressIcon />
        </div>
        {estate?.address}
      </div>
      <div>
        <div className="w-[22px] h-[22px] flex items-center justify-center">
          <AreaIcon />
        </div>
        <span className="inline-flex items-baseline">
          ფართი {estate?.area} მ
          <sup className="!text-[11px] relative top-[-1.3em] left-[0.2em]">
            2
          </sup>
        </span>
      </div>
      <div>
        <div className="w-[22px] h-[22px] flex items-center justify-center">
          <BedroomIcon />
        </div>
        საძინებელი {estate?.bedrooms}
      </div>
      <div>
        <div className="w-[22px] h-[22px] flex items-center justify-center">
          <ZipCodeIcon />
        </div>
        საფოსტო ინდექსი {estate?.zip_code}
      </div>
    </div>
  );
}

export default EstateDetails;
