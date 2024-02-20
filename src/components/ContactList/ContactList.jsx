import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"
import { useSelector } from 'react-redux';
import {getContacts} from '../../redux/selector'


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filters);

  const filtredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <ul className={css.contact_list}>
      {filtredContacts.map((item) => {
        return (<li className={css.contact_item} key={item.id}>
          <Contact name={item.name} number={item.number} />
        </li>)
      })}
    </ul>
  )
};