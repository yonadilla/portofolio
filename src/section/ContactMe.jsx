import Line from "../assets/Line.svg";
import Contacs from "../component/contacs";

function ContacMe() {
  return (
    <div>
      <div className=" flex text-primary items-center justify-between py-4">
        <div className=" ">
          <p className=" text-xl lg:text-2xl text-white">
            <span className=" text-primary">#</span>Hubungi aku
          </p>
        </div>
        <img src={Line} alt="" className=" bold w-1/2" />
      </div>
      <Contacs />
    </div>
  );
}

export default ContacMe;
