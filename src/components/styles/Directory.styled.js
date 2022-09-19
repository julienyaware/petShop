import styled from 'styled-components';

export const StyledDirectory = styled.div`
  height: 50%;
  border-radius: 10px;
  display: flex;
`;
export const StyledDirectoryMobileView = styled.div`
  height: 25%;
  border-radius: 10px;
`;
export const StyledImageContainer = styled.div`
  width: 80%;
`;
export const StyledImageContainerMobileView = styled.div`
  position: relative;
  width: 80%;
`;
export const StyledDirectoryImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const StyledDirectoryImageMobileView = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-left: -50px;
`;
export const StyledDirectoryButton = styled.div`
  width: 50%;
  color: white;
  background: ${({ theme }) => theme.colors.lightBlue};
  position: relative;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

  section {
    position: absolute;
    margin-left: 7%;
    margin-top: 25%;
    width: 300px;
  }
  @media (max-width: ${({ theme }) => theme.ipad}) {
    section {
      position: absolute;
      margin-left: 4%;
      margin-top: 14%;
      width: 64%;
    }
  }
`;
export const StyledDirectoryButtonMobileView = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  position: absolute;
  width: 100%;
  margin-left: -56px;
  height: 68px;

  section {
    color: ${({ theme }) => theme.colors.white};
    padding-left: 15px;
  }
`;
