/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import reorder from '../../utils/common-utils';
import { DataContext } from '../../context/DataProvider';

// Components
import Form from './Form';
import Note from './Note';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

function Notes() {
  const { notes, setNotes } = useContext(DataContext);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      notes,
      result.source.index,
      result.destination.index,
    );

    setNotes(items);
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ p: 3, width: '100%' }}>
        <DrawerHeader />
        <Form />
        {
          notes.length > 0
            ? (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <Grid
                      container
                      style={{ marginTop: 16 }}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {
                        notes.map((note, index) => (
                          <Draggable key={note.id} draggableId={note.id} index={index}>
                            {(provided, snapshot) => (
                              <Grid
                                item
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <Note note={note} />
                              </Grid>
                            )}
                          </Draggable>
                        ))
                      }
                      {provided.placeholder}
                    </Grid>
                  )}
                </Droppable>
              </DragDropContext>
            )
            : <EmptyNotes />
        }
      </Box>
    </Box>
  );
}

export default Notes;
