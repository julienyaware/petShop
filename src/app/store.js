import { configureStore } from '@reduxjs/toolkit';

import petsReducer from '../features/pets/petsSlice';
import filterByReducer from '../features/filters/filterPetsSlice';

export default configureStore({
  reducer: {
    pets: petsReducer,
    filterBy: filterByReducer,
  },
});
