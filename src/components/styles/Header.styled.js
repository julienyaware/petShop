import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 0.5em;

  img {
    margin-left: 5%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
