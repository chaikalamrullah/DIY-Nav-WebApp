import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from '@mui/material/MenuItem';

import CustomIcon from './CustomIcon';
import StyledMenu from './StyledMenu';
import DisabledRouteSvg from '../symbols/navigation/disabled-intersect.svg';
import UnavailableSvg from '../symbols/navigation/unavailable.svg';
import WarningSvg from '../symbols/navigation/warning.svg';

import { addItem } from '../store/slices/canvas';
import { createIcon } from '../helpers/items';

const SiderNavigation = () => {
  const baseImage = useSelector((state) => state.canvas.baseImage);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const addIconAndClose = useCallback((e) => {
    if (!baseImage) {
      handleClose();

      return;
    }

    dispatch(
      addItem(createIcon({
        url: e.currentTarget.firstElementChild.src,
        title: e.currentTarget.firstElementChild.alt,
      })),
    );

    handleClose();
  }, [dispatch, baseImage]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem
        button
        id="sider-navigation-icons"
        aria-controls="sider-navigation-list"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Add navigation icons" />
      </ListItem>
      <StyledMenu
        id="sider-navigation-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'sider-navigation-list',
        }}
      >
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={DisabledRouteSvg} alt="Disabled Intersection" />Disabled Intersection
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={UnavailableSvg} alt="Unavailable" />Unavailable
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={WarningSvg} alt="Warning" />Warning
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default SiderNavigation;
