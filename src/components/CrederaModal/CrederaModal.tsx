import { ReactSVG } from "react-svg";

export default function CrederaModal() {
  return (
    <div className="relative top-1/2 left-1/2 w-[95vw] h-[95vh] bg-orange-500 bg-opacity-70 -translate-x-1/2 -translate-y-1/2 rounded-lg z-10 overflow-y-auto overflow-x-auto">
      <div className="absolute w-full pt-9 pl-2 pr-2 pb-2">
        <div className="w-full flex justify-center mt-40">
          <div className="w-3/4">
            <ReactSVG src="CrederaLogo.svg" />
          </div>
        </div>
        <div className="mt-72 w-full text-center flex justify-center">
          <h1 className="text-credera-grey text-5xl font-serif w-1/2">
            "Embarking on the journey of a{" "}
            <text className="text-credera-white">software engineer</text> is
            like setting sail in an endless sea of innovation, where every line
            of code is a <text className="text-credera-white">new horizon</text>{" "}
            waiting to be explore."
          </h1>
        </div>
      </div>
    </div>
  );
}
