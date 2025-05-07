import Lottie from "lottie-react";
import animationData from "../assets/animations/headerAnimation.json";

const Header = () => {
  return (
    <div className="z-10 justify-between flex absolute bg-gradient-to-b from-gray-900 w-full">
      <div className="flex items-center">
        <div className="h-24 w-24 ">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div>
          <h1 className="font-bold text-white text-xl">moviesVerse</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
