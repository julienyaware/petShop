import React, { useState } from 'react';
import {
  StyledSearchBar,
  AutocompleteContainer,
  SuggestionsContainer,
  SuggestionsDropdown,
  List,
  SuggestionItem,
} from './styles/SearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch } from '../features/filters/filterPetsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.pets);
  const { pets: filteredPets } = useSelector((state) => state.filterBy);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeInput = (e) => {
    setSearchTerm(e.target.value);
    if (data.pets !== 'undefined' && data) {
      dispatch(
        filterBySearch({
          petsData: data.pets,
          searchTerm: e.target.value,
        })
      );
    }
  };

  return (
    <AutocompleteContainer>
      <StyledSearchBar
        placeholder='Search for pets'
        value={searchTerm}
        onChange={handleChangeInput}
      />
      <SuggestionsContainer>
        <SuggestionsDropdown
          show={searchTerm.length > 0 && filteredPets.length > 0}>
          <List>
            {filteredPets.map((search) => (
              <SuggestionItem
                key={search.id}
                onClick={() => setSearchTerm(search.name)}>
                {search.name}
              </SuggestionItem>
            ))}
          </List>
        </SuggestionsDropdown>
      </SuggestionsContainer>
    </AutocompleteContainer>
  );
};

export default SearchBar;
