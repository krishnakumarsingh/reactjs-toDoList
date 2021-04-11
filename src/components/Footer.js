import React, { useRef, useState } from "react";

const Footer = ({
  handelAddEvent,
  handelCompleteValue,
  textHeadLine = "Add more to list from Here Test",
  textButton = "Add Test",
  textRemove = "Remove Selected List Test",
}) => {
  const inputText = useRef();
  const [inputValue, setInputValue] = useState("");
  const handelAdd = (event, inputTextValue) => {
    if (inputTextValue.length > 0) handelAddEvent(event, inputTextValue);
    setInputValue("");
  };
  return (
    <>
      <h3>{textHeadLine}</h3>
      <input
        type="text"
        ref={inputText}
        value={inputValue}
        onChange={() => setInputValue(inputText.current.value)}
      />
      <button
        onClick={(event) => handelAdd(event, inputText.current.value)}
        disabled={inputValue.length > 0 ? false : true}
      >
        {textButton}
      </button>
      <button onClick={handelCompleteValue}>{textRemove}</button>
    </>
  );
};

export default Footer;
