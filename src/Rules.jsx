import borderImage from "./assets/border-9720390_1280.png";
import bookImage from "./assets/decoration-9720405.svg";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function Rules() {
  const { Language } = useContext(LanguageContext);
  return (
    <>
      <div id="rules">
        <img
          className="borderImg"
          src={borderImage}
          alt="comic styled border decoration made of flowers"
        />
        <h2>{Language.rulesTitle}</h2>
        <ol>
          <li>
            <h3>{Language.rule03_title}</h3>
            <p> {Language.rule03_body}</p>
          </li>
          <li>
            <h3>{Language.rule01_title}</h3>
            <p> {Language.rule01_body}</p>
            <p>
              <strong> {Language.rule01_list_title}</strong>
            </p>

            <ul>
              <li>{Language.rule01_list_item01}</li>
              <li>{Language.rule01_list_item02}</li>
              <li>{Language.rule01_list_item03}</li>
              <li>{Language.rule01_list_item04}</li>
              <li>{Language.rule01_list_item05}</li>
              <li>{Language.rule01_list_item06}</li>
              <li>{Language.rule01_list_item07}</li>
            </ul>
            <p> {Language.rule01_body2}</p>
            <p> {Language.rule01_body3}</p>
            <p> {Language.rule01_body4}</p>
          </li>
          <li>
            <h3>{Language.rule02_title}</h3>
            <p> {Language.rule02_body}</p>
          </li>

          <li>
            <h3>{Language.rule04_title}</h3>
            <p> {Language.rule04_body}</p>
            <p> {Language.rule04_body2}</p>
          </li>
          <li>
            <h3>{Language.rule05_title}</h3>
            <p>{Language.rule05_body}</p>
            <p>{Language.rule05_body2}</p>
            <p>{Language.rule05_body3}</p>
          </li>
        </ol>

        <img
          id="bookImg"
          src={bookImage}
          alt="Comic styled picture of an open book with flowers around it"
        />
        <p style={{ textAlign: "center" }}> {Language.addendum}</p>
        <p style={{ textAlign: "center" }}> {Language.addendum2}</p>
        <p style={{ textAlign: "center" }}>
          <strong>{Language.addendum3}</strong>
        </p>
        <img
          className="borderImg"
          src={borderImage}
          alt="comic styled border decoration made of flowers"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </>
  );
}

export default Rules;
