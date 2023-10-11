import { Html, PointerLockControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { gsap } from "gsap";

export default function Scene({
  show,
  setShowModal,
}: {
  show: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const cube = useRef<Mesh>(null!);
  const htmlInner = useRef<HTMLDivElement>(null!);
  const htmlOutter = useRef<HTMLDivElement>(null!);
  const htmlText = useRef<HTMLDivElement>(null!);
  const controls = useRef(null!);

  function interactAnimationIn() {
    gsap.to(htmlText.current, { opacity: 0.75 });
    gsap.to(htmlInner.current, {
      width: "3.5rem",
      height: "3.5rem",
      opacity: 0.3,
    });
    gsap.to(htmlOutter.current, {
      opacity: 0.75,
    });
  }

  function interactAnimationOut() {
    gsap.to(htmlText.current, { opacity: 0 });
    gsap.to(htmlInner.current, {
      width: 0,
      height: 0,
      opacity: 0,
    });
    gsap.to(htmlOutter.current, {
      opacity: 0,
    });
  }

  const onCubeClick = () => {
    setShowModal(true);
    interactAnimationOut();
    setTimeout(() => {
      controls.current.unlock();
    }, 100);
  };

  return (
    <>
      <PointerLockControls
        ref={controls}
        makeDefault
        pointerSpeed={0.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
        minPolarAngle={Math.PI / 3}
        selector={show ? "#myFirst" : "#root"}
      />
      <directionalLight position={[1, 2, 3]} intensity={5} />
      <ambientLight intensity={0.5} />
      <mesh
        ref={cube}
        scale={1.5}
        position-x={2}
        onClick={onCubeClick}
        onPointerEnter={interactAnimationIn}
        onPointerLeave={interactAnimationOut}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <Html
          ref={htmlInner}
          position={[0, 0, 0]}
          center
          className={"w-1 h-1 bg-white rounded-full opacity-0"}
          wrapperClass="div"
        ></Html>
        <Html
          ref={htmlOutter}
          position={[0, 0, 0]}
          center
          className={
            "w-14 h-14 border center border-white rounded-full opacity-0"
          }
          wrapperClass="div"
        ></Html>
        <Html
          ref={htmlText}
          position={[0, 0.3, 0]}
          center
          className={"w-40 text-center text-white rounded-full opacity-0"}
          wrapperClass="div"
        >
          Click to inspect
        </Html>
      </mesh>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
