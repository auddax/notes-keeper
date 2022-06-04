/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import {
  RestoreFromTrashOutlined as RestoreIcon,
  DeleteForeverOutlined as DeleteIcon,
} from '@mui/icons-material';

// Components
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

function DeleteNote({ note }) {
  const {
    notes, deletedNotes, setNotes, setDeletedNotes,
  } = useContext(DataContext);

  const restoreNote = (currrentNote) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== currrentNote.id);
    setDeletedNotes(updatedNotes);
    setNotes((prevArr) => [currrentNote, ...prevArr]);
  };

  const deleteNote = (currrentNote) => {
    const updatedNotes = notes.filter((data) => data.id !== currrentNote.id);
    setDeletedNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <DeleteIcon
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => deleteNote(note)}
        />
        <RestoreIcon
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={() => restoreNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
}

export default DeleteNote;
