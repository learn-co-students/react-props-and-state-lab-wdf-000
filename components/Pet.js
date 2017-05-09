const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.adopt = this.adopt.bind(this)
  }

  adopt() {
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    const {name, gender, type, age, weight} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet {name} (gender: { gender === 'female' ? '♀' : '♂' } )</a>
          <div className="meta">
            <span className="date">Pet {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.props.isAdopted ?  <button className="ui disabled button" > Already adopted </button> : <button className="ui primary button" onClick={this.adopt}> Adopt Me </button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
