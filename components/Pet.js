const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
  }


  adoptThisPet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet Name: {this.props.pet.name} Gender: { this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted === false ? <button className="ui primary button" onClick={this.adoptThisPet.bind(this)}>Adopt pet</button> : null}
        {this.props.isAdopted === true ? <button className="ui disabled button">Already adopted</button> : null}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
