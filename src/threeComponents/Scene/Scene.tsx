import { PointerLockControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { gsap } from "gsap";
import { ModalToShow } from "../../components/constants/constants";
import CircleInteractor from "../../components/CircleInteractor/CircleInteractor";

export default function Scene({
  show,
  setShowModal,
  setModalToShow,
}: {
  show: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalToShow: React.Dispatch<React.SetStateAction<ModalToShow>>;
}) {
  const crederaCube = useRef<Mesh>(null!);
  const lancasterCube = useRef<Mesh>(null!);
  const htmlInnerCredera = useRef<HTMLDivElement>(null!);
  const htmlOutterCredera = useRef<HTMLDivElement>(null!);
  const htmlInnerLancaster = useRef<HTMLDivElement>(null!);
  const htmlOutterLancaster = useRef<HTMLDivElement>(null!);
  const htmlTextCredera = useRef<HTMLDivElement>(null!);
  const htmlTextLancaster = useRef<HTMLDivElement>(null!);
  const controls = useRef(null!);

  function cubeRotationUp() {
    gsap.to(crederaCube.current.position, { duration: 2, y: 2 });
    gsap.to(crederaCube.current.rotation, { duration: 2, y: Math.PI / 2 });
  }
  function cubeRotationDown() {
    gsap.to(crederaCube.current.position, { duration: 2, y: 0 });
    gsap.to(crederaCube.current.rotation, { duration: 2, y: 0 });
  }

  function cubeAnimationIn() {
    interactAnimationIn(htmlInnerCredera, htmlOutterCredera, htmlTextCredera);
    cubeRotationUp();
  }

  function cubeAnimationOut() {
    interactAnimationOut(htmlInnerCredera, htmlOutterCredera, htmlTextCredera);
    cubeRotationDown();
  }

  function interactAnimationIn(
    htmlInner: React.MutableRefObject<HTMLDivElement>,
    htmlOutter: React.MutableRefObject<HTMLDivElement>,
    htmlText: React.MutableRefObject<HTMLDivElement>
  ) {
    if (!show) {
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
  }

  function interactAnimationOut(
    htmlInner: React.MutableRefObject<HTMLDivElement>,
    htmlOutter: React.MutableRefObject<HTMLDivElement>,
    htmlText: React.MutableRefObject<HTMLDivElement>
  ) {
    if (!show) {
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
  }

  const onCrederaCubeClick = () => {
    setModalToShow(ModalToShow.Credera);
    setShowModal(true);
    interactAnimationOut(htmlInnerCredera, htmlOutterCredera, htmlTextCredera);
    setTimeout(() => {
      controls.current.unlock();
    }, 100);
  };

  const onLancasterCubeClick = () => {
    setModalToShow(ModalToShow.Lancaster);
    setShowModal(true);
    interactAnimationOut(
      htmlInnerLancaster,
      htmlOutterLancaster,
      htmlTextLancaster
    );
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
        ref={crederaCube}
        scale={1.5}
        position-x={2}
        onClick={onCrederaCubeClick}
        onPointerEnter={() => cubeAnimationIn()}
        onPointerLeave={() => cubeAnimationOut()}
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <CircleInteractor
          htmlInner={htmlInnerCredera}
          htmlOutter={htmlOutterCredera}
          htmlText={htmlTextCredera}
        />
      </mesh>
      <mesh
        ref={lancasterCube}
        scale={1.5}
        position-x={-2}
        onClick={onLancasterCubeClick}
        onPointerEnter={() =>
          interactAnimationIn(
            htmlInnerLancaster,
            htmlOutterLancaster,
            htmlTextLancaster
          )
        }
        onPointerLeave={() =>
          interactAnimationOut(
            htmlInnerLancaster,
            htmlOutterLancaster,
            htmlTextLancaster
          )
        }
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
        <CircleInteractor
          htmlInner={htmlInnerLancaster}
          htmlOutter={htmlOutterLancaster}
          htmlText={htmlTextLancaster}
        />
      </mesh>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
