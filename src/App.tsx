import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./threeComponents/Scene/Scene.tsx";
import Modal from "./components/Modal/Modal.tsx";
import { useState } from "react";
import Pointer from "./components/Pointer/Pointer.tsx";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Pointer show={showModal} />
      <Modal show={showModal} closeModal={setShowModal} />
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [0, 2, 6],
        }}
      >
        <Scene show={showModal} setShowModal={setShowModal} />
      </Canvas>
    </>
  );
}

export default App;
