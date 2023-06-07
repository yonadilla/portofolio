import Me from "../component/Me";
import FunFact from "../section/funfact";
import Skill from "../section/skill";
import Header from "../section/Header";

function AboutMePages() {
  return (
    <div>
      <Header
        pages={
          <>
            <div className=" mt-10">
              <h1 className=" text-white text-xl">
                <span className=" text-primary">/</span>about me
              </h1>
            </div>
            <div className=" mt-5">
              <Me />
            </div>
            <div className=" mt-5">
              <Skill />
            </div>
            <div className=" mt-5">
              <FunFact />
            </div>
          </>
        }
      />
    </div>
  );
}

export default AboutMePages;
