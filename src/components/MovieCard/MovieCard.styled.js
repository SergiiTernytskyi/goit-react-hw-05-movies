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
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.xxl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Info = styled.p`
  margin-bottom: ${p => p.theme.space[5]}px;
`;

export const InfoTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
`;
