import Card from "../component/card";
import Header from "../section/Header";
import screenShot from "../assets/Screenshot website.png";

function PojectPages() {
  return (
    <div className="">
      <Header
        pages={
          <div>
            <div className=" text-white text-2xl mt-4">
              <span className=" text-primary">/</span>Project
            </div>
            <p className=" text-xs text-white">list my project</p>
            <div className=" text-xl text-white mt-14 mb-2">
              <p>
                <span className=" text-primary">#</span>complate-apps
              </p>
            </div>
            <div>
              <Card
                Image={<img src={screenShot} alt="" className=" w-full" />}
                Tools={"ReactJs, Tailwindcss, daisy-ui"}
                NameProject={"Portofolio pertama"}
                Detail={
                  "ini adalah protofolio pertama saya setelah belajar ReactJS"
                }
                pathLive={"https://yonadilla.github.io/portofolio/"}
                pathGithub={"https://github.com/yonadilla/portofolio"}
                buttonLive={"live ~"}
                buttonGithub={"Github ~"}
              />
            </div>
            <div className=" mt-10">
              <p className=" text-xl text-white mb-6">
                <span className=" text-primary">#</span>Small Project
              </p>
              <div className=" flex flex-col gap-4 lg:flex-row lg:flex-wrap">
                <div className=" w-fit">
                  <Card
                    Tools={"ReactJS"}
                    NameProject={"Tic-Tac-To"}
                    Detail={"Project pertama react dari web official react "}
                    pathLive={"https://yonadilla.github.io/tic-tac-to/"}
                    buttonLive={"Live ~"}
                    pathGithub={"https://github.com/yonadilla/tic-tac-to"}
                    buttonGithub={"Github ~"}
                  />
                </div>
                <div className=" w-fit">
                  <Card
                    Tools={"ReactJS, API"}
                    NameProject={"quote-generator"}
                    Detail={"project kecil kecilan menggunakan reactJs dan API"}
                    pathLive={"https://yonadilla.github.io/quote-random/"}
                    buttonLive={"Live ~"}
                    pathGithub={"https://github.com/yonadilla/quote-random"}
                    buttonGithub={"Github ~"}
                  />
                </div>
                <div className=" w-fit">
                  <Card
                    Tools={"HTML SCSS javascript"}
                    NameProject={"interior page"}
                    Detail={"dari project ini saya belajar membuat navbar responsive"}
                    pathLive={"https://yonadilla.github.io/interior-challenges/"}
                    buttonLive={"Live ~"}
                    pathGithub={"https://github.com/yonadilla/interior-challenges"}
                    buttonGithub={"Github ~"}
                  />
                </div>
                <div className=" w-fit">
                  <Card
                    Tools={"HTML CSS"}
                    NameProject={"my team page"}
                    Detail={"di project ini saya menggunakan html css dan belajar menggunakan pseudo-element"}
                    pathLive={"https://yonadilla.github.io/my-team/"}
                    buttonLive={"Live ~"}
                    pathGithub={"https://github.com/yonadilla/my-team"}
                    buttonGithub={"Github ~"}
                  />
                </div>
                <div className=" w-fit">
                  <Card
                    Tools={"HTML CSS"}
                    NameProject={"404 page"}
                    Detail={"projrct pertama saya setelah belajar coding web"}
                    pathLive={"https://yonadilla.github.io/404/"}
                    buttonLive={"Live ~"}
                    pathGithub={"https://github.com/yonadilla/404"}
                    buttonGithub={"Github ~"}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default PojectPages;
