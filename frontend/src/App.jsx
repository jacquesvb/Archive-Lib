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
          <div className="flex items-center space-x-4 w-72">
            <Search />
          </div>
        </Navbar>
        <div className="h-[100vh] py-4">
          {identifiers && identifiers.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {identifiers.map((identifier) => (
                <div key={identifier.id} className="bg-gray-800 rounded-lg p-4">
                  <div className="text-white text-lg font-bold">
                    {identifier.title}
                  </div>
                  <div className="text-white text-sm">{identifier.author}</div>
                  <div className="text-white text-sm">{identifier.isbn}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-2xl text-white">
              No results found
            </div>
          )}
        </div>
      </ArchiveContext.Provider>
    </div>
  );
}

export default App;
