import { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

interface SearchProps {
  value?: string;
  handleSubmit: (input: string) => void;
}

export const SearchBar = (props: SearchProps) => {
  const [input, setInput] = useState(props.value);

  useEffect(() => {
    localStorage.setItem('search', String(input));
  }, [input]);

  return (
    <form className="search-bar">
      <input
        type="search"
        className="search"
        value={input}
        placeholder="Search..."
        aria-label="search"
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (input) {
              props.handleSubmit(input);
            }
          }
        }}
      />
      <button className="search-bar__clear" onClick={() => setInput('')}>
        <Close className="search-bar__clear__icon" />
      </button>
    </form>
  );
};
