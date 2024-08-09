import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import ArchiveContext from "../../context";

const Search = () => {
  const [term, setTerm] = useState("");
  const [identifiers, setIdentifiers] = useState(ArchiveContext);

  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/search/", {
        name: term,
      });
      setIdentifiers(res.data.message);
      console.log("Response: ", identifiers);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <Input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter term to search"
          className="mb-4"
        />
        <Button onClick={handleSearch} color="blue">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;
