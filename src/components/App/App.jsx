import ContactForm from "../ContactForm/ContactForm"
import css from "./App.module.css"

function App() {
  return (
    <div className={css.card}>
      <h1>Phonebook</h1>
      <ContactForm/>
    </div>
  )
}

export default App
