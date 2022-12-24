import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin-bottom: ${p => p.theme.space[5]}px;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  gap: ${props => props.theme.space[3]}px;

  overflow: hidden;
`;

export const Input = styled.input`
  padding: ${props => props.theme.space[3]}px;
  max-width: 400px;
  height: 40px;

  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};

  color: ${props => props.theme.colors.primaryText};
  border: 1px solid ${props => props.theme.colors.primaryText};
  border-radius: ${props => props.theme.radii.normal};

  :hover,
  :focus {
    border: 1px solid ${props => props.theme.colors.secondary};
    outline-color: ${props => props.theme.colors.secondary};
  }

  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m}px;
  }
`;

export const SearchButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;

  text-transform: capitalize;
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primaryText};
  border-radius: ${props => props.theme.radii.normal};
  border: transparent;
  opacity: 0.6;

  cursor: pointer;
  outline: none;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    opacity: 1;
  }
`;
