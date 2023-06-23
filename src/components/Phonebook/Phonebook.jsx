import { Component, React } from 'react';
import {
  AddBtn,
  AddInput,
  Contact,
  DelBtn,
  SearchInput,
  StyledForm,
} from './Phonebook.styled';
import { INIT_STATE } from './INIT_STATE';
import { Filter } from 'components/Filter/Filter';

import { AddContactForm } from 'components/AddForm/AddContactForm';

export class Phonebook extends Component {
  state = {
    contacts: [],
    ...INIT_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    this.setState(prewState => ({
      contacts: [
        ...this.state.contacts,
        {
          name: name.value,
          number: number.value,
          id: crypto.randomUUID(),
        },
      ],
      ...INIT_STATE,
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  filterContacts = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };
  delContact = id => {
    this.setState(prewState => ({
      contacts: prewState.contacts.filter(contact => contact.id !== id),
    }));
  };
  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
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
        {/* <AddContactForm cb={this.handleSubmit} /> */}
        {this.state.contacts.length === 0 ? (
          <h2>No contacts yet</h2>
        ) : (
          <>
            <Filter
              filter={'filter'}
              text={'text'}
              value={this.state.filter}
              cb={this.filterContacts}
            />
            {this.getFilteredContacts().map(({ name, id, number }) => (
              <Contact key={id}>
                {name}: {number}
                <DelBtn type="button" onClick={() => this.delContact(id)}>
                  Delete
                </DelBtn>
              </Contact>
            ))}
          </>
        )}
      </>
    );
  }
}
