import React from "react";

const Nav = ({ onChangePage, pages }) => {
  const pageNames = Object.keys(pages);

  return (
    <nav>
      {pageNames.map((pageName) => (
        <button onClick={() => onChangePage(pageName)}>
          {pages[pageName].text}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
