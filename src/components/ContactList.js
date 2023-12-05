/*
import React, { useState } from 'react';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

const AllContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [currentContact, setCurrentContact] = useState({ id: null, name: '', info: '' });

    const addContact = (contact) => {
        contact.id = contacts.length + 1;
        setContacts([...contacts, contact]);
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const editContact = (contact) => {
        setCurrentContact({ id: contact.id, name: contact.name, info: contact.info });
    };

    const updateContact = (updatedContact) => {
        setContacts(
            contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact))
        );
        setCurrentContact({ id: null, name: '', info: '' });
    };

    return (
        <div>
            <h1>Contacts</h1>
            <ContactForm
                addContact={addContact}
                currentContact={currentContact}
                updateContact={updateContact}
            />
            {contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    deleteContact={deleteContact}
                    editContact={editContact}
                />
            ))}
        </div>
    );
};

export default AllContactList;
*/


/*
import React, { useState } from 'react';

const Contact = ({ contact, onRemove, onEdit }) => (
  <div>
    <span>{contact.name}: {contact.phone}</span>
    <button onClick={() => onEdit(contact)}>Editați</button>
    <button onClick={() => onRemove(contact.id)}>Șterge</button>
  </div>
);

const AllContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (name, phone) => {
    setContacts(prevContacts => [
      ...prevContacts,
      { id: Date.now(), name, phone },
    ]);
  };

  const removeContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const editContact = (editedContact) => {
    setEditingContact(editedContact);
  };

  const updateContact = (id, updatedName, updatedPhone) => {
    setContacts(prevContacts => prevContacts.map(contact =>
      contact.id === id ? { ...contact, name: updatedName, phone: updatedPhone } : contact
    ));
    setEditingContact(null);
  };

  return (
    <div>
      {editingContact ? (
        <ContactForm
          initialName={editingContact.name}
          initialPhone={editingContact.phone}
          onSave={(name, phone) => updateContact(editingContact.id, name, phone)}
        />
      ) : (
        <ContactForm
          initialName=""
          initialPhone=""
          onSave={addContact}
        />
      )}
      {contacts.map(contact =>
        <Contact
          key={contact.id}
          contact={contact}
          onRemove={removeContact}
          onEdit={editContact}
        />
      )}
    </div>
  );
};

const ContactForm = ({ initialName, initialPhone, onSave }) => {
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone);

  const submit = (e) => {
    e.preventDefault();
    onSave(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nume"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon"
        required
      />
      <button type="submit">Salvați</button>
    </form>
  );
};

export default AllContactList;
*/





/*


import React, { useState } from 'react';

// Componenta pentru un singur contact
function Contact({ contact, onRemove, onEdit }) {
  return (
    <div>
      <h2>{contact.name}</h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      <button onClick={() => onRemove(contact.id)}>Șterge</button>
      <button onClick={() => onEdit(contact)}>Editează</button>
    </div>
  );
}

// Componenta principala
function AllContactList() {
  // Crearea starii pentru contacte
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  // Handler pentru a adauga contact
  const handleAddContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Handler pentru a edita contact
  const handleEditContact = (contact) => {
    setContacts(contacts.map((item) => (item.id === contact.id ? contact : item)));
    setEditingContact(null);
  };

  // Handler pentru a sterge contact
  const handleRemoveContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Lista de contacte</h1>

      {editingContact ? (
        <ContactForm 
          contact={editingContact}
          onSubmit={handleEditContact}
        />
      ) : (
        <ContactForm onSubmit={handleAddContact} />
      )}

      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onRemove={handleRemoveContact}
          onEdit={setEditingContact}
        />
      ))}
    </div>
  );
}

// Componenta pentru formularul de contact
function ContactForm({ contact, onSubmit }) {
  const isEdit = Boolean(contact);
  const [name, setName] = useState(isEdit ? contact.name : "");
  const [phone, setPhone] = useState(isEdit ? contact.phone : "");
  const [email, setEmail] = useState(isEdit ? contact.email : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: isEdit ? contact.id : Date.now(),
      name,
      phone,
      email,
    };

    onSubmit(newContact);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nume"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Telefon"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <button type="submit">{isEdit ? "Editează" : "Adaugă"}</button>
    </form>
  );
}

export default AllContactList;
*/


import React from "react";

import List from "@material-ui/core/List";

import ContactListItem from "./ContactListItem";

const ContactList = ({ list, value }) => {
  return (
    <>
      <List>
        {list &&
          list
            .filter(
              (f) =>
                f.name.toLowerCase().includes(value.toLowerCase()) ||
                f.name === ""
            )
            .map((person, key) => <ContactListItem item={person} key={key} />)}
      </List>
    </>
  );
};

export default ContactList;
