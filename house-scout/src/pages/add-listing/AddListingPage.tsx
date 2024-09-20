import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRegions,
  reset as resetRegions,
} from "../../toolkit/region/regionSlice";
import {
  getAgents,
  reset as resetAgents,
} from "../../toolkit/agent/agentSlice";
import { getCities, reset as resetCities } from "../../toolkit/city/citySlice";
import { reset } from "../../toolkit/real-estates/createEstateSlice";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { validationSchema, initialValues, onSubmit } from "./values";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../store/store";
import {
  Buttons,
  ImageField,
  AgentField,
  BedroomField,
  RentTypeFields,
  PriceAreaFields,
  RegionCityFields,
  DescriptionField,
  AddressZipCodeFields,
} from "./components";
import { AddAgentComponent } from "../../components";

import FormikPersist from "./FormikPersist";

function AddListingPage() {
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { agent: agentSuccess } = useSelector(
    (state: StateType) => state.createAgent
  );
  const { agents } = useSelector((state: StateType) => state.agent);
  const { cities } = useSelector((state: StateType) => state.city);
  const { regions } = useSelector((state: StateType) => state.region);
  const { estate: estateSuccess, isLoading } = useSelector(
    (state: StateType) => state.createEstate
  );

  useEffect(() => {
    dispatch(getAgents());
    dispatch(getRegions());
    dispatch(getCities());

    return () => {
      dispatch(resetRegions());
      dispatch(resetCities());
      dispatch(resetAgents());
    };
  }, [agentSuccess, dispatch]);

  useEffect(() => {
    if (estateSuccess) {
      navigate("/");
    }

    return () => {
      dispatch(reset());
    };
  }, [estateSuccess, dispatch, navigate]);

  return (
    <main className="flex flex-col items-center p-10 md:p-[60px]">
      <h2 className="text-2xl 2xl:text-[32px] mb-14 text-center">
        ლისტინგის დამატება
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(validationSchema)}
        validateOnChange={true}
        onSubmit={(values) => onSubmit({ dispatch, values })}
        name="FormName"
      >
        {() => (
          <Form className="flex gap-[80px] flex-col lg:w-[790px] text-[14px] input w-full">
            {<FormikPersist name="FormName" />}
            <div className="flex flex-col gap-[10px] w-[266px]">
              <h3 className="font-helveticaNeue">გარიგების ტიპი</h3>
              <RentTypeFields />
            </div>

            <div className="flex flex-col gap-[22px]">
              <h3 className="font-helveticaNeue">მდებარეობა</h3>
              <AddressZipCodeFields />
              <RegionCityFields regions={regions} cities={cities} />
            </div>

            <div className="flex flex-col gap-[22px]">
              <h3 className="font-helveticaNeue">ბინის დეტალები</h3>
              <PriceAreaFields />
              <BedroomField />
              <DescriptionField />
              <ImageField />
            </div>

            <div className="flex flex-col gap-[22px]">
              <h3 className="font-helveticaNeue">აგენტი</h3>
              <AgentField
                agents={agents}
                openModal={() => setIsOpenModal(true)}
              />
            </div>
            <Buttons isLoading={isLoading} />
          </Form>
        )}
      </Formik>

      {isOpenModal && (
        <AddAgentComponent
          onClose={() => setIsOpenModal(false)}
          isOpen={isOpenModal}
        />
      )}
    </main>
  );
}

export default AddListingPage;
