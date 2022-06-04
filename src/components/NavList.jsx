import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LightbulbOutlined as Bulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function NavList() {
  const navList = [
    {
      id: 1, name: 'Notes', icon: <Bulb />, route: '/',
    },
    {
      id: 2, name: 'Archive', icon: <Archive />, route: '/archived',
    },
    {
      id: 3, name: 'Trash', icon: <Delete />, route: '/deleted',
    },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem
          sx={{
            borderRadius: '0 50px 50px 0',
          }}
          button
          key={list.id}
        >
          <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit' }}>
            <ListItemIcon style={{ alignItems: 'center', marginLeft: '4px' }}>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </Link>
        </ListItem>
      ))}
    </List>
  );
}

export default NavList;
