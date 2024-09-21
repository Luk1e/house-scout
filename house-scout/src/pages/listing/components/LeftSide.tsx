import { EstateProps } from "../types";

function LeftSide({ estate }: EstateProps) {
  return (
    <div className="flex flex-col">
      <img
        src={estate?.image}
        className="!bg-gray-600 !p-0 !m-0 lg:h-[670px] lg:w-[839px] rounded-t-[14px]"
      />
      <p className="absolute top-0 translate-y-full translate-x-1/4 left-0  text-[#FFFFFF] text-[20px] font-firaGo500 bg-[#02152680] w-fit py-[6px] px-[16px] rounded-[20px]">
        {estate?.is_rental == 0 ? "ქირავდება" : "იყიდება"}
      </p>
      <p className="font-firaGo400 text-[16px] text-[#808A93] ml-auto py-[10px]">
        გამოქვეყნების თარიღი{" "}
        {new Date(String(estate?.created_at))
          .toLocaleDateString("en-GB")
          .replace(/\//g, "/")
          .slice(0, 8)}
      </p>
    </div>
  );
}

export default LeftSide;
