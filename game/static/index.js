

class Mybutton extends React.Component {
  render() {
    return (
      // Based on https://tailwindcomponents.com/component/outline-button-with-hover-offset
      <button class="my-3 mx-10 py-2 px-4 bg-white text-purple-800 font-semibold border border-purple-800 rounded hover:bg-purple-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"> {this.props.text}</button>
    );
  }
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
      curscore: null
    };
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch(`/questions`)
        .then(response => response.json())
        .then((data)=>{
          this.setState({
              question: data[0]['question'],
              choice1: data[0]['choice1'],
              choice2: data[0]['choice2'],
              choice3: data[0]['choice3'],
              choice4: data[0]['choice4'],
            })
      });

  render() { 
    return (
    <div class="bg-gradient-to-b from-blue-400 to-blue-900">
      <div class="flex flex-col h-screen justify-center items-center">

        <div>
            <h2 class=" text-gray-50 text-6xl font-semibold text-center">  {this.state.question} </h2>
        </div>

        <div>
          <div>
              <Mybutton text={this.state.choice1}/>
              <Mybutton text={this.state.choice2} />
          </div>

          <div>
              <Mybutton text={this.state.choice3}/>
              <Mybutton text={this.state.choice4} />
          </div>

          <div>
            <Score score={this.state.curscore}/>
          </div>
          
        </div>
      </div>
    </div>
    );
    }

    
    // inputKeyPress =(event)=>{
    //   if(event.key === 'Enter'){
    //     const answer = parseInt(this.state.response);
    //     if (answer === this.state.num1 + this.state.num2){
    //         this.setState(state => ({
    //           score: state.score +1,
    //           response: "",
    //           num1: Math.ceil(Math.random() * 10),
    //           num2: Math.ceil(Math.random() * 10)
    //         }));
    //     }else{
    //       this.setState(state => ({
    //         score: state.score -1,
    //         response: "",
    //       }));
    //     }
    //   }
    // }

    // updateResponse = (event) => {
    //   this.setState({
    //     response: event.target.value
    //   });
    // }
  
}


ReactDOM.render(
    <App />, 
    document.querySelector("#app"));