import React, { Component } from "react";
import "./style.scss";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseURL: 'http://jservice.io/',
      apiKey: 'api/random',
      question: '',
      answer: '',
      value: '',
      category: '',
      score: 0,
      isAnswer: false,
      trivia: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  async handleSubmit (event){
    event.preventDefault();
    try {
      const request = await fetch(`${this.state.baseURL}${this.state.apiKey}`)
      const response = await request.json();
      await this.setState({
        trivia: response
      })
    } catch (error) {
      console.log(error)
   
    }
  }
  toggleAnswer = () => {
    this.setState({
      isAnswer: !this.state.isAnswer})
  }  

  increase = () => {
    this.setState({
      score: this.state.score + this.state.trivia[0].value 
    })
  }

  decrease = () => {
    this.setState({
      score: this.state.score - this.state.trivia[0].value
    })
  }

  reset = () => {
    this.setState({
      score: 0
    })
  }

  render() {
    return (
      <>
        <div className="main-app">
          <header>
            <h1>Welcome to Jeopardy!</h1>
          </header>
          <div className="main-app__score">
            <h2><span>Score: {this.state.score}</span></h2>
          <div className="main-app_score--buttons">
            <button
              onClick={this.increase}
            >Increase</button>
            <button
              onClick={this.decrease}
            >Decrease</button>
            <button onClick={this.reset}>Reset</button>
          </div>
          </div>
          <div className="main-app__categoryIs">
            <h2>Let's Play</h2>
            <form onSubmit={this.handleSubmit} className="main-app__form">
          <input type="submit" value="Get Question"></input>
            </form>
            <h2>Category:</h2>
              <span className="main-app__categoryIs--span">
              {this.state.trivia[0]
              ? this.state.trivia[0].category.title 
              : ''
              }
              </span> 
            <h2>Points:</h2>
              <span className="main-app__categoryIs--span">
              {this.state.trivia[0] 
              ? this.state.trivia[0].value 
              : ''
              }
              </span> 
            <h2>Question:</h2>
              <span className="main-app__categoryIs--span">
              {this.state.trivia[0]
              ? this.state.trivia[0].question
              : ''
              }
            </span> 
          <button className="main-app__answer" 
            onClick={this.toggleAnswer}
          >Click to Reveal Answer</button>
            <h2>
             {this.state.isAnswer
             ? this.state.trivia[0].answer : ''}
            </h2>
          </div>
        </div>
      </>
      );
  }
}

export default App;
