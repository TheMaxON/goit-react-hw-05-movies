import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Form, Button, Input } from './Search.styled';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedQuery = query.toLowerCase().trim();

    if (normalizedQuery === '') {
      //   return toast.warning('Please enter your request.', { theme: 'dark' });
    }
    onSubmit(normalizedQuery);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit" aria-label="Search" className="button">
        <BiSearchAlt2 style={{ width: 25, height: 25 }} />
      </Button>

      <Input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Search;
