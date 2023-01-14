import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { getBoardById, getBoards, getError } from '../../hook/useQuery'

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
    enabled: !queryClient.getQueryData('board'),
  })

  console.log(queryClient.getQueryData('board'))
  return (
    <div>
      <button onClick={() => nav(-1)}>뒤로가기</button>
      <div className="w-full h-20 fixed z-50"></div>
      <div className="App example flex min-w-[800px] overflow-y-scroll text-white">
        {boardQueryById.isSuccess && (
          <div>{JSON.stringify(boardQueryById.data)}</div>
        )}
        {queryClient?.getQueryData('board') && (
          <div>
            {JSON.stringify(queryClient.getQueryData('board')[id])}
          </div>
        )}
      </div>
    </div>
  )
}

export default BoardDetail
