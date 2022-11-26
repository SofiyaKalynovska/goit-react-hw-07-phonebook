import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from '../components/Section/Section';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { MutatingDots } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && (
          <MutatingDots
            height="100"
            width="100"
            color="#5576a7"
            secondaryColor="#434687"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            margin="auto"
            visible={isLoading}
          />
        )}
        <ContactList />
      </Section>
    </>
  );
};
