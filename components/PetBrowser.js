const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    // notice the syntax for creating a block with () as opposed to {}
    // the latter wouldn't work
    const pets = this.props.pets.map(pet => (
      // isAdopted looks through the adoptedPets prop using includes
      // to check if current pet id is found
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)}/>
    ));

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
