import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const BottomNav: React.FunctionComponent<{}> = () => {
  return (
    <BottomNavigation>
    <a href="/" target="_blank"><BottomNavigationAction label="Home" icon={<RestoreIcon />} /></a>
    <a href="/ReadMe" target="_blank"><BottomNavigationAction label="Read Me" icon={<FavoriteIcon />} /></a>
    <a href="/home" target="_blank"><BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /></a>
    </BottomNavigation>
  );
};
