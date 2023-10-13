import reactLogo from "../../assets/reactLogo.svg";
import crederaLogo from "../../assets/crederaLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import springLogo from "../../assets/springLogo.svg";
import terraformLogo from "../../assets/terraformLogo.svg";
import viteLogo from "../../assets/viteLogo.svg";
import tailwindLogo from "../../assets/tailwindLogo.svg";
import bootstrapLogo from "../../assets/bootstrapLogo.svg";
import threejsLogo from "../../assets/threejsLogo.svg";
import waveDividerOne from "../../assets/waveDividerOne.svg";

export default function CrederaModal() {
  return (
    <div className="relative top-1/2 left-1/2 w-[95vw] h-[95vh] bg-credera-baby-blue bg-opacity-70 -translate-x-1/2 -translate-y-1/2 rounded-lg z-10 overflow-y-auto overflow-x-auto">
      <div className="w-full">
        <div className="w-full flex justify-center mt-40 pt-9 pl-2 pr-2 pb-2">
          <img src={crederaLogo} className="w-3/4" />
        </div>
        <div className="mt-72 w-full text-center flex justify-center">
          <h1 className="text-credera-grey text-5xl font-serif w-7/12">
            "Embarking on the journey of a{" "}
            <span className="text-credera-red">software engineer</span> is like
            setting sail in an endless sea of innovation, where every line of
            code is a <span className="text-credera-red">new horizon</span>
            waiting to be explored."
          </h1>
        </div>
        <img
          src={waveDividerOne}
          className="w-full mt-60 rotate-180 opacity-70"
        />
        <div className="pt-5 pb-40 w-full bg-credera-dark-blue bg-opacity-70">
          <h2 className="ml-16 text-credera-grey text-6xl font-serif w-1/2">
            My first steps
          </h2>
          <p className="text-credera-grey text-4xl font-Roboto font-light w-3/4 mt-16 ml-16">
            I'm currently a software engineer at Credera UK, an amazing
            consultancy that takes care of their employees with the upmost care.
            I started my journey here as a Graduate Engineer, the training that
            I went through gave me the basics to be comfortable to either work
            with frontend, backend or devops. It was a massive step for me going
            from University and actually applying the knowledge I'd aquired.
          </p>
        </div>
        <div className="w-full text-end flex flex-col items-end bg-credera-dark-blue bg-opacity-70">
          <h2 className="mr-16 text-credera-grey text-6xl font-serif w-1/2">
            The graduate programe
          </h2>
          <p className="text-credera-grey text-4xl font-Roboto font-light w-3/4 mt-16 mr-16">
            Me and other fellow colleagues were asked to make a fully working
            social media website, much like pinterest. We had to devise a
            database as well as a frontend to show it.
          </p>
          <div className="w-full text-center flex flex-col mt-40 mb-10">
            <h3 className="mb-10 text-credera-grey text-4xl font-serif">
              Technologies Used
            </h3>
            <div className="w-full p-1 flex flex-wrap justify-center gap-x-16">
              <img src={threejsLogo} className="w-40" />
              <img src={reactLogo} className="w-40" />
              <img src={tailwindLogo} className="w-40" />
              <img src={viteLogo} className="w-40" />
              <img src={bootstrapLogo} className="w-40" />
              <img src={terraformLogo} className="w-40" />
              <img src={googleLogo} className="w-40" />
              <img src={springLogo} className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
