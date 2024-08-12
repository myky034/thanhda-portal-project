import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  TbDotsVertical,
  TbEditCircle,
  TbTrashXFilled,
  TbSend,
  TbMailFast,
} from "react-icons/tb";
import { IconButton } from "@mui/material";
import "./MenuContext.scss";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ padding: "0" }}>
        <TbDotsVertical style={{ fontSize: "20px" }} />
      </IconButton>
      <Menu
        id='basic-menu'
        className='menu-context'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem
          onClick={handleClose}
          className='menu-context items'>
          <TbEditCircle /> Edit
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className='menu-context items'>
          <TbTrashXFilled />
          Delete
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className='menu-context items'>
          <TbMailFast />
          Send email
        </MenuItem>
      </Menu>
    </div>
  );
}
