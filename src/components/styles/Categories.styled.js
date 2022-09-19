import styled from 'styled-components';

export const StyledCategories = styled.section`
  display: flex;
`;

export const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3px 50px;

  img {
    background: linear-gradient(
      transparent 50%,
      ${({ theme }) => theme.colors.grey} 50%
    );
    height: 60%;
    margin-bottom: 1em;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
  }
`;
