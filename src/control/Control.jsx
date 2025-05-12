import React, { useState, createContext } from "react";
import run from "../context/context.js";

export const Context = createContext();

function Control({ children }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showData, setShowData] = useState(false);

  const delayPara = (para,index) => {
      setTimeout(() => {
          setResult((res) => res + para + ' ')
      },index * 75)
  }

  const handleClick = async (cos0) => {
    setInput("");
    setLoading(true);
    setPrompt(input);
    setResult('')
    let query = input || cos0;
    let word = await run(query);
    let word2 = word.split("**").map((sen, i) => (i % 2 === 1 ? `<b>${sen}</b>` : sen))
      .join("")
      .split("*")
      .join("<br/>");
    let word3 = word2.split(' ').forEach((para,i) => delayPara(para,i));
    if (input.trim() !== '' && input.trim() !== '...') {
      setPrevPrompt(p => [...p,input])
    }
    setLoading(false);
    setShowData(true);
  };

  const contextValue = {
    input,
    setInput,
    loading,
    setLoading,
    showData,
    prompt,
    setPrompt,
    prevPrompt,
    result,
    setShowData,
    handleClick,
  };

  return (
    <>
      <Context.Provider value={contextValue}>{children}</Context.Provider>
    </>
  );
}

export default Control;
