import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import {useTracker} from 'meteor/react-meteor-data';

// Contact: Name, email, imageURL
export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();  //Tracker
    })
    return (
        <div>
            <h1>Contact List</h1>
            {contacts.map(contact => (
                <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        </div>
    )
}