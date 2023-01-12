import React from 'react'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, BOARD } from '../../constants/urlConstant'
import { useEffect } from 'react'
const Main = () => {
  const getboard = async () => await axios.get(BASE_URL + BOARD)

  useEffect(() => {
    getboard()
  }, [])
  return (
    <div>
      <div className="w-full h-20 fixed z-50"></div>
      <div className="App example flex min-w-[800px] overflow-y-scroll">
        <div className="w-3/4 min-w-[500px] m-auto my-24">
          {/* BEGIN: Content */}
          <Outlet />
          {/* END: Content */}
        </div>
      </div>
    </div>
  )
}

export default Main
