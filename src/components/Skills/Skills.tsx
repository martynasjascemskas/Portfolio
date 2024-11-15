import FrontEnd from "./Cards/FrontEnd";
import BackEnd from "./Cards/BackEnd";
import VersionControl from "./Cards/VersionControl";
function Skills() {
  return (
    <div className="w-full py-24 flex flex-col relative items-center justify-center text-center md:gap-6 lg:text-left xl:gap-8 2xl:gap-10">
      <h1 className="flex items-center justify-center text-center font-bold text-5xl">
        Skills
      </h1>
      <hr className="w-8/12 border-t-4 border-gray-300" />
      <div className="flex justify-center container m-auto gap-12 flex-wrap items-center lg:flex-row">
        <FrontEnd />
        <BackEnd />
        <VersionControl />
      </div>
    </div>
  );
}

export default Skills;
