import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const navigate = useNavigate();

  return (
    <header className="box-content; border border-[#DBDBDB] w-full px-10 py-5 md:px-15 md:py-10 lg:px-28 lg:py-15 2xl:px-[162px] 2xl:py-[38px]">
      <h1 onClick={() => navigate("/")} className="text-[#F93B1D] text-4xl font-bold cursor-pointer">
        House Scout
      </h1>
    </header>
  );
}

export default HeaderComponent;
