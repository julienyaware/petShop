import React from 'react';
import Title from './Title';
import { StyledWrapper } from './styles/Wrapper.styled';
import SearchBar from './SearchBar';
import ResultsContainer from './ResultsContainer';
import Directory from './Directory';
import Categories from './Categories';
import FilterBy from './FilterBy';
import { categoriesDictionary } from '../dictionaries/categories';

const Home = () => {
  return (
    <StyledWrapper>
      <Title title='Pets' />
      <SearchBar />
      <FilterBy />
      <Title title='Results' />
      <ResultsContainer />
      <Directory />
      <Title title='Categories' />
      <Categories categories={categoriesDictionary} />
    </StyledWrapper>
  );
};

export default Home;
