import borderImage from "./assets/border-9720390_1280.png"
import bookImage from "./assets/decoration-9720405.svg"
import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

function Rules ()
{
    const { Language } = useContext(LanguageContext);
    return <>
    <div id="rules">
            
            <img className="borderImg" src={borderImage} alt= "comic styled border decoration made of flowers"/>
            <h2>{Language.rulesTitle}</h2>
            
            <ol>
                <li> <p> {Language.rulesFirst}
                    <strong> {Language.rulesFirstBoldPart}</strong> </p>
                </li>
                <li>
                    {Language.rulesSecond}
                </li>
                <li>
                    {Language.rulesThird}
                </li>
                <li>
                    {Language.rulesFourth} 
                </li>
                <li>
                    {Language.rulesFifth}
                </li>
                <li>
                    {Language.rulesSixth}
                </li>
            </ol>
            <img id="bookImg" src={bookImage} alt="Comic styled picture of an open book with flowers around it"/> <br/> 
    <p> <strong> {Language.rulesAddendumOne} </strong> {Language.rulesAddendumTwo} </p> <br/>
    <p> {Language.rulesAddendumThree} </p> <br/>
    <p>  {Language.rulesAddendumFour}</p> <br/>
    <p> <strong> {Language.rulesAddendumFive} </strong></p> <br/>
    <img className="borderImg" src={borderImage} alt= "comic styled border decoration made of flowers" style={{ transform: 'rotate(180deg)' }} />
    <br/>
    <p style={{textAlign:"center"}}> {Language.rulesAddendumSix} </p> <br/>
    <p style={{textAlign:"center"}}> <strong> {Language.rulesAddendumSeven} </strong> </p> <br/>
</div>
    </>
}

export default Rules;