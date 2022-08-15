import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Contexts/CartContext";
import Main from "./Components/Main/Main";
import { FavProvider } from "./Contexts/FavContext";

function App() {
  return (
    <FavProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </FavProvider>
  );
}

export default App;
