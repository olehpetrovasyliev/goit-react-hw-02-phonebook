import { StyledAddForm } from './AddForm.styled';
import propTypes from 'prop-types';
import { AddContactInput } from './AddFormInpt/AddFormInput';
import { AddContactBtn } from './AddFormInpt/AddFormInput.styled';

export const AddContactForm = cb => {
  return (
    <StyledAddForm onSubmit={cb}>
      <label>
        Name
        <AddContactInput
          name={'name'}
          type={'text'}
          validator={
            "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          id={crypto.randomUUID}
          title={
            "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          }
          cb={this.handleChange}
          //   value=
        />
      </label>
      <label>
        Name
        <AddContactInput
          name={'number'}
          type={'tel'}
          validator={
            '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
          }
          id={crypto.randomUUID}
          title={
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          }
          cb={this.handleChange}
          //   value=
        />
      </label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </StyledAddForm>
  );
};

// AddInput
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.handleChange}
//               value={this.state.number}
