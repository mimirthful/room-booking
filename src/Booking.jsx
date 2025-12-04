import { useContext } from "react";
import { AgreementContext } from "./AgreementContext";
export default function Booking() {
    const [Agreed, setAgree] = useContext(AgreementContext);
    return (
      <>
      <div id="backToMain">
      <img src="/public/cottagecore-9720392.svg" width={100} alt= "comic styled picture of a bird"/> <button onClick={() => setAgree(false)}>Takaisin etusivulle</button>
      </div>
      <hr/>
      <img src="/public/border-9720390_1280.png" width={200} alt= "comic styled border decoration made of flowers"/>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2u9sNkLJEOnOV_zr9zsI-lm0tLjXwNgMMvlWSYduLAaipKqUMPgst9R9ZX0LcszitB-R6Nn-PS?gv=true"
          width="100%"
          height="800"
        ></iframe>
        <img src="/public/border-9720390_1280.png" width={200} alt= "comic styled border decoration made of flowers" style={{ transform: 'rotate(180deg)' }} />
      </>
    );
  }
  