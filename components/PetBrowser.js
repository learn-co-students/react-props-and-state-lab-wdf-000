const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor(props){
    super()

  this.checkAdoptionStatus = this.checkAdoptionStatus.bind(this)
  }
  
  checkAdoptionStatus(collection, pet){
    if(collection.includes(pet)){
      return true
    } else { 
      return false
    }
    
  }


  render() {
    const adoptedPets = this.props.adoptedPets
    const pets = this.props.pets.map(pet => {
      return ( 
        <Pet pet={pet} isAdopted={this.checkAdoptionStatus(adoptedPets, pet)} onAdoptPet={this.props.onAdoptPet} />
      )
    })
    
    return (
      <div className="ui cards">
        {pets}     
      </div>
    );
  }
}

module.exports = PetBrowser;
