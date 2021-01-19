import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const Robot = () => {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setWord(search);
    setUrl(`https://robohash.org/:${word}`);

    return cleanup();
  }, [search, word]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <img src={url} alt="Robot" style={{width: "500px", height: "500px"}}/>
    </div>
  );
};

export default Robot;
