import { useRef, useEffect } from "react";
import { Formik, Form } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { validationSchema, initialValues, onSubmit } from "./values";
import { ImageField, NameSurnameFields, PhoneEmailFields } from "./fields";
import Buttons from "./Buttons";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../store/store";
import { reset } from "../../toolkit/agent/createAgentSlice";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAgentComponent = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch: DispatchType = useDispatch();
  const { agent, isLoading } = useSelector(
    (state: StateType) => state.createAgent
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      dispatch(reset());
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, dispatch]);

  useEffect(() => {
    if (agent) {
      onClose();
    }
  }, [agent, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
      <div
        ref={modalRef}
        className="bg-[#FFFFFF] rounded-[10px] py-10 px-6 md:p-[60px] w-full max-w-[1010px] max-h-[90vh] 2xl:h-[784px] shadow-modalShadow overflow-y-scroll"
      >
        <h2 className="!text-[32px] mb-10 text-center">აგენტის დამატება</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(validationSchema)}
          onSubmit={(values) => onSubmit({ dispatch, values })}
        >
          {() => (
            <Form className="flex gap-[28px] flex-col 2xl:w-[800px] text-[14px] input w-full">
              <NameSurnameFields />
              <PhoneEmailFields />
              <ImageField />

              <Buttons onClose={() => onClose()} isLoading={isLoading} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddAgentComponent;
