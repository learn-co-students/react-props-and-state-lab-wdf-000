const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor() {
    super();
  }
  render() {
    var petCards = (this.props.pets).map(thisPet => {
      var card = <Pet pet={thisPet} onAdoptPet={this.props.onAdoptPet}/>;
      if ((this.props.adoptedPets).indexOf(thisPet.id) == -1) {
        return React.cloneElement(card, {
          isAdopted: false
        });
      }
      else {
        return React.cloneElement(card, {
          isAdopted: true
        });
      }
    });
     return (
      <div className="ui cards"> 
        <code>&lt;Pet /&gt;</code> &nbsp; {petCards}  
    </div>
    )
  }
}

module.exports = PetBrowser;
