import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  width: 100%;
  min-height: 40px;

  text-decoration: none;
  color: ${p => p.theme.colors.primaryText};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.minimal};

  transform: scale(1);
  box-shadow: none;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primaryText};
    transform: scale(1.03);
    box-shadow: ${p => p.theme.shadows.first};
  }

  > svg {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;
