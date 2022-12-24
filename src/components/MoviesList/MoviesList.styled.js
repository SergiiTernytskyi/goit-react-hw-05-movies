import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 26px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  width: 500px;
  height: 40px;

  text-decoration: none;
  border-radius: ${p => p.theme.radii.minimal};
  color: ${p => p.theme.colors.secondary};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  background-color: ${p => p.theme.colors.primary};
`;
