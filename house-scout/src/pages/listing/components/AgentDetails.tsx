import { MailIcon, PhoneIcon } from "../../../assets/icons";

import { EstateProps } from "../types";

function AgentDetails({ estate }: EstateProps) {
  return (
    <div className="flex flex-col justify-center border border-[#DBDBDB] rounded-[8px] h-[174px] p-[20px]">
      {/* agent details */}
      <div className="flex ">
        <img
          src={estate?.agent.avatar}
          className="w-[72px] h-[72px] rounded-[100px]"
        />

        <div className="flex flex-col justify-center ml-3">
          <p className="font-firaGo400 text-[16px]">
            {estate?.agent.name + " " + estate?.agent.surname}
          </p>
          <p className="font-firaGo400 text-[14px] text-[#676E76]">აგენტი</p>
        </div>
      </div>

      {/* agent contact */}
      <div className="flex flex-col [&>div]:flex [&>div]:gap-[6px] [&>div]:items-center [&_*]:font-firaGo400 [&_*]:text-[14px] [&_*]:text-[#808A93]">
        <div>
          <div className="w-[22px] h-[22px] flex items-center justify-center">
            <MailIcon />
          </div>
          {estate?.agent.email}
        </div>
        <div>
          <div className="w-[22px] h-[22px] flex items-center justify-center">
            <PhoneIcon />
          </div>
          {estate?.agent.phone}
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;
