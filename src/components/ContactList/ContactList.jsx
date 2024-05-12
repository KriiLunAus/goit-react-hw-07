import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectSortedList } from "../../redux/selectors";

const ContactList = () => {
  const sortedList = useSelector(selectSortedList);

  return (
    <>
      <ul className={css.contactsList}>
        <Contact contacts={sortedList} />
      </ul>
    </>
  );
};

export default ContactList;
