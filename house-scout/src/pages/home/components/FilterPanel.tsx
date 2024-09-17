import Filter from "./Filter";
import Buttons from "./Buttons";

function FilterPanel() {
  return (
    <section className="flex justify-between items-center h-[47px] ">
      <Filter />
      <Buttons />
    </section>
  );
}

export default FilterPanel;
