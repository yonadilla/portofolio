import { useInView } from "react-intersection-observer";
import Foto2 from "../assets/foto baru.png";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import Logoskill from "../assets/logoSkill.svg";
import Dots from '../assets/Dots.svg';

function Me() {
  const { ref, inView } = useInView();
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (inView == true) return setAnimation(true);
  }, [inView]);
  return (
    <>
      <div className=" flex text-grey text-sm lg:justify-between">
        <div
          ref={ref}
          className=" w-full  lg:w-1/2 lg:flex lg:flex-col lg:justify-center "
        >
          {animation && (
            <Typewriter
              options={{
                delay: 60,
              }}
              onInit={(typewritter) => {
                typewritter
                  .typeString(
                    "<strong>hallo namaku yon<br/> saya adalah Front-end developer yang belajar secara otodidak dan bertempat tinggal di blora, Jawa tengah. saya bisa membuat website responsive dari 0 dan juga saya bisa membuat web berdasarkan design dari figma yang ada</strong>"
                  )
                  .callFunction(() => {})
                  .start();
              }}
            />
          )}
        </div>
        <div className=" hidden lg:flex lg:justify-end lg:w-fit lg:relative lg:left-12">
          <img src={Logoskill} alt="" className=" relative left-32 z-10" />
          <img src={Foto2} alt="" className=" relative w-96 z-20" />
          <img src={Dots} alt="" className="relative right-24 top-1/3 z-30" />
        </div>
      </div>
    </>
  );
}

export default Me;
