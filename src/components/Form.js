import React from 'react';
import { TextField, Button } from '@material-ui/core';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            guess_what: "",
        }
    }

    changeHandler(e) {
        e.preventDefault();

        this.setState({
            guess_what: e.target.value
        })
    }

    onSubmit(e, returnGuessToApp) {
        e.preventDefault();
        const guess = e.target.elements.guess_what.value;
                                     //element name
        returnGuessToApp(guess);
        this.setState({
            guess_what: ""
        })
    }

    render() {
        const { returnGuessToApp } = this.props

        return(
            <form onSubmit={ e => this.onSubmit(e, returnGuessToApp) }>
                <TextField
                    style={{ paddingBottom: '40px'}}
                    required
                    fullWidth
                    onChange={ e => this.changeHandler(e) }
                    value={ this.state.guess_what }
                    id="standard-basic" 
                    name="guess_what"
                    label="Guess what??" 
                    type="number"/>
                <Button
                    fullWidth
                    name="button"
                    type="submit"
                    variant="contained" 
                    color="primary">
                    Guess a number
                </Button>
            </form>
        ); 
    }
}

export default Form;