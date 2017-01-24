const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();

    this.handleAdoption = this.handleAdoption.bind(this);
  }

  handleAdoption(event) {
    this.props.onAdoptPet(this.props.pet.id);
  }


  render() {
    const { name, gender, type, age, weight } = this.props.pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet { name } (gender: { gender === 'male' ? '♂' : '♀' })</a>
          <div className="meta">
            <span className="date">Pet type: { type }</span>
          </div>
          <div className="description">
            <p>Age: { age }</p>
            <p>Weight: { weight }</p>
          </div>
        </div>
        <div className="extra content">
          { !this.props.isAdopted ? <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button> : <button className="ui disabled button">Already adopted</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;