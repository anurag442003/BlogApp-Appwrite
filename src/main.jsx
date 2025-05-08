import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Protected from './components/AuthLayout.jsx'
import SignUp from './pages/SignUp.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPosts from './pages/AddPosts.jsx'
import EditPosts from './pages/EditPosts.jsx'
import Post from './pages/Post.jsx'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,//element is rendered when the path is matched.
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/login',
        element: (
          //this specifies if authencation is required or not, which is false here.
          <Protected authentication={false}>  
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          //this specifies if authencation is required or not, which is false here.
          <Protected authentication={false}>  
            <SignUp />
          </Protected>
        )
      },
      {
        path: '/all-posts',
        element: (
          //this specifies if authencation is required or not, which is true here as only authenticated users can view all posts.
          <Protected authentication={true}>  
            <AllPosts />
          </Protected>
        )
      },
      {
        path: '/add-post',
        element: (
          <Protected authentication={true}>  
            <AddPosts />
          </Protected>
        )
      },
      {
        path: '/edit-posts/:slug',
        element: (
          <Protected authentication={true}>  
            <EditPosts />
          </Protected>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <Protected authentication={true}>  
            <Post />
          </Protected>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
