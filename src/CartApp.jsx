import "./cartApp.css";
import { useItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
      <NavBar />
      <div className="container my-4">
        <h1 className="textH1">Aplicacion de Compras</h1>
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProduct={handlerDeleteProduct}
        />
      </div>
      <Footer />
    </>
  );
};
// El signo de pregunta (?) es equivalente a null, y cuando hago el OR lo encierro entre
// parentesis porque es un objeto lo que devuelvo
