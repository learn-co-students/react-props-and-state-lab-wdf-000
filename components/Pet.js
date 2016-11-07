const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super();
    this.adopt = this.adopt.bind(this);

    this.pet = props.pet;
    this.state = {
      isAdopted: props.isAdopted
    }
  }

  adopt(){
    this.props.onAdoptPet(this.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.pet.name} (gender: { this.pet.gender === 'male' ? '♂' : '♀'})</a>
          <div className="meta">
            <span className="date">Pet type: {this.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.pet.age}</p>
            <p>Weight: {this.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
