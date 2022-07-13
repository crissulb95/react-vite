import { initialState } from './state';
import { reducers } from './reducers';

const name = 'app';

export const slice = {
  name,
  initialState,
  reducers
};
