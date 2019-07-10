import React, { Component } from 'react'
import './support.css'


class Support extends Component {
  constructor(props){
    super(props);
    this.state = {
      supports: [],
      isloading: false,
    };
  }
//test
//call api request to get all supports
componentDidMount(){
    this.setState({ isloading: true});
    fetch("http://localhost:5000/support")
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error("fetch to support api not working....")
        }
      })
      .then(data => this.setState({supports: data.supports, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}));
  }

  //filter supports based on choice selected in the dropdown menu

  filterSupports(supports, filterItem) {



  }

  render() {

    const {supports, isLoading} = this.state;

    if(isLoading){
      return <p>Loading...</p>
    }
      return (
        <div className="container">
          <h1>Support</h1>
          <h4>Find physicians and allied health professionals in your area</h4>

          <div className ="support-search-dr">
          <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              </div>
          </div>

          <div className="support-wrapper">

            {supports.map((support, key) => (
              <div key={support.id} className="support-item-box">
                <p className="support-name">{support.name}</p>
                <p className="support-description">{support.description}</p>
                <p className="support-phone">Phone Number:{support.phone}</p>
                <p className="support-website">Website: <a target="_blank" href="{support.website}" >{support.website}</a></p>
                <p className="support-address">Address: {support.street}, {support.city}, {support.province}, {support.country}</p>
              </div>
            ))}

          </div>
        </div>
      );
  }
}

export default Support;
