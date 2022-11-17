import Notes from "./Notes";
import styled from "styled-components";

const NoteContainer = ({
  noteList,
  setNoteList,
  noteCategory,
  titleCategory,
  searchValue,
}) => {
  const searchFilter = noteList.filter((note) => {
    if (searchValue === "") {
      return note;
    } else if (searchValue !== "") {
      if (note.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return note;
      }
    }
    return null;
  });

  const noteChecker = (noteCategory) => {
    return searchFilter.some((note) => note.archived === noteCategory);
  };

  return (
    <ContainerDiv>
      <h2>{titleCategory}</h2>
      {console.log(searchFilter)}
      <div className="note-container">
        {noteChecker(noteCategory) ? (
          searchFilter.map((note) => {
            if (note.archived === noteCategory) {
              return (
                <Notes
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  isArchived={note.archived}
                  createdAt={note.createdAt}
                  noteList={noteList}
                  setNoteList={setNoteList}
                  key={note.id}
                />
              );
            }
            return null;
          })
        ) : (
          <p>0 Notes</p>
        )}
      </div>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
  .note-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(min-content, max-content);
    grid-gap: 0.5rem;
    @media only screen and (max-width: 1100px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default NoteContainer;
