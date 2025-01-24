import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TelaInicial from '../../Pages/TelaInicial'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}