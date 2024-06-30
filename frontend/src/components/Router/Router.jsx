import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '@components/Pages/Home'
import About from '@components/Pages/About'
import Services from '@components/Pages/Services'
import Contact from '@components/Pages/Contact'
import Login from '@components/Login/Login'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/home' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/services' element = {<Services/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/*' element = {<Navigate to='/home'/>} />
        </Routes>
    )
}