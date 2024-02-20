
import css from './App.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';

function App() {  
  return (
    <>
      <div className={css.form_container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBar />
      </div>
      
      <ContactList />
    </>
)
}

export default App
