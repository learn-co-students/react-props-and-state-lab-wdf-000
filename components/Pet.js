const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.adoptClick = this.adoptClick.bind(this);
  }
  adoptClick() {
    this.props.onAdoptPet(this.props.pet.id);
  }
  render() {
    var buttonShown;
    if (this.props.isAdopted) {
      buttonShown = <button className="ui disabled button">Already adopted</button>
    }
    else {
      buttonShown = <button className="ui primary button" onClick={this.adoptClick}>Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} gender: {(this.props.pet.gender == 'male') ? ' ♂' :' ♀'}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {buttonShown}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
