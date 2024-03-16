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

  const graduateWarningsWrapper = useRef(null)
  const graduateWarningTopWrapper = useRef(null);
  const graduateWarningBottomWrapper = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1 }).to(logo.current, {
        duration: 0,
        xPercent: 1.5,
        yPercent: -1.3,
        clipPath: "polygon(0% 39%,15% 39%,15% 3%,83% 3%,83% 27%,76% 27%,76% 30%,74% 30%,74% 91%,58% 91%,58% 78%,19% 78%,19% 68%,39% 68%,39% 61%,38% 61%,38% 30%,73% 30%,73% 23%,58% 23%,58% 76%,76% 76%,76% 9%,10% 9%,10% 90%,73% 90%,73% 37%,52% 37%,52% 66%,46% 66%,46% 19%,48% 19%,48% 76%,0% 76%,0% 86%,6% 86%,6% 11%,19% 11%,19% 0%,5% 0%,5% 50%,5% 50%,5% 28%,40% 28%,40% 98%,12% 98%,12% 39%,68% 39%,68% 27%,93% 27%,93% 54%,78% 54%,78% 20%,74% 20%,74% 62%,55% 62%,55% 22%,35% 22%,35% 47%)"
      }).to(logo.current, {
        duration: 0.05,
      }).to(logo.current, {
        duration: 0,
        xPercent: 1.1,
        yPercent: 0.2,
        clipPath: "polygon(0% 20%,68% 20%,68% 88%,47% 88%,47% 48%,27% 48%,27% 8%,12% 8%,12% 75%,97% 75%,97% 37%,21% 37%,21% 68%,79% 68%,79% 82%,1% 82%,1% 66%,22% 66%,22% 90%,33% 90%,33% 67%,97% 67%,97% 14%,59% 14%,59% 93%,20% 93%,20% 46%,68% 46%,68% 64%,13% 64%,13% 18%,28% 18%,28% 79%,91% 79%,91% 69%,46% 69%,46% 22%,5% 22%,5% 65%)"
      }).to(logo.current, {
        duration: 0.12,
      }).to(logo.current, {
        clipPath: "none",
        duration: 0,
        filter: "blur(1px)",
        xPercent: 10.3,
        yPercent: 5,
      }).to(logo.current, {
        duration: 0.5,
      }).to(logo.current, {
        duration: 0,
        xPercent: -1.3,
        yPercent: 0.7,
        filter: "blur(0px)",
        clipPath: "polygon(0% 24%,41% 24%,41% 43%,61% 43%,61% 83%,91% 83%,91% 50%,37% 50%,37% 99%,3% 99%,3% 56%,76% 56%,76% 47%,52% 47%,52% 69%,78% 69%,78% 20%,65% 20%,65% 45%,44% 45%,44% 92%,25% 92%,25% 68%,65% 68%,65% 24%,11% 24%,11% 23%,90% 23%,90% 76%,41% 76%,41% 21%,2% 21%,2% 34%,55% 34%,55% 68%,43% 68%,43% 9%)"
      }).to(logo.current, {
        duration: 0.8,
      }).to(logo.current, {
        duration: 0,
        clipPath: "none",
        filter: "blur(2px)",
      }).to(logo.current, {
        duration: 0.06,
      }).to(logo.current, {
        duration: 0,
        xPercent: 1.3,
        yPercent: -1.7,
        filter: "blur(0px)",
        clipPath: "polygon(0% 48%,69% 48%,69% 78%,39% 78%,39% 99%,21% 99%,21% 63%,52% 63%,52% 18%,47% 18%,47% 20%,52% 20%,52% 35%,80% 35%,80% 69%,90% 69%,90% 47%,4% 47%,4% 89%,87% 89%,87% 33%,71% 33%,71% 93%,51% 93%,51% 70%,20% 70%,20% 54%,66% 54%,66% 69%,43% 69%,43% 25%,1% 25%,1% 30%,76% 30%,76% 82%,25% 82%,25% 30%,31% 30%,31% 53%,30% 53%,30% 72%,74% 72%,74% 59%,54% 59%,54% 96%,64% 96%,64% 84%,38% 84%,38% 80%,28% 80%,28% 24%,31% 24%,31% 29%,51% 29%,51% 98%,51% 98%)"
      }).to(logo.current, {
        duration: 0.8,
      }).to(logo.current, {
        duration: 0,
        clipPath: "none",
        filter: "blur(1px)",
      }).to(logo.current, {
        duration: 0.06,
      }).to(logo.current, {
        duration: 0,
        xPercent: 1.3,
        yPercent: -1.7,
        filter: "blur(0px)",
        clipPath: "polygon(0% 48%,69% 48%,69% 78%,39% 78%,39% 99%,21% 99%,21% 63%,52% 63%,52% 18%,47% 18%,47% 20%,52% 20%,52% 35%,80% 35%,80% 69%,90% 69%,90% 47%,4% 47%,4% 89%,87% 89%,87% 33%,71% 33%,71% 93%,51% 93%,51% 70%,20% 70%,20% 54%,66% 54%,66% 69%,43% 69%,43% 25%,1% 25%,1% 30%,76% 30%,76% 82%,25% 82%,25% 30%,31% 30%,31% 53%,30% 53%,30% 72%,74% 72%,74% 59%,54% 59%,54% 96%,64% 96%,64% 84%,38% 84%,38% 80%,28% 80%,28% 24%,31% 24%,31% 29%,51% 29%,51% 98%,51% 98%)"
      }).to(logo.current, {
        duration: 2,
      }).to(logo.current, {
        duration: 0,
        clipPath: "none",
      }).to(logo.current, {
        duration: 1.2,
      }).to(logo.current, {
        duration: 0,
        xPercent: 3.1,
        filter: "blur(1px)",
        yPercent: 0.2,
        clipPath: "polygon(0% 10%,58% 10%,58% 36%,27% 36%,27% 75%,88% 75%,88% 45%,0% 45%,0% 2%,80% 2%,80% 43%,78% 43%,78% 67%,54% 67%,54% 11%,30% 11%,30% 21%)"
      }).to(logo.current, {
        duration: 0.3,
      }).to(logo.current, {
        duration: 0,
        xPercent: 7.1,
        yPercent: 0.2,
        clipPath: "polygon(0% 62%,57% 62%,57% 69%,6% 69%,6% 23%,16% 23%,16% 85%,98% 85%,98% 25%,2% 25%,2% 2%,89% 2%,89% 75%,37% 75%,37% 27%,14% 27%,14% 7%,51% 7%,51% 37%,67% 37%,67% 76%,88% 76%,88% 69%,92% 69%,92% 17%,65% 17%,65% 6%,1% 6%,1% 28%,96% 28%,96% 11%,81% 11%,81% 70%,70% 70%,70% 36%,0% 36%)"
      }).to(logo.current, {
        duration: 0,
        xPercent: 3.1,
        filter: "blur(0px)",
        yPercent: 0.2,
        clipPath: "polygon(0% 10%,58% 10%,58% 36%,27% 36%,27% 75%,88% 75%,88% 45%,0% 45%,0% 2%,80% 2%,80% 43%,78% 43%,78% 67%,54% 67%,54% 11%,30% 11%,30% 21%)"
      }).to(logo.current, {
        duration: 0.3,
      }).to(logo.current, {
        duration: 0,
        xPercent: 7.1,
        yPercent: 0.2,
        clipPath: "polygon(0% 62%,57% 62%,57% 69%,6% 69%,6% 23%,16% 23%,16% 85%,98% 85%,98% 25%,2% 25%,2% 2%,89% 2%,89% 75%,37% 75%,37% 27%,14% 27%,14% 7%,51% 7%,51% 37%,67% 37%,67% 76%,88% 76%,88% 69%,92% 69%,92% 17%,65% 17%,65% 6%,1% 6%,1% 28%,96% 28%,96% 11%,81% 11%,81% 70%,70% 70%,70% 36%,0% 36%)"
      }).to(logo.current, {
        duration: 0.03,
      }).to(logo.current, {
        duration: 0,
        clipPath: "none",
        filter: "blur(2px)",
        xPercent: 4.1,
        yPercent: 0.2,
      })
    gsap
      .timeline()
      .from(trigger.current, { opacity: 0, filter: "blur(8px)", duration: 2 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger.current,
          scroller: scroller.current,
          scrub: 2,
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
          ease: "expoScale(0.5,7,none)"
        },
        {
          top: "0%",
          left: "0%",
          translateX: "0%",
          translateY: "0%",
          scale: 1,
          ease: "expoScale(0.5,7,none)"
        }
      );
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 2,
        start: "20% center",
        end: "bottom top",
      }
    }).to(logo.current, {
      duration: 8
    }).to(logo.current, {
      duration: 1,
    })
  })

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 1,
        start: "20% center",
        end: "bottom top",
      }
    }).to(scroller.current, {
      duration: 8
    }).to(scroller.current, {
      duration: 1,
      backgroundColor: "rgb(0 0 0/ 0.7)",
    })
  })

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 1,
        start: "20% center",
        end: "bottom top",
      },
    }).from(graduateWarningTopWrapper.current, {
      opacity: 0,
      duration: 1,
      filter: "blur(8px)",
      yPercent: -200,
    }).to(graduateWarningTopWrapper.current, {
      duration: 6,
      xPercent: -50,
    }).to(graduateWarningTopWrapper.current, {
      opacity: 0,
      duration: 1,
      filter: "blur(8px)",
      yPercent: -200,
    })
  });

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 1,
        start: "20% center",
        end: "bottom top",
        markers: true
      },
    }).from(graduateWarningBottomWrapper.current, {
      opacity: 0,
      duration: 1,
      filter: "blur(8px)",
      yPercent: 200,
    }).to(graduateWarningBottomWrapper.current, {
      duration: 6,
      xPercent: 50,
    }).to(graduateWarningBottomWrapper.current, {
      opacity: 0,
      duration: 1,
      filter: "blur(8px)",
      yPercent: 200,
    })
  });

  useGSAP(() => {
    gsap.to(graduateLifeWrapper.current, {
      scrollTrigger: {
        trigger: graduateLifeWrapper.current,
        scroller: scroller.current,
        scrub: 0,
        pin: true,
      },
    })
  })

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
      <div className="h-[200%] w-full pt-24 text-8xl overflow-hidden" ref={graduateLifeWrapper}>
        <div className="w-full h-1/2 flex flex-col justify-center items-center" ref={graduateWarningsWrapper}>
          <div className="flex w-full" ref={graduateWarningTopWrapper}>
            {
              Array.from({ length: 10 })
                .map((_, index) => {

                  if (index % 2 == 0) {
                    return (
                      <section className="flex-none bg-black warning" key={index}>
                        <h1 className="font-azonix text-credera-red">
                          Graduate
                        </h1>
                      </section>
                    )
                  } else {
                    return (
                      <section className="flex-none bg-white warning" key={index}>
                        <h1 className="font-azonix">
                          Incoming
                        </h1>
                      </section>)
                  }
                }
                )
            }
          </div>
          <div className="flex w-full rotate-180" ref={graduateWarningBottomWrapper}>
            {
              Array.from({ length: 10 })
                .map((_, index) => {

                  if (index % 2 == 1) {
                    return (
                      <section className="flex-none items-start graduate-description snap-start bg-black warning" key={index}>
                        <h1 className="font-azonix text-credera-red">
                          Graduate
                        </h1>
                      </section>
                    )
                  } else {
                    return (
                      <section className="flex-none items-start graduate-description snap-start bg-white" key={index}>
                        <h1 className="font-azonix">
                          Incoming
                        </h1>
                      </section>)
                  }
                }
                )
            }
          </div>
        </div>
      </div>
      {/* <div className="flex w-full" ref={graduateSlides}>
          <div
            className="h-1/3 w-full flex overflow-hidden"
            ref={graduateDescriptionWrapper}
          >
            <section className="flex-none items-start graduate-description snap-start">
              <div className="text-credera-grey">
                <h1 className="text-5xl font-azonix">
                  Graduate
                </h1>
              </div>
            </section>
            <section className="flex-none items-start graduate-description snap-start">
              <div className="text-credera-grey">
                <h1 className="text-5xl font-azonix">
                  Graduate
                </h1>
              </div>
            </section>
          </div>
        </div> */}

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
    </div >
  );
}
