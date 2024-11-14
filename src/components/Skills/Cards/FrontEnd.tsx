import {
  Axios,
  Css,
  Html,
  Javascript,
  MaterialUI,
  React,
  TypeScript,
} from "../TechnologyAssets/TechnologyIcons";
import DisplayTech from "./DisplayTech";

const FrontEnd = () => {
  return (
    <div className="bg-black border-4 border-zinc-500/20 rounded-xl py-4 px-8 w-4/5 lg:w-2/5 bg-opacity-80">
      <h2 className="mb-6 font-bold text-2xl">Front-End</h2>
      <p className="text-[#838383] font-medium">
        As an upcoming Junior Developer, I utilise popular frameworks and
        libraries in the industry
      </p>
      <p className="text-[#838383] font-medium">
        These frameworks often provide helpful documentation, making them easy
        to learn and use.
      </p>
      <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
        <DisplayTech name="HTML" Icon={Html} />
        <DisplayTech name="CSS" Icon={Css} />
        <DisplayTech name="JavaScript" Icon={Javascript} />
        <DisplayTech name="TypeScript" Icon={TypeScript} />
        <DisplayTech name="React" Icon={React} />
        <DisplayTech name="Axios" Icon={Axios} />
        <DisplayTech name="MaterialUI" Icon={MaterialUI} />
      </div>
    </div>
  );
};

export default FrontEnd;
