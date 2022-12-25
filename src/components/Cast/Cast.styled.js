import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
`;

export const ListItem = styled.li`
  align-items: center;
  justify-content: center;
  flex-basis: calc((100% - 3 * ${p => p.theme.space[4]}px) / 4);

  box-shadow: ${p => p.theme.shadows.first};
  border-radius: ${p => p.theme.radii.minimal};

  overflow: hidden;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Wrapper = styled.div`
  padding: ${p => p.theme.space[4]}px;
`;

export const Name = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.secondary};
`;

export const Character = styled.p`
  color: ${p => p.theme.colors.primaryText};
`;
