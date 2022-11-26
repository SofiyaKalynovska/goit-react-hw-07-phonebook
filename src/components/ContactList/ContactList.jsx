import { ContactsList, ListItem, DeleteBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContacts = contacts.filter(
    contact => contact.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  return (
    <ContactsList>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
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
