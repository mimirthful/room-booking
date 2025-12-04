import {useState, useContext} from "react";
import { AgreementContext } from "./AgreementContext";


export default function RulesAgreement()
{
    const [Checked, setCheck] = useState(false);
    const [error, setError] = useState (false)
    const [Agreed, setAgree] = useContext(AgreementContext)
    const [border, setBorderState] = useState("0");

    function HandleClick()
    {
        if(Checked) {
            setAgree(true)
            setError(false)
            setBorderState("none")
        } else 
        {
            setAgree(false)
            setError(true)
            setBorderState("dashed")
        }
    }
    return <>
    <div id="agreeArea">
        <div style={{borderStyle:border, borderWidth:"1px", borderColor:"#c3653e", borderRadius:"5px"}}>
        <input type="checkbox" className="larger" id="AgreeBox" checked={Checked} onChange={(e) => setCheck(e.target.checked)} />
        <label htmlFor="AgreeBox">Ymmärrän lukemani säännöt ja hyväksyn ne</label>
        </div>
    <br/>

    <button onClick={HandleClick}> Jatka </button> 
    {error && <p id="error">Hyväksy säännöt jatkaaksesi ajanvaraukseen</p>}
    </div>
    </>
}