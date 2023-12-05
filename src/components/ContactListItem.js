import React, { useContext } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { contactContext } from "../App";

const ContactListItem = ({ item, id }) => {
  const contact = useContext(contactContext);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText key={id} primary={item.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => contact.handleEditOpen(item)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => contact.handleDeleteOpen(item)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ContactListItem;
