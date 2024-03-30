import { createSlice } from "@reduxjs/toolkit";

const initialCartState: { items: any[] } = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload.id);
      if (idx > -1) {
        state.items = state.items.map((item, index) => {
          if (idx === index) {
            return {
              ...item,
              count: item.count ? item.count + 1 : 1,
            };
          } else return item;
        });
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const idx = state.items.findIndex((item) => item.id === action.payload.id);
      if (idx > -1) {
        if (state.items[idx].count && state.items[idx].count > 1) {
          state.items = state.items.map((item, index) => {
            if (idx === index) {
              return {
                ...item,
                count: item.count - 1,
              };
            } else return item;
          });
        } else {
          state.items.splice(idx, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
