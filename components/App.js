const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleFind = this.handleFind.bind(this)
    this.apiCall = this.apiCall.bind(this)
    this.handleAdopt = this.handleAdopt.bind(this)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };


  }

    handleTypeChange(e) {
      this.setState({
        filters: Object.assign({}, this.state.filters, {
          type: e
        })
      })
    }

    handleFind(e){
      return fetch(this.apiCall(this.state.filters.type))
    }

    apiCall(filter){
      const url = `/api/pets`
      return filter === "all" ? url : `${url}?type=${filter}`
    }

    handleAdopt(petId) {
      this.setState({
        adoptedPets: [...this.state.adoptedPets, petId],
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
                     onChangeType={this.handleTypeChange}
                     onFindPetsClick={this.handleFind}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets = {this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet = {this.handleAdopt}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
