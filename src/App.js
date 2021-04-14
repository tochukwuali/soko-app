import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";
import Bag from "./pages/Bag";

import { ProductsProvider } from "./GlobalState";
import Purchase from "./pages/Purchase";
import Account from "./pages/Account";

function App() {
  // const initialCart = {
  //   items: [],
  //   subTotal: 0,
  //   totalPrice: 0,
  //   discount: 0,
  //   selectedCoupon: "0",
  // };
  // const [products, setProducts] = useState(PRODUCTS);
  // const [cart, setCart] = useState(initialCart);

  // const addToCart = (index) => {
  //   const productsInCart = products;
  //   productsInCart.items[index].cartQuantity = 1;
  //   let cartItems = { ...cart };
  //   cartItems.items.push({
  //     id: productsInCart.items[index].item_id,
  //     price: productsInCart.items[index].price,
  //     name: productsInCart.items[index].name,
  //     quantity: 1,
  //   });
  //   setProducts(productsInCart);
  //   setCart(cartItems);
  // };

  // const removeFromCart = () => {};

  // const calculateSub = () => {};

  return (
    <ProductsProvider>
      <div className="app">
        <Header />
        <Nav />
        <Switch>
          <main className="app__container">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/bag" component={Bag} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/account" component={Account} />
          </main>
        </Switch>
      </div>
    </ProductsProvider>
  );
}

export default App;
