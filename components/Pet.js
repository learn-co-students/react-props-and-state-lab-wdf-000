const React = require('react');

class Pet extends React.Component {
  constructor(props) {
    super();

    this.handleOnAdoptPet = this.handleOnAdoptPet.bind(this)
  }
  
  handleOnAdoptPet(){
    this.props.onAdoptPet(this.props.pet.id) 
  }

  render() {
    var adoptButton;
    if (this.props.isAdopted){
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={this.handleOnAdoptPet}>Adopt pet</button>
    }

    const pet = this.props.pet
   
    return (
      <div className="card">
        <div className="content">
          <a className="header">{pet.name} {pet.gender == 'male' ? '♂': '♀'}</a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight} </p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
