const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    let adopted = this.props.adoptedPets;
    let callback = this.props.onAdoptPet;
    let formatPets = this.props.pets.map(function(littleMonster){
      return <Pet pet={littleMonster} isAdopted={adopted.includes(littleMonster.id)} onAdoptPet={callback}/>
    });
    return (
      <div className="ui cards">
        {formatPets}
      </div>
    );
  }
}

module.exports = PetBrowser;
