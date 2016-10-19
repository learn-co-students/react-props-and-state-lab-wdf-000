const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    var gender = this.props.pet.gender[0] == 'f' ? '♀' : '♂' ;
    var btn;
    if (this.props.isAdopted) {
      btn = <button className="ui disabled button">Already adopted</button>
    } else {
      btn = <button onClick={this.handleClick} className="ui primary button">Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.props.pet.name} (gender: {gender})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          { btn }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
