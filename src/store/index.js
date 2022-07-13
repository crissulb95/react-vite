import { configureStore } from '../adapters/redux-toolkit';
import app from '../modules/app/store';

export const store = configureStore({
  reducer: {
    app
  }
});
