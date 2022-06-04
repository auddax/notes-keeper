import React from 'react';
import { LightbulbOutlined as Bulb } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LightBulb = styled(Bulb)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;

function EmptyNotes() {
  return (
    <Container>
      <LightBulb />
      <Text>Notes you add appear here</Text>
    </Container>
  );
}

export default EmptyNotes;
