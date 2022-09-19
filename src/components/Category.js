import React from 'react';
import { StyledCategory } from './styles/Categories.styled';
import { PropTypes } from 'prop-types';

const Category = ({ picture, description }) => {
  return (
    <>
      <StyledCategory>
        <img
          src={picture}
          alt='description'
        />
        <h4>{description}</h4>
      </StyledCategory>
    </>
  );
};

Category.propTypes = {
  picture: PropTypes.string,
  description: PropTypes.string,
};

export default Category;
