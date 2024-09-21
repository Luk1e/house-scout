import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../assets/icons";

function HeaderSection() {
  const navigate = useNavigate();

  return (
    <section className="flex 1700px:w-[1620px] w-full">
      <BackIcon navigate={() => navigate("/")} />
    </section>
  );
}

export default HeaderSection;
