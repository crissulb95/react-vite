import { createSlice } from '../../../adapters/redux-toolkit';
import { slice } from './slice';

export const appSlice = createSlice(slice);

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
