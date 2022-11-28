import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from '../components/Section/Section';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';
import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#33415c"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={isLoading}
          />
        )}
        <ContactList />
      </Section>
    </Container>
  );
};
