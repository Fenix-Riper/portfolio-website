import { Html, TransformControls, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function TorusKnot() {
  const cube = useRef<Mesh>(null!);

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={5} />
      <ambientLight intensity={0.5} />
      <group>
        <mesh ref={cube} scale={1.5} position-x={2}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh scale={1.5} position-x={-2}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="orange" />
          <Html
            position={[0, 1, 0]}
            center
            className={
              "text-sky-500 bg-slate-500 p-2 whitespace-nowrap overflow-hidden rounded-3xl select-none"
            }
            wrapperClass="label"
            distanceFactor={6}
          >
            Test Test Test
          </Html>
        </mesh>
      </group>
      <mesh position-y={-1} scale={10} rotation-x={-Math.PI * 0.5}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      <TransformControls object={cube} mode="translate" />
    </>
  );
}
