
import ContactForm from '../contactform/ContactForm.jsx'
import SearchBox from '../searchbox/SearchBox.jsx'
import ContactList from '../contactlist/ContactList.jsx'

import './App.css'


function App() {
  
  
  return (
    <>
      <div>
  <h1>Phonebook</h1>
        <ContactForm  />
  <SearchBox />
        <ContactList  />
</div>

    </>
  )
}

export default App
