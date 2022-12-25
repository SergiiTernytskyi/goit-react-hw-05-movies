import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[5]}px;

  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
