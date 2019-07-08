import React, { Component } from 'react'


class Support extends Component {

  state = {
    data: {}
  };

  componentDidMount(){
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express}))
    .catch(err => console.log(err))
  }

  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if(response.status !== 200){
      throw Error(body.message)
    }
    return body;
  }


  render(){
    return (
      <div><h1>Support Page</h1></div>
    )
  }

}

export default Support
