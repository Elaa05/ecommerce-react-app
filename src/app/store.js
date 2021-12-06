import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/users/usersSlice';
import clientsReducer from '../features/clients/clientsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    clients: clientsReducer,
  },
});