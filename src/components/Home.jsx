import React from 'react';
import { Box } from '@mui/material';

// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import DeleteNotes from './deleted/DeleteNotes';
import Archives from './archived/Archives';

function Home() {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <SwipeDrawer />
      <Notes />
    </Box>
  );
}

export default Home;
