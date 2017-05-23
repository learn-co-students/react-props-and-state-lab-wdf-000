const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super();
    
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event){
    this.props.onChangeType(event.target.value) 
  } 
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.props.filters.type} onChange={this.handleFilterChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find Pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
