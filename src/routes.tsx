import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import ErrorPage from "./pages/ErrorPage"
import RegistrationForm from "./pages/RegistrationForm"
import Home from "./pages/Home"
import { CriacaoRifa } from "./pages/CriacaoRifa"



export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<RegistrationForm />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/novarifa' element={<CriacaoRifa />}/>



            <Route path='*' element= {<Navigate to='/login' />}/>
            <Route errorElement={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}
