import React from 'react';
import { StyledCategories } from './styles/Categories.styled';
import Category from './Category';
import { PropTypes } from 'prop-types';

const Categories = (props) => {
  const { categories } = props;
  return (
    <StyledCategories>
      {categories.map((category, index) => (
        <Category
          key={index}
          picture={category.picture}
          description={category.description}
        />
      ))}
    </StyledCategories>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};

export default Categories;
