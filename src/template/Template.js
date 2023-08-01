import React from "react";
import Header from "../partials/Header";
import Nav from "../partials/Nav";

const Template = ({ pages, children, onChangePage, activePage }) => {
  return(
    <>
      <Nav pages={pages} onChangePage={onChangePage} />
      <Header title={activePage} />
      {children}
    </>
  );
}

export default Template;
