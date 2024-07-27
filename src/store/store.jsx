import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import todoReducer from '../features/todoSlice';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.todos);
    sessionStorage.setItem('todosState', serializedState);
  } catch (e) {
    console.error('Could not save state', e);
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('todosState');
    return serializedState ? { todos: JSON.parse(serializedState) } : undefined;
  } catch (e) {
    console.error('Could not load state', e);
    return undefined;
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todoReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});