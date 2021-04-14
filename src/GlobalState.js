import { useReducer, createContext } from "react";
import { productReducer } from "./reducers/productReducer";
import PRODUCTS, { Users } from "./data";

const initialState = {
  products: PRODUCTS,
  users: Users,
  selectedI: {},
  cartItems: [],
};

export const ProductContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  function selectCategory(id) {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: id,
    });
  }
  console.log(state.selectedI);
  // let Category = [...products];
  // let selectedCat = Category.find((category) => category.id === id);
  // return selectedCat;

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        users: state.users,
        selectedI: state.selectedI,
        selectCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
