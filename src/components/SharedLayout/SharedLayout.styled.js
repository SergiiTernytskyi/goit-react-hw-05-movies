import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[4]}px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 60px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.third};

  > nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 26px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.secondary};

  background-color: ${p => p.theme.colors.background};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primaryText};
    box-shadow: ${p => p.theme.shadows.second};
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primaryText};
  }
`;
