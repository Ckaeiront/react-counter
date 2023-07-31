import React, { useState } from "react";

import Template from "./Template";
import Counter from "./Counter";
import Albums from "./Albums";
import Users from "./Users";
import "./App.css";

const defaultPage = "albums";

const pages = {
  albums: {
    text: "Albums",
    component: Albums,
  },
  counter: {
    text: "Counter",
    component: Counter,
  },
  users: {
    text: "Users",
    component: Users,
  },
};

const App = () => {
  const [page, setPage] = useState(defaultPage);

  const handleChangePage = (btnpage) => {
    setPage(btnpage);
  };

  const Page = pages[page].component;

  return (
    <Template pages={pages} onChangePage={handleChangePage}>
      {Page && <Page />}
    </Template>
  );
};

export default App;
