import React, { Component } from 'react'

export class Answer extends Component {
  state={
    ans:this.props.ans
  }
  // componentDidUpdate(pP){
  //   if(pP!==this.props.ans){
  //     this.setState({ans:this.props.ans})
  //   }
  // }
  checkans=(e)=>{
  this.props.clickone(e.target.value)
  }
  render() {
    return (
      <div>
        <input type="button" onClick={this.checkans} value={this.props.ans}/>
      </div>
    )
  }
}

export default Answer
