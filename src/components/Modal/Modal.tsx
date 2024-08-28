import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import CrederaModal from "../CrederaModal/CrederaModal";
import LancasterModal from "../LancasterModal.tsx/LancasterModal";
import { ModalToShow } from "../../constants/constants";

export default function Modal({
  show,
  closeModal,
  modalToShow,
}: {
  show: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalToShow: ModalToShow;
}) {
  if (!show) {
    return null
  }
  const modal = useRef(null!);
  const closeButton = useRef(null!);

  function closeButtonInteractionIn() {
    gsap.to(closeButton.current, {
      duration: 0.1,
      backgroundColor: "rgb(191 50 50)",
    });
  }

  function closeButtonInteractionOut() {
    gsap.to(closeButton.current, {
      duration: 0.1,
      backgroundColor: "rgb(239 68 68)",
    });
  }

  return (
    <div
      ref={modal}
      className={
        "fixed inset-0 flex justify-center items-center bg-gray-300 bg-opacity-30 z-10"
      }
    >
      <section className="w-[95vw] h-[95vh] bg-opacity-0 rounded-lg">
        <div className="h-[3vh] w-[95vw] flex items-center bg-white rounded-t-lg">
          <button
            ref={closeButton}
            id="myFirst"
            className="relative left-2 h-3 w-3 bg-red-500 rounded-full z-10"
            onMouseEnter={() => closeButtonInteractionIn()}
            onMouseLeave={() => closeButtonInteractionOut()}
            onMouseDown={() => closeButtonInteractionOut()}
            onMouseUp={() => closeButtonInteractionIn()}
            onClick={() => closeModal(false)}
          />
        </div>
        <div className="h-[92vh]">
          {modalToShow == ModalToShow.Lancaster ? <LancasterModal /> : ""}
          {modalToShow == ModalToShow.Credera ? <CrederaModal /> : ""}
        </div>
      </section>
    </div>
  );
}
