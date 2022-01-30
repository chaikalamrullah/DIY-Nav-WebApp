import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import MenuItem from '@mui/material/MenuItem';

import CustomIcon from './CustomIcon';
import StyledMenu from './StyledMenu';
import AdministrationSvg from '../symbols/room/administration.svg';
import ClassSvg from '../symbols/room/class.svg';
import ComLabSvg from '../symbols/room/com-lab.svg';
import KitchenSvg from '../symbols/room/kitchen.svg';
import LaboratorySvg from '../symbols/room/laboratory.svg';
import LibrarySvg from '../symbols/room/library.svg';
import OfficeSvg from '../symbols/room/office.svg';
import SecuritySvg from '../symbols/room/security.svg';
import ShopSvg from '../symbols/room/shop.svg';
import StorageSvg from '../symbols/room/storage.svg';
import StudySvg from '../symbols/room/study.svg';
import ToiletSvg from '../symbols/room/toilet.svg';

import { addItem } from '../store/slices/canvas';
import { createIcon } from '../helpers/items';

const SiderRoom = () => {
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
        id="sider-room-icons"
        aria-controls="sider-room-list"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <OtherHousesIcon />
        </ListItemIcon>
        <ListItemText primary="Add room icons" />
      </ListItem>
      <StyledMenu
        id="sider-room-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'sider-room-icons',
        }}
      >
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={AdministrationSvg} alt="Administration Office" />Administration
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={ClassSvg} alt="Class Room" />Class
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={ComLabSvg} alt="Computer Lab." />ComLab
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={KitchenSvg} alt="Kitchen" />Kitchen
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={LaboratorySvg} alt="Laboratory" />Laboratory
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={LibrarySvg} alt="Libarary" />Libarary
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={OfficeSvg} alt="Staff Office" />Office
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={SecuritySvg} alt="Security Office" />Security
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={ShopSvg} alt="Shop" />Shop
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={StorageSvg} alt="Storage Room" />Storage
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={StudySvg} alt="Study Room" />Study
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={ToiletSvg} alt="Toilet" />Toilet
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default SiderRoom;
