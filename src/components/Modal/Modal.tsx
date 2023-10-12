import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import CrederaModal from "../CrederaModal/CrederaModal";
import LancasterModal from "../LancasterModal.tsx/LancasterModal";
import { ModalToShow } from "../constants/constants";

export default function Modal({
  show,
  closeModal,
  modalToShow,
}: {
  show: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalToShow: ModalToShow;
}) {
  const modal = useRef(null!);
  const closeButton = useRef(null!);
  const timeline = gsap.timeline();

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

  useEffect(() => {
    show
      ? timeline
          .to(modal.current, { duration: 0, display: "block" })
          .to(modal.current, { duration: 0.5, opacity: "1" })
      : timeline
          .to(modal.current, { duration: 0.5, opacity: "0" })
          .to(modal.current, { duration: 0, display: "none" });
  }, [show, timeline]);

  return (
    <div
      ref={modal}
      className={
        "fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-30 opacity-0 z-20 block"
      }
    >
      <section className="relative top-1/2 left-1/2 w-[95vw] h-[95vh] bg-opacity-0 -translate-x-1/2 -translate-y-1/2 rounded-lg z-20">
        <div className="absolute top-0 left-0 h-7 w-[95vw] bg-white rounded-t-lg z-30" />
        <button
          ref={closeButton}
          id="myFirst"
          className="absolute top-2 left-2 h-3 w-3 bg-red-500 rounded-full z-30"
          onMouseEnter={() => closeButtonInteractionIn()}
          onMouseLeave={() => closeButtonInteractionOut()}
          onMouseDown={() => closeButtonInteractionOut()}
          onMouseUp={() => closeButtonInteractionIn()}
          onClick={() => closeModal(false)}
        />
        {modalToShow == ModalToShow.Lancaster ? <LancasterModal /> : ""}
        {modalToShow == ModalToShow.Credera ? <CrederaModal /> : ""}
      </section>
    </div>
  );
}
