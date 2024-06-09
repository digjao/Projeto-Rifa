import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"
import RegistrationForm from "./components/RegistrationForm"
import LandingPage from "./components/LandingPage"



export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<RegistrationForm />}/>
            <Route path='/home' element={<LandingPage />}/>



            <Route path='*' element= {<Navigate to='/login' />}/>
            <Route errorElement={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}
