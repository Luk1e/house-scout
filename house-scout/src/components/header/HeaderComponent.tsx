import { logo } from "../../assets/images";
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className="box-content; border border-[#DBDBDB] w-full px-10 py-5 md:px-15 md:py-10 lg:px-28 lg:py-15 2xl:px-[162px] 2xl:py-[38px]">
      <img
        src={logo}
        alt="Redberry logo"
        className="w-[150px] h-[24px] hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
    </header>
  );
}

export default HeaderComponent;
