import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectItems, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const selectName = useSelector(selectNameFilter);

  const contacts = useSelector(selectItems);
  console.log(contacts);

  const sortedList = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(selectName.name.toLowerCase());
  });

  return (
    <>
      <ul className={css.contactsList}>
        <Contact contacts={sortedList} />
      </ul>
    </>
  );
};

export default ContactList;
