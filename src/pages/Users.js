import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

const apiUsers = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(apiUsers)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Loading visible={isLoading} />
      {users.map((user) => (
        <div style={{margin: '10px'}}>
          <span>
            {user.name} - ID: {user.id} - {user.email} - {user.phone};
          </span> <br />
        </div>
      ))}
    </>
  );
};

export default Users;
