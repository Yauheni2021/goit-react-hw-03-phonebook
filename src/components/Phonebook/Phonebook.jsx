import { PropTypes } from "prop-types";
import { nanoid } from "nanoid";
import { Component } from "react";
import {
    Form,
    Label,
    Input,
    Button,
} from './Phonebook.styled';

const INIT_VALUES = {
    number: '',
    name: '',

}

export class ContactForm extends Component {
    state = { ...INIT_VALUES };

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        const { onAddContact } = this.props
        e.preventDefault();
        onAddContact({ ...this.state, id: nanoid(10) })
        this.reset();
    };

    reset = () => {
        this.setState({ ...INIT_VALUES });
    };

    render() {
        const { name, number } = this.state;
        return (
            <Form autoComplete='off' onSubmit={this.handleSubmit}>
                <Label htmlFor='name'>
                    Name:
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    >
                    </Input>
                </Label>
                <Label htmlFor="number">
                    Number:
                    <Input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    >
                    </Input>
                </Label>
                <Button type="submit">Add Contact</Button>
            </Form>
        );
    }
};