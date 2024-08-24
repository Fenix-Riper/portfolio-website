import lancasterLogo from "../../assets/lancasterLogo.svg";
import triangle from "../../assets/triangleDividerOne.svg";
import javaLogo from "../../assets/javaLogo.svg";
import javascriptLogo from "../../assets/javascriptLogo.svg";
import cssLogo from "../../assets/cssLogo.svg";
import htmlLogo from "../../assets/htmlLogo.svg";
import cLogo from "../../assets/cLogo.svg";
import pythonLogo from "../../assets/pythonLogo.svg";
import tensorflowLogo from "../../assets/tensorflowLogo.svg";
import luaLogo from "../../assets/luaLogo.svg";
import rLogo from "../../assets/rLogo.svg";
import erlangLogo from "../../assets/erlangLogo.svg";
import gitLogo from "../../assets/gitLogo.svg";
import githubLogo from "../../assets/githubLogo.svg";

export default function CrederaModal() {
  return (
    <div className="relative top-1/2 left-1/2 w-[100%] h-[100%] bg-gray-200 bg-opacity-70 -translate-x-1/2 -translate-y-1/2 rounded-lg z-5 overflow-y-auto overflow-x-auto overscroll-none">
      <div className="w-full">
        <div className="w-full flex justify-center -mt-20 pl-2 pr-2 pb-2">
          <img src={lancasterLogo} className="w-3/4" />
        </div>
      </div>
      <div className=" -mt-32 w-full text-center flex justify-center">
        <h1 className="text-black text-5xl font-serif w-7/12">
          "Knowledge is the key that unlocks the{" "}
          <span className="text-lancaster-red">doors of oppurtunity</span>, and
          the more you acquire, the wider those doors swing, revealing a world
          of <span className="text-lancaster-red">endless possibilities</span>.
          waiting to be explored."
        </h1>
      </div>
      <img src={triangle} className="w-full mt-60 rotate-180 opacity-70" />
      <div className="pt-5 pb-40 w-full bg-lancaster-grey bg-opacity-70">
        <h2 className="ml-16 text-credera-grey text-6xl font-serif w-1/2">
          My first steps
        </h2>
        <p className="text-black text-4xl font-Roboto font-light w-3/4 mt-16 ml-16">
          I'm currently a software engineer at Credera UK, an amazing
          consultancy that takes care of their employees with the upmost care. I
          started my journey here as a Graduate Engineer, the training that I
          went through gave me the basics to be comfortable to either work with
          frontend, backend or devops. It was a massive step for me going from
          University and actually applying the knowledge I'd aquired.
        </p>
      </div>
      <div className="w-full text-center flex flex-col pb-10 bg-lancaster-grey bg-opacity-70">
        <h3 className="mb-10 text-black text-4xl font-serif">
          Technologies Used
        </h3>
        <div className="w-full p-1 flex flex-wrap justify-center gap-x-16">
          <img src={javaLogo} className="w-40" />
          <img src={javascriptLogo} className="w-40" />
          <img src={cssLogo} className="w-40" />
          <img src={htmlLogo} className="w-40" />
          <img src={cLogo} className="w-40" />
          <img src={pythonLogo} className="w-40" />
          <img src={tensorflowLogo} className="w-40" />
          <img src={luaLogo} className="w-40" />
          <img src={rLogo} className="w-40" />
          <img src={erlangLogo} className="w-40" />
          <img src={gitLogo} className="w-40" />
          <img src={githubLogo} className="w-40" />
        </div>
      </div>
    </div>
  );
}
