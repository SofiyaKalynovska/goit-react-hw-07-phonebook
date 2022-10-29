import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from '../components/Section/Section';
import Filter from './Fitler/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts') ?? '');
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContacts = ({ id, name, number }) => {
    if (contacts.some(e => e.name === name)) {
      alert(`${name} is alredy in contacts`);
    } else {
      setContacts([...contacts, { id, name, number }]);
    }
  };

  const renderContactsList = () => {
    return filter === ''
      ? contacts
      : contacts.filter(
          contact =>
            contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
  };

  const handleFilter = evt => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };

  const deleteContach = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleContacts} />
      </Section>
      <Section title="Contacts">
        <Filter handleFilter={handleFilter} />
        <ContactList
          contactsList={renderContactsList()}
          deleteContact={deleteContach}
        />
      </Section>
    </>
  );
}
