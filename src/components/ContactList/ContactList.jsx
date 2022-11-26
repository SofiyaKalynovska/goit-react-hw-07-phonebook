import { ContactsList, ListItem, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <ContactsList>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.phone}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ListItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
