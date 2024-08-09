import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
// import ArchiveContext from "../../context";

const Search = () => {
  // const [term, setTerm] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  // const [identifiers, setIdentifiers] = useState(ArchiveContext);

  const handleSearch = async () => {
    setLoading(true);
    const payload = `{"name": "${query}"}`;
    try {
      const resultResponse = await axios.post(
        "http://localhost:8000/api/search/",
        { name: query }
      );
      setResults(resultResponse.data.result);
      setLoading(false);
      // setTimeout(async () => {
      //   const resultResponse = await axios.get(
      //     "http://localhsot:8000/api/search/"
      //   );
      //   setResults(resultResponse.data.result);
      //   setLoading(false);
      // }, 5000); // Wait for 5 seconds before getting the response
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter term to search"
          className="mb-4"
        />
        <Button onClick={handleSearch} className="mb-4" color="blue">
          Search
        </Button>
        {loading ? (
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        ) : (
          <div className="w-full max-w-md">
            {results.length > 0 ? (
              <ul>
                {results.map((result, index) => (
                  <li key={index} className="p-2 border-b border-gray-300">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
