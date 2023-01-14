import React from 'react'
import { useRoutes } from 'react-router-dom'
import Main from '../views/main/Main'

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Main />,
      children:[
        
      ]
    },
  ]
  return useRoutes(routes)
}

export default Router
