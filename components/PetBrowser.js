const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  getHash(arr) {
    var tmp = {};
    for (var i = 0, len = arr.length; i < len; i++) {
      tmp[arr[i]] = true;
    }
    return tmp;
  }

  render() {
    // const pets = this.props.pets.map((pet, index) => (
    //   <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    // ));
    
    var pets = [];
    var duphash = this.getHash(this.props.adoptedPets);
    var p = this.props.pets;
    for (var i = 0, len = p.length; i < len; i++) {
      pets.push(<Pet pet={p[i]} onAdoptPet={this.props.onAdoptPet} isAdopted={duphash[p[i].id] ? true : false } />)
    }
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
