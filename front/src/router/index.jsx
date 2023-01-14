import React from 'react'
import { useRoutes } from 'react-router-dom'
import Main from '../views/main/Main'
import BoardDetail from '../views/boardDetail/Main'

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Main />,
      children:[
        {path:"board/:id", element:<BoardDetail></BoardDetail>}
      ]
    },
  ]
  return useRoutes(routes)
}

export default Router
