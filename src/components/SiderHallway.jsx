import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from '@mui/material/MenuItem';

import CustomIcon from './CustomIcon';
import StyledMenu from './StyledMenu';
import BenchSvg from '../symbols/hallway/bench.svg';
import DoorSvg from '../symbols/hallway/door.svg';
import ElevatorSvg from '../symbols/hallway/elevator.svg';
import InformationSvg from '../symbols/hallway/information.svg';
import PaintingSvg from '../symbols/hallway/painting.svg';
import PlantSvg from '../symbols/hallway/plant.svg';
import RampsSvg from '../symbols/hallway/ramps.svg';
import StairsSvg from '../symbols/hallway/stairs.svg';
import StatueSvg from '../symbols/hallway/statue.svg';
import UtilitySvg from '../symbols/hallway/utility.svg';


import { addItem } from '../store/slices/canvas';
import { createIcon } from '../helpers/items';

const SiderHallway = () => {
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
        id="sider-hallway-icons"
        aria-controls="sider-hallway-list"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Add hallway icons" />
      </ListItem>
      <StyledMenu
        id="sider-hallway-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'sider-hallway-icons',
        }}
      >
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={BenchSvg} alt="Bench" />Bench
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={DoorSvg} alt="Door" />Door
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={ElevatorSvg} alt="Elevator" />Elevator
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={InformationSvg} alt="Information" />Information
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={PaintingSvg} alt="Painting" />Painting
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={PlantSvg} alt="Plant" />Plant
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={RampsSvg} alt="Ramps" />Ramps
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={StairsSvg} alt="Stairs" />Stairs
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={StatueSvg} alt="Statue" />Statue
        </MenuItem>
        <MenuItem onClick={addIconAndClose}>
          <CustomIcon src={UtilitySvg} alt="Utility" />Utility
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default SiderHallway;
