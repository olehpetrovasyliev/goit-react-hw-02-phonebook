import { Component } from 'react';
import { SearchBtn, SearchInput, StyledForm } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.setState(
      prewState => (prewState.contacts = [...prewState.contacts, newContact])
    );
  };
  findContacts = e => {
    this.setState(prewState =>
      prewState.contacts.filter(contact =>
        contact.name.includes(e.target.value)
      )
    );
  };
  delContact = id => {
    this.setState(
      prewState =>
        (prewState.contacts = prewState.contacts.filter(
          contact => contact.id !== id
        ))
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <StyledForm>
          <label>
            Name
            <SearchInput />
          </label>
          <label>
            Number
            <SearchInput />
          </label>
          <SearchBtn type="button" />
        </StyledForm>
      </>
    );
  }
}
