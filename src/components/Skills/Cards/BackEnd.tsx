import {
  Express,
  MySQL,
  Nodejs,
  PostgreSQL,
  Postman,
} from "../TechnologyAssets/TechnologyIcons";
import DisplayTech from "./DisplayTech";

const BackEnd = () => {
  return (
    <div className="bg-black border-4 border-zinc-500/20 rounded-xl py-4 px-8 w-4/5 lg:w-2/5 bg-opacity-80">
      <h2 className="mb-6 font-bold text-2xl">Back-End</h2>
      <p className="text-[#838383] font-medium">
        In backend development, I focus on creating the server-side logic that
        powers applications, enabling seamless data handling. This involves
        designing and managing databases, building APIs for reliable data
        exchange, and ensuring secure, scalable performance to support growing
        user needs.
      </p>
      <div className="flex gap-4 items-center flex-wrap mt-4 w-3/5">
        <DisplayTech name="Express" Icon={Express} />
        <DisplayTech name="PostgreSQL" Icon={PostgreSQL} />
        <DisplayTech name="MySQL" Icon={MySQL} />
        <DisplayTech name="NodeJS" Icon={Nodejs} />
        <DisplayTech name="Postman" Icon={Postman} />
      </div>
    </div>
  );
};

export default BackEnd;
