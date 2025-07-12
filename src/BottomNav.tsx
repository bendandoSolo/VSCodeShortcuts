import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CheckIcon from '@mui/icons-material/Check';

export const BottomNav: React.FunctionComponent = () => {
  return (
    <BottomNavigation showLabels sx={{ width: '100vw', position: 'fixed', bottom: 0 }}>
      <BottomNavigationAction label="Home" icon={<EditIcon />} component="a" href="/" target="_blank" />
      <BottomNavigationAction
        label="Navigation"
        icon={<MyLocationIcon />}
        component="a"
        href="/Navigation"
        target="_blank"
      />
      <BottomNavigationAction label="Other" icon={<QuestionMarkIcon />} component="a" href="/other" target="_blank" />
      <BottomNavigationAction label="TS" icon={<LocalLibraryIcon />} component="a" href="/TS" target="_blank" />
      <BottomNavigationAction label="Learnt" icon={<CheckIcon />} component="a" href="/known" target="_blank" />
      <BottomNavigationAction label="Read Me" icon={<MenuBookIcon />} component="a" href="/ReadMe" target="_blank" />
    </BottomNavigation>
  );
};
