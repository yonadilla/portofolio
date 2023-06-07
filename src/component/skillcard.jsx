function SkillCard({ title, stack,}) {
  return (
    <div className="">
      <div className=" h-fit ">
        <div className=" bg-color-background border-solid border w-36 relative right-0 lg:text-base lg:w-40">
          <p className="text-white border-solid border-b p-2">{title}</p>
          <div className=" p-2">
            <p className=" text-grey">{stack}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
