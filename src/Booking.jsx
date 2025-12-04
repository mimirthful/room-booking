import { useContext } from "react";
import { AgreementContext } from "./AgreementContext";
import birdImage from "./assets/cottagecore-9720392.svg"
import borderImage from "./assets/border-9720390_1280.png"
export default function Booking() {
    const [Agreed, setAgree] = useContext(AgreementContext);
    return (
      <>
      <div id="backToMain">
      <img src={birdImage} width={100} alt= "comic styled picture of a bird"/> <button onClick={() => setAgree(false)}>Takaisin etusivulle</button>
      </div>
      <hr/>
      <img src={borderImage} width={200} alt= "comic styled border decoration made of flowers"/>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2u9sNkLJEOnOV_zr9zsI-lm0tLjXwNgMMvlWSYduLAaipKqUMPgst9R9ZX0LcszitB-R6Nn-PS?gv=true"
          width="100%"
          height="800"
        ></iframe>
        <img src={borderImage} width={200} alt= "comic styled border decoration made of flowers" style={{ transform: 'rotate(180deg)' }} />
      </>
    );
  }
  