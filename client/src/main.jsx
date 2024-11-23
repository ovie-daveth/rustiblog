import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './routes/HomePage.tsx';
import PostListPage from './routes/PostListPage.tsx';
import PosDetails from './routes/PosDetails.tsx';
import Login from './routes/Login.tsx';
import Register from './routes/Register.tsx';
import CreatePost from './routes/CreatePost.tsx';
import MainLyout from './layout/MainLyout.tsx';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter([
  {
    element: <MainLyout  />,
    children:[
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/post/:slug",
        element: <PosDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/write",
        element: <CreatePost />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
     <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <RouterProvider router={router} />
     </ClerkProvider>
  </StrictMode>,
)
