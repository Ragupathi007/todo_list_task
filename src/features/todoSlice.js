import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state = state.filter((_, index) => index !== action.payload);
      return state;
    },
    editTodo: (state, action) => {
      const { index, newTodo } = action.payload;
      state[index] = newTodo;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
