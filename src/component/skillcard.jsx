function SkillCard({ title, stack,}) {
  return (
      <div className=" w-fit h-fit ">
        <div className=" bg-color-background border-solid border w-28 relative right-0 lg:text-base lg:w-40">
          <p className="text-white border-solid border-b p-2">{title}</p>
          <div className=" p-2">
            <p className=" text-grey">{stack}</p>
          </div>
        </div>
      </div>
  );
}

export default SkillCard;
