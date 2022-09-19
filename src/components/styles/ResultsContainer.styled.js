import styled from 'styled-components';

export const StyledResultsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
