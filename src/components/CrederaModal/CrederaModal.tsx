import reactLogo from "../../assets/reactLogo.svg";
import crederaLogo from "../../assets/crederaLogo.svg";
import googleLogo from "../../assets/googleLogo.svg";
import springLogo from "../../assets/springLogo.svg";
import terraformLogo from "../../assets/terraformLogo.svg";
import viteLogo from "../../assets/viteLogo.svg";
import tailwindLogo from "../../assets/tailwindLogo.svg";
import bootstrapLogo from "../../assets/bootstrapLogo.svg";
import threejsLogo from "../../assets/threejsLogo.svg";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CrederaModal() {
  const logo = useRef(null);
  const scroller = useRef(null);
  const trigger = useRef(null);
  const graduateLifeWrapper = useRef(null);
  const graduateSlides = useRef(null);
  const graduateDescriptionWrapper = useRef(null);
  const graduateDescriptionSlideOne = useRef(null);
  const graduateDescriptionSlideTwo = useRef(null);
  const graduateDescriptionSlideThree = useRef(null);
  const graduateDescriptionSlides = [
    graduateDescriptionSlideOne,
    graduateDescriptionSlideTwo,
    graduateDescriptionSlideThree,
  ];

  useGSAP(() => {
    gsap
      .timeline()
      .from(logo.current, { opacity: 0, filter: "blur(8px)", duration: 2 });
    gsap
      .timeline()
      .from(trigger.current, { opacity: 0, filter: "blur(8px)", duration: 2 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          scroller: scroller.current,
          scrub: 3,
          start: "center 60%",
          end: "bottom 40%",
        },
      })
      .fromTo(
        logo.current,
        {
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          scale: 4,
        },
        {
          top: "0%",
          left: "0%",
          translateX: "0%",
          translateY: "0%",
          scale: 1,
        }
      );
  });

  useGSAP(() => {
    gsap.from(graduateSlides.current, {
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 2,
        start: "top 80%",
        end: "top 10%",
      },
      opacity: 0,
      filter: "blur(8px)",
      y: -30,
    });
  });

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".graduate-description");
      gsap.to(sections, {
        scrollTrigger: {
          trigger: graduateLifeWrapper.current,
          scroller: scroller.current,
          scrub: 1,
          pin: true,
          markers: true,
          snap: 1 / 2,
          end: () => "+=" + graduateDescriptionWrapper.current.offsetWidth,
        },
        xPercent: -100 * (sections.length - 1),
      });
    },
    { scope: graduateDescriptionWrapper }
  );

  return (
    <div
      id="#smooth-content"
      className="w-full h-full bg-credera-baby-blue bg-opacity-70 rounded-b-lg overflow-y-auto overflow-x-auto ease-in no-scrollbar"
      ref={scroller}
    >
      <div className="h-1/2 w-full sticky top-0">
        <img src={crederaLogo} className="absolute w-1/4 p-3" ref={logo} />
      </div>
      <div
        className="w-full h-[50%] text-center flex justify-center items-center"
        ref={trigger}
      >
        <h1 className="text-credera-grey text-5xl font-serif w-9/12">
          "Embarking on the journey of a{" "}
          <span className="text-credera-red">software engineer</span> is like
          setting sail in an endless sea of innovation, where every line of code
          is a <span className="text-credera-red">new horizon</span>
          waiting to be explored."
        </h1>
      </div>
      {/* //Here I want to talk about graduate */}
      <div className="h-[500%] w-full pt-24" ref={graduateLifeWrapper}>
        <div className="flex" ref={graduateSlides}>
          {/* graduateDescription Section */}
          <div
            className="h-1/3 w-8/12 flex overflow-hidden"
            ref={graduateDescriptionWrapper}
          >
            <section className="w-full flex-none items-start pl-5 graduate-description snap-start">
              <div className="break-words text-credera-grey">
                <h1 className="text-5xl font-serif">
                  Graduate Proggramme - September of 2022
                </h1>
                <p className="text-2xl">
                  My first expirience as a{" "}
                  <span className="text-credera-red">software engineer...</span>
                </p>
              </div>
            </section>
            <section className="w-full flex-none items-start pl-5 graduate-description snap-start">
              <div className="break-words text-credera-grey">
                <h1 className="text-5xl font-serif">
                  Graduate Proggramme - September of 2022
                </h1>
                <p className="text-2xl">
                  My first expirience as a{" "}
                  <span className="text-credera-red">software engineer...</span>
                </p>
              </div>
            </section>
            <section className="w-full flex-none items-start pl-5 graduate-description snap-start">
              <div className="break-words text-credera-grey">
                <h1 className="text-5xl font-serif">
                  Graduate Proggramme - September of 2022
                </h1>
                <p className="text-2xl">
                  My first expirience as a{" "}
                  <span className="text-credera-red">software engineer...</span>
                </p>
              </div>
            </section>
          </div>
          {/* Icons Section */}
          <div className="h-full w-4/12 flex items-center overflow-x-hidden">
            <section className="w-full flex-none">
              <img src={springLogo} className="w-1/2" />
            </section>
            <div className="w-full flex-none">fas;dofhsad</div>
            <div className="w-full flex-none">asjdkfhasd</div>
          </div>
        </div>
      </div>

      {/* <div className="pt-5 pb-40 w-full">
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
      <div className="w-full text-end flex flex-col items-end bg-opacity-70">
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
      </div> */}
    </div>
  );
}
