import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Navigation from "./components/Nav";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import ItemDetails from "./pages/ItemDetails";
import Bag from "./pages/Bag";

import { ProductsProvider } from "./GlobalState";
import Purchase from "./pages/Purchase";
import Account from "./pages/Account";
import SuccessPurchase from "./pages/SuccessPurchase";
import NavBottom from "./components/NavBottom";
import Orders from "./pages/Orders";

function App() {
  return (
    <ProductsProvider>
      <div className="app">
        <Header />
        <Navigation />
        <NavBottom />
        <Switch>
          <main className="app__container">
            <Route path="/" exact component={HomeScreen} />
            <Route path="/item/:id" component={ItemDetails} />
            <Route path="/bag" component={Bag} />
            <Route exact path="/purchase" component={Purchase} />
            <Route path="/account" component={Account} />
            <Route exact path="/purchase/success" component={SuccessPurchase} />
            <Route exact path="/orders" component={Orders} />
          </main>
        </Switch>
      </div>
    </ProductsProvider>
  );
}

export default App;
