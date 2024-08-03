import { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  const getIdentifiers = async (term) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${term}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (event) => {
    const value = event.target.value.trim();
    setTerm(event.target.value);

    if (value !== "") {
      getIdentifiers(value);
    }
  };

  return (
    <div className="relative flex">
      <input
        className="px-2 rounded-1-md border-2 border-white text-black"
        type="text"
        placeholder="Search for media"
        value={term}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Search;
