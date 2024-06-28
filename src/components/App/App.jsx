import ContactForm from "../ContactForm/ContactForm"
import css from "./App.module.css"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import friends from "../friends.json/"
import { useState } from "react"

export default function App() {

const [friend, setFriend] = useState(friends);
  const [filter, setFilter] = useState('');

  
  const addFriend = (newFriend) => {
    setFriend((prevFriend) => {
      return [...prevFriend, newFriend];
    });
  };

  const deleteFriend = (friendId) => {
    setFriend((prevFriend) => {
      return prevFriend.filter((friend) => friend.id !== friendId);
    });
  };

  const visibleFriend = friend.filter((friend) =>
    friend.text.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className={css.card}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addFriend}/>
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList friends={ visibleFriend} onDelete={deleteFriend} />
    </div>
  )
}
