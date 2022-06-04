/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import { UnarchiveOutlined as UnarchiveIcon, DeleteOutlineOutlined as DeleteIcon } from '@mui/icons-material';

// Components
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

function Archive({ note }) {
  const {
    setNotes, archiveNotes, setArchiveNotes, setDeletedNotes,
  } = useContext(DataContext);

  const UnarchiveNote = (currentNote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== currentNote.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [currentNote, ...prevArr]);
  };

  const deleteNote = (currentNote) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== currentNote.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevArr) => [currentNote, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveIcon
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => UnarchiveNote(note)}
        />
        <DeleteIcon
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
}

export default Archive;
