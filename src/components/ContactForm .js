/*

import React, { useState } from 'react';

const ContactForm = ({ addContact, currentContact, updateContact }) => {
    const [contact, setContact] = useState(currentContact);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setContact({ ...contact, [name]: value });
    };

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();

                if (!contact.name || !contact.info) return;

                if (currentContact.id) {
                    updateContact(contact);
                } else {
                    addContact(contact);
                    setContact(currentContact);
                }
            }}
        >
            <label>Name</label>
            <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
            <label>Info</label>
            <input type="text" name="info" value={contact.info} onChange={handleInputChange} />
            <button>{currentContact.id ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default ContactForm;

*/

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));
const ContactForm = ({ type, item }) => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        rules={{ required: "First name required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="First Name"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        name="Gender"
        control={control}
        defaultValue=""
        rules={{ required: "Gender required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Select
            label="Gender"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="select"
          >
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"M"}>Male</MenuItem>
          </Select>
        )}
      />
    </form>
  );
};

export default ContactForm;



