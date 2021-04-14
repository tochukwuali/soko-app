export const productReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_CATEGORY":
      const id = payload;
      return {
        ...state,
        selectedI: state.products.find((category) => category.id === id),
      };
    default:
      return state;
  }
};
