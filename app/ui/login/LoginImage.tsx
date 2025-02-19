import Image from "next/image";
import doctorImage from "../../../public/images/doctor.avif";

const LoginImage = () => {
  return (
    <Image
      src={doctorImage}
      alt="doctor"
      width={300}
      height={300}
      className="max-w-1/2 flex-1 rounded-md md:block hidden"
    />
  );
};

export default LoginImage;
