import React, { useState, useEffect } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root .MuiSelect-root ": {
      margin: theme.spacing(1),
      spacing: 8
    }
  }
}));

const ModalChild = ({ type, item, onNewData }) => {
  const [nameInput, setNameInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [mobileInput, setMobileInput] = useState("");
  const [homeInput, setHomeInput] = useState("");
  const [faxInput, setFaxInput] = useState("");

  useEffect(() => {
    if (type === "Add") {
      setNameInput("");
      setGenderInput("");
      setMobileInput("");
      setHomeInput("");
      setFaxInput("");
    } else if (type === "Edit") {
      setNameInput(item.name);
      setGenderInput(item.gender);
      setMobileInput(item.phone[0]);
      setHomeInput(item.phone[1]);
      setFaxInput(item.phone[2]);
    } else {
    }
  }, [type]);

  useEffect(() => {
    const newContact = {
      id: item.id ? item.id : new Date(),
      name: nameInput,
      gender: genderInput,
      phone: [mobileInput, homeInput, faxInput]
    };
    onNewData(newContact);
  }, [nameInput, genderInput, mobileInput, homeInput, faxInput]);

  const classes = useStyles();

  return (
    <>
      {type === "Delete" ? (
        <p style={{ fontSize: 16, fontFamily: "Roboto" }}>
          {" "}
          Are you sure you want to delete?{" "}
        </p>
      ) : (
        <form className={classes.root} key={item}>
          <TextField
            label="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            required
            fullWidth
            error={
              new RegExp(/^([A-Za-z])+$/).test(nameInput) || nameInput === ""
                ? false
                : true
            }
            helperText={
              new RegExp(/^([A-Za-z])+$/).test(nameInput) || nameInput === ""
                ? ""
                : "Invalid Name"
            }
          />

          <InputLabel shrink>Gender</InputLabel>
          <Select
            label="Gender"
            value={genderInput}
            onChange={(e) => setGenderInput(e.target.value)}
            required
            fullWidth
            placeholder="Gender"
          >
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"M"}>Male</MenuItem>
          </Select>
          <TextField
            label="Mobile"
            value={mobileInput}
            onChange={(e) => setMobileInput(e.target.value)}
            required
            fullWidth
            error={
              new RegExp(/^[689]\d{7}$/).test(mobileInput) || mobileInput === ""
                ? false
                : true
            }
            helperText={
              new RegExp(/^[689]\d{7}$/).test(mobileInput) || mobileInput === ""
                ? ""
                : "Invalid Mobile Number"
            }
          />
          <TextField
            label="Home"
            value={homeInput}
            onChange={(e) => setHomeInput(e.target.value)}
            fullWidth
            error={
              new RegExp(/^[6]\d{7}$/).test(homeInput) || homeInput === ""
                ? false
                : true
            }
            helperText={
              new RegExp(/^[6]\d{7}$/).test(homeInput) || homeInput === ""
                ? ""
                : "Invalid Home Number"
            }
          />
          <TextField
            label="Fax"
            value={faxInput}
            onChange={(e) => setFaxInput(e.target.value)}
            fullWidth
            error={
              new RegExp(/^[6]\d{7}$/).test(faxInput) || faxInput === ""
                ? false
                : true
            }
            helperText={
              new RegExp(/^[6]\d{7}$/).test(faxInput) || faxInput === ""
                ? ""
                : "Invalid Fax Number"
            }
          />
        </form>
      )}
    </>
  );
};

export default ModalChild;
