import React from 'react';
import { StyledTitle } from './styles/Title.styled';
import { PropTypes } from 'prop-types';

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
