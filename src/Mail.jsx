import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Mail() {
  const [cardPosition, setCardPosition] = useState(0);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setCardPosition(-90);
    Swal.fire({
      title: "ก่อนอ่านใส่รหัสก่อนนะจ๊ะ",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: false,
      confirmButtonText: "ตกลง",
      showLoaderOnConfirm: true,
      preConfirm: async (password) => {
        if (password !== "182644") {
          Swal.showValidationMessage(`"ไม่ถูกนะจ๊ะ ใบ้ให้รหัสห้อง"`);
          return false;
        }
        localStorage.setItem("password", password);
        return true;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          title: "ถูกต้องงงง",
          allowOutsideClick: false,
          allowEscapeKey: false,
          preConfirm: () => {
            navigate("/home");
          },
        });
      }
    });
  };

  return (
    <div className="container mt-[300px]" onClick={handleMouseEnter}>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card" style={{ top: `${cardPosition}px` }}>
          <p className="absolute left-[65px] text-[25px] font-[500] top-6 text-[#003049]">
            คลิกเพื่ออ่าน
          </p>
          <div className="heart"></div>
        </div>
        <div className="hearts">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
}

export default Mail;
