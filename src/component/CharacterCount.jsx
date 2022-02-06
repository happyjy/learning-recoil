import React from "react";
import { selector, useRecoilState, useRecoilValue } from "recoil";
import textState from "../recoil/textState";

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);
    console.log({ get, textState, text });

    return text.length;
  },
});

function CharacterCount() {
  /* 
    # useRecoilValue
      * charCountState의 selector의 get 프로퍼티에 설정된 메서드의 return을 반환
  */
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
