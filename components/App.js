const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this)
    this.getPets = this.getPets.bind(this)
    this.handleAdoptPet = this.handleAdoptPet.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  handleChangeFilterType(type){
    this.setState({
      filters:Object.assign({},this.state.filters,{
        type: type
      })
    })

  }

  getPets(){
    let link = '/api/pets';

    if (this.state.filters.type !== 'all') {
      link = `/api/pets?type=${this.state.filters.type}`;
    }
    fetch(link).then(res => res.json()).then(pets => this.setState(pets: pets))
  }

  handleAdoptPet(petId){
    this.setState({
      adoptedPets: [...this.state.adoptedPets,petId]
    })
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
            <Filters filters={this.state.filters}
                     onChangeType={this.handleChangeFilterType}
                     onFindPetsClick={this.getPets}
            />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
