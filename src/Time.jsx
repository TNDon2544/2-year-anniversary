import { useState, useEffect } from "react";
import bg from "../public/1.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Time() {
  const [timeSince, setTimeSince] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const startDate = new Date("2022-08-27T19:00:00");

    const calculateTimeSince = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      // Adjust days, months, and years if needed
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeSince({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeSince(); // Calculate initially
    const intervalId = setInterval(calculateTimeSince, 1000); // Update every second

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);
  return (
    <div>
      <img
        src={bg}
        alt="bg"
        className="w-full h-[100vh] object-cover select-none"
      />
      <div className="absolute m-auto top-[150px] left-0 right-0 text-[#003049] bg-[#c0c0c0] bg-opacity-85 w-fit rounded-lg p-4">
        <p className="text-2xl text-center font-[500]">
          เราคบกันมานานแค่ไหนแล้วนะ?
        </p>
        <div className="pt-5 text-2xl font-semibold flex justify-center items-center gap-3">
          <div>{timeSince.years} ปี</div>
          <div>{timeSince.months} เดือน</div>
          <div>{timeSince.days} วัน</div>
        </div>
        <div className="pt-5 text-2xl font-semibold flex justify-center items-center gap-3">
          <div>{timeSince.hours} ชั่วโมง</div>
          <div> {timeSince.minutes} นาที</div>
          <div>{timeSince.seconds} วินาที</div>
        </div>
        <div className="heartbeat"></div>
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

export default Time;
