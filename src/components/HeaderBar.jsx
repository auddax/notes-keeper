import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  color: #5f6368;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  align-content: flex-end;
`
const Logo = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin: 0 0.9rem 0 0;
`
const Heading = styled(Typography)`
  font-size: 1.25rem;
`

const HeaderBar = ({ open, handleDrawer }) => {
  return (
    <Header open={ open }>
    <Toolbar>
      <IconButton
        onClick={ handleDrawer }
        edge="start"
        sx={{ marginRight: '20px'}}
      >
      <Menu />
      </IconButton>
      <Logo icon={ faNoteSticky } />
      <Heading>Notes Keeper</Heading>
    </Toolbar>
  </Header>
  );
};

export default HeaderBar;