import React from 'react';
import { ReactComponent as GhIcon } from '../assets/icons/gh.svg';

export function About() {
  return (
    <>
      <h2>Who are we?</h2>
      <a className="github" href="https://github.com/irina-mokh" target="_blank" rel="noreferrer">
        <span className="github__icon">
          <GhIcon />
        </span>
        <span className="github__text">Irina Mokh</span>
      </a>
    </>
  );
}
