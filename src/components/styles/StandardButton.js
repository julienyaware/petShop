import styled from 'styled-components';

export const StandardButton = styled.button`
  font-family: 'Open Sans';
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  width: 100px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const WhiteStandardButton = styled(StandardButton)`
  font-family: 'Open Sans';
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightBlue};
  padding: 10px;
  width: 270px;
  border-color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const StandardRoundButton = styled(StandardButton)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  margin-left: 270px;
  margin-top: 85px;
`;
