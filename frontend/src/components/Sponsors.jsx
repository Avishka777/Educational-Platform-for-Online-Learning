import React from "react";
import s1 from "../assets/sponsors/s1.png";
import s2 from "../assets/sponsors/s2.png";
import s4 from "../assets/sponsors/s4.png";
import s5 from "../assets/sponsors/s5.png";
import s6 from "../assets/sponsors/s6.png";
import s7 from "../assets/sponsors/s7.png";
import s8 from "../assets/sponsors/s8.png";
import s9 from "../assets/sponsors/s9.png";
import s10 from "../assets/sponsors/s10.png";
import s11 from "../assets/sponsors/s11.png";
import s3 from "../assets/sponsors/s3.png";

export default function Sponsors() {
  return (
    <div>
      <div className="flex sm:gap-32 gap-10 items-center justify-center mt-5">
        <img src={s5} alt="image 1" className="sm:w-24 w-12" />
        <img src={s1} alt="image 1" className="sm:w-20 w-10" />
        <img src={s2} alt="image 1" className="sm:w-24 w-12" />
        <img src={s4} alt="image 1" className="sm:w-24 w-12" />
        <img src={s11} alt="image 1" className="sm:w-14 w-7" />
      </div>
      <div className="flex sm:gap-32 gap-10 items-center justify-center mt-5">
        <img src={s10} alt="image 1" className="sm:w-14 w-7" />
        <img src={s6} alt="image 1" className="sm:w-20 w-10" />
        <img src={s7} alt="image 1" className="sm:w-16 w-8" />
        <img src={s8} alt="image 1" className="sm:w-14 w-7" />
        <img src={s9} alt="image 1" className="sm:w-24 w-12" />
        <img src={s3} alt="image 1" className="sm:w-24 w-12" />
      </div>
    </div>
  );
}
