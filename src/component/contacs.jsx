import { useInView } from "react-intersection-observer";
import Form from "./Form";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

function Contacs() {
  const [animation, setAnimation] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView == true) return setAnimation(true);
  }, [inView]);
  return (
    <>
      <div ref={ref} className=" lg:flex lg:justify-between">
        <div className="w-full h-36 lg:w-1/2">
          <div className=" lg:flex lg:justify-between">
            {animation && (
              <Typewriter
                options={{
                  delay: 60,
                  pauseFor: 100,
                }}
                onInit={(typewritter) => {
                  typewritter
                    .typeString(
                      "<span>Saya terbuka untuk menjadi freelance atau fullTime. bagaimana pun jika ada pertanyaan jangan ragu hubungi saya</span>"
                    )
                    .callFunction(() => {})
                    .start();
                }}
              />
            )}
          </div>
        </div>
        <div className={inView ? "animate-slideKiri w-full lg:w-1/2 " : " opacity-0"}>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contacs;
