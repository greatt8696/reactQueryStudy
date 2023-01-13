import React from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BOARD } from "../../constants/urlConstant";
import { useEffect } from "react";
import { getBoards, getError } from "../../hook/useQuery";
const Main = () => {
  const boardQuery = getBoards({
    onSuccess: (data) => {
      console.log("성공 : data : ", data);
    },
    onError: (e) => {
      console.log("실패 : error : ", e);
    },
  });

  const errorQuery = getError({
    onSuccess: (data) => {
      console.log("성공 : data : ", data);
    },
    onError: (e) => {
      console.log("실패 : error : ", e);
    },
  });

  return (
    <div>
      <div className="w-full h-20 fixed z-50"></div>
      <div className="App example flex min-w-[800px] overflow-y-scroll">
        <div className="w-3/4 h-16 min-w-[500px] m-auto my-24">
          {boardQuery.isLoading && (
            <div className="backgroundGradient text-3xl  text-white animate-gradientLoading w-full h-full"></div>
          )}
          {<div className=" text-3xl text-white">{boardQuery.data}</div>}
          {errorQuery.isError && (
            <div className=" text-3xl text-red-500"> 404 에러 </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
