import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const Modal = ({
  isOpen,
  onAdd,
  onEdit,
  onDelete,
  handleClose,
  title,
  subtitle,
  children,
  type
}) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <div>
            <Button
              onClick={
                type === "Delete" ? onDelete : type === "Edit" ? onEdit : onAdd
              }
              color="primary"
            >
              {type} Contact
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
