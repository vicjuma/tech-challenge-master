import React from 'react'
import './App.css';
import CheckBlockContainer from './components/CheckBlockContainer';

class App extends React.Component {
  // initializing the state with an object of property quizes and an empty array as the value
  state = {
    quizes: []
  }

  componentDidMount() {
    // web cycle hook being run anytime the component is render. 
    //The best place to place a network call
    fetch('http://localhost:5000/knowledge-check-blocks') //using fetch api to fetch data from backend
    .then((response) => response.json())
    .then(data => {
        this.setState({ quizes: data }); //setting the state with the received data
    });
  }
  render() { 
    
    return ( 
      <div className="App">
        {/* mapping the received arrays with the functional map method
        with a key which I added in the server object (index.js on server folder) */}
        {/* Passing question to props to be used by the child component (CheckBlockContainer) */}
        {this.state.quizes.map(quiz => <CheckBlockContainer key={quiz.id} question={quiz} />)}
      </div>
     );
  }
}
 
export default App;