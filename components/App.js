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
    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.handleAdoptPets = this.handleAdoptPets.bind(this);
    this.handlePetFetch = this.handlePetFetch.bind(this);
  }

  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPets(id) {
    this.setState({
      adoptedPets: [... this.state.adoptedPets, id],
    })
  }

  handlePetFetch() {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += ('?type=' + this.state.filters.type)
    }
    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({pets}));
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
                       onFindPetsClick={this.handlePetFetch}
              />
            </div>
            <div className="twelve wide column">
              debugger
              <PetBrowser 
                pets = {this.state.pets}
                adoptedPets = {this.state.adoptedPets}
                onAdoptPet = {this.handleAdoptPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
