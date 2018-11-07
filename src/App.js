import React, { Component } from 'react';
import './App.css';
import Left from './view/Left';
import Right from './view/Right';
import axios from 'axios';
import './mock/mock';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      data:{},
      leftData:[],
      rightData:[]
    }
  }
  getCar=(car)=>{
    let{data}=this.state;
    this.setState({
      rightData:data[car]
    })
  }
  componentDidMount(){
    axios.get('/data').then(res=>{
      this.setState({
        data:res.data.data,
        leftData:Object.keys(res.data.data)
      })
    })
  }
  render() {
    let {leftData,rightData}=this.state;
    return (
      <div className="App">
          <Left data={leftData} getCar={this.getCar}/>
          <Right rightData={rightData}/>
      </div>
    );
  }
}

export default App;
