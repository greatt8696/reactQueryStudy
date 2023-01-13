import axios from "axios";
import { useQuery } from "react-query";

// 상수 시작

const BASE_URL = "http://localhost:3000";

const BOARD = "/api/board";
const ERROR = "/api/error";

const BOARD_KEY = "board";
const ERROR_KEY = "board";

// 상수 끝

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetchBoards = () => axiosInstance.get(BOARD).then(({ data }) => data);
const fetchError = () => axiosInstance.get(ERROR).then(({ data }) => data);

const defaultOption = {
  refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
  retry: 1, // 실패시 재호출 몇번 할지
};

export const getBoards = (props) => {
  return useQuery([BOARD_KEY], fetchBoards, {
    onError: (e) => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출)
      console.error(e.message);
    },
    ...props,
    ...defaultOption,
  });
};

export const getError = (props) => {
  return useQuery([ERROR_KEY], fetchError, {
    onError: (e) => {
      // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출)
      console.error(e.message);
    },
    ...props,
    ...defaultOption,
  });
};

export const getBoardById = () =>
  useQuery({ queryKey: [BOARD_KEY], queryFn: axiosInstance.post(BOARD) });
export const putBoardById = () =>
  useQuery({ queryKey: [BOARD_KEY], queryFn: axiosInstance.put(BOARD) });
export const deleteBoardById = () =>
  useQuery({ queryKey: [BOARD_KEY], queryFn: axiosInstance.get(BOARD) });
