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
        <div className="w-full h-1/2  lg:flex lg:justify-between lg:w-1/3">
            {animation && (
              <Typewriter
                options={{
                  delay: 60,
                  pauseFor: 100,
                }}
                onInit={(typewritter) => {
                  typewritter
                    .typeString(
                      "<span>Terima kasih telah mengunjungi halaman website saya! Saya siap untuk menjawab pertanyaan Anda, mendengar proyek menarik yang ingin Anda diskusikan, atau menjelajahi peluang kerja yang tersedia. Jangan ragu untuk menghubungi saya melalui informasi kontak di bawah ini. Saya akan merespons secepat mungkin. Saya sangat antusias untuk berkolaborasi dan menciptakan pengalaman web yang luar biasa bersama Anda!</span>"
                    )
                    .callFunction(() => {})
                    .start();
                }}
              />
            )}
          
        </div>
        <div className={inView ? " animate-slideKiri w-full lg:flex lg:w-1/2 " : " opacity-0"}>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Contacs;
