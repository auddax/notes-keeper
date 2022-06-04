import React, { useState, useRef, useContext } from 'react';
import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { v4 as uuid } from 'uuid';

// Components
import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 45vw;
  max-width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: 0 auto;
  min-height: 30px;
`;

const note = {
  id: '',
  heading: '',
  text: '',
};

function Form() {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });
  const { setNotes } = useContext(DataContext);
  const containerRef = useRef();

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = '70px';
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = '30px';
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArray) => [addNote, ...prevArray]);
    }
  };

  const onTextChange = (event) => {
    // eslint-disable-next-line prefer-const
    let changedNote = { ...addNote, [event.target.name]: event.target.value };
    setAddNote(changedNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        { showTextField
            && (
              <TextField
                placeholder="Title"
                autoComplete="off"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                style={{ marginBottom: 10 }}
                onChange={(event) => onTextChange(event)}
                name="heading"
                value={addNote.heading}
              />
            )}
        <TextField
          placeholder="Take a note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          onClick={onTextAreaClick}
          onChange={(event) => onTextChange(event)}
          name="text"
          value={addNote.text}
        />
      </Container>
    </ClickAwayListener>
  );
}

export default Form;
