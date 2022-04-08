import React, { MutableRefObject } from 'react';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
interface SearchProps {
  value?: string;
  innerRef: React.ForwardedRef<HTMLInputElement>;
  handleSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export class SearchBar extends React.Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
    this.clear = this.clear.bind(this);
  }
  clear() {
    const input = this.props.innerRef as MutableRefObject<HTMLInputElement | null>;
    if (input.current) {
      input.current.value = '';
      localStorage.setItem('search', '');
    }
  }
  render() {
    return (
      <form className="search-bar">
        <input
          type="search"
          className="search"
          defaultValue={localStorage.getItem('search') || ' '}
          placeholder="Search..."
          aria-label="search"
          ref={this.props.innerRef}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              this.props.handleSubmit(e);
            }
          }}
        />
        <button className="search-bar__clear" onClick={this.clear}>
          <Close className="search-bar__clear__icon" />
        </button>
      </form>
    );
  }
}
