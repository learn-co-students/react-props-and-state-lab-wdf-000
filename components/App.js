const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.snagIt = this.snagIt.bind(this);
    this.chooseAnotherType = this.chooseAnotherType.bind(this);
    this.searchForPets = this.searchForPets.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  snagIt(id){
    let petsBefore= this.state.adoptedPets;
    let petsNow = [...petsBefore, id];
    this.setState({
      adoptedPets: petsNow
    });
  }

  chooseAnotherType(type){
    this.setState({
      filters: {type: type}
    });
  }

  searchForPets(){
    let url;
    let baseUrl = "/api/pets"
    if (this.state.filters.type === "all"){
      url = baseUrl;
    } else {
      url = baseUrl + '?type=' + this.state.filters.type;
    }
    fetch(url).then(function(vastaus){
      if (vastaus.ok){
        this.setState({
          pets: vastaus.pets
        });
      } else {
        console.log("Pets rule.");
      }
    }).catch(function(virhe){
      console.log("This API is a lie!");
    });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType = {this.chooseAnotherType} onFindPetsClick = {this.searchForPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.snagIt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
