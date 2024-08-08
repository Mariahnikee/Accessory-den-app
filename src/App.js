import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header"
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import  Footer from "./components/footer"
import { ShopContextProvider } from "./context/shop-context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
