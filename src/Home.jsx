import TimeIcon from "../public/spend-time.png";
import CameraIcon from "../public/camera.png";
import MailIcon from "../public/mail.png";
import firstSea from "../public/first-sea.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <img
        src={firstSea}
        alt="bg"
        className="w-full h-[100vh] object-cover select-none"
      />
      
      <div className="absolute top-[100px] m-auto left-0 right-0">
        <p className="text-white text-center text-2xl">อยากดูอันไหนก่อนดีเลือกเลย</p>
        <div className="flex flex-col justify-center items-center gap-20 pt-16">
          <Link to={"/time"}>
            <img src={TimeIcon} width={100} />
          </Link>
          <Link to={"/journey"}>
            <img src={CameraIcon} width={100} />
          </Link>
          <Link to={"/message"}>
            <img src={MailIcon} width={100} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
