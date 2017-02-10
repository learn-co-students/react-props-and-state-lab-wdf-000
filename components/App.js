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
    this.fetchPets = this.fetchPets.bind(this);
  }

  handleChangeType(type){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }

  handleAdoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    });
  }

  fetchPets(){
    let url = '/api/pets';

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;


// The app's initial state is already defined. Pass the right state properties to the <Filters /> and <PetBrowser /> components.
// When the <Filters /> component calls the onChangeType prop you pass into it, <App />'s state needs to be updated accordingly.
// When the <Filters /> component calls the onFindPetsClick prop you pass into it, the <App /> component should fetch a list of pets using fetch.
// The URL of the API is /api/pets with an optional query parameter.
// If the type is 'all', send a request to /api/pets.
// If the type is 'cat', send a request to /api/pets?type=cat. Do the same thing for dog and micropig.
// Finally, set the pet data on the state property pets to properly pass them to the <PetBrowser /> component.
// When the <PetBrowser /> component calls the onAdoptPet prop you pass into it, add the pet ID to the the adoptedPets array in the state.

