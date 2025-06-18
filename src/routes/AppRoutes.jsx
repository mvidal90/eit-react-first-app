import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "../layouts/Layout"

import Home from "../pages/Home"
import Products from "../pages/Products"

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/products/:category" element={<Products />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
