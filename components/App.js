const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
    
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleChangeType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    });
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    });
  }

  handleFetch() {
    let url = '/api/pets';
    if(this.state.filters.type !== 'all') {
      url += '?type=' + this.state.filters.type;
    }
    
    fetch(url).then(res => res.json()).then(json => this.setState({pets: json}));
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.handleFetch} />
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
