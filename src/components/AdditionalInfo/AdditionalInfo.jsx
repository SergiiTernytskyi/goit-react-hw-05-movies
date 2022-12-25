import {
  StyledLink,
  Title,
  Container,
  List,
  ListItem,
} from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <Container>
      <Title>Additional information</Title>
      <List>
        <ListItem>
          <StyledLink to="cast">Cast</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="reviews">Review</StyledLink>
        </ListItem>
      </List>
    </Container>
  );
};
