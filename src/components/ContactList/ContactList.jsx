import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
export default function ContactList({friends, onDelete}) {
    return (
        <div>
            <ul className={css.card}>
                {friends.map(friend => (
                    <li className={css.cardWrap} key={friends.id}>
                        <Contact friends={friend} onDelete={ onDelete} />
                </li>
            ))}
        </ul>
            
        </div>
    )
}
