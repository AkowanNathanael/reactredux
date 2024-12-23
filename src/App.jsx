
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { createBrowserRouter,Route, RouterProvider, createRoutesFromElements } from "react-router-dom"
import HomePage from "./views/HomePage"
import Mainlayouts from "./layouts/Mainlayouts"
import AddUserPage from "./views/AddUserPage";
import EditUsers from "./views/EditUsers";


export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayouts />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/adduser" element={<AddUserPage />} />
        <Route path="/edituser/:id" element={<EditUsers />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
      
   </RouterProvider>
  )
  
}

