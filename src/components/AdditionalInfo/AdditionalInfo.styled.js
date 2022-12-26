import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  border-top: 1px solid ${p => p.theme.colors.secondary};
  border-bottom: 1px solid ${p => p.theme.colors.secondary};
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const List = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  padding: ${p => p.theme.space[3]}px;
  min-width: 100px;
  height: 40px;

  text-decoration: none;
  text-align: center;
  color: inherit;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primaryText};
  }

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primaryText};
    box-shadow: ${p => p.theme.shadows.second};
  }
`;
