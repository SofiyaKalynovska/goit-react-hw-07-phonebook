import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, InputName, Input, AddContact } from './ContactForm.styled';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ id, name, number });

    setId('');
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    setId(nanoid());
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputName>Name</InputName>
      <Input
        type="text"
        value={name}
        onChange={handleChange}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputName>Number</InputName>
      <Input
        type="tel"
        value={number}
        onChange={handleChange}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
