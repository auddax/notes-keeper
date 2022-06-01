import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Components
import Form from './Form';
import Note from './Note';
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Notes() {
  const { notes } = useContext(DataContext);
  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {
          notes.map((note) => (
            <Note note={note} />
          ))
        }
        <Note />
      </Box>
    </Box>
  );
}

export default Notes;
