import reactLogo from "../../../../assets/reactLogo.svg";
import googleLogo from "../../../../assets/googleLogo.svg";
import springLogo from "../../../../assets/springLogo.svg";
import terraformLogo from "../../../../assets/terraformLogo.svg";
import viteLogo from "../../../../assets/viteLogo.svg";
import tailwindLogo from "../../../../assets/tailwindLogo.svg";
import bootstrapLogo from "../../../../assets/bootstrapLogo.svg";
import threejsLogo from "../../../../assets/threejsLogo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { horizontalLoop } from "../../../../animationUtilities/animation";
import { useRef } from "react";

export default function Carousel() {
  const container = useRef(null);
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".img-box");
      console.log("Boxes: ", boxes)
      horizontalLoop(boxes, {
        paused: false,
        repeat: -1,
        speed: 1.5,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="absolute flex items-center justify-around gap-x-48 hub-ui-clip-inside whitespace-nowrap inside-clip clip"
      ref={container}
    >
      <img src={threejsLogo} className="h-[70%] aspect-square img-box" />
      <img src={reactLogo} className="h-[70%] aspect-square img-box" />
      <img src={tailwindLogo} className="h-[70%] aspect-square img-box" />
      <img src={viteLogo} className="h-[70%] aspect-square img-box" />
      <img src={bootstrapLogo} className="h-[70%] aspect-square img-box" />
      <img src={terraformLogo} className="h-[70%] aspect-square img-box" />
      <img src={googleLogo} className="h-[70%] aspect-square img-box" />
      <img src={springLogo} className="h-[70%] aspect-square img-box" />
    </div>
  );
}
