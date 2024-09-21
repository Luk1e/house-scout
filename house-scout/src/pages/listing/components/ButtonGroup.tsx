import { BackIcon } from "../../../assets/icons";

const ButtonGroup = ({ next, previous }: any) => {
  return (
    <>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 md:-translate-x-0 bg-[#02152680] rounded-[100px] p-2 text-white 1700px:bg-transparent 1700px:p-0 1700px:text-[#021526]"
        onClick={() => previous()}
      >
        <BackIcon />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 md:translate-x-0 bg-[#02152680] rounded-[100px] p-2 text-white 1700px:bg-transparent 1700px:p-0 1700px:text-[#021526]"
        onClick={() => next()}
      >
        <BackIcon rotate={true} />
      </button>
    </>
  );
};

export default ButtonGroup;
