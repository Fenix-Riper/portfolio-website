import { useGSAP } from "@gsap/react";
import "./Button.css";
import { useRef } from "react";
import { gsap } from "gsap";

export default function Button({ textToShow }) {
  let buttonContainer = useRef(null);

  const buttonMouseEnter = () => {
    gsap.to(buttonContainer.current, {
      backgroundColor: "rgba(208, 208, 208, 0.8)",
      duration: 0.2,
    });
  };

  const buttonMouseLeave = () => {
    gsap.to(buttonContainer.current, {
      backgroundColor: "rgba(208, 208, 208, 0.293)",
      duration: 0.2,
    });
  };

  useGSAP(() => {});

  return (
    <div
      className="w-[50%] h-[70%] button-white flex justify-center items-center relative cursor-pointer"
      ref={buttonContainer}
      onMouseEnter={() => buttonMouseEnter()}
      onMouseLeave={() => buttonMouseLeave()}
    >
      <div className="top-left w-full h-full"></div>
      <div className="top-right w-full h-full"></div>
      <div className="bottom-left w-full h-full"></div>
      <div className="bottom-right w-full h-full"></div>
      <div className="font-azonix">{textToShow}</div>
    </div>
  );
}
