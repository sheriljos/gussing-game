import React from 'react';
import { Typography, Paper, Divider, Grid } from '@material-ui/core';
import Form from './components/Form';
import Progress from './components/Progress.js'
import Message from './components/Message.js'
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      initial: Math.floor(Math.random()*100),
      guess: undefined,
      allGuesses: [],
      attempt: 0,
      message: { value: 'Start the game', color: 'info' }
    };
  }

  updateAppState(guess) {
    if (guess > 100) {
      this.setState({
        message: { value: 'Shant be greater than 100', color: 'error'}
      })

      return;
    }

    this.setState(prevState => ({
      guess,
      attempt: prevState.attempt + 1,
      allGuesses: [...prevState.allGuesses, { guess }],
      message: this.getMessage(guess),
    }));
  }

  getMessage(guess) {
    const absoluteDifference = Math.abs(this.state.initial - guess)

    console.log(absoluteDifference)

    if (absoluteDifference === 0) {
      return { value: 'You won', color: 'success' };
    } else if (absoluteDifference <= 10) {
      return { value: 'Hot hot', color: 'info' };
    } else if (absoluteDifference > 10 && absoluteDifference <= 25) {
      return { value: 'Warm', color: 'warning' };
    } else {
      return { value: 'Cold', color: 'error' };
    }
  }

  render() {
    const { allGuesses, attempt, message } = this.state;
    
    const listItems = allGuesses.map((item, index) => 
      <span key={index}>
        <span>{ item.guess }</span>
      </span>
    );

    return(
      <Grid container style={{ height:'100vh' }} justify="center" alignItems="center">
        <Grid>
          <Paper style={{ padding: "20px" }} elevation={6}>
            <Typography variant="h4" align="center" gutterBottom>HOT OR COLD</Typography>
            <Divider style={{ margin: "20px 0"}}/>
            <Message message={ message }/>
            <Form returnGuessToApp={ guess => this.updateAppState(guess)}/>
            <Progress attempt={ attempt } listItems={ listItems }/>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default App;
