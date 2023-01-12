import { map } from "lodash";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Toast";

const Main = ({ msg, type }) => {
  const SIZE = 33;
  const DURATION = 1000;
  const stepTime = DURATION / SIZE;

  const nav = useNavigate();

  const handleLink = (idx) => nav(`/${idx}`);

  const arr = Array(SIZE)
    .fill(false)
    .map((_, idx) => stepTime * idx);

  return (
    <div className="grid grid-cols-3">
      {arr.map((delay, idx) => (
        <Toast
          delay={delay}
          key={idx}
          idx={idx}
          handleLink={() => handleLink(idx)}
        />
      ))}
    </div>
  );
};

export default Main;
