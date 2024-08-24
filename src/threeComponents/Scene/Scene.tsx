import { PointerLockControls, useGLTF } from "@react-three/drei";
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
  const crederaBottle = useRef<Mesh>(null!);
  const lancasterCube = useRef<Mesh>(null!);
  const htmlInnerCredera = useRef<HTMLDivElement>(null!);
  const htmlOutterCredera = useRef<HTMLDivElement>(null!);
  const htmlInnerLancaster = useRef<HTMLDivElement>(null!);
  const htmlOutterLancaster = useRef<HTMLDivElement>(null!);
  const htmlTextCredera = useRef<HTMLDivElement>(null!);
  const htmlTextLancaster = useRef<HTMLDivElement>(null!);
  const controls = useRef(null!);

  function cubeRotationUp() {
    gsap.to(crederaBottle.current.position, { duration: 1, y: 5.353 });
  }
  function cubeRotationDown() {
    gsap.to(crederaBottle.current.position, { duration: 2, y: 4.855 });
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

  const { nodes, materials } = useGLTF("./room.glb");

  return (
    <>
      <PointerLockControls
        ref={controls}
        makeDefault
        pointerSpeed={0.5}
        maxPolarAngle={Math.PI - Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        selector={show ? "#myFirst" : "#root"}
      />
      <pointLight position={[-3, 14, 3]} intensity={200} />
      <ambientLight intensity={0.5} />

      <group dispose={null}>
        <group position={[-3.466, 4.717, -7.903]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Houseplant_7_1.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Houseplant_7_2.geometry}
              material={materials.Brown}
            />
            <mesh
              geometry={nodes.Houseplant_7_3.geometry}
              material={materials.Plant_Green}
            />
          </group>
        </group>
        <group
          position={[6.366, 2.339, 6.577]}
          rotation={[0, 0.072, 0]}
          scale={1.896}
        >
          <mesh
            geometry={nodes.Table_RoundLarge.geometry}
            material={materials["Wood.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group
          position={[12.608, 4.957, -3.05]}
          rotation={[Math.PI, -0.356, Math.PI]}
          scale={0.359}
        >
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.main_car_1.geometry}
              material={materials.bodywork}
            />
            <mesh
              geometry={nodes.main_car_2.geometry}
              material={materials.bottom}
            />
            <mesh
              geometry={nodes.main_car_3.geometry}
              material={materials["extra _lights_2"]}
            />
            <mesh
              geometry={nodes.main_car_4.geometry}
              material={materials.black}
            />
            <mesh
              geometry={nodes.main_car_5.geometry}
              material={materials.back_plate}
            />
            <mesh
              geometry={nodes.main_car_6.geometry}
              material={materials.back_lights_2}
            />
            <mesh
              geometry={nodes.main_car_7.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.main_car_8.geometry}
              material={materials.extra_lights}
            />
            <mesh
              geometry={nodes.main_car_9.geometry}
              material={materials.mesh}
            />
            <mesh
              geometry={nodes.main_car_10.geometry}
              material={materials.lights}
            />
            <mesh
              geometry={nodes.main_car_11.geometry}
              material={materials.back_lights}
            />
            <mesh
              geometry={nodes.exhaust_pipes.geometry}
              material={materials.kidney}
            />
            <mesh
              geometry={nodes.front_plate.geometry}
              material={materials.front_plate}
            />
            <group position={[-0.001, 0.025, 0]} rotation={[0, 0.052, 0]}>
              <mesh
                geometry={nodes.wheel_front_left_1.geometry}
                material={materials.rubber}
              />
              <mesh
                geometry={nodes.wheel_front_left_2.geometry}
                material={materials.kidney}
              />
            </group>
            <group
              position={[0, 0.025, 0]}
              rotation={[Math.PI, 0.052, 0]}
              scale={-1}
            >
              <mesh
                geometry={nodes.wheel_front_left_1.geometry}
                material={materials.rubber}
              />
              <mesh
                geometry={nodes.wheel_front_left_2.geometry}
                material={materials.kidney}
              />
            </group>
            <group rotation={[-Math.PI, 0, 0]} scale={-1}>
              <mesh
                geometry={nodes.wheel_front_left_1.geometry}
                material={materials.rubber}
              />
              <mesh
                geometry={nodes.wheel_front_left_2.geometry}
                material={materials.kidney}
              />
            </group>
            <mesh
              geometry={nodes.aileron_1.geometry}
              material={materials.bodywork}
            />
            <mesh
              geometry={nodes.aileron_2.geometry}
              material={materials.plastic}
            />
            <mesh
              geometry={nodes.chevrolet_logo_1.geometry}
              material={materials.chevrolet_outside}
            />
            <mesh
              geometry={nodes.chevrolet_logo_2_1.geometry}
              material={materials.chevrolet_outside}
            />
            <mesh
              geometry={nodes.mirrors_1.geometry}
              material={materials.bodywork}
            />
            <mesh
              geometry={nodes.mirrors_2.geometry}
              material={materials.glass}
            />
            <mesh
              geometry={nodes.wheel_front_left_1.geometry}
              material={materials.rubber}
            />
            <mesh
              geometry={nodes.wheel_front_left_2.geometry}
              material={materials.kidney}
            />
          </group>
        </group>
        <group
          position={[10.253, 2.276, -8.593]}
          rotation={[1.55, -0.008, 0.868]}
          scale={[5.167, 4.363, 5.167]}
        >
          <group
            position={[-0.028, -0.124, -0.002]}
            rotation={[-1.882, -0.02, -0.006]}
          >
            <mesh
              geometry={nodes.Line021_1.geometry}
              material={materials.orange}
            />
            <mesh
              geometry={nodes.Line021_2.geometry}
              material={materials["black.001"]}
            />
            <mesh
              geometry={nodes.Line021_3.geometry}
              material={materials.yellow}
            />
            <mesh
              geometry={nodes.Line021_4.geometry}
              material={materials.metal}
            />
            <mesh
              geometry={nodes.Line021_5.geometry}
              material={materials.blue}
            />
          </group>
        </group>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
          position={[1.065, 4.799, -8.275]}
          rotation={[-1.56, 0.002, -1.646]}
        />
        <mesh
          geometry={nodes.Message_Board.geometry}
          material={materials.Mat}
          position={[7.501, 5.991, 10.6]}
          rotation={[0, 1.571, 0]}
          scale={0.036}
        />
        <group position={[4.13, 4.648, 6.095]} rotation={[0, -0.319, 0]}>
          <mesh
            geometry={nodes["Node-Mesh"].geometry}
            material={materials.mat21}
          />
          <mesh
            geometry={nodes["Node-Mesh_1"].geometry}
            material={materials.mat23}
          />
        </group>
        <mesh
          geometry={nodes.Floor.geometry}
          material={materials["Light carpet"]}
          position={[5.732, 9.477, 0.282]}
          scale={[1.647, 1, 1]}
        />
        <mesh
          geometry={nodes.Left_Wall.geometry}
          material={materials["Light carpet"]}
          scale={[1.647, 1, 1]}
        />
        <mesh
          geometry={nodes.Right_Wall.geometry}
          material={materials["Light carpet"]}
          position={[1.217, 9.08, 10.847]}
          scale={[1.647, 1, 1]}
        />
        <mesh
          geometry={nodes.Monitor_2.geometry}
          material={nodes.Monitor_2.material}
          position={[1.875, 5.69, -9.678]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Monitor_1.geometry}
          material={nodes.Monitor_1.material}
          position={[-0.838, 5.69, -9.361]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Right_Wall001.geometry}
          material={materials["Light carpet"]}
          position={[12.138, 8.564, 0.237]}
        />
        <mesh
          geometry={nodes.Floor001.geometry}
          material={materials["Light carpet"]}
          position={[5.732, 23.058, 0.282]}
          scale={[1.647, 1, 1]}
        />
        <mesh
          geometry={nodes.Floor002.geometry}
          material={materials["Light carpet"]}
          position={[-4.089, 8.349, 0.282]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.647, 1, 1]}
        />
        <mesh
          geometry={nodes.Book_1.geometry}
          material={materials.Paper}
          position={[-2.772, 4.811, -8.921]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Book_2.geometry}
          material={materials.Paper}
          position={[-2.719, 4.969, -8.867]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Book_3.geometry}
          material={materials.Paper}
          position={[-2.68, 5.102, -9.032]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Book_5.geometry}
          material={materials.Paper}
          position={[-2.4, 5.2, -8.934]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Book_4.geometry}
          material={materials.Paper}
          position={[-2.465, 5.293, -8.914]}
          rotation={[0, 1.568, 0]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials["Wood.002"]}
          position={[-4.907, 8.981, -10.019]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Wood.002"]}
          position={[-4.022, 11.852, -10.019]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Wood.002"]}
          position={[-1.418, 10.5, -10.019]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.023"]}
          position={[3.476, 4.855, -9.292]}
          rotation={[0, 0.537, 0]}
          ref={crederaBottle}
          onClick={onCrederaCubeClick}
          onPointerEnter={() => cubeAnimationIn()}
          onPointerLeave={() => cubeAnimationOut()}
        >
          <CircleInteractor
            htmlInner={htmlInnerCredera}
            htmlOutter={htmlOutterCredera}
            htmlText={htmlTextCredera}
          />
        </mesh>
        <mesh
          geometry={nodes.Table.geometry}
          material={materials["Desk wood"]}
          position={[1.451, 4.631, -8.866]}
          scale={[5.321, 0.074, 1.298]}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-11.252, 5.858, 8.02]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[-0.088, -3.839, -1.679]}
        />
        <group
          position={[-10.566, 2.246, -9.327]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={359.98}
        >
          <mesh
            geometry={nodes.Houseplant_4_1.geometry}
            material={materials["Black.001"]}
          />
          <mesh
            geometry={nodes.Houseplant_4_2.geometry}
            material={materials["Brown.001"]}
          />
          <mesh
            geometry={nodes.Houseplant_4_3.geometry}
            material={materials["Plant_Green.001"]}
          />
        </group>
      </group>
      {/* <mesh
        ref={crederaBottle}
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
      </mesh> */}
    </>
  );
}

useGLTF.preload("./room.glb");
