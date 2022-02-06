import React from "react";
import { useRecoilState } from "recoil";
import textState from "../recoil/textState";

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  console.log({ text, setText });

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default TextInput;
