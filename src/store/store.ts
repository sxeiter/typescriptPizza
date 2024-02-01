import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_PERSISTANT_STATE } from './user.slice';
import { saveState } from './storage';
import cartSlice from './cart.slice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		cart: cartSlice
	}
});

store.subscribe(() => {
	saveState(  {jwt:store.getState().user.jwt}, JWT_PERSISTANT_STATE);
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispath = typeof store.dispatch;