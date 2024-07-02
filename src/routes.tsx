import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"
import RegistrationForm from "./components/RegistrationForm"
import Home from "./components/Home"
import { CriarRifa } from "./components/CriarRifa"
import { RifaNumeros } from "./components/RifaNumeros"



export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/registro' element={<RegistrationForm />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/novarifa' element={<CriarRifa />}/>
            <Route path='/numeros-rifa' element={<RifaNumeros />}/>



            <Route path='*' element= {<Navigate to='/login' />}/>
            <Route errorElement={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
  )
}
