import React, { useEffect, useState } from "react";

const Giphy = () => {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(
      `api.giphy.com/v1/gifs/search?api_key=UfeVPOs2fJp986ECeNbhoTew9njKQoTe&&q=${search}`
    )
      .then((res) => res.json())
      .then((res) => {
        setGifs(res.data);
      })
      .catch(console.log);

    return clearInterval();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {setResult([])}
        {setResult(gifs)}
        {result.map(({ url, title }) => {
          return (
            <p>
              <a href={url}>{title}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Giphy;
