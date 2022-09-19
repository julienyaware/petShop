import React from 'react';
import {
  StyledDirectory,
  StyledDirectoryButton,
  StyledDirectoryImage,
  StyledImageContainer,
  StyledDirectoryMobileView,
  StyledDirectoryButtonMobileView,
  StyledDirectoryImageMobileView,
} from './styles/Directory.styled';
import treats from './../images/treats.jpeg';
import arrow from './../icons/arrow-right.svg';
import { WhiteStandardButton } from './styles/StandardButton';
import useGetWindowSize from './hooks/useGetWindowSize';

const Directory = () => {
  let liveWidth = useGetWindowSize();
  let content;

  if (liveWidth > 768) {
    content = (
      <StyledDirectory>
        <StyledImageContainer>
          <StyledDirectoryImage
            src={treats}
            alt='Picture of treats'
          />
        </StyledImageContainer>
        <StyledDirectoryButton>
          <section>
            <h2>Pets directory</h2>
            <p>
              See all pets available for adoption.Promote them and get them a
              home
            </p>
            <WhiteStandardButton>See All</WhiteStandardButton>
          </section>
        </StyledDirectoryButton>
      </StyledDirectory>
    );
  } else {
    content = (
      <StyledDirectoryMobileView>
         <StyledDirectoryButtonMobileView>
          <section>
            <h2>Pets directory</h2>
            <image src={arrow} />
          </section>
        </StyledDirectoryButtonMobileView>
        <StyledDirectoryImageMobileView
          src={treats}
          alt='Picture of treats'
        />
      </StyledDirectoryMobileView>
    );
  }
  return content;
};

export default Directory;
