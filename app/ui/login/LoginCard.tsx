import Image from "next/image";
import LoginForm from "./LoginForm";
import LoginImage from "./LoginImage";
import logo from "../../../public/images/logo.png";

const LoginCard = () => {
  return (
    <div className="flex justify-center items-center gap-4 py-14 max-sm:py-20 sm:px-12 px-2 w-full bg-bgPrimary relative">
      <Image
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="absolute top-4 left-4 rounded-md md:w-20 sm:w-16 max-sm:w-12"
      />
      <LoginForm />
      <LoginImage />
    </div>
  );
};

export default LoginCard;
