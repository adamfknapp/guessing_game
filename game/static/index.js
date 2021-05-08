
// TODO Move to new file
class Mybutton extends React.Component {

  render() {
    const button_cls = "my-3 mx-10 py-2 px-4 bg-white text-purple-800 font-semibold border border-purple-800 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
    return (
      <button onClick={ ()  => {this.handleClick()}} class={`${button_cls}`} > {this.props.text} </button>
    );
  }

  handleClick(){
    if (this.props.text === this.props.correct_answer){
      this.props.increment()
    } else {
      this.props.decrement()
    };
    
    this.props.get_question()
  }
}


// TODO Move to new file
class Score extends React.Component {
  render() {
    return (
      <div>
      <p class="text-2xl font-medium text-white"> Score: {this.props.score} </p>
      <p class="text-2xl font-medium text-white"> {this.props.quesitons_answered} of {this.props.max_questions}</p>
      </div>
    
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quesitons_answered: 0,
      max_questions: 3,
      question: null,
      choice1: null,
      choice2: null,
      choice3: null,
      choice4: null,
      correct_answer: null,
      category: null,
      difficulty: null,
      avg_score: null,
      num_games: null,
      score: 0
      };
  }


  increment = () => {
    this.setState({
      score: this.state.score + 1,
      quesitons_answered: this.state.quesitons_answered + 1
    });
  };


  decrement = () => {
    this.setState({
      quesitons_answered: this.state.quesitons_answered + 1
    });
  };


  handle_game_over = () => {
    fetch('/questions', {
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
        "score": this.state.score,
        "max_questions": this.state.max_questions
       })
      });
  }

  get_question = () => {
    fetch(`/questions`)
        .then(response => response.json())
        .then((data)=>{
          this.setState({
              question: data[0]['question'],
              correct_answer: data[0]['correct_answer'],
              choice1: data[0]['choice1'],
              choice2: data[0]['choice2'],
              choice3: data[0]['choice3'],
              choice4: data[0]['choice4'],
              avg_score: data[0]['avg_score'],
              num_games: data[0]['num_games']
            })
      });
  }


  componentDidMount() {
    this.get_question()
    }

    
  
  render() {

    // Check if max questions reached
    if (this.state.quesitons_answered === this.state.max_questions){
      
      // Log the outcome of the game
      this.handle_game_over() 

      const positive_score_class = "bg-gradient-to-b from-green-400 to-green-900"
      const negative_score_class = "bg-gradient-to-b from-red-400 to-red-900"
      const avg_corr_ans = Math.round( this.state.avg_score * this.state.max_questions )

      const score_is_bel_avg = this.state.score < avg_corr_ans
      
      const avg_corr_ans_1 = avg_corr_ans === 1
      const button_cls = "my-3 mx-10 py-2 px-4 bg-white text-purple-800 font-semibold border border-purple-800 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
   
      return (
        <div class={`${ score_is_bel_avg ? negative_score_class : positive_score_class}`}>
          <div class="flex flex-col h-screen justify-center items-center">
            <h2 class=" text-gray-50 text-6xl font-semibold text-center p-20">  
              Final score: {this.state.score}
            </h2>

            <h4 class=" text-gray-50 text-2xl font-semibold text-center p-20">
              You scored {score_is_bel_avg ? ' below ' : ' on or above '} average
            </h4>

            <h5 class=" text-gray-50 text-xl font-semibold text-center p-20">
              Out of {this.state.num_games} games played, on average {avg_corr_ans} 
              { avg_corr_ans_1 ? ' question was ': ' questions were ' } answered correctly.
            </h5>
            
            <button class={`${button_cls}`}> Play Again! </button>


          </div>

        </div>
      );
    }

    // Display question
    return (
  
    <div class="bg-gradient-to-b from-blue-400 to-blue-900">
      <div class="flex flex-col h-screen justify-center items-center">

        <div>
            <h2 class=" text-gray-50 text-6xl font-semibold text-center p-20">  {this.state.question} </h2>
        </div>

        <div>
          {/* TODO These buttons should use a map function to be more concise */}
          <div>

              <Mybutton 
                text={this.state.choice1} 
                correct_answer={this.state.correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                get_question ={this.get_question}
                />
   
              <Mybutton 
                text={this.state.choice2} 
                correct_answer={this.state.correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                get_question ={this.get_question}
                />

          </div>

          <div>
              <Mybutton 
                text={this.state.choice3} 
                correct_answer={this.state.correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                get_question ={this.get_question}
                />

              <Mybutton 
                text={this.state.choice4}
                correct_answer={this.state.correct_answer} 
                decrement = {this.decrement}
                increment = {this.increment}
                get_question ={this.get_question}
                />

          </div>

          <div>
            <Score 
                score={this.state.score}
                quesitons_answered = {this.state.quesitons_answered}
                max_questions = {this.state.max_questions}
                />
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