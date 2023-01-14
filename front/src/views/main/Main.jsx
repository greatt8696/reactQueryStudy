import React from 'react'
import { getBoardById, getBoards, getError } from '../../hook/useQuery'

const Main = () => {
  // const boardQuery = {};
  const boardQuery = getBoards({
    onSuccess: (data) => {
      console.log('boardQuery 성공 : ', data)
    },
    onError: (e) => {
      console.log('boardQuery 실패 : ', e)
    },
  })

  const boardQueryById = getBoardById({
    // 파라미터로 id 쿼리 보낼수 있음
    params: { id: 18 },
    onSuccess: (data) => {
      console.log('boardQueryById 성공  : ', data)
    },
    onError: (e) => {
      console.log('boardQueryById 실패 : error : ', e)
    },
  })

  const errorQuery = getError({
    // 에러가 나는 404 api주소로 접속 로그로 보면 재호출이 몇번 일어나는지 확인가능
    onSuccess: (data) => {
      console.log('성공 : data : ', data)
    },
    onError: (e) => {
      console.error('실패 : error : ', e)
    },
  })

  return (
    <div>
      <div className="w-full h-20 fixed z-50"></div>
      <div className="App example flex min-w-[800px] overflow-y-scroll">
        <div className="w-3/4 h-1/2 min-w-[500px] m-auto my-24 gap-5 flex flex-col">
          {/* boardQueryById 시작 */}
          {boardQueryById.isLoading ? (
            // 로딩중 보이는 태그
            <div className="backgroundGradient text-white animate-gradientLoading w-full h-16"></div>
          ) : (
            // 로딩이끝난 후 보이는 태그
            <div className=" text-3xl text-white h-16">
              {JSON.stringify(boardQueryById?.data)}
            </div>
          )}
          {/* boardQueryById 끝 */}

          {/* boardQuery 시작 */}
          {boardQuery.isLoading ? (
            // 로딩중 보이는 태그
            <div className="backgroundGradient text-white animate-gradientLoading w-full h-16"></div>
          ) : (
            // 로딩이끝난 후 보이는 태그
            boardQuery?.data.map((board) => (
              <div className=" text-3xl text-white h-16 align-middle">
                {JSON.stringify(board)}
              </div>
            ))
          )}

          {/* boardQuery 끝 */}

          {/* errorQuery 시작 */}
          {errorQuery?.isLoading ? (
            <div className="backgroundGradient text-white animate-gradientLoading w-full h-16"></div>
          ) : (
            // 에러가 발생하면 보이는 태그
            errorQuery?.isError && (
              <div className=" text-3xl text-red-500 h-16"> 404 에러 </div>
            )
          )}
          {/* errorQuery 끝 */}
        </div>
      </div>
    </div>
  )
}

export default Main
