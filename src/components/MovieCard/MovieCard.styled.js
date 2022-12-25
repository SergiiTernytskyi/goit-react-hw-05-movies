import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const Image = styled.img`
  display: block;
  width: 300px;
  height: auto;
  object-fit: cover;
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.xxl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Score = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[4]}px;

  width: 70px;
  height: 40px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.minimal};
`;

export const Info = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const InfoTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;

  list-style: none;
`;

export const Genres = styled.li`
  padding: ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 70px;
  height: 40px;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.minimal};
`;
