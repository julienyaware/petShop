import React from 'react';
import { StyledHeader } from './styles/Header.styled';
import logo from './../icons/pet-icon.svg';

const Header = () => {
  return (
    <StyledHeader>
      <img
        src={logo}
        alt='logo'
      />
    </StyledHeader>
  );
};

export default Header;
