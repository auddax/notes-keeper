import React from 'react';
import { Box } from '@mui/material';

// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';

function Home() {
  return (
    <Box>
      <SwipeDrawer />
      <Notes style={{ display: 'flex', width: '100%' }} />
    </Box>
  );
}

export default Home;
