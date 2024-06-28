import css from "./Contact.module.css"
import { FaUser, FaPhoneAlt } from "react-icons/fa";
export default function Contact({ friends }) {
    return (
        <div className={css.friendWrap}>
            <div>
            <p><FaUser />  {friends.name} </p>
            <p><FaPhoneAlt />  {friends.number} </p>
            </div>
            <button className={css.button} >Delete</button>
        </div>
    );
}


