import FunFactCard from "../component/funfactCard";

function FunFact() {
  return (
    <>
      <div className=" mt-8">
        <p className=" text-white text-lg">
          <span className=" text-primary">#</span>My-Fun-Facts
        </p>
        <FunFactCard FunFactDetail={"saya suka main bola voli"} />
        <FunFactCard FunFactDetail={"saya suka kucing dari pada anjing"} />
      </div>
    </>
  );
}

export default FunFact;
