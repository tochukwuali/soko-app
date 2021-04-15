import { useReducer, createContext } from "react";
import { productReducer } from "./reducers/productReducer";
import PRODUCTS, { Users, Cart } from "./data";

const initialState = {
  products: PRODUCTS,
  users: Users,
  selectedI: {},
  cartItems: Cart,
};

export const ProductContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const selectCategory = (id) => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: id,
    });
  };

  // const addToCart = (item) => {
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: item,
  //   });
  // };

  // let Category = [...products];
  // let selectedCat = Category.find((category) => category.id === id);
  // return selectedCat;

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        users: state.users,
        cartItems: state.cartItems,
        selectedI: state.selectedI,
        selectCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
