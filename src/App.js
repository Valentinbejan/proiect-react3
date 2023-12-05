import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';



import Buton from './components/Buton';
import Timp from './components/Timp';


import { Button } from 'antd';
import { Input } from 'antd';

//import {Tabletest}  from './components/Tabletest';
import Tabletest, { Table } from './components/Tabletest';
import Page3 from './components/Page3';

// import {AllContactList} from './components/ContactList';


//contacte
// import { createContext } from "react";
// import "./styles.css";
// import { list } from "./data.js";

// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import AddIcon from "@material-ui/icons/Add";

// import Modal from "./components/Modal";
// import ModalChild from "./components/ModalChild";

// import ContactList from "./components/ContactList";


// export const contactContext = createContext({});



function App() {

//contacte
  // const [searchInput, setSearchInput] = useState("");
  // const [contacts, setContacts] = useState([]);
  // const [isOpen, setIsOpen] = useState(false);
  // const [modalType, setModalType] = useState("");
  // const [currentContact, setCurrentContact] = useState({});
  // const [tempData, setTempData] = useState({});

  // const handleAddOpen = () => {
  //   setIsOpen(true);
  //   setModalType("Add");
  // };
  // const handleEditOpen = (e) => {
  //   setIsOpen(true);
  //   setModalType("Edit");
  //   setCurrentContact(e);
  // };
  // const handleDeleteOpen = (e) => {
  //   setIsOpen(true);
  //   setModalType("Delete");
  //   setCurrentContact(e);
  // };
  // const handleModalClose = () => {
  //   setIsOpen(false);
  //   setCurrentContact("");
  // };

  // const handleAddContact = () => {
  //   setContacts([...contacts, tempData]);
  //   setIsOpen(false);
  //   setCurrentContact("");
  // };
  // const handleEditContact = () => {
  //   const index = contacts.findIndex((c) => c.id === tempData.id),
  //     newArr = [...contacts];
  //   newArr[index] = tempData;
  //   setContacts(newArr);
  //   setIsOpen(false);
  //   setCurrentContact("");
  // };
  // const handleDeleteContact = () => {
  //   const newArr = contacts.filter((c) => c.id !== tempData.id);
  //   setContacts(newArr);
  //   setIsOpen(false);
  //   setCurrentContact("");
  // };

  // const handleNewData = (item) => {
  //   setTempData(item);
  // };

  // useEffect(() => {
  //   setContacts(list);
  // }, []);




// Initializing all the state variables //converter
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("ron");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);


//calculator
const [currentValue, setCurrentValue] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#result').value = "";
  }, [])

  useEffect(() => {
    if (clear)
      document.querySelector('#result').value = "";
  })

  const calculate = (operation) => (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector('#num').value
    if (currentNum === '') return;

    let result;
    switch (operation) {
      case 'add':
        result = currentValue + parseInt(currentNum);
        break;
      case 'subtract':
        result = currentValue - parseInt(currentNum);
        break;
      case 'multiply':
        result = currentValue * parseInt(currentNum);
        break;
      case 'divide':
        if (parseInt(currentNum) === 0) {
          alert('Error:Nu se poarte imparte la 0.');
          return;
        }
        result = currentValue / parseInt(currentNum);
        break;
      default:
        break;
    }
    setCurrentValue(result);
    document.querySelector('#num').value = "";
  }

  const Clear = (e) => {
    e.preventDefault();
    console.log('Value:', currentValue);
    document.querySelector('form').reset();
    setClear(true);
    setCurrentValue(0);
  }





// Calling the api whenever the dependency changes
useEffect(() => {
  Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
      .then((res) => {
          setInfo(res.data[from]);
      })
}, [from]);

// Calling the convert function whenever
// a user switches the currency
useEffect(() => {
  setOptions(Object.keys(info));
  convert();
}, [info])

// Function to convert the currency
function convert() {
  var rate = info[to];
  setOutput(input * rate);
}

