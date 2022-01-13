import React, { Component } from 'react';
import { Input } from 'reactstrap';

export default class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      results: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: '',
    };
  }

  changeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });   
    let newArray = this.state.things.filter(thing => thing.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    this.setState({
      results: newArray,
    });
  }

  render() {
    return (
      <div>
        <Input type="text" value={this.state.searchTerm} placeholder='Search Here' onChange={(event) => this.changeHandler(event)} />
        <h3>Results:</h3>
        <ul>
          {this.state.results.map((result) => {
            return (<li>{result}</li>);
          })}
        </ul>
      </div>
    )
  }
}