import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Pointer({ show }: { show: boolean }) {
  const pointer = useRef(null!);

  useEffect(() => {
    show
      ? gsap.to(pointer.current, { opacity: "0" })
      : gsap.to(pointer.current, { opacity: "1" });
  }, [show]);

  return (
    <div
      ref={pointer}
      className={"fixed top-0 left-0 w-full h-full z-10 block"}
    >
      <div className="fixed top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded bg-white" />
    </div>
  );
}
