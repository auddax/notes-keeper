/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

// Components
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

function Note({ note }) {
  const {
    notes, setNotes, setArchiveNotes, setDeletedNotes,
  } = useContext(DataContext);

  const archiveNote = (currrentNote) => {
    const updatedNotes = notes.filter((data) => data.id !== currrentNote.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [currrentNote, ...prevArr]);
  };

  const deleteNote = (currrentNote) => {
    const updatedNotes = notes.filter((data) => data.id !== currrentNote.id);
    setNotes(updatedNotes);
    setDeletedNotes((prevArr) => [currrentNote, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => archiveNote(note)}
        />
        <Delete
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
}

export default Note;
