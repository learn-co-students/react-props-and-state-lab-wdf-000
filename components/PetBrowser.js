const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor(props) {
    super()

  this.checkAdoptionStatus = this.checkAdoptionStatus.bind(this)
}

checkAdoptionStatus(pet) {
  if (this.props.adoptedPets.includes(pet.id)) {
    return true
  } else {
    return false
  }
}


  render() {
    const pets = this.props.pets.map((pet, index) => {
      return(
      <Pet key={index} pet = {pet} isAdopted = {this.checkAdoptionStatus(pet)} onAdoptPet = {this.props.onAdoptPet} />
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
