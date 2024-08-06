import { useState } from "react";
import { Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/hello/", {
        name: term,
      });
      setResponse(res.data.message);
      console.log("Response: ", res.data.message);
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
        {response && (
          <div className="text-blue-gray-900">
            <Typography className="pointer-events-none text-2xl text-white font-bold">
              {response}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
