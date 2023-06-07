import { useState } from "react";
import Button from "../component/button";
import Typewriter from "typewriter-effect";

function Hero() {
  const [animation , setAnimation] = useState(false);
  console.log(animation)
  return (
    <div>
      <div className="  flex flex-col py-10 mt-5  justify-center lg:items-center lg:mt-0 lg:justify-center lg:py-28">
        <div className=" flex flex-col text-center justify-center items-center lg:w-1/2">
          <p className=" text-white text-2xl  h-48">
          <Typewriter
                options={{
                  delay:60,
                  pauseFor : 100 ,
                }}
                onInit={(typewritter) => {
                  typewritter.typeString("<span>halo aku Yon, seorang <span style='color : #C778DD;'>Front-end web developer</span><span style='font-size: 14px ; color:#ABB2BF '><br>belajar secara otodidak adalah jalan ninjaku</span></span>")
                  .callFunction(() => {
                    setAnimation(!animation)
                  }).start()
                }
              }
              />
          </p>
          <div className={animation ? " animate-slideKanan mt-5" : "opacity-0"}>
            <Button>Hubungi aku !!</Button>
          </div>
          <div className={ animation ? " animate-slideKiri mt-6 flex items-center border-solid border-primary border": "opacity-0"}>
            <div className=" animate-pulse border border-primary border-solid m-2 p-2 w-2 bg-primary"></div>
            <p className=" text-abu">
               Working on
              <span className=" text-white px-2">Portofolio</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
