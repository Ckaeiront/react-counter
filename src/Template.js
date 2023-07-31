import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const Template = ({ pages, children, onChangePage }) => {
  return(
    <>
      <Nav pages={pages} onChangePage={onChangePage} />
      <Header />
      {children}
    </>
  );
}

export default Template;
