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
        type: 'all'
      }
    };

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.fetchPets = this.fetchPets.bind(this);
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  fetchPets() {
    let url = '/api/pets';

    // if the type is diffent than 'all'
    if (this.state.filters.type !== 'all') {
      // append the type from the state to the url
      url += `?type=${this.state.filters.type}`;
    }

    // make a get request to the url
    fetch(url)
      .then(res => res.json())
      // after receiving json, pass it to .then callback and set the
      // App's pets key in the state to the returned json
      .then(pets => this.setState({ pets }));
  }

  handleChangeFilterType(type) {
    this.setState({
      // make a copy of the filters key in the state
      // and set the type key to the type being passed in as parameter
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  handleAdoptPet(petId) {
    this.setState({
      // modify the adoptedPets key in the state by adding the petId from paramete
      adoptedPets: [...this.state.adoptedPets, petId],
      // adoptedPets: this.state.adoptedPets.push(petId), // works the same as above
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
              <Filters 
                filters={this.state.filters}
                onChangeType={this.handleChangeFilterType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
