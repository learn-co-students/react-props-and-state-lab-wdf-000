const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    const gender = this.props.pet.gender[0];
    var genderIcons = {'m': '♂', 'f': '♀'};
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} ({genderIcons[gender]})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={this.clickHandler}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
