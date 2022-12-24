import PropTypes from 'prop-types';
import { Input, SearchButton, SearchForm } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        placeholder="Enter movie name"
      />
      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
