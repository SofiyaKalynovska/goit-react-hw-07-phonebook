import { ContactsList, ListItem, DeleteBtn } from './ContactList.styled';
import PropTypes from 'prop-types';

export default function ContactList({ contactsList, deleteContact }) {
  return (
    <>
      <ContactsList>
        {contactsList.map(contact => (
          <ListItem key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteBtn>
          </ListItem>
        ))}
      </ContactsList>
    </>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};