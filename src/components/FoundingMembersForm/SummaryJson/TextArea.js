import React, { useState, useEffect, useRef } from 'react';

const TextArea = ({ setValue, className }) => {
  const textAreaRef = useRef(null);

  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if(textAreaRef?.current) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [inputText]);

  return (
    <textarea
      ref={textAreaRef}
      className="FoundingMembersFormPage__form__text-area margin-bottom-M"
      value={inputText}
      onChange={e => {
        setInputText(e.target.value);
        setValue(e.target.value);
      }}
    />
  );
};

export default TextArea;
