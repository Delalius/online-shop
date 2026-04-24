import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import CheckoutPage from "@/pages/Checkout";
import ProductPage from "@/pages/Product";
import { Header } from "@/widgets/Header/Header";

export const AppRouter = () => (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
)
