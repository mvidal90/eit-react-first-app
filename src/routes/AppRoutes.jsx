import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "../layouts/Layout"

import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductDetail from "../pages/ProductDetail"

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/products/:category" element={<Products />}/>
                    <Route path="/product/detail/:id" element={<ProductDetail />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
