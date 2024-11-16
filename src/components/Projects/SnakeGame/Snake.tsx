import img1 from "../../../assets/ProjectImg/snake-game.png";
import Slider from "../../Slider/Slider";

const Snake = () => {
  const sliderImg = [{ img: img1, alt: "Image of snake game" }];

  return (
    <div className="w-full sm:w-4/5 md:w-2/5 xl:w-2/6">
      <h2 className="text-xl mb-2">First Java Project: Snake Game</h2>
      <Slider images={sliderImg} />
    </div>
  );
};

export default Snake;
