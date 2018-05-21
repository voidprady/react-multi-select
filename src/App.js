import React, { Component } from 'react';
import './App.css';
import InputDropdown from './components/InputDropdown';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names : [
        {value:"Nick",selected:false},
        {value:"Naray",selected:false},
        {value:"Mary",selected:false},
        {value:"Poppins",selected:false},
        {value:"Meg",selected:false},
        {value:"peter",selected:false},
        {value:"mat",selected:false},
        {value:"joe",selected:false},
        {value:"ron",selected:false},
        {value:"jill",selected:false},
        {value:"jack",selected:false},
        {value:"tony",selected:false},
        {value:"bruce",selected:false},
      ]
    };
    this.updateSelected = this.updateSelected.bind(this);

  }
  updateSelected(event) {
    let target = event.target;
    let arr = this.state.names;
    let ind = -1;
    if(target.tagName == 'A') {
      let selectedName = target.innerHTML;
      arr.forEach((obj,index)=>{
        if (obj.value.toUpperCase() == selectedName.toUpperCase()) {
          ind = index;
        }
      });
      if(ind!=-1) {
        arr[ind]['selected'] = true;
        this.setState({names:arr});
      }
    }
    if(event.keyCode === 8 && target.tagName == "INPUT"){
      var values = document.getElementById("myInput").value.split(',');
      var selectedName = "";
      if(values[values.length-1].length !=0){
        selectedName = values[values.length-1];
        arr.forEach((obj,index)=>{
          if (obj.value.toUpperCase() == selectedName.toUpperCase()) {
            ind = index;
          }
        });
      }
      if((ind!=-1) && (arr[ind]['selected']==true)) {
        arr[ind]['selected'] = false;
        this.setState({names:arr});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Multi Select</h1>
        </header>
        <div className="App-intro">
          <InputDropdown data={this.state.names} clickListHandler={this.updateSelected}/>
        </div>
      </div>
    );
  }
}

export default App;
