const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {

    const pets = this.props.pets.map((pet) => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted{this.props.adoptedPets.includes(pet.id)} />
    ))

    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; components should go here
        {pets}
      </div>
    );
  }
}

PetBrowser.propTypes = {
  pets: React.PropTypes.array
}

module.exports = PetBrowser;
