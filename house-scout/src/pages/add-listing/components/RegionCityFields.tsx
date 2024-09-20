import { useEffect } from "react";
import { Select } from "../../../components";
import { useFormikContext } from "formik";
import { FormValues } from "../values";
import { RegionType, CityType } from "../../../toolkit/types";

interface RegionCityProps {
  regions: RegionType[] | null;
  cities: CityType[] | null;
}

type OptionType = { value: number; label: string };

const RegionCityFields = ({ regions, cities }: RegionCityProps) => {
  const { values, errors, setFieldValue } = useFormikContext<FormValues>();

  const regionOptions: OptionType[] = [];
  const cityOptions: OptionType[] = [];

  regions?.forEach((region) =>
    regionOptions.push({
      value: region.id,
      label: region.name,
    })
  );

  if (values.region_id && cities) {
    cities
      ?.filter((city) => city.region_id == Number(values.region_id))
      .forEach((region) =>
        cityOptions.push({
          value: region.id,
          label: region.name,
        })
      );
  }

  useEffect(() => {
    if (
      values.region_id &&
      values.city_id &&
      cities &&
      cities?.find((city) => city.id == Number(values.city_id))?.region_id !=
        Number(values.region_id)
    ) {
      setFieldValue("city_id", "");
    }
  }, [values.region_id, setFieldValue, values.city_id, cities]);

  return (
    <div className="flex flex-col justify-between md:flex-row gap-[25px] [&_*]:text-[14px]">
      <Select options={regionOptions} name="region_id" label="რეგიონი *" />
      {values.region_id && !errors.region_id ? (
        <Select options={cityOptions} name="city_id" label="ქალაქი *" />
      ) : (
        <div className="hidden flex-1 gap-[5px] lg:w-[384px] md:block"></div>
      )}
    </div>
  );
};

export default RegionCityFields;
