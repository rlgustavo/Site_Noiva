import React from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  margin-top: 50px;
`;

const StyledIframe = styled.iframe`
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 340px;
  height: 80px;
  border: none;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const PlayerSpotify = () => {
  return (
    <PlayerWrapper>
      <StyledIframe
        src="https://open.spotify.com/embed/track/3XVBdLihbNbxUwZosxcGuJ?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      />
    </PlayerWrapper>
  );
};

export default PlayerSpotify;
