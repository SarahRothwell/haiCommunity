import React, { Component } from 'react'

class Support extends Component {
  constructor(props){
    super(props);
    this.state = {
      supports: []
    };
  }

//fetch request to get all supports
  callAPI(){
    fetch("http://localhost:5000/support")
      .then(res =>
        res.json())
        //something is wrong with line 17**************
      .then(supports => {
        this.setState({supports: supports})
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillMount(){
    this.callAPI();
  }

  render() {
      return (
        <div className="App">
          <h1>List of Supports</h1>
          <div>
            {this.state.supports.map((support, key) => (
              <div key={support.id}>{support.name}</div>
            ))}
          </div>
        </div>
      );
  }
}

export default Support;
