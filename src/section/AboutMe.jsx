import Line from "../assets/Line.svg";
import Me from "../component/Me";

function AboutMe() {
  return (
    <div>
      <div className=" flex text-primary items-center justify-between py-4">
        <div className=" ">
          <p className=" text-xl lg:text-2xl text-white">
            <span className=" text-primary">#</span>Tentang aku
           </p>
        </div>
        <img src={Line} alt="" className=" bold w-1/2" />
      </div>
      <Me />
    </div>
  );
}

export default AboutMe;
