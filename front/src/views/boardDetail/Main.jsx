import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  BOARD_KEY,
  getBoardById,
  getBoards,
  getError,
  updateBoardById,
} from '../../api/index'

const BoardDetail = () => {
  const nav = useNavigate()
  const location = useLocation()

  const clickHandler = (id) => nav(`/board/${id}`)
  const [id, setId] = useState(location.pathname.split(`/`)[2])

  const queryClient = useQueryClient()

  const boardQueryById = getBoardById({
    // id로 게시글 가져오기
    // 파라미터로 id 쿼리 보낼수 있음
    params: { id },
    onSuccess: (data) => {
      console.log('boardQueryById 성공  : ', data)
    },
    onError: (e) => {
      console.log('boardQueryById 실패 : error : ', e)
    },
  })

  useEffect(() => {
    console.log(
      'react-query의 store에 저장(캐싱)된 데이터',
      queryClient.getQueryData([BOARD_KEY, id]),
    )
    console.log(queryClient);
  }, [queryClient])

  const updateBoard = updateBoardById()

  const updateHandler = () =>
    updateBoard.mutate(
      {
        id: id,
        title: `#${id} 제목`,
        content: `#${id} 내용수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정수정`,
        writer: `#${id} 죠르디`,
        view: 0,
      },
      {
        onSuccess: () => {
          console.log(
            'onSuccess 성공: queryClient.invalidateQueries(BOARD_KEY) ',
          )
          queryClient.invalidateQueries([BOARD_KEY])
          queryClient.invalidateQueries([BOARD_KEY, id])
        },
      },
    )

  return (
    <div>
      <button onClick={() => nav(-1)} style={{backgroundColor: "red", margin:"15px",padding:"5px"}}>뒤로가기</button>
      <button onClick={updateHandler} style={{backgroundColor: "green", margin:"15px",padding:"5px"}}> 업데이트하기 </button>
      <div className="w-full h-20 fixed z-50"></div>
      <div className="App example flex min-w-[800px] overflow-y-scroll text-white">
        {boardQueryById.isSuccess && (
          <div>{JSON.stringify(boardQueryById.data)}</div>
        )}
        {!boardQueryById.isSuccess &&
          queryClient?.getQueryData([BOARD_KEY]) && (
            <div>
              {JSON.stringify(queryClient.getQueryData([BOARD_KEY])[id])}
            </div>
          )}
      </div>
    </div>
  )
}

export default BoardDetail
