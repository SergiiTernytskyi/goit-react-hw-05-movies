import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px 0;
  margin-bottom: ${p => p.theme.space[5]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: ${p => p.theme.colors.secondary};
  }
`;
