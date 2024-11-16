import img1 from "../../../assets/ProjectImg/wordle-cli.png";
import img2 from "../../../assets/ProjectImg/wordle-result.png";
import Slider from "../../Slider/Slider";

const WordleHelper = () => {
  const sliderImg = [
    { img: img1, alt: "Image of Wordle CLI" },
    { img: img2, alt: "Image of Wordle Result" },
  ];

  return (
    <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
      <h2 className="text-xl mb-2">CLI Wordle Helper</h2>
      <Slider images={sliderImg} />
    </div>
  );
};

export default WordleHelper;
