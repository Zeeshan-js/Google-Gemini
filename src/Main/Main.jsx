import "./Main.css";
import { useContext } from "react";
import { image } from "../assets/asset.js";
import { Context } from "../control/Control.jsx";

function Main() {
  const { input, setInput, handleClick, loading, result, prompt, showData } =
    useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <div className="nav-head">
            <span>Gemini</span>

            <img src={image.profile} alt="" />
          </div>
        </div>

        <div className="after">
          {loading ? (
            <>
              <div className="Prompt">
                <img className="profile" src={image.profile} alt="" />
                <p>{prompt}</p>
              </div>
              <div className="load-container">
                <img className="gem" src={image.gemini} alt="" />
                <div className="load">
                  <hr />
                  <hr />
                  <hr />
                </div>
              </div>
            </>
          ) : (
            <div>
              {showData ? (
                <div id="ans">
                  <div className="Prompt">
                    <img className="profile" src={image.profile} alt="" />
                    <p>{prompt}</p>
                  </div>
                  <div className="before-ans">
                    <div>
                      <img className="gem" src={image.gemini} alt="" />
                    </div>
                    <div
                      className="full-ans"
                      dangerouslySetInnerHTML={{ __html: result }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="main-container">
                  <div className="greeting">
                    <span>Hello, Zeeshan</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="last">
          <div className="input-container">
            <input
              id="taker"
              value={input}
              onKeyDown={(e) => {
                if (input.trim() !== "" && e.key === "Enter") {
                  handleClick()
                }
              }}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Ask Gemini"
            />
            <img src={image.gallery} alt="" />
            <img onClick={(e) => {
              if (input.trim() !== "") {
                handleClick()
              }
            }} src={image.send} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
