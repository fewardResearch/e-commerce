import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'app/store'

// Define a type for the slice state
interface MenuState {
  value: boolean
}

// Define the initial state using that type
const initialState: MenuState = {
  value: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu(state): void {
      state.value = !state.value;
    }
  }
})

export const { toggleMenu } = menuSlice.actions
export default menuSlice.reducer