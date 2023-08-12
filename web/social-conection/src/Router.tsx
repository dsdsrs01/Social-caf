import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import { DefaultLayout } from './layouts/DefaultLayout'

import './global.css'


export function Router() {
    return(
        <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}