import { Component, React } from 'react';
import {
  AddBtn,
  AddInput,
  Contact,
  SearchBtn,
  SearchInput,
  StyledForm,
} from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findContacts = () => {
    console.log(1);
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
        <StyledForm onSubmit={this.handleSubmit}>
          <label>
            Name
            <AddInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <AddInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <AddBtn type="submit">Add contact</AddBtn>
        </StyledForm>
        {this.state.contacts.length === 0 ? (
          <h2>No contacts yet</h2>
        ) : (
          this.state.contacts.map(contact => {
            <Contact key={contact.id}>
              {contact.name}: {contact.number}
            </Contact>;
          })
        )}
        <Contact>1</Contact>
      </>
    );
  }
}
