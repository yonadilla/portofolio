import Button from "./button";
import ButtonGithub from "./buttonGithub";

function Card({
  Image,
  Tools,
  NameProject,
  Detail,
  buttonLive,
  buttonGithub,
  pathLive,
  pathGithub,
}) {
  return (
    <div className=" animate-slideKanan border-solid border border-white lg:w-80 ">
      <div className=" bg-color-background">
        {Image}
        <p className=" text-grey text-sm border-solid border-y border-white p-2">
          {Tools}
        </p>
        <div className=" text-white p-4">
          <p className=" text-base lg:text-2xl">{NameProject}</p>
          <p className=" text-sm lg:text-base text-grey py-4">{Detail}</p>
          <div className=" text-xs flex gap-5">
            <a href={pathLive}>
              <Button>{buttonLive}</Button>
            </a>
            <a href={pathGithub}>
              <ButtonGithub>{buttonGithub}</ButtonGithub>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
