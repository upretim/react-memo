import React, {Component} from 'react';
import FunctionalComp from './component/functionalComp';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      val:1
    }
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({val:1})
    },5000);
  }
  render(){
    return (
      <div className="App">
     <FunctionalComp val= {this.state.val}></FunctionalComp>
      </div>
    )
  }
 ;
}

export default App;
