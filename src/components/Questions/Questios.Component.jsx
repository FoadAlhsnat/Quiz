import React, { Component } from 'react'
import Answer from '../Answer/Answer.component';

export default class Questios extends Component {
    state={qus:this.props.qus,
        counter:0}
    componentDidUpdate(pP){
      //console.log(pP.props+' '+this.props.qus);
      if(this.props.qus.question!==pP.qus.question){
        console.log(pP);
        this.setState({qus:this.props.qus})
      }
    }
    randdomarr(){
      let arr=[...this.state.qus.incorrect_answers,this.state.qus.correct_answer]
      for(let i=0;i<arr.length;i++){
        let rand=Math.floor(Math.random()*arr.length)
        let temp=arr[i]
        arr[i]=arr[rand]
        arr[rand]=temp
      }
      return arr;
    }
    clicked=(ans)=>{
      this.setState({counter:this.state.counter+1})
      if(ans===this.state.qus.correct_answer){
        this.props.newqus(true)
      }
      else{
        this.props.newqus(false)
      }

    }
  render() {
    console.log( this.props.qus);
    return (
      <div>
        <div>
        {
          this.state.counter+1+'.'
        }
        {
            ' '+this.state.qus.question   
        }
        </div>
       <div className="answers">
        {
          this.randdomarr().map((ans,i)=><Answer key={i} clickone={this.clicked} ans={ans}/>)
        }
       </div>
      </div>
    )
  }
}
