import firstDate from "../public/first-date.mp4";
import video2 from "../public/2.mp4";
import video3 from "../public/3.mp4";
import img4 from "../public/4.jpg";
import eat from "../public/eat.mp4";
import ig from "../public/ig.jpg";
import cat1 from "../public/cat1.jpg";
import cat2 from "../public/cat2.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import song from "../public/song.mp3";
function Journey() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.volume = 0.1;
      audioElement.currentTime = 4.6;
      audioElement.play();
    }
  }, []);
  return (
    <div className="text-center">
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="pt-10 font-semibold pb-5 text-2xl">
        ยังจำเดทแรกของเราได้ไหม ?
      </p>
      <video
        width={300}
        controls
        className="mx-auto rounded-lg"
        autoPlay
        loop
        muted
      >
        <source src={firstDate} type="video/mp4" />
      </video>
      <p className="py-5 text-2xl">ตอนนั้นทั้งเขินทั้งสนุกเลยเนอะ 😊</p>

      <p className="pt-10 font-semibold pb-5 text-2xl">
        แล้วยังจำที่นี่ได้อยู่ไหมนะ ?
      </p>
      <video
        width={300}
        controls
        className="mx-auto rounded-lg"
        autoPlay
        loop
        muted
      >
        <source src={video2} type="video/mp4" />
      </video>
      <p className="py-5 text-2xl">ตอนนั้นมีคนเขินตัวม้วนเลย 😝</p>

      <p className="pt-10 font-semibold pb-5 text-2xl px-10">
        ถ่ายรูปด้วยกันครั้งแรกยังจำความรู้สึกตอนนั้นได้ไหม ?
      </p>
      <video
        width={300}
        controls
        className="mx-auto rounded-lg"
        autoPlay
        loop
        muted
      >
        <source src={video3} type="video/mp4" />
      </video>
      <img src={img4} width={300} className="mx-auto mt-5 rounded-lg" />
      <p className="py-5 text-2xl">ตอนนั้นทำหน้าไม่ถูกเลยหละ 🫣</p>

      <p className="pt-10 font-semibold pb-5 text-2xl text-center">
        รูปแรกที่เราลงด้วยกัน
      </p>
      <img src={ig} width={300} className="mx-auto mt-5 rounded-lg" />
      <p className="py-5 text-2xl">มีแต่คนแซวเยอะแยะเลย 😝</p>

      <p className="pt-10 font-semibold pb-5 text-2xl">
        เด็กที่ไหนก็ไม่รู้กินได้กินดี555
      </p>
      <video
        width={300}
        controls
        className="mx-auto rounded-lg"
        autoPlay
        loop
        muted
      >
        <source src={eat} type="video/mp4" />
      </video>

      <p className="pt-10 font-semibold pb-5 text-2xl text-center">
        แมวตัวแรกของเรา
      </p>
      <img src={cat1} width={300} className="mx-auto mt-5 rounded-lg" />
      <img src={cat2} width={300} className="mx-auto mt-5 rounded-lg" />
      <p className="py-5 text-2xl">ชั้นจะฆ่ามัน 😈</p>

      <p className="px-10 text-2xl py-10 text-left">
        ยังมีอีกหลายอย่างเลยนะที่เราทำด้วยกันแล้วก็จะมีอีกหลายๆอย่างที่เราก็จะทำร่วมกันแล้วเก็บเป็นความทรงจำดีๆร่วมกันอีกนะ
        😁
      </p>

      <div className="pb-5 text-black">
        <button
          onClick={() => navigate("/home")}
          className="bg-white rounded-full px-5 py-2"
        >
          <FaArrowLeft className="text-5xl" />
        </button>
      </div>
    </div>
  );
}

export default Journey;
