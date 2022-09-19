import styled from 'styled-components';

export const StyledProfile = styled.div`
width : 250px;
border-radius:10px;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    .flex-item:nth-of-type(1) { flex-grow: 3; }

    h4 {
      font-size: 16px;
      position: absolute;
      margin-left: 202px;
      margin-top: 94px;
    }
  }

  
`;

export const StyledProfileImageContainer = styled.section`
  img {
    width: 100%;
    border-radius: 10px;
    height: 250px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
