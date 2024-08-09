import { useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Search from "./components/Search";
import ArchiveContext from "./context";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [identifiers, setIdentifiers] = useState([]);
  return (
    <div className="App mx-auto max-w-screen-xl h-[100vh] mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400">
      <ArchiveContext.Provider value={{ identifiers, setIdentifiers }}>
        <Navbar className="col-span-12 h-[8vh] mx-auto max-w-screen-xl px-4 lg:px-8 flex items-center justify-between bg-gradient-to-r from-sky-700 to-indigo-800">
          <div className="text-blue-gray-900">
            <Typography className="pointer-events-none text-2xl text-white font-bold">
              Archive-Lib
            </Typography>
          </div>
        </Navbar>
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
          <Search />
        </div>
      </ArchiveContext.Provider>
    </div>
  );
}

export default App;
