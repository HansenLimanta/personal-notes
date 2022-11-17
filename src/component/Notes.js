import styled from "styled-components";
import { showFormattedDate } from "../utils";

const Notes = ({
  id,
  title,
  body,
  isArchived,
  createdAt,
  noteList,
  setNoteList,
}) => {
  const deleteHandler = () => {
    setNoteList(noteList.filter((noteItem) => noteItem.id !== id));
  };

  const archiveHandler = () => {
    const newNoteList = noteList.map((noteItem) => {
      if (noteItem.id === id) {
        noteItem.archived = !isArchived;
        return noteItem;
      } else {
        return noteItem;
      }
    });
    setNoteList(newNoteList);
  };

  return (
    <StyledNote>
      <div className="text-container">
        <h3>{title}</h3>
        <h4>{showFormattedDate(createdAt)}</h4>
        <p>{body}</p>
      </div>
      <div className="button-container">
        <button onClick={deleteHandler} className="delete-btn">
          Delete
        </button>
        <button onClick={archiveHandler} className="archive-btn">
          {isArchived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </StyledNote>
  );
};

const StyledNote = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-style: solid;
  border-radius: 5px;
  border-width: 1px;
  padding: 0.5rem;
  h3 {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h4 {
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  p {
    padding-bottom: 0.5rem;
  }
  button {
    font-weight: bold;
    border: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.5s ease;
  }
  .text-container {
    flex: 1 1;
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
  .delete-btn {
    color: #b80000;
    :hover {
      background-color: #b80000;
      color: white;
    }
  }
  .archive-btn {
    color: #33b300;
    :hover {
      background-color: #33b300;
      color: white;
    }
  }
`;

export default Notes;
