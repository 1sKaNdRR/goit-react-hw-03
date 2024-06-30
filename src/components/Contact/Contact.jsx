import css from "./Contact.module.css"
import { FaUser, FaPhoneAlt } from "react-icons/fa";
export default function Contact({id, number, name,onDelete }) {
    return (
        <div className={css.friendWrap}>
            <div>
            <p><FaUser />  {name} </p>
            <p><FaPhoneAlt />  {number} </p>
            </div>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}


