import styled from "styled-components";
import { useState } from "react";

const CreateNotes = ({ noteList, setNoteList }) => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");
  const remainingChar = 50 - titleInput.length;

  const titleInputHandler = (e) => {
    const limit = 50;
    setTitleInput(e.target.value.slice(0, limit));
  };

  const bodyInputHandler = (e) => {
    setBodyInput(e.target.value);
  };

  const submitNoteHandler = (e) => {
    e.preventDefault();

    setNoteList([
      ...noteList,
      {
        id: createNewIDandDate(),
        title: titleInput,
        body: bodyInput,
        createdAt: createNewIDandDate(),
        archived: false,
      },
    ]);
    setTitleInput("");
    setBodyInput("");
  };

  const createNewIDandDate = () => {
    return +new Date();
  };

  return (
    <StyledForm onSubmit={submitNoteHandler}>
      <h2>Create a Note</h2>
      <p>Character left: {remainingChar}</p>
      <input
        type="text"
        placeholder="Title ..."
        onChange={titleInputHandler}
        value={titleInput}
        required
      />
      <textarea
        type="text"
        placeholder="Notes ..."
        onChange={bodyInputHandler}
        value={bodyInput}
        required
      />
      <button>Create</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 30rem;
  margin: auto;
  padding-top: 7rem;
  h2 {
    padding-bottom: 1rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 12rem;
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 5px;
  }
  button {
    font-weight: bold;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: transparent;
    transition: all 0.5s ease;
    :hover {
      background-color: #1b98ff;
      color: white;
    }
  }
  @media only screen and (max-width: 500px) {
    width: 80%;
    margin: auto;
  }
`;

export default CreateNotes;
