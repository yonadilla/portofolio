import SkillCard from "../component/skillcard";
import Line from "../assets/Line.svg";
import { useInView } from "react-intersection-observer";
import Dotkecil from "../assets/dotkecil.svg";
import Dotbesar from "../assets/dotbesar.svg";
import Kotakkecil from "../assets/Kotakkecil.svg";
import Kotakbesar from "../assets/Kotakbesar.svg";
import LogoSkill from "../assets/logoSkill.svg";

function Skill() {
  const { ref, inView } = useInView();
  console.log(inView);
  return (
    <div ref={ref} className=" lg:my-20">
      <div className=" flex text-primary items-center justify-between py-4">
        <div className=" lg:py-3">
          <p className=" text-lg lg:text-2xl text-white">
            <span className=" text-primary">#</span>Skill
          </p>
        </div>
        <img src={Line} alt="" className=" bold w-1/2 " />
      </div>
      <div className=" flex flex-wrap gap-2 lg:flex lg:flex-wrap lg:items-center lg:h-fit lg:justify-between">
        <div
          className="hidden lg:flex lg:relative lg:flex-col  lg:w-1/3 lg:mt-3"
        >
          <div className={inView ? "animate-[slideKanan_0.5s]" : "opacity-0"}>
            <img
              src={Dotbesar}
              alt=""
              className=" animate-wiggle  lg:w-fit relative left-1/2  "
            />
          </div>
          <div className={inView ? " animate-[slideKanan_1s]" : " opacity-0"}>
            <img
              src={Kotakbesar}
              alt=""
              className="animate-wiggle2 w-fit relative bottom-14 left-4  "
            />
          </div>
          <div className={inView ? "animate-[slideKanan_1.5s]" : " opacity-0"}>
            <img
              src={Kotakkecil}
              alt=""
              className=" animate-wiggle w-fit relative left-1/3"
            />
          </div>
          <div className={inView ? " animate-[slideKanan_2s]" : " opacity-0"}>
            <img
              src={Dotkecil}
              alt=""
              className="  animate-wiggle2 w-fit relative bottom-11  "
            />
          </div>
          <div className={inView ? "animate-[slideKanan_2.5s]" : " opacity-0"}>
            <img
              src={LogoSkill}
              alt=""
              className="  animate-wiggle w-fit relative bottom-12 left-40 "
            />
          </div>
        </div>
        <div className=" gap-2 flex text-xs flex-wrap flex-col h-64 w-fit lg:flex lg:flex-wrap-reverse lg:flex-col-reverse lg:justify-end lg:w-fit">
          <div className={inView ? "   animate-slideKiri" : " opacity-0"}>
            <SkillCard title={"Others"} stack={"HTML CSS SCSS API"} />
          </div>
          <div className={inView ? " animate-slideKiri" : "opacity-0"}>
            <div className></div>
            <SkillCard
              title={"Tools"}
              stack={"vsCode daisy-ui Figma Git Github "}
            />
          </div>
          <div
            className={
              inView ? "animate-[slideKiri_1s_ease-out]" : " opacity-0"
            }
          >
            <SkillCard title={"FrameWorks"} stack={"ReactJS tailwindcss"} />
          </div>
          <div
            className={
              inView ? "animate-[slideKiri_1s_ease-out]" : " opacity-0"
            }
          >
            <SkillCard title={"languages"} stack={"javaScript"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
