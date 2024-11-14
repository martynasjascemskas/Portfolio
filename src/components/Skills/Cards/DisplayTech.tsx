import { useState } from "react";

interface techProps {
  name: string;
  Icon: React.FC;
}

const DisplayTech: React.FC<techProps> = ({ name, Icon }) => {
  const [isOnElement, setIsOnElement] = useState(false);
  const onElement = () => {
    setIsOnElement(true);
  };
  const notOnElement = () => {
    setIsOnElement(false);
  };
  return (
    <div
      className="w-fit h-fit hover:scale-125 relative duration-200 ease-out"
      onMouseOver={onElement}
      onMouseLeave={notOnElement}
    >
      {isOnElement && <div className="absolute -top-6 -left-1/2">{name}</div>}
      <Icon />
    </div>
  );
};

export default DisplayTech;