// Function to switch between two currency
function flip() {
  var temp = from;
  setFrom(to);
  setTo(temp);
}





  return (
    <div className="App">
     <b>hello, salut</b>
      <Buton />
      <Timp />
      <br></br>
      <br></br>

     <Tabletest />
     

      
      <div className="heading">
                <h1>CONVERTOR BANI</h1>
            </div>
            <div className="container">
                <div className="left">
                    <h3>Suma</h3>
                    <Input size="large"
                        placeholder="Introduceti suma"
                        onChange={(e) => setInput(e.target.value)} 
                        style={{ width: '400px' }}/>
                </div>
                <div className="middle">
                    <h3>De la</h3>
                    <Dropdown options={options}
                        onChange={(e) => { setFrom(e.value) }}
                        value={from} placeholder="From" />
                </div>
                <br></br>
                <div className="switch">
                    <HiSwitchHorizontal size="30px"
                        onClick={() => { flip() }} />
                </div>
                <div className="right">
                    <h3>la</h3>
                    <Dropdown options={options}
                        onChange={(e) => { setTo(e.value) }}
                        value={to} placeholder="To" />
                </div>
            </div>
            <div className="result">
              <br></br>
                <Button type="primary" onClick={() => { convert() }}>Converise</Button>
                <h2>Suma converita:</h2>
                <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
 
            </div>


{/* calucalotr */}
<div className="App">
      <div className="app-title">
        <h1> Calculator</h1>
      </div>
      <form>
        <Input  style={{ width: '400px' }} type="text" id="result" value={currentValue} readOnly />
        <Input  style={{ width: '400px' }} type="text" id="num" placeholder="Introduceti un numar" />
        <Button style={{ width: '100px' , height: "100px" , background: "lightblue", borderColor: "Black", position: 'absolute',top: '1100px',left: '1360px' }} onClick={calculate('add')}>Adunare</Button>
        <Button style={{ width: '100px' , height: "100px" , background: "violet", borderColor: "Black", position: 'absolute',top: '1200px',left: '1460px'  }} onClick={calculate('subtract')}>Scadere</Button>
        <Button style={{ width: '100px' , height: "100px" , background: "lightgreen", borderColor: "Black", position: 'absolute',top: '1100px',left: '1460px'  }} onClick={calculate('multiply')}>Inmultire</Button>
        <Button style={{ width: '100px' , height: "100px" , background: "yellow", borderColor: "Black", position: 'absolute',top: '1200px',left: '1360px'  }} onClick={calculate('divide')}>Impartire</Button>
        <Button style={{ width: '100px' , height: "100px" , background: "pink", borderColor: "Black", position: 'absolute',top: '1100px',left: '1560px'  }} onClick={Clear}>Stergere</Button>
      </form>

{/* contacte */}
    </div>
    {/* <contactContext.Provider
        value={{
          isOpen,
          modalType,
          handleModalClose,
          handleAddContact,
          handleEditOpen,
          handleDeleteOpen
        }}
      >
        <h1>Contact List</h1>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <TextField
            id="standard-basic"
            label="Search Contact"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddOpen}>
            <AddIcon />
            Add Contact
          </Button>
        </Grid>
        <Grid item xs={12} md={12}>
          <div>
            <ContactList list={contacts} value={searchInput} />
          </div>
        </Grid>

        <Modal
          isOpen={isOpen}
          onAdd={handleAddContact}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
          handleClose={handleModalClose}
          title={`${modalType} Contact`}
          type={modalType}
        >
          <ModalChild
            type={modalType}
            item={currentContact}
            onNewData={handleNewData}
          />
        </Modal>
      </contactContext.Provider> */}

{/* <div>
  <br></br>
  <br></br>
  <br></br>
<Page3 />
</div> */}
<br></br>
  <br></br>
  <br></br><br></br>
  <br></br>
  <br></br><br></br>
  <br></br>
  <br></br>

    </div>

  );
}

export default App;
