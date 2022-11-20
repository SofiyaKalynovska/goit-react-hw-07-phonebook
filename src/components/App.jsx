import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from '../components/Section/Section';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
