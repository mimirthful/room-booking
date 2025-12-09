import frogImage from "./assets/cute-9720393.svg"
import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export default function Footer()
{
    const { Language } = useContext(LanguageContext);
    return <footer>
        <img id="frogImg" src={frogImage} alt="drawn picture of a frog"/>
        <address>
        {Language.footerTextOne} <a href="https://github.com/mimirthful">Alex Lankio</a> <br/>
        {Language.footerTextTwo} <br/>
        {Language.footerTextThree} <br/>
        {Language.footerTextFour} <a href="mailto:alex.lankio@proton.me">alex.lankio@proton.me</a><br/>
        {Language.footerTextFive} <a href="mailto:annalaisoheikkila@gmail.com">annalaisoheikkila@gmail.com</a><br/>
<br/>
Images by <a href="https://pixabay.com/users/soponyono-16867228/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9720390">soponyono</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=9720390">Pixabay</a>
        </address>
    </footer>
}