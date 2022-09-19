import React from 'react';
import { StyledFilterBy, StyledSelectBox } from './styles/FilterBy.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterByCategory,
  filterByDate,
  filterByType,
} from '../features/filters/filterPetsSlice';

const FilterBy = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.pets);

  const getPetsByCategory = (e) => {
    if (data.pets !== 'undefined' && data) {
      dispatch(
        filterByCategory({
          petsData: data.pets,
          categoryPicked: e.target.value,
        })
      );
    }
  };

  const getPetsByType = (e) => {
    if (data.pets !== 'undefined' && data) {
      dispatch(
        filterByType({
          petsData: data.pets,
          typeSelected: e.target.value,
        })
      );
    }
  };

  const getPetsByDate = () => {
    if (data.pets !== 'undefined' && data) {
      dispatch(
        filterByDate({
          petsData: data.pets,
        })
      );
    }
  };

  return (
    <StyledFilterBy>
      <StyledSelectBox onChange={getPetsByType}>
        <option
          value=''
          disabled
          selected>
          Type
        </option>
        <option value='Cat'>Cat</option>
        <option value='Dog'>Dog</option>
        <option value='Rat'>Rat</option>
      </StyledSelectBox>

      <StyledSelectBox onChange={getPetsByCategory}>
        <option
          value=''
          selected
          disabled>
          Category
        </option>
        <option value='Yes'>Available</option>
        <option value='No'>Unavailable</option>
      </StyledSelectBox>

      <button onClick={getPetsByDate}>Latest Added</button>
    </StyledFilterBy>
  );
};

export default FilterBy;
