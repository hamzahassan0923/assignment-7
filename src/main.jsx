import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import RootLayOut from './layout/RootLayOut'
import Home from './pages/home/Home'
import TimeLines from './pages/timeline/TimeLines'
import Stats from './pages/stats/Stats'
import FriendDetail from './friend/FriendDetail'


const router = createBrowserRouter([

  {
    path:'/',
    Component:RootLayOut,
    children:[
      {
        index:true ,Component:Home
      },
      {
        path:"/timelines", Component:TimeLines
      },
      {
        path:"/stats" , Component:Stats
      },
      {
         path:"/friend/:id"
         ,Component:FriendDetail
      }
   
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
