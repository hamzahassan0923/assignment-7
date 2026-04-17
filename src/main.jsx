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
import FriendProvider from './context/FriendProvider'
import { ToastContainer } from 'react-toastify'
import ErrorPage from './pages/ErrorPage/ErrorPage'


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
   
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FriendProvider>
     <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
   </FriendProvider>
  </StrictMode>,
)
