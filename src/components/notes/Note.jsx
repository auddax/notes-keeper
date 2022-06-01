/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Card, CardActions, CardContent, Typography,
} from '@mui/material';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

function Note({ note }) {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Archive
          fontSize="small"
          style={{ marginLeft: 'auto' }}
        />
        <Delete
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    heading: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

Note.defaultProps = {
  note: PropTypes.shape({
    heading: '',
    text: '',
  }),
};

export default Note;
