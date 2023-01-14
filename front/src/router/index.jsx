import React from 'react'
import { useRoutes } from 'react-router-dom'
import Main from '../views/main/Main'
import BoardDetail from '../views/boardDetail/Main'
import Layout from '../Layout'

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: 'board/:id', element: <BoardDetail /> },
      ],
    },
  ]
  return useRoutes(routes)
}

export default Router
