import { useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import Search from "../components/Search";
import ArchiveContext from "../context";
// import api from "../api";
// import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
  const [identifiers, setIdentifiers] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // const getNotes = () => {
  //   api
  //     .get("/api/notes/")
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setNotes(data);
  //       console.log(data);
  //     })
  //     .catch((err) => alert(err));
  // };

  // const deleteNote = (id) => {
  //   api
  //     .delete(`/api/notes/delete/${id}/`)
  //     .then((res) => {
  //       if (res.status === 204) alert("Note deleted!");
  //       else alert("Failed to delete note.");
  //       getNotes();
  //     })
  //     .catch((error) => alert(error));
  // };

  // const createNote = (e) => {
  //   e.preventDefault();
  //   api
  //     .post("/api/notes/", { content, title })
  //     .then((res) => {
  //       if (res.status === 201) alert("Note Created!");
  //       else alert("Failed to make note.");
  //       getNotes();
  //     })
  //     .catch((error) => alert(error));
  // };

  // useEffect(() => {
  //   getNotes();
  // }, []);

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

export default Home;
