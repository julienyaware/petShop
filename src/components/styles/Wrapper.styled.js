import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 50px;
    width: 100%;
  }
`;
