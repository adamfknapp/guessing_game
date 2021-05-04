
class Mybutton extends React.Component {
  
  
  render() {
    const increment = this.props.increment
    const decrement = this.props.decrement
    
    return (
      // onClick={ ()  => {this.handleClick()}}
      // onClick= {this.props.increment}   This works !!!!!
      // CSS based on https://tailwindcomponents.com/component/outline-button-with-hover-offset
      <button onClick={ ()  => {this.handleClick()}} class="my-3 mx-10 py-2 px-4 bg-white text-purple-800 font-semibold border border-purple-800 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"> {this.props.text} </button>
    );
  }
  // TODO-    Need to pass state up. Currently, each button has its own state.
  handleClick(){
    if (this.props.text === this.props.correct_answer){
      console.log(`correct ${this.props.text}`)
      this.props.increment()
    } else {
      console.log('incorrect')
      this.props.decrement()
    };
  }
// TO DO
// - prompt the user if they are correct
// - update the score
// - update the database with the users score

}


class Score extends React.Component {
  render() {
    return (
    <p class="text-xl font-medium text-white-500"> Current score: {this.props.score} </p>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: null,
      choice1: null,
      choice2: null,
      choice3: null,
      choice4: null,
      correct_answer: null,
      category: null,
      difficulty: null,
      score: 0
      };
  }

  increment = () => {
    console.log('+')
    this.setState({
      score: this.state.score + 1
    });
  };

  decrement = () => {
    console.log('-')
    this.setState({
      score: this.state.score - 1
    });
  };



  componentDidMount() {
    // Simple GET request using fetch
    fetch(`/questions`)
        .then(response => response.json())
        .then((data)=>{
          console.log(data)
          this.setState({
              question: data[0]['question'],
              correct_answer: data[0]['correct_answer'],
              choice1: data[0]['choice1'],
              choice2: data[0]['choice2'],
              choice3: data[0]['choice3'],
              choice4: data[0]['choice4'],
            })
      });
    }

    
  
  render() {
    
    const choice1 = this.state.choice1;
    const choice2 = this.state.choice2;
    const choice3 = this.state.choice3;
    const choice4 = this.state.choice4;
    const score = this.state.score;
    const correct_answer = this.state.correct_answer;
    // const decrement = this.decrement
    // const increment = this.increment

    return (
  
    <div class="bg-gradient-to-b from-blue-400 to-blue-900">
      <div class="flex flex-col h-screen justify-center items-center">

        <div>
            <h2 class=" text-gray-50 text-6xl font-semibold text-center p-20">  {this.state.question} </h2>
        </div>

        <div>
          <div>
              <Mybutton 
                text={choice1} 
                score ={score}
                correct_answer={correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                />
   
              <Mybutton 
                text={choice2} 
                score ={score}
                correct_answer={correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                />

          </div>

          <div>
              <Mybutton 
                text={choice3} 
                score ={score}
                correct_answer={correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                />

              <Mybutton 
                text={choice4}
                score ={score} 
                correct_answer={correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                />

          </div>

          <div>
            <Score score={this.state.score}/>
          </div>
          
        </div>
      </div>
    </div>
    );
    }



    
}


ReactDOM.render(
    <App />, 
    document.querySelector("#app"));