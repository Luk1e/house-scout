import { useNavigate } from "react-router-dom";

interface ButtonProps {
  isLoading: boolean;
}

function Buttons({ isLoading }: ButtonProps) {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <button
        type="button"
        onClick={() => {
          localStorage.removeItem("image_field");
          localStorage.removeItem(`formik.form.FormName`);
          navigate("/");
        }}
        className="flex h-full items-center justify-center bg-[#FFFFFF] rounded-[10px] px-[16px] py-[10px] text-[#F93B1D] border-[#F93B1D] border gap-[2px] hover:bg-[#F93B1D] hover:text-[#FFFFFF] transition-all duration-300 ml-auto"
      >
        გაუქმება
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="flex h-full items-center justify-center bg-[#F93B1D] rounded-[10px] px-[16px] py-[10px] text-[#FFFFFF] gap-[2px] hover:bg-[#DF3014] transition-all duration-300 ml-5 disabled:cursor-not-allowed"
      >
        დაამატე ლისტინგი
      </button>
    </div>
  );
}

export default Buttons;
