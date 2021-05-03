
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      choice1: "choice 1",
      choice1: "choice 1",
      choice1: "choice 1",
      choice1: "choice 1",
      question: ""
      response: "",
      score: 0
    };
  }
  
  render() { 
    
    if (this.state.score === 3){
      return(
        <div>You Win!</div>
      )
    }
    
    return (
        <div> 
          <div>{this.state.num1}+{this.state.num2}</div>
          <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} class="bg-gray-300" value= {this.state.response}/>
          <div> Score: {this.state.score}</div>  
          <div> You typed: {this.state.response}</div>
        </div>  
      );
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