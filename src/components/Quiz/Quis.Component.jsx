import axios from 'axios'
import React, { Component } from 'react'
import Questios from '../Questions/Questios.Component'


export class Quis extends Component {
  state = {
    listOfQuestion: [],
    Qnumber:0,
    point:0,
    step:0
  }
  async componentDidMount() {
    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
    this.setState({
      listOfQuestion:res.data.results,
      step:1
      })
  }
  newqus=(ans)=>{
    if(ans){
      this.setState({point:this.state.point+10})
    }
    if(this.state.Qnumber===this.state.listOfQuestion.length-1){
      this.setState({step:3})
    }
    this.setState({Qnumber:this.state.Qnumber+1})
    console.log('point: '+this.state.point);
  }
  render() {
    switch(this.state.step){
      case 0:
        return(
          <div className="cont">
              <div>loading</div>
          </div>
        
        )
      case 1:
        return(
          <div className="cont">
            <Questios newqus={this.newqus} qus={this.state.listOfQuestion[this.state.Qnumber]} />
          </div>
          
        )  
      case 3:
        return <div className="cont"><div>{this.state.point}</div></div>   
    }
  }
}

export default Quis
