import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
  value: CartItem[]
}

interface CartItem {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  count?: number;
}

// Define the initial state using that type
const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      if(state.value.map((item) => item.id).indexOf(action.payload.id)) {
        state.value.push(action.payload);
      }
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.value = state.value.filter(item => item.id !== action.payload);
    }
  }
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export default cartSlice.reducer