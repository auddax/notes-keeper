import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

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
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        <Grid container style={{ marginTop: 16 }}>
          {
            notes.map((note) => (
              <Grid item>
                <Note note={note} />
              </Grid>
            ))
          }
        </Grid>
        <Note />
      </Box>
    </Box>
  );
}

export default Notes;
