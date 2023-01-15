import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { parse, stringify } from "qs";

// 상수 시작
const BASE_URL = "http://localhost:3000";

const BOARD = "/api/board";
const ERROR = "/api/error";
const SEARCH = "/api/search";

export const BOARD_KEY = "board";
export const ERROR_KEY = "error";
// 상수 끝

// AXIOS 기본 옵션 설정
const axiosInstance = axios.create({
  // 기본 URL https://*.*.*:3000
  baseURL: BASE_URL,

  // 응답시간제한
  timeout: 3000,
});
axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params);
};

// REACT-QUERY 기본 옵션 설정
const defaultOption = {
  refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 재실행 여부 옵션
  retry: 1, // 실패시 재호출 몇번 할지
  cacheTime: 50000, // 저장된 데이터의 유효기간
  staleTime: 5000, //
};

// url 대로 axios 선언해놓기
const fetchBoards = async () =>
  await axiosInstance.get(BOARD).then(({ data }) => data); // url axios (http://localhost:3000/api/board)
const fetchError = async () =>
  await axiosInstance.get(ERROR).then(({ data }) => data);
const fetchBoardById = async (id) =>
  await axiosInstance.get(BOARD + `/${id}`).then(({ data }) => data);
const patchBoardWithData = async (data) =>
  await axiosInstance
    .patch(BOARD + `/${data.id}`, { data })
    .then(({ data }) => data);
// 선언한 axios 들을 react-query로 감싸기
// 감싸진 함수들은 각 컴포넌트에 모듈형식으로 쓰이게 됩니다.

const fetchBoardWithFilter = async (params) =>
  await axiosInstance.get(SEARCH, { params }).then(({ data }) => data);

/** main.jsx (View) 에서 호출했을때 형태 
 * 
 * 
  const errorQuery = getError({

    // 성공했을때 
    onSuccess: (data) => {
      dispatch(onModal()) // 성공했을때 modal을 띄움
      console.log("성공 : data : ", data);
    },

    // 에러났을때
    onError: (e) => {
      dispatch(onErrorModal()) // 성공했을때 에러 modal을 띄움
      console.log("실패 : error : ", e);
    },

    // 이전에 
    enabled: boardQuery.isSuccess, // 쿼리를 시작하는 조건문
  });

 */

export const getBoards = (props) => {
  console.log("getBoards");
  return useQuery([BOARD_KEY], fetchBoards, {
    ...props,
    ...defaultOption,
  });
};

export const getBoardById = (props) => {
  return useQuery(
    [BOARD_KEY, props.params.id],
    () => fetchBoardById(props.params.id),
    {
      ...props,
      ...defaultOption,
    }
  );
};

export const getBoardWithFilter = (props) => {
  return useQuery(
    [BOARD_KEY, "filter"],
    () => fetchBoardWithFilter(props.params),
    {
      ...props,
      ...defaultOption,
    }
  );
};

export const updateBoardById = (props) => {
  return useMutation(patchBoardWithData, {
    ...props,
    ...defaultOption,
  });
};

export const getError = (props) => {
  return useQuery([ERROR_KEY], fetchError, {
    ...props,
    ...defaultOption,
  });
};

export const deleteBoardById = () =>
  useQuery({ queryKey: [BOARD_KEY], queryFn: axiosInstance.get(BOARD) });
