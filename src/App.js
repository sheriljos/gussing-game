import React from 'react';
import { Typography, Paper, Divider, Grid } from '@material-ui/core';
import Form from './components/Form';
import Progress from './components/Progress.js'
import Message from './components/Message.js'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      initial: Math.floor(Math.random()*100),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      message: 'Start playing'
    };
  }

  updateAppState(guess) {
    this.setState(prevState => ({
      guess,
      attempt: prevState.attempt + 1,
      allGuesses: [...prevState.allGuesses, { guess }],
      message: this.getMessage(guess)
    }));
  }

  getMessage(guess) {
    const absoluteDifference = Math.abs(this.state.initial - guess)

    if (absoluteDifference == 0) {
      return 'Yay you won';
    } else if (absoluteDifference <= 5) {
      return 'Very hot';
    } else if (absoluteDifference > 5 && absoluteDifference <= 10) {
      return 'Hot hot';
    } else if (absoluteDifference > 10 && absoluteDifference <= 25) {
      return 'warm';
    } else {
      return 'cold';
    }
  }

  render() {
    const { allGuesses, attempt, message } = this.state;
    
    const listItems = allGuesses.map((item, index) => 
      <li key={index}>
        <span>{ item.guess }</span>
      </li>
    );

    return(
      <Grid container style={{ height:'100vh' }} justify="center" alignItems="center">
        <Grid>
          <Paper style={{ padding: "20px" }} elevation={6}>
            <Typography variant="h4" align="center" gutterBottom>HOT OR COLD</Typography>
            <Divider style={{ margin: "20px 0"}}/>
            <div>{ message }</div>
            <Form returnGuessToApp={ guess => this.updateAppState(guess)}/>
            <Progress attempt={ attempt } listItems={ listItems }/>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default App;
