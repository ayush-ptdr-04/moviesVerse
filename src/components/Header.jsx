import Lottie from "lottie-react";
import animationData from "../assets/animations/headerAnimation.json";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { URL_AVATAR } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" z-10  flex absolute bg-gradient-to-b from-gray-900 w-full  justify-between">
      <div className="flex items-center">
        <div className="h-24 w-24 ">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <div>
          <h1 className="font-bold text-white text-xl">moviesVerse</h1>
        </div>
      </div>

      <div className="flex p-2 ">
        <img
          className="w-12 h-12 mx-2 my-4 rounded-lg"
          src={URL_AVATAR}
          alt="profil_img"
        />
        <button
          className="cursor-pointer  h-12   px-4  mx-2 my-4 border-red-900 border-1 rounded-4xl text-white font-bold text-sm"
          onClick={handleSignOut}>
          Sign-out
        </button>
      </div>
    </div>
  );
};
export default Header;
