/* eslint-disable prefer-const */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardActions, CardContent, Typography, Button, TextField,
  Dialog, DialogActions, DialogContent, DialogTitle, Box,
} from '@mui/material';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

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

  const [open, setOpen] = useState(false);
  const [newNote, setNewNote] = useState({});

  const handlePopupOpen = (openedNote) => {
    setNewNote(openedNote);
    setOpen(true);
  };

  const onTextChange = (event, editedNote) => {
    let changedNote = { ...editedNote, [event.target.name]: event.target.value };
    setNewNote(changedNote);
  };

  const handlePopupClose = (editedNote) => {
    const unchangedNotes = notes.filter((data) => data.id !== editedNote.id);
    setNotes([newNote, ...unchangedNotes]);
    setOpen(false);
  };

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
    <Box>
      <Dialog
        open={open}
        onClose={() => handlePopupClose(note)}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: '600px',
              borderRadius: '8px',
            },
          },
        }}
      >
        <DialogTitle>
          <TextField
            placeholder="Enter title"
            margin="dense"
            InputProps={{ disableUnderline: true }}
            defaultValue={note.heading}
            variant="standard"
            fullWidth
            onChange={(event) => onTextChange(event, newNote)}
            name="heading"
            value={newNote.heading}
          />
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            margin="dense"
            placeholder="Enter text"
            InputProps={{ disableUnderline: true }}
            defaultValue={note.text}
            variant="standard"
            fullWidth
            onChange={(event) => onTextChange(event, newNote)}
            name="text"
            value={newNote.text}
          />
        </DialogContent>
        <DialogActions>
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
          <Button
            onClick={() => handlePopupClose(note)}
            style={{ marginLeft: '10px', color: 'inherit', textTransform: 'unset' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <StyledCard
        onClick={() => handlePopupOpen(note)}
      >
        <CardContent style={{ maxHeight: 400, overflow: 'auto' }}>
          <Box style={{ fontWeight: 500, fontSize: 18, marginBottom: 5 }}>
            {note.heading}
          </Box>
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
    </Box>
  );
}

export default Note;
