import villageImage from "./assets/village-9720412.svg"
import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

function MainTitle()
{
    const { Language } = useContext(LanguageContext);
    return <div id="title">
    <img id="villageImg" src={villageImage} alt="comic book styled picture of a house"/>
    <h1>{Language.title}</h1>
    </div>
}

export default MainTitle;