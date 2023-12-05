import React from 'react';

const Contact = ({ contact, deleteContact, editContact }) => (
    <div>
        <h2>{contact.name}</h2>
        <p>{contact.info}</p>
        <button onClick={() => deleteContact(contact.id)}>Delete</button>
        <button onClick={() => editContact(contact)}>Edit</button>
    </div>
);

export default Contact;
