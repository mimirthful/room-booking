import {useState, useContext} from "react";
import { AgreementContext } from "./AgreementContext";


export default function RulesAgreement()
{
    const [Checked, setCheck] = useState(false);
    const [error, setError] = useState (false)
    const [Agreed, setAgree] = useContext(AgreementContext)

    function HandleClick()
    {
        if(Checked) {
            setAgree(true)
            setError(false)
        } else 
        {
            setAgree(false)
            setError(true)
        }
    }
    return <>
    <div id="agreeArea">
    <input type="checkbox" className="larger" id="AgreeBox" checked={Checked} onChange={(e) => setCheck(e.target.checked)} />
    <label htmlFor="AgreeBox">Ymmärrän lukemani säännöt ja hyväksyn ne</label>
    <br/>

    <button onClick={HandleClick}> Jatka </button> 
    {error && <p id="error">Hyväksy säännöt jatkaaksesi ajanvaraukseen</p>}
    </div>
    </>
}