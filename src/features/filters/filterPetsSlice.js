import { createSlice } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

const performFuzzySearch = (data, searchTerm) => {
  const fuse = new Fuse(data, {
    keys: ['name', 'species'],
    includeScore: true,
  });
  const results = fuse.search(searchTerm);
  const matchingResults = results.map((character) => character.item);
  return matchingResults;
};

const sortByDate = (a, b) => {
  if (a.dateAdded < b.dateAdded) {
    return -1;
  }
  if (a.dateAdded > b.dateAdded) {
    return 1;
  }
  return 0;
};

const sortPetsByDate = (allPets) => {
  const allPetsCopy = [...allPets];
  const sortedPets = allPetsCopy.sort(sortByDate);
  return sortedPets;
};

const showPetsByCategory = (allPets, category) => {
  const petsInCategory = allPets.filter((pet) => {
    return pet.available === category;
  });
  return petsInCategory;
};

const showPetsByType = (allPets, type) => {
  const petsOfType = allPets.filter((pet) => {
    return pet.species === type;
  });
  return petsOfType;
};

const filterPetsSlice = createSlice({
  name: 'filteredPets',
  initialState: {
    pets: [],
  },
  reducers: {
    filterBySearch: (state, action) => {
      state.pets = performFuzzySearch(
        action.payload.petsData,
        action.payload.searchTerm
      );
    },
    filterByCategory: (state, action) => {
      state.pets = showPetsByCategory(
        action.payload.petsData,
        action.payload.categoryPicked
      );
    },
    filterByType: (state, action) => {
      state.pets = showPetsByType(
        action.payload.petsData,
        action.payload.typeSelected
      );
    },
    filterByDate: (state, action) => {
      state.pets = sortPetsByDate(action.payload.petsData);
    },
  },
});
const { actions, reducer } = filterPetsSlice;
export const { filterByCategory, filterByDate, filterByType, filterBySearch } =
  actions;
export default reducer;
