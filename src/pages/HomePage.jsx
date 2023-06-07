import Header from "../section/Header";
import Hero from "../section/hero";
import BigProject from "../section/bigProjects";
import Skill from "../section/skill";
import AboutMe from "../section/AboutMe";
import ContacMe from "../section/ContactMe";


function HomePage() {
  return (
    <div>
      <Header
        pages={
          <div>
            <Hero />
            <BigProject />
            <Skill />
            <AboutMe />
            <ContacMe />
          </div>
        }
      />  
    </div>
  );
}

export default HomePage;