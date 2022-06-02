import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// Components
import { Archive } from './Archive';
import { DataContext } from '../../context/DataProvider';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Archives() {
  const { archiveNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Grid container style={{ marginTop: 16 }}>
          {
            archiveNotes.map((archive) => (
              <Grid item>
                <Archive archive={archive} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
}

export default Archives;
