import React from 'react';

const Header = (props) => {
  return (
    <header className="outline">
      <h1>Food Item Cost</h1>
      <h3 className="tagline">{props.tagline}</h3>
    </header>
  )
}

export default Header;
