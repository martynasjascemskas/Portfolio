import EuroStats from "./EuroStats/EuroStats";
import Snake from "./SnakeGame/Snake";
import UKVisualiser from "./UKVisualiser/UKVisualiser";
import WordleHelper from "./WorldleHelper/WordleHelper";

function Projects() {
  return (
    <div className="flex flex-col w-full py-24 relative items-center justify-center text-center md:gap-6 lg:text-left xl:gap-8 2xl:gap-10 border-t-4 border-zinc-800">
      <h1 className="font-bold text-5xl">Projects</h1>
      <div className="container m-auto mt-12 px-2">
        <div className="flex flex-col gap-12">
          <UKVisualiser />
        </div>
        <hr className="mt-12 mb-12 max-w-[85%] mx-auto" />
        <div className="flex flex-col gap-12">
          <EuroStats />
        </div>
        <hr className="mt-12 mb-12 max-w-[100%] mx-auto" />
        <div className="flex flex-wrap gap-4 w-full justify-center flex-col items-center md:flex-row lg:gap-10 2xl:gap-12">
          <Snake />
          <WordleHelper />
        </div>
      </div>
    </div>
  );
}

export default Projects;
