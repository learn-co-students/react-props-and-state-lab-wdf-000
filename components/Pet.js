const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.adopt = this.adopt.bind(this);
  }

  adopt() {
    this.props.onAdoptPet(this.props.pet.id);
  }
  maleOrFemale(){
     if(this.props.pet.gender === "male"){
       return "♂"
     }else{
       return "♀"
     }
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">{this.maleOrFemale()}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Name:{this.props.pet.name}</p>
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
