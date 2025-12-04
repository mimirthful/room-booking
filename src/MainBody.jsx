import { useState } from "react";
import Rules from "./Rules"
import RulesAgreement from "./RulesAgreement"
import { AgreementContext } from "./AgreementContext.jsx"
import Booking from "./Booking.jsx";
export default function MainBody()
{
    const [Agreed, setAgree] = useState(false);
    return <>
    <main>
    <AgreementContext.Provider value={[Agreed, setAgree]}>
        {!Agreed && <Rules/>}
        {!Agreed && <RulesAgreement/>}
        {Agreed && <Booking/>}
    </AgreementContext.Provider>
    </main>
    </>
}