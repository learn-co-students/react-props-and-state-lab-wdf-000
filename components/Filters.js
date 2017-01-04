const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeHandler(e){
    this.props.onChangeType(e.target.value)
  }

  clickHandler(e) {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.changeHandler}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.clickHandler}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
