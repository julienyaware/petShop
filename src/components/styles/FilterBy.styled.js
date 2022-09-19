import styled from 'styled-components';

export const StyledFilterBy = styled.div`
  button {
    margin: 0 5px;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 12px;
    width: 500px;
  }
`;
export const StyledSelectBox = styled.select`
  margin: 0 5px;
  padding: 5px;
  border-color: ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
`;
