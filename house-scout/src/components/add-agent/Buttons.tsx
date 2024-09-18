interface ButtonProps {
  onClose: () => void;
  isLoading: boolean;
}

function Buttons({ onClose, isLoading }: ButtonProps) {
  return (
    <div className="flex mt-20">
      <button
        type="button"
        onClick={onClose}
        className="flex h-full items-center justify-center bg-[#FFFFFF] rounded-[10px] px-[16px] py-[10px] text-[#F93B1D] border-[#F93B1D] border gap-[2px] hover:bg-[#F93B1D] hover:text-[#FFFFFF] transition-all duration-300 ml-auto"
      >
        გაუქმება
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="flex h-full items-center justify-center bg-[#F93B1D] rounded-[10px] px-[16px] py-[10px] text-[#FFFFFF] gap-[2px] hover:bg-[#DF3014] transition-all duration-300 ml-5 disabled:cursor-not-allowed"
      >
        დამატება აგენტი
      </button>
    </div>
  );
}

export default Buttons;
