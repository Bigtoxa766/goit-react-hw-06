import { FaPhone } from "react-icons/fa";
import { MdOutlineMan } from "react-icons/md";
import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteUserContact } from "../../redux/contactSlice";

export const Contact = ({id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = dispatch(deleteUserContact(id));
  
  return (
    <div className={css.contact_wrapper}>
      <p className={css.contact_field}><MdOutlineMan className={ css.contact_icon} /> {name}</p>
      <p className={css.contact_field}> <FaPhone className={css.phone_icon} /> {number}</p>
      <button type="button" onClick={handleDelete}></button>
   </div>
 )
};
