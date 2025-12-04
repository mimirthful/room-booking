import villageImage from "./assets/village-9720412.svg"

function MainTitle()
{
    return <div id="title">
    <img src={villageImage} width={120} alt="comic book styled picture of a house"/>
    <h1>Annala Iso-Heikkilän Kerhohuoneen varaus</h1>
    </div>
}

export default MainTitle;