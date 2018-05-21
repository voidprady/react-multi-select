import React, { Component } from 'react';

class InputDropdown extends Component {
  constructor(props){
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.createList = this.createList.bind(this);
  }
  createList() {
    let options = [];
    for (let item of this.props.data) {
      if(item.selected == false){
        options.push(<li key={item.value} value={item.value}><a>{item.value}</a></li>);
      }
    }
    return options;
  }
  handleKeyUp() {
   let input, inputArr, filter, ul, li, a, i;
   input = document.getElementById('myInput');
   inputArr = input.value.split(',');
   filter = inputArr[inputArr.length-1].toUpperCase();
   ul = document.getElementById("myUL");
   li = ul.getElementsByTagName('li');
   ul.style.visibility = 'visible';
   this.props.data.filter((obj,index)=>obj.selected == false).filter((obj,index)=>{
     a = li[index].getElementsByTagName("a")[0];
     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
       li[index].style.display = "";
     } else {
       li[index].style.display = "none";
     }
   })
  }
  updateInput() {
    let input = document.getElementById('myInput');
    input.value = '';
    this.props.data.forEach((obj, index)=> {
      if (obj.selected == true) {
        input.value += obj.value+',';
      }
    })
  }
  componentWillUpdate(){
    this.updateInput();
  }
  showHideList(){
    let ul = document.getElementById('myUL');
    if(ul.style.visibility == 'visible'){
      ul.style.visibility = 'hidden';
    }else{
      ul.style.visibility = 'visible';
    }
  }
  render() {
    return(
      <div className = "card">
      <div className="card-body">
      <input type="text" id="myInput" onKeyUp={this.handleKeyUp} onClick={this.showHideList} onKeyDown={this.props.clickListHandler} placeholder="Search for names.."/>
      <ul id="myUL" onClick={this.props.clickListHandler}>
      {this.createList()}
      </ul>
      </div>
      </div>
    )
  }
}

export default InputDropdown;
