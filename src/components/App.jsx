import { Component } from 'react';
export class App extends Component {
  state = {
    contacts: ['Rosie Simpson', 'Hermoine Kline', 'Eden Clements'],
    name: '',
    number: '',
  };
  handleChangeName = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };
  handleChangeNumber = e => {
    this.setState({ number: e.target.value });
    console.log(this.state.number);
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    /*   this.setState({
      contacts: [...this.state.contacts, `${name} ${number}`],
      name: '',
      number: '',
    }); */
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={name}
              onChange={this.handleChangeName}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChangeNumber}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact}>{contact}</li>
          ))}
        </ul>
      </>
    );
  }
}
