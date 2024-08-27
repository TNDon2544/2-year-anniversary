import { useNavigate } from "react-router-dom";
import videoBg from "../public/video-bg.mp4";
import { FaArrowLeft } from "react-icons/fa";
import proud from "../public/proud.mp3";
import { useEffect, useRef } from "react";

function Message() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = 0.1;
      audioElement.currentTime = 45.5;
      audioElement.play();
    }
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={proud} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />
      <div className="text-xl absolute m-auto top-[150px] left-0 right-0 text-[#003049] bg-[#c0c0c0] bg-opacity-85 w-[380px] rounded-lg p-4 break-words">
        อยากจะบอกว่าดีใจนะที่ได้มาเจอกัน
        ตั้งแต่มีเธอเข้ามาก็ทำให้ชีวิตสดใสขึ้นเยอะเลย ถึงจะมีไม่น่ารักใส่กันบ้าง
        โกรธกันพูดไม่ดีใส่กันบ้าง
        แต่ก็รู้ไว้นะว่ายังรักและอยากอยู่ด้วยกันไปนานๆเลยนะ ❤️
        <div className="absolute m-auto -bottom-[240px] left-1/2 transform -translate-x-1/2 text-black">
          <button
            onClick={() => navigate("/home")}
            className="bg-white rounded-full px-5 py-2"
          >
            <FaArrowLeft className="text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
