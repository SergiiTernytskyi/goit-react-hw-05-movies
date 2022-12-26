import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  list-style: none;
`;

export const ListItem = styled.li`
  padding: ${p => p.theme.space[4]}px;

  width: 100%;
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.first};
`;

export const CommentatorName = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px 0;

  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
  border-bottom: 1px solid ${p => p.theme.colors.background};
`;
