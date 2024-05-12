import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(({ id, name, number }) => {
        return (
          <li id={id} className={css.contact}>
            <div>
              <p>
                {" "}
                <IoPerson /> {name}
              </p>
              <p>
                {" "}
                <FaPhoneAlt /> {number}
              </p>
            </div>
            <button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Contact;
