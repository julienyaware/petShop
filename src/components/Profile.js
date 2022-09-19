import React from 'react';
import {
  StyledProfile,
  StyledProfileImageContainer,
} from './styles/Profile.styled';
import { StandardButton, StandardRoundButton } from './styles/StandardButton';
import useGetWindowSize from './hooks/useGetWindowSize';
import arrow from '../icons/arrow-right.svg';
import { PropTypes } from 'prop-types';

const Profile = ({ name, avatar }) => {
  let currentWidth = useGetWindowSize();
  return (
    <StyledProfile>
      <StyledProfileImageContainer>
        <img
          src={avatar || 'No picture'}
          alt='avatar'
        />
      </StyledProfileImageContainer>
      <h4>{name || 'No name'}</h4>
      {currentWidth > 768 ? (
        <StandardButton>View</StandardButton>
      ) : (
        <StandardRoundButton>
          <img alt='arrow' src={arrow} />
        </StandardRoundButton>
      )}
    </StyledProfile>
  );
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default Profile;
