import { useState } from "react";
import CreateNotes from "./CreateNotes";
import NoteContainer from "./NoteContainer";
import { getInitialData } from "../utils";
import Nav from "./Nav";

const Home = () => {
  const [noteList, setNoteList] = useState(getInitialData);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
      <CreateNotes noteList={noteList} setNoteList={setNoteList} />
      <NoteContainer
        noteList={noteList}
        setNoteList={setNoteList}
        noteCategory={false}
        titleCategory={"Active Notes"}
        searchValue={searchValue}
      />
      <NoteContainer
        noteList={noteList}
        setNoteList={setNoteList}
        noteCategory={true}
        titleCategory={"Archive"}
        searchValue={searchValue}
      />
    </div>
  );
};

export default Home;
