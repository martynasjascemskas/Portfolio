import { Git, GitHub, Gitlab } from "../TechnologyAssets/TechnologyIcons";
import DisplayTech from "./DisplayTech";

const VersionControl = () => {
  return (
    <div className="bg-black border-4 border-zinc-500/20 rounded-xl py-4 px-8 w-4/5 lg:w-2/5 bg-opacity-80">
      <h2 className="mb-6 font-bold text-2xl">VersionControl</h2>
      <p className="text-[#838383] font-medium">
        Version control tools help track and manage changes in code. This
        enables developers to work efficiently, collaborate within teams, and
        ensure the integrity of their projects.
      </p>
      <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
        <DisplayTech name="Git" Icon={Git} />
        <DisplayTech name="GitHub" Icon={GitHub} />
        <DisplayTech name="GitLab" Icon={Gitlab} />
      </div>
    </div>
  );
};

export default VersionControl;
