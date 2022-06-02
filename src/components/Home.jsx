import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import DeleteNotes from './deleted/DeleteNotes';
import Archives from './archived/Archives';

function Home() {
  return (
    <Box style={{ display: 'flex', width: '100%' }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archived" element={<Archives />} />
          <Route path="/deleted" element={<DeleteNotes />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default Home;
