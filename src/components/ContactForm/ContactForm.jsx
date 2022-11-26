import { useState } from 'react';
import { Form, InputName, Input, AddContact } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
    }
    setName('');
    setPhone('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
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
        value={phone}
        onChange={handleChange}
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <AddContact type="submit">Add contact</AddContact>
    </Form>
  );
};

export default ContactForm;
