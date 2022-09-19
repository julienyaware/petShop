import styled from 'styled-components';
import searchIcon from './../../icons/search.svg';

export const AutocompleteContainer = styled.div`
  width: 45%;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.grey};
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-bottom: 10px;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.lightBlue};
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 75%;
  }
`;

export const StyledSearchBar = styled.input`
  background: url(${searchIcon}) no-repeat 5%
    ${({ theme }) => theme.colors.white};
  background-size: 12px;
  border: none;
  border-radius: 31px;
  box-sizing: border-box;
  padding-left: 50px;
  width: 100%;
  height: 35px;

  &:focus {
    outline: none;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 5px;
    width: 95%;
  }
`;
export const StyledImage = styled.image`
  fill: red;
`;

export const SuggestionsContainer = styled.div`
  position: relative;
`;

export const SuggestionsDropdown = styled.div`
  width: 80%;
  margin-top: 0;
  margin-left: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

export const List = styled.ol`
  list-style: none;
  text-align: start;
  padding: 0;
  margin: 0;
`;

export const SuggestionItem = styled.li`
  padding: 12px;
`;
