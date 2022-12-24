import styled from 'styled-components';

export const ErrorMessage = styled.p`
  color: ${p => p.theme.colors.accent};
  font-size: ${p => p.theme.fontSizes.l}px;
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;
