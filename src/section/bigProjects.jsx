import Card from "../component/card";
import screenShot from "../assets/Screenshot website.png";
import Line from "../assets/Line.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function BigProject() {
  const {ref, inView} = useInView();

  return (
    <div  className="">
      <div className=" flex text-primary items-center justify-between py-4 lg:mt-14">
        <div className=" ">
          <p className=" text-xl lg:text-2xl text-white">
            <span className=" text-primary">#</span>Project
          </p>
        </div>
        <img src={Line} alt="" className=" w-1/3 lg:w-1/2 " />
        <div className=" ml-0">
          <Link to="/Project">
            <p className="">lihat semua</p>
          </Link>
        </div>
      </div>
      <div ref={ref} className={inView ? "animate-slideKanan" : " opacity-0"}>
      <Card
        Image={<img src={screenShot} alt="" className=" w-full" />}
        Tools={"Html Css Tailwindcss daisy-ui ReactJS"}
        NameProject={"Portofolio pertama"}
        Detail={"ini adalah protofolio pertama saya setelah belajar ReactJS"}
        pathLive={"https://www.flaticon.com/animated-icons-most-downloaded"}
        pathGithub={"http://www.responsinator.com/?url=http%3A%2F%2Flocalhost%3A5173%2  F"}
        buttonLive={"Live~"}
        buttonGithub={"Github~"}
        />
        </div>
    </div>
  );
}

export default BigProject;
