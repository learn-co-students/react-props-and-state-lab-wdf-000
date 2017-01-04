const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.pet.name
    this.type = props.pet.type
    this.age = props.pet.age
    this.weight = props.pet.weight


    this.adoptPet = this.adoptPet.bind(this)
  }

  adoptPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.name} Gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.age}</p>
            <p>Weight: {this.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button> }
        </div>
      </div>
    );
  }
}

module.exports = Pet;
