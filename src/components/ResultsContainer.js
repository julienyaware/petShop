import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from './../features/pets/petsSlice';
import { StyledResultsContainer } from './styles/ResultsContainer.styled';
import Profile from './Profile';


const ResultsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPets());
  }, []);

  const { data, loading, error } = useSelector((state) => state.pets);
  const { pets: filteredPets } = useSelector((state) => state.filterBy);

  let contentToBeDisplayed;

  if (filteredPets.length > 0) {
    contentToBeDisplayed = (
      <StyledResultsContainer>
        {filteredPets.map((pet) => (
          <Profile
            key={pet.id}
            avatar={pet.photo}
            name={pet.name}
          />
        ))}
      </StyledResultsContainer>
    );
  } else {
    contentToBeDisplayed = (
      <StyledResultsContainer>
        {loading && <div>Loading...</div>}
        {!loading && error ? <div>Error: {error}</div> : null}
        {!loading && data !== 'undefined' && data.pets
          ? data.pets.map((pet) => (
              <Profile
                key={pet.id}
                avatar={pet.photo}
                name={pet.name}
              />
            ))
          : null}
      </StyledResultsContainer>
    );
  }

  return contentToBeDisplayed;
};

export default ResultsContainer;
