import React, { useState, useCallback, useRef, useEffect, FC, ReactNode } from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";

interface P {
  title: string;
  name: string;
  children?: ReactNode | undefined;
}

const WordRelay: FC = () => {
  const [word, setWord] = useState("제로초");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = inputEl.current;
      if (word[word.length - 1] === value[0]) {
        setResult("딩동댕");
        setWord(value);
        setValue("");
        if (input) {
          input.focus();
        }
      } else {
        setResult("땡");
        setValue("");
        if (input) {
          input.focus();
        }
      }
    },
    [word, value]
  );

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChange} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default WordRelay;

// 번외: 브랜딩 기법
type Brand<K, T> = K & { _brand: T };

type EUR = Brand<number, "EUR">;
type USD = Brand<number, "USD">;
type KRW = Brand<number, "KRW">;

const usd = 10 as USD;
const eur = 10 as EUR;
const krw = 2000 as KRW;
// 유료만 들어가도록 하기위한 타입
function euroToUsd(euro: EUR): number {
  return euro * 1.18;
}

console.log(`USD: ${euroToUsd(eur)}`);
