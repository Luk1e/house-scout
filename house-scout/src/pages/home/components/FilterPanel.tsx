import Filter from "./Filter";
import Buttons from "./Buttons";

function FilterPanel() {
  return (
    <section className="flex justify-between items-center 2xl:h-[47px] flex-col 2xl:flex-row">
      <Filter />
      <Buttons />
    </section>
  );
}

export default FilterPanel;
