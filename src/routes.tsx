import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"



export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>


            <Route path='*' element= {<Navigate to='/login' />}/>
            <Route errorElement={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}
