import { image } from "../assets/asset.js";
import { useState,useContext } from "react";
import "./Side.css";
import { Context } from '../control/Control.jsx'

function Side() {
  const [expand, setExpand] = useState(false);

  const {prevPrompt,handleClick,setPrompt,setInput,setLoading,setShowData} = useContext(Context)

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleHistory = async (tan0) => {
      setPrompt(tan0);
      await handleClick(tan0);
  }

  const newChat = () => {
    setLoading(false);
    setShowData(false);
  }

  return (
    <>
      <div className={`sidebar ${expand ? "expanded" : ""}`}>
        <div className="top-side">
          <img
            className="menu"
            onClick={handleExpand}
            src={image.menu}
            alt=""
          />

          <div onClick={newChat} className="newchat">
            <img src={image.plus} alt="" />
            {expand ? <p>New chat</p> : null}
          </div>

          <div className='history-container'>
            {expand ? (
              <div>
                <p><b>Recent</b></p>
                <div className='prev-history'>
                  {prevPrompt.map((text,i) => (
                    <div onClick={() => handleHistory(text)} key={i} className="history">
                      <img src={image.chat} alt="" />
                      <p>{text.slice(0,25)}...</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

      

        <div className="bottom-side">
          
            <div className="bottom">
              <img src={image.help} alt="" />
              {expand ? <p>Help</p> : null}
            </div>
            <div className="bottom">
              <img src={image.history} alt="" />
              {expand ? <p>Activity</p> : null}
            </div>
            <div className="bottom">
              <img src={image.setting} alt="" />
              {expand ? <p>Setting</p> : null}
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Side;
