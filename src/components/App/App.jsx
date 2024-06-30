import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import friends from "../friends.json";
import { useState, useEffect } from "react";

export default function App() {
  const [friend, setFriend] = useState(() => {
    const savedFriends = localStorage.getItem("friends");
    return savedFriends ? JSON.parse(savedFriends) : friends;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friend));
  }, [friend]);


  const addFriend = (newFriend) => {
    setFriend((prevFriends) => {
      return [...prevFriends, { ...newFriend, id: Date.now() }];
    });
  };

  const deleteFriend = (friendId) => {
    setFriend((prevFriends) => {
      return prevFriends.filter((friend) => friend.id !== friendId);
    });
  };

  const visibleFriends = friend.filter((friend) =>
    friend.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.card}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addFriend} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList friends={visibleFriends} onDelete={deleteFriend} />
    </div>
  );
}
