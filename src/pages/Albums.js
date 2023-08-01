import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

const apiURL = "https://jsonplaceholder.typicode.com/albums";

const Albums = () => {
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Loading visible={loading} />
      {album.map((al) => {
        return (
          <div>
            <span>
              {al.title} - ID: {al.id}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default Albums;
