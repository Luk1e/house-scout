import { useRef, useEffect } from "react";
import Buttons from "./Buttons";
import { CloseIcon } from "../../assets/icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteEstateComponents = ({ isOpen, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
      <div
        ref={modalRef}
        className="flex flex-col items-center justify-center bg-[#FFFFFF] rounded-[20px] py-10 px-10 sm:px-20 2xl:p-0 w-max 2xl:w-[623px] max-h-[90vh] 2xl:h-[222px] shadow-modalShadow overflow-y-scroll relative"
      >
        <h2 className="!text-[20px] text-center font-firaGo400 text-[#2D3648] mb-8">
          გსურთ წაშალოთ ლისტინგი?
        </h2>
        <Buttons onClose={onClose} />
        <div
          className="absolute top-[23.5px] right-[23.5px] cursor-pointer text-[#354451] hover:text-[#021526]"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default DeleteEstateComponents;
