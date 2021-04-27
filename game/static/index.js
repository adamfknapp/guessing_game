class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      question: "What is Darla?",
      Answer: "Dog",
      choice1: "Cat",
      choice2: "Monkey",
      choice3: "Horse",
      score: 0
    };
  }
  
  render() { 
    
    return (
      <div class="bg-gradient-to-b from-blue-400 to-blue-900">
        <div class="flex h-screen justify-center items-center">
          
            
          <h2 class="text-gray-50 text-8xl font-semibold"> {this.state.question} 
          </h2>
        
        <div>
        <button class="text-xl font-medium text-white-500">{this.state.Answer}</button>
        <button class="text-xl font-medium text-white-500">{this.state.choice1}</button>
        <button class="text-xl font-medium text-white-500">{this.state.choice2}</button>
        <button class="text-xl font-medium text-white-500">{this.state.choice3}</button>

        </div>
        
            
          
        </div>
      </div>
    );

        // <div className="container mx-auto w-1/2"> 

        //   <div>
        //     <div className="bg-indigo-50 p-10 w-1/2">
        //       <h1>{this.state.question}</h1>
        //     </div>
        //   </div>

        //   <button>{this.state.Answer}</button>
        //   <button>{this.state.choice1}</button>
        //   <button>{this.state.choice2}</button>
        //   <button>{this.state.choice3}</button>
        //   <div> Score: {this.state.score}</div>  
        // </div>  
      //);
    }

    inputKeyPress =(event)=>{
      if(event.key === 'Enter'){
        const answer = parseInt(this.state.response);
        if (answer === this.state.num1 + this.state.num2){
            this.setState(state => ({
              score: state.score +1,
              response: "",
              num1: Math.ceil(Math.random() * 10),
              num2: Math.ceil(Math.random() * 10)
            }));
        }else{
          this.setState(state => ({
            score: state.score -1,
            response: "",
          }));
        }
      }
    }

    updateResponse = (event) => {
      this.setState({
        response: event.target.value
      });
    }
  
}


ReactDOM.render(
    <App />, 
    document.querySelector("#app"));