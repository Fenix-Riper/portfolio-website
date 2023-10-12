import { Html } from "@react-three/drei";

export default function CircleInteractor({
  htmlInner,
  htmlOutter,
  htmlText,
}: {
  htmlInner: React.MutableRefObject<HTMLDivElement>;
  htmlOutter: React.MutableRefObject<HTMLDivElement>;
  htmlText: React.MutableRefObject<HTMLDivElement>;
}) {
  return (
    <>
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
    </>
  );
}
